import React, { useCallback, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

export default function LoginPageAdmin() {
  const navigation = useNavigation();

  const [stateEmailAdmin, setStateEmailAdmin] = useState('');
  const [statePasswordAdmin, setStatePasswordAdmin] = useState('');

  const handleLoginAdmin = useCallback(async () => {
    try {
      const email = stateEmailAdmin;
      const password = statePasswordAdmin;
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

      const session = await api.post('session-admin', {
        emailAdmin: stateEmailAdmin,
        passwordAdmin: statePasswordAdmin,
      });

      const { token } = session.data;
      const { id } = session.data.admin.id;

      const matchToken = await api.get(`/admin-token/token321/${token}`);

      if (matchToken && session) {
        navigation.navigate('SearchPage', { id });
      } else {
        alert('E-mail ou senha incorreto');
      }
    } catch (err) {
      alert(`E-mail ou senha incorreto
            ${err}`);
    }
  }, [stateEmailAdmin, statePasswordAdmin, navigation]);

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
          value={stateEmailAdmin}
          onChangeText={(email) => setStateEmailAdmin(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
          autoFocus
        />
        <TextInput
          value={statePasswordAdmin}
          onChangeText={(password) => setStatePasswordAdmin(password)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite sua senha..."
          secureTextEntry
        />
        <RectButton onPress={handleLoginAdmin} style={styles.Button}>
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
