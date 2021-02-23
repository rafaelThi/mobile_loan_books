import React, { useCallback, useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IId {
  id: string;
}

interface IRequisition {
  id: string;
  id_request_accept: string;
  id_request: string;
  id_book: string;
  id_user: string;
  id_admin: string;
  created_at: string;
  message: string;
  delivered: string;
  devolution_at: string;
  IdBook: {
    id: string;
    name: string;
  }
  IdUser: {
    id:string;
    fullName: string;
    email: string;
  }
  IdAdmin:{
    id:string;
    fullNameAdmin: string;
  }
}

export default function HistoryRequests() {
  const route = useRoute();
  const params = route.params as IId;
  // const id_admin = params.id;

  const [requistitions, SetRequistitions] = useState<IRequisition[]>([]);

  const [titleBook, setTitleBook] = useState('');

  const [nameUser, setNameUser] = useState('');

  const handleSearchTitle = useCallback(async () => {
    try {
      const name = titleBook;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Título que busca.'),
      });
      await schema.validate({ name });

      const response = await api.get(`/history/history-books/${params.id}/${name}`);
      SetRequistitions(response.data);
    } catch (err) {
      alert('Ops, parece que não achamos o livro que busca.');
    }
  }, [params.id, titleBook]);

  const handleSearchName = useCallback(async () => {
    try {
      const name = nameUser;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome que busca.'),
      });
      await schema.validate({ name });

      const response = await api.get(`/history/history-user/${params.id}/${name}`);
      SetRequistitions(response.data);
    } catch (err) {
      alert('Ops, parece que não achamos o nome do usuário que busca.');
    }
  }, [nameUser, params.id]);

  const handleAll = useCallback(async () => {
    try {
      const response = await api.get(`/history/history-all/${params.id}`);
      SetRequistitions(response.data);
    } catch (err) {
      alert('Ops, parece que não achamos nada :/');
    }
  }, [params.id]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Image source={Logo} style={styles.ImgLogo} />
        <Text style={styles.TextLogo}>
          Books Loan
        </Text>
        <Text
          style={styles.titleHome}
        >
          Histórico de livros já devolvidos:
        </Text>
        <Text
          style={styles.subTitle}
        >
          Basta digitar o título do livro que procura, ou o nome do usuário que deseja encontrar:
        </Text>

        <View>
          <Text style={styles.titleInput}>
            Título do livro:
          </Text>
          <TextInput
            onChangeText={(textarea) => setTitleBook(textarea)}
            style={styles.input}
            placeholder="Digite o título do livro..."
          />
          <RectButton onPress={handleSearchTitle} style={styles.Button}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Pesquisar
              </Text>
            </View>
          </RectButton>
          <Text style={styles.titleInput}>
            Nome do usuário:
          </Text>
          <TextInput
            onChangeText={(textarea) => setNameUser(textarea)}
            style={styles.input}
            placeholder="Digite o nome do usuário..."
          />
          <RectButton onPress={handleSearchName} style={styles.Button}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Pesquisar
              </Text>
            </View>
          </RectButton>
          <Text style={styles.titleInput}>
            Mostrar tudo:
          </Text>
          <RectButton onPress={handleAll} style={styles.Button}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Mostrar tudo
              </Text>
            </View>
          </RectButton>
        </View>

        {requistitions.map((request) => (
          <View key={request.id} style={styles.containerRequest}>
            <Text style={styles.textRequest}>
              Requisição feita por:
              {' '}
              {request.IdUser.fullName}
            </Text>
            <Text style={styles.textRequest}>
              Livro requisitado:
              {' '}
              {request.IdBook.name}
            </Text>
            <Text style={styles.textRequest}>
              Email:
              {' '}
              {request.IdUser.email}
            </Text>
            <Text style={styles.textRequest}>
              Aceita no dia:
              {' '}
              {request.created_at.substr(0, 10)}
            </Text>
            <Text style={styles.textRequest}>
              Entrega dia:
              {' '}
              {request.delivered}
            </Text>
            <Text style={styles.textRequest}>
              O como foi:
            </Text>
            <Text style={styles.textRequestMessage}>
              {request.message}
            </Text>
            <Text style={styles.textRequest}>
              Devolvido dia:
              {' '}
              {request.devolution_at.substr(0, 10)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
