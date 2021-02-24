import React, { useCallback, useEffect, useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';
import OK from '../../../assets/OK.png';
import X from '../../../assets/X.png';

interface IRequisition {
  id: string;
  id_book: string;
  id_user: string;
  id_admin: string;
  created_at: string;
  message: string;
  delivered: string;
  IdUser: {
    id:string;
    fullName: string;
    email: string;
  }
  IdBook: {
    id: string;
    name: string;
  }
  IdAdmin:{
    id:string;
    fullNameAdmin: string;
    emailAdmin: string;
  }
}

interface IId {
  id: string;
}

export default function RequestAccept() {
  const route = useRoute();
  const params = route.params as IId;
  const id_admin = params.id;
  const { id } = params;
  const navigation = useNavigation();

  const [delivered, setDelivered] = useState('');

  const [requistitions, setRequisitions] = useState<IRequisition[]>([]);

  useEffect(() => {
    const requisitions = api.get(`/requests/requests-accept/${id_admin}`);
    requisitions.then((requisition) => {
      setRequisitions(requisition.data);
    });
  }, [id_admin, requistitions]);

  const handleAccept = useCallback(async (request) => {
    await api.put(`/requests/request-delivered/${request.id}`, {
      delivered,
    });
    setDelivered('');
    alert(`A data ${delivered} foi salva como a data de entrega!`);
  }, [delivered]);
  const handleNavigate = useCallback(async () => {
    navigation.navigate('HistoryRequestsPage', { id });
  }, [id, navigation]);
  function handleProfilePage() {
    navigation.navigate('ProfileAdminPage', { id });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.search}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}
      >
        <Image source={Logo} style={styles.ImgLogo} />
        <Text style={styles.TextLogo}>
          Books Loan
        </Text>
        <Text
          style={styles.titleHome}
        >
          Essas são todas as suas requisições aceitas:
        </Text>

        <RectButton onPress={handleNavigate} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Ir para o historico de aceitas
            </Text>
          </View>
        </RectButton>
        {requistitions.map((request) => (
          <View key={request.id} style={styles.containerRequest}>
            <View style={styles.OKorX}>
              {
              request.delivered != null
                ? <Image source={OK} style={styles.ImgOK} />
                : <Image source={X} style={styles.ImgX} />
            }
            </View>
            <Text style={styles.textRequest}>
              Requisição feita por:
              {' '}
              {request.IdUser.fullName}
            </Text>
            <Text style={styles.textRequest}>
              Livro requisitado:
              {' '}
              {request.IdBook.name}
            </Text>
            <Text style={styles.textRequest}>
              Aceita no dia:
              {' '}
              {request.created_at.substr(0, 10)}
            </Text>
            <Text style={styles.textRequest}>
              Entrega dia:
              {' '}
              {request.delivered || 'Não entregue'}
            </Text>
            <Text style={styles.textRequest}>
              O como vai ser:
            </Text>
            <Text style={styles.textRequestMessage}>
              {request.message}
            </Text>
            <Text style={styles.textRequest}>
              Quando será a entrega?
            </Text>
            <Text style={styles.textRequestExemplo}>
              Coloque a data como no
              {'\n'}
              exemplo: AAAA-MM-DD
            </Text>
            <TextInput
              value={delivered}
              onChangeText={(delivere) => setDelivered(delivere)}
              style={styles.input}
              keyboardType="numeric"
              placeholder="AAAA-MM-DD"
            />
            <RectButton
              // eslint-disable-next-line no-return-await
              onPress={async () => await handleAccept(request)}
              style={styles.ButtonAceite}
            >
              <View style={styles.ViewButton}>
                <Text style={styles.textButton}>
                  Salvar
                </Text>
              </View>
            </RectButton>
          </View>
        ))}
        <RectButton onPress={handleProfilePage}>
          <Text style={styles.Perfil}>
            Perfil
          </Text>
        </RectButton>
      </ScrollView>
    </View>
  );
}
