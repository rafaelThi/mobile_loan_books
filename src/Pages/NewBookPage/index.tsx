import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IId {
  id: string;
}

export default function NewBookPage() {
  const route = useRoute();
  const params = route.params as IId;
  const { id } = params;

  const navigation = useNavigation();

  const [titleBook, setTitleBook] = useState('');
  const [authorBook, setAuthorBook] = useState('');
  const [languageBook, setLanguageBook] = useState('');
  const [stateImg, setStateImg] = useState('');

  const handleRegisterNewBook = useCallback(async () => {
    try {
      const name = titleBook;
      const author = authorBook;
      const language = languageBook;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Título do livro.'),
        author: Yup.string().required('Digite o Autor do livro.'),
        language: Yup.string().required('Digite a linguagem do livro.'),
      });
      await schema.validate({ name, author, language });

      const book = await api.post(`/requisition-book/register-book/${params.id}`, {
        author: authorBook,
        name: titleBook,
        language: languageBook,
        img: stateImg,
      });
      const bookName = book.data.book;
      if (book.data.book.id) {
        alert(`Registrado com sucesso! ID:${book.data.book.id}`);
        navigation.navigate('PageBook', { bookName });
      }
    } catch (error) {
      alert(error);
    }
  }, [authorBook, languageBook, navigation, params.id, stateImg, titleBook]);

  function handleProfilePage() {
    navigation.navigate('ProfileAdminPage', { id });
  }

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
        <Text style={styles.textLogo}>
          Books Loan
        </Text>
        <Text
          style={styles.titlePage}
        >
          Para adicionar um livro todos os campos devem
          ser preenchidos:
        </Text>
        <Text>
          {'\n'}

        </Text>
        <Text>
          Nome do livro:
        </Text>
        <TextInput
          value={titleBook}
          onChangeText={(title) => setTitleBook(title)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o título..."
        />
        <Text>
          Autor do livro:
        </Text>
        <TextInput
          value={authorBook}
          onChangeText={(author) => setAuthorBook(author)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o autor..."
        />
        <Text>
          Linguage do livro:
        </Text>
        <TextInput
          value={languageBook}
          onChangeText={(language) => setLanguageBook(language)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite a linguagem..."
        />
        <Text>
          Imagem:
        </Text>
        <TextInput
          value={stateImg}
          onChangeText={(img) => setStateImg(img)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o link da imagem..."
        />
        <View style={styles.boxButton}>
          <RectButton onPress={handleRegisterNewBook} style={styles.Button}>
            <View>
              <Text>
                Registrar
              </Text>
            </View>
          </RectButton>
        </View>
        <RectButton onPress={handleProfilePage}>
          <Text style={styles.Perfil}>
            Perfil
          </Text>
        </RectButton>
      </ScrollView>
    </View>
  );
}
