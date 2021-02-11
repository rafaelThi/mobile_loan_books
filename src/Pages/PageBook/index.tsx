import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import styles from './styles';

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
  }
}
}

export default function PageBook() {
  // const navigation = useNavigation();

  const route = useRoute();
  const params = route.params as IBook;
  console.log(params);

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
          // value={titleBook}
          // onChangeText={(title) => setTitleBook(title)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o seu e-mail de login..."
        />
        <RectButton onPress={() => { console.log('123'); }} style={styles.Button}>
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
