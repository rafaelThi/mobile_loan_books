import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IId {
  token: string;
}

interface IBook {
  id: string;
  img: string;
  author: string;
  language: string;
  name: string;
  owner_id: string;
}

export default function SearchPage() {
  const route = useRoute();
  const params = route.params as IId;

  const navigation = useNavigation();

  const [booksName, setBooksName] = useState<IBook[]>([]);

  const [titleBook, setTitleBook] = useState('');
  const [authorBook, setAuthorBook] = useState('');
  const [languageBook, setLanguageBook] = useState('');

  const handleSearchTitle = useCallback(async () => {
    try {
      const name = titleBook;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Título que busca.'),
      });
      await schema.validate({ name });

      const response = await api.get(`/requisition-book/list-one-book-name/${name}`);
      setBooksName(response.data.findBookName);
      console.log(response.data.findBookName);

      const user_id = await api.get(`/users-token/token/${params.token}`);
      console.log(user_id.data.matchToken.IdUser.id);
      // setBooksName(user_id.data.matchToken.IdUser.id);
      // console.log(booksName);
    } catch (err) {
      alert('Ops, parece que não achamos o livro que busca, você pode confirmar a escrita ou buscar pelo autor ou linguagem.');
    }
  }, [params.token, titleBook]);
  const handleSearchAuthor = useCallback(async () => {
    try {
      const name = authorBook;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Autor que busca.'),
      });
      await schema.validate({ name });

      const response = await api.get(`/requisition-book/list-one-book-author/${name}`);
      setBooksName(response.data.findBookAuthor);
      console.log(response.data.findBookAuthor);

      const user_id = await api.get(`/users-token/token/${params.token}`);
      console.log(user_id.data.matchToken.id_user);
    } catch (err) {
      alert('Ops, parece que não achamos o autor que busca, você pode confirmar a escrita ou buscar pelo nome do livro ou linguagem.');
    }
  }, [authorBook, params.token]);
  const handleSearchLanguage = useCallback(async () => {
    try {
      const name = languageBook;

      const schema = Yup.object().shape({
        name: Yup.string().required('Digite a linguagem que busca.'),
      });
      await schema.validate({ name });

      const response = await api.get(`/requisition-book/list-one-book-language/${name}`);
      setBooksName(response.data.findBookLanguage);
      console.log(response.data.findBookLanguage);

      const user_id = await api.get(`/users-token/token/${params.token}`);
      console.log(user_id.data.matchToken.id_user);
    } catch (err) {
      alert('Ops, parece que não achamos livros da linguagem que busca, você pode confirmar a escrita ou buscar pelo nome do livro ou autor.');
    }
  }, [languageBook, params.token]);

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
          Ache aqui o livro
          que procura
        </Text>
        <Text style={styles.subPage}>
          Basta digitar o título que procura, ou o nome do autor ou a linguagem
          do livro que deseja encontrar;
        </Text>
        <Text>
          Nome do livro:
        </Text>
        <TextInput
          value={titleBook}
          onChangeText={(title) => setTitleBook(title)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o título que procura..."
        />
        <View style={styles.boxButton}>
          <RectButton onPress={handleSearchTitle} style={styles.Button}>
            <Text>
              Pesquisar
            </Text>
          </RectButton>
        </View>
        <Text>
          Autor do livro:
        </Text>
        <TextInput
          value={authorBook}
          onChangeText={(author) => setAuthorBook(author)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o autor que procura..."
        />
        <View style={styles.boxButton}>
          <RectButton onPress={handleSearchAuthor} style={styles.Button}>
            <View>
              <Text>
                Pesquisar
              </Text>
            </View>
          </RectButton>
        </View>
        <Text>
          Linguage do livro:
        </Text>
        <TextInput
          value={languageBook}
          onChangeText={(language) => setLanguageBook(language)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite a linguagem que procura..."
        />
        <View style={styles.boxButton}>
          <RectButton onPress={handleSearchLanguage} style={styles.Button}>
            <View>
              <Text>
                Pesquisar
              </Text>
            </View>
          </RectButton>
        </View>

        {booksName.map((bookName) => (
          // <View key={bookName.id} style={styles.books}>
          <RectButton
            key={bookName.id}
            style={styles.books}
            onPress={() => { navigation.navigate('PageBook', { bookName }); }}
            // onPress={() => { console.log(bookName); }}
          >
            <View style={styles.boxBook}>
              <Image source={{ uri: bookName.img }} style={styles.avatar} />
            </View>
            <View>
              <Text style={styles.nameBook}>
                {bookName.name}
                {' '}
                {'\n'}
              </Text>
              <Text>
                Autor:
                {' '}
                {bookName.author}
              </Text>
            </View>
          </RectButton>
        ))}

      </ScrollView>
    </View>
  );
}
