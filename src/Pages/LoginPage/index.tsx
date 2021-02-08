import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import { RectButton, TextInput } from 'react-native-gesture-handler'
import styles from './styles';
import { Link } from '@react-navigation/native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Img} />
      <Text style= {styles.logo} >
      Books Loan
      </Text>
      <Text 
      style={styles.titleLoginPage}>Antes de procurar um livro vamos logar!
        </Text>
        <Text  style={styles.subTitleLoginPage} >
        Caso não tenha uma conta você pode criar uma{' '}
        <Link to={''} >
         clicando aqui
        </Link>
        </Text>
        <TextInput 
         placeholderTextColor='#c1bccc'
         style={styles.input}
         placeholder="Digite seu email"
        />
        {/* <RectButton style={styles.Button} >
          <View style={styles.ViewButton}  >
          <Image source={book} style={styles.ImgButton} />
          <Text>
        Procurar um livro
          </Text>
          </View>
        </RectButton> */}
      <StatusBar style="auto" />
    </View>
  );
}
