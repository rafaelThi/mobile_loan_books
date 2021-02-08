import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import { RectButton } from 'react-native-gesture-handler'
// import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
interface IId {
  id: string
}
export default function SearchPage() {

  const route = useRoute();
  const params = route.params as IId;
  
  const navigation = useNavigation();

  function handleLoginPage() {
alert('ok')
  }
  
  return (
    <View >
      <Image source={Logo}  />
      <Text >
      Books Loan
      </Text>
      <Text >
        teste
       {params.id}
       Teste
        </Text>
        <RectButton onPress={handleLoginPage}  >
          <View  >
          <Text>
        Procurar um livro
          </Text>
          </View>
        </RectButton>
      <StatusBar style="auto" />
    </View>
  );
}
