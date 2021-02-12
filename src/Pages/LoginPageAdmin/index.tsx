import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

export default function LoginPageAdmin() {
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = useCallback(async () => {
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
      });
      const { token } = sessionUser.data.createSession;
      // const { id } = sessionUser.data.createSession.user;
      const matchToken = await api.get(`/users-token/token/${token}`);

      if (matchToken && sessionUser) {
        navigation.navigate('SearchPage', { token });
      } else {
        alert('E-mail ou senha incorreto');
      }
    } catch (err) {
      alert(`E-mail ou senha incorreto
            ${err}`);
    }
  }, [stateEmail, statePassword, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Image source={Logo} style={styles.Img} />
        <Text style={styles.logo}>
          Books Loan
        </Text>
        <Text
          style={styles.titleLoginPage}
        >
          Lembrando que essa é a área do admin, se você não é admin clique aqui
        </Text>
        <TextInput
          value={stateEmail}
          onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
          autoFocus
        />
        <TextInput
          value={statePassword}
          onChangeText={(password) => setStatePassword(password)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite sua senha..."
          secureTextEntry
        />
        <RectButton onPress={handleLogin} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text>
              Entrar
            </Text>
          </View>
        </RectButton>
      </ScrollView>
    </View>
  );
}
