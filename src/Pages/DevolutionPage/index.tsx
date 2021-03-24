import React, { useCallback, useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/core';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IId {
  id: string;
}

export default function DevolutionPage() {
  const route = useRoute();
  const params = route.params as IId;
  const { id } = params;

  const [stateID, setStateID] = useState('');

  const navigation = useNavigation();

  const handleLogin = useCallback(async () => {
    try {
      const getRequestAccept = await api.get(`/requests/get-request-accept/${stateID}`);
      if (getRequestAccept.data.getRequest) {
        const history = await api.post('/history/history-accepts', {
          id_request_accept: getRequestAccept.data.getRequest.id,
          id_request: getRequestAccept.data.getRequest.id_request,
          name_book: getRequestAccept.data.getRequest.IdBook.name,
          id_book: getRequestAccept.data.getRequest.id_book,
          name_user: getRequestAccept.data.getRequest.IdUser.fullName,
          id_user: getRequestAccept.data.getRequest.id_user,
          id_admin: getRequestAccept.data.getRequest.id_admin,
          created_at: getRequestAccept.data.getRequest.created_at,
          message: getRequestAccept.data.getRequest.message,
          delivered: getRequestAccept.data.getRequest.delivered,
        });
        if (history) {
          await api.delete(`/requests/delete-request-accept/${stateID}`);
          alert('Livro devolvido!!');
          document.location.reload(true);
        } else {
          throw new Error('Algo deu errado :/');
        }
      } else {
        throw new Error('Requisição não encontrada... Talvez você já tenha feito isso');
      }
    } catch (error) {
      alert(`Ops, algo deu errado :/  ${error}`);
    }
  }, []);

  function handleProfilePage() {
    navigation.navigate('ProfileAdminPage', { id });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}
      >
        <Image source={Logo} style={styles.Img} />
        <Text style={styles.logo}>
          Books Loan
        </Text>
        <Text
          style={styles.titleLoginPage}
        >
          Devolução do livro:
        </Text>
        <Text style={styles.subTitleLoginPage}>
          Para efetuar a devolução deve ser prenchido o ID da equisição:
        </Text>
        <TextInput
          value={stateID}
          onChangeText={(ID) => setStateID(ID)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite o ID..."
          autoFocus
        />
        <RectButton onPress={handleLogin} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text>
              Confirmar
            </Text>
          </View>
        </RectButton>
        <RectButton onPress={handleProfilePage}>
          <Text style={styles.Perfil}>
            Perfil
          </Text>
        </RectButton>
      </ScrollView>
    </View>
  );
}
