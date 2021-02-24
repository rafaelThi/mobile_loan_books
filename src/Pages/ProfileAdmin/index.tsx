import React, { useCallback, useEffect, useState } from 'react';
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/core';
import * as Yup from 'yup';
import { useRoute } from '@react-navigation/core';
import styles from './styles';
import Logo from '../../../assets/Logo.png';
import api from '../../service/api';
// import api from '../../service/api';

interface IId {
  id: string;
 }

 interface IDataAdmin {
  idOwner: {
    fullNameAdmin:string;
    emailAdmin:string;
  }
 }

export default function ProfileAdmin() {
  const route = useRoute();
  const params = route.params as IId;
  const { id } = params;

  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');
  const [dataAdmin, setDataAdmin] = useState<IDataAdmin>();

  // const navigation = useNavigation();

  useEffect(() => {
    api.get(`/users-book-owners/list-owner/${id}`).then((response) => {
      setDataAdmin(response.data);
    });
  }, [id]);

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
      const data_admin = await api.get(`/users-book-owners/list-owner/${id}`);
      if (data_admin.data.idOwner.emailAdmin === email) {
        await api.put(`/users-book-owners/reset-password-admin/${id}`, {
          password,
        });
        alert('Nova senha salva');
      } else {
        alert('Puts... algo deu errado :/');
      }
    } catch (err) {
      alert(`E-mail ou senha incorreto
            ${err}`);
    }
  }, [id, stateEmail, statePassword]);

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
          {dataAdmin?.idOwner.fullNameAdmin}
        </Text>
        <Text style={styles.textRequestMessage}>
          Email de Login Admin:
        </Text>
        <Text style={styles.textRequestMessage}>
          {dataAdmin?.idOwner.emailAdmin}
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
