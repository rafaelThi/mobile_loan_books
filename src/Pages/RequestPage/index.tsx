import React, { useCallback, useEffect, useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
import api from '../../service/api';

interface IRequisition {
  id: string;
  id_book: string;
  id_user: string;
  id_admin: string;
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

export default function RequestPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as IId;
  const id_admin = params.id;
  const { id } = params;

  const [textArea, setTextArea] = useState('');
  const [requistitions, setRequisitions] = useState<IRequisition[]>([]);

  useEffect(() => {
    const requisitions = api.get(`/requests/requests-books/${id_admin}`);
    requisitions.then((requisition) => {
      setRequisitions(requisition.data);
    });
  }, [id_admin, requistitions]);

  const handleAccept = useCallback(async (request) => {
    try {
      console.log(request);

      const textAccept = textArea;
      const schema = Yup.object().shape({
        textAccept: Yup.string().required('Uma mesagem deve ser escrita :/').min(6, 'Digite algo maior que 6 caracteres :)'),
      });
      await schema.validate({ textAccept });

      alert('O Aceite esta sendo proessado, por favor aguarde alguns segundos ate a sua confirmação!');

      const requestAccept = await api.post('/requests/aceept',
        {
          id_request: request.id,
          id_book: request.IdBook.id,
          id_user: request.IdUser.id,
          id_admin: request.IdAdmin.id,
          message: textAccept,
        });

      const sendMail = await api.post('/mail-provider/send-mail-request-return-accept', {
        idAccept: requestAccept.data.requestAccept.id,
        nameBook: request.IdBook.name,
        nameUser: request.IdUser.fullName,
        nameAdmin: request.IdAdmin.fullNameAdmin,
        emailUser: request.IdUser.email,
        emailAdmin: request.IdAdmin.emailAdmin,
        textAccept,
      });
      if (!sendMail) {
        alert('Parece que algo deu errado, tente novamente');
      }
      alert('Parece que tudo correu bem, um email foi encaminhado para você e para o usuario');

      await api.delete(`/requests/delete-request/${request.id}`);
    } catch (err) {
      alert(err);
    }
  }, [textArea]);

  const handleRefuse = useCallback(async (request) => {
    try {
      const textRefuse = textArea;
      const schema = Yup.object().shape({
        textRefuse: Yup.string().required('Escreva algo para dizer o motivo da recusa.').min(3, 'Digite algo com pelo menos 3 caracteres :)'),
      });
      await schema.validate({ textRefuse });

      alert('A Recusa esta sendo proessado, por favor aguarde alguns segundos ate a sua confirmação!');

      const sendMail = await api.post('/mail-provider/send-mail-request-return-refuse', {
        nameBook: request.IdBook.name,
        nameUser: request.IdUser.fullName,
        emailUser: request.IdUser.email,
        emailAdmin: request.IdAdmin.emailAdmin,
        textRefuse,
      });
      if (!sendMail) {
        alert('Parece que algo deu errado, tente novamente');
      }
      alert('Parece que tudo correu bem, um email foi encaminhado para você e para o usuario');
      await api.delete(`/requests/delete-request/${request.id}`);
    } catch (err) {
      alert(err);
    }
  }, [textArea]);

  const handleNavigation = useCallback(async () => {
    navigation.navigate('RequestAcceptPage', { id });
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
          Essas são todas as suas requisições:
        </Text>

        <RectButton onPress={handleNavigation} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Ir para as aceitas
            </Text>
          </View>
        </RectButton>
        {requistitions.map((request) => (
          <View key={request.id} style={styles.containerRequest}>
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
              Como vai ser?*
            </Text>
            <TextInput
              value={textArea}
              onChangeText={(textarea) => setTextArea(textarea)}
              style={styles.input}
              multiline
              numberOfLines={4}
              placeholder="Digite como vai ser..."
              placeholderTextColor="grey"
            />
            <Text style={styles.textSpan1}>
              *Esse campo é obrigatorio.
            </Text>
            <Text style={styles.textSpan}>
              Caso a resposta seja SIM, diga como
              {'\n'}
              será a entrega e o tempo de emprestimo.
            </Text>
            <Text style={styles.textSpan}>
              Caso a resposta seja NÃO, deixe o porque.
            </Text>

            <RectButton
              // eslint-disable-next-line no-return-await
              onPress={async () => await handleAccept(request)}
              style={styles.ButtonAceite}
            >
              <View style={styles.ViewButton}>
                <Text style={styles.textButton}>
                  Aceitar
                </Text>
              </View>
            </RectButton>
            <RectButton
              // eslint-disable-next-line no-return-await
              onPress={async () => await handleRefuse(request)}
              style={styles.ButtonRecuse}
            >
              <View style={styles.ViewButton}>
                <Text style={styles.textButton}>
                  Recusar
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
