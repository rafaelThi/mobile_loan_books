import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '../../../assets/Logo.png';
import { RectButton, TextInput } from 'react-native-gesture-handler'
import styles from './styles';
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import api from '../../service/api';
import * as Yup from 'yup';


interface IEmail {
  email: string
}

export default function LoginPage() {
  const route = useRoute();
  const params = route.params as IEmail;

  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');
  
  const navigation = useNavigation();

  const handleLogin = useCallback(async ()=>{

    try {
      const email = stateEmail;
      const password = statePassword;

      const schema = Yup.object().shape({
        email: Yup.string()
          . required('Digite um e-mail válido.')
          .email(
            `Digite um e-mail válido
          "ex@ex.com".`,
          ),

        password: Yup.string().min(6, 'Senha invalida'),
      });

      await schema.validate({ email, password });

  const sessionUser = await api.post('session-users', {
    email,
    password,
  })
  const {token} = sessionUser.data.createSession;
  const id = sessionUser.data.createSession.user.id
  const matchToken = await api.get(`/users-token/token/${token}`);

  if (matchToken && sessionUser) {
    navigation.navigate( 'SearchPage', {id})
  } else {
    alert('E-mail ou senha incorreto');
  }
} catch (err) {
  alert(`E-mail ou senha incorreto
            ${err}`);
}
  },[stateEmail, statePassword, navigation])

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
          {params.email}
        Caso não tenha uma conta você pode criar uma {' '}
        <Link to={''} >
         clicando aqui
        </Link>
        </Text>
        <TextInput 
         value = {stateEmail}
         onChangeText={email => setStateEmail(email) }
         placeholderTextColor='#c1bccc'
         style={styles.input}
         placeholder="Digite seu email..."
         autoFocus={true}
        />
<TextInput 
         value = {statePassword}
         onChangeText={password => setStatePassword(password) }
         placeholderTextColor='#c1bccc'
         style={styles.input}
         placeholder="Digite sua senha..."
         secureTextEntry={true}
        />
        <RectButton onPress={handleLogin} style={styles.Button} >
          <View style={styles.ViewButton}  >
          <Text>
        Entrar
          </Text>
          </View>
        </RectButton>
      <StatusBar style="auto" />
    </View>
  );
}
