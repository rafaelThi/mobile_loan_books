import React, { useCallback, useState } from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/core';
import * as Yup from 'yup';
import styles from './styles';
import Logo from '../../../assets/Logo.png';
// import api from '../../service/api';

export default function ProfileAdmin() {
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  // const navigation = useNavigation();

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
    } catch (err) {
      alert(`E-mail ou senha incorreto
            ${err}`);
    }
  }, [stateEmail, statePassword]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.ImgLogo} />
      <Text style={styles.TextLogo}>
        Books Loan
      </Text>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Text style={styles.titleHome}>
          Fulano da Silva
        </Text>
        <Text style={styles.textRequestMessage}>
          Email de Login Admin:
        </Text>
        <Text style={styles.textRequestMessage}>
          email@email.com
        </Text>
        <Text style={styles.textRequest}>
          Caso queira mudar sua senha atual, digite seu email de login e sua nova senha
        </Text>

        <TextInput
          value={stateEmail}
          onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
        />
        <TextInput
          value={statePassword}
          onChangeText={(password) => setStatePassword(password)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite sua nova senha..."
          secureTextEntry
        />
        <RectButton onPress={handleLogin} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text>
              Salvar
            </Text>
          </View>
        </RectButton>

      </ScrollView>
    </View>
  );
}
