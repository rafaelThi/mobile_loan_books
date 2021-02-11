/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IBook {
  bookName: {
  id: string;
  img: string;
  author: string;
  language: string;
  name: string;
  owner_id: string;
  owner: {
    fullNameAdmin: string;
    emailAdmin: string;
  }
}
}

export default function PageBook() {
  const route = useRoute();
  // const navigation = useNavigation();

  const [stateEmail, setStateEmail] = useState('');
  const [booksName, setBooksName] = useState<IBook | null>(null);
  const params = route.params as IBook;

  useEffect(() => {
    setBooksName(params);
  }, [params, route.params]);

  const handleRequestBook = useCallback(async () => {
    try {
      const email = stateEmail;
      alert('Estamos enviado a solicitação, isso pode levar alguns segundos, por favor aguarde o próximo aviso!');
      const schema = Yup.object().shape({
        email: Yup.string()
          . required('Digite um e-mail válido.')
          .email(
            `Digite um e-mail válido
          "ex@ex.com".`,
          ),
      });
      await schema.validate({ email });

      const user = await api.get(`/users/list-user-email/${email}`);
      if (!user) {
        alert('Email Incorreto');
      }
      console.log(user.data.user.id, 'user');
      const id_user = user.data.user.id;
      const id_book = booksName?.bookName.id;
      const id_admin = booksName?.bookName.owner_id;

      const request = await api.post(`/requests/request-book/${id_book}`, {
        id_admin,
        id_user,
      });
      console.log(request, 'request');

      if (request) {
        const sendMail = await api.post('/mail-provider/send-mail-request-book', {
          email: booksName?.bookName.owner.emailAdmin,
          name_user: user.data.user.fullName,
          name_book: booksName?.bookName.name,
          id: request.data.requestBook.id,
        });
        const sendMailUser = await api.post('/mail-provider/send-mail-request-book', {
          email: user.data.user.email,
          name_user: user.data.user.fullName,
          name_book: booksName?.bookName.name,
          id: request.data.requestBook.id,
        });
        console.log(sendMail, 'sendMail');
        console.log(sendMailUser, 'sendMailUser');

        if (sendMail && sendMailUser) {
          alert(`Requisição feita com sucesso!!
Um email foi mandado ao dono do livro`);
        }
      }
    } catch (error) {
      alert(`Email incorreto :(
      erro:${error}`);
    }
  }, [booksName?.bookName.id, booksName?.bookName.name, booksName?.bookName.owner.emailAdmin, booksName?.bookName.owner_id, stateEmail]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.ImgLogo} />
      <Text style={styles.textLogo}>
        Books Loan
      </Text>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Image source={{ uri: params.bookName.img }} style={styles.ImgBook} />
        <Text style={styles.titleBook}>
          {params.bookName.name}
        </Text>
        <Text style={styles.authorBook}>
          {' '}
          Autor:
          {' '}
          {params.bookName.author}
        </Text>
        <Text style={styles.requestBook}>
          Caso tenha interesse em pegar emprestado esse livro, solicite ao seu dono:
          {' '}
          {params.bookName.owner.fullNameAdmin}
        </Text>
        <Text style={styles.requestText}>
          Para solicitar o livro, digite seu email do login:
        </Text>
        <TextInput
          value={stateEmail}
          onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o seu e-mail de login..."
        />
        <RectButton
          onPress={handleRequestBook}
          style={styles.Button}
        >
          <Text>
            Solicitar
          </Text>
        </RectButton>
        {/* <Text>
          {'  '}
          id book:
          {params.bookName.id}
        </Text>
        <Text>
          {'  '}
          id owner:
          {params.bookName.owner_id}
        </Text> */}
      </ScrollView>
    </View>
  );
}
