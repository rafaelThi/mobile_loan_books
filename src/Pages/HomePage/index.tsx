import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import { RectButton } from 'react-native-gesture-handler'

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Img} />
      <Text style= {styles.logo} >
      Books Loan
      </Text>
      <Text 
      style={styles.titleHome}>Sua plaforma para empréstimo 
        de livros Mobile!
        </Text>
        <RectButton style={styles.Button} >
          <Image source={book} />
          <Text>
        Procurar um livro
          </Text>
        </RectButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHome: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 40,
    marginHorizontal: 35,
    marginBottom:150,
    marginTop:150,
  },
  Img: {
    position:'absolute',
    width: 93,
    height: 82,
    left: 21,
    top: 35,
    borderRadius: 15,
  },
  logo: {
    position:'absolute',
    // width: 93,
    // height: 82,
    left: 120,
    top: 45,
    fontSize:38,
    color: '#DBDBDB'
  },
  Button: {
    backgroundColor: '#04D361',
    borderRadius:15,  
    paddingLeft:35,
    paddingRight:34,
    paddingTop:20,
    paddingBottom:20,
    justifyContent:'space-between'
  }
});
