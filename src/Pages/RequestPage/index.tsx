import React from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import book from '../../../assets/book.png';
import styles from './styles';

export default function RequestPage() {
  const navigation = useNavigation();

  function handleLoginPage() {
    navigation.navigate('LoginPage');
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

        <RectButton onPress={() => { console.log('Ir para as aceitas'); }} style={styles.Button}>
          <View style={styles.ViewButton}>
            <Text style={styles.textButton}>
              Ir para as aceitas
            </Text>
          </View>
        </RectButton>
        <View style={styles.containerRequest}>
          <Text style={styles.textRequest}>
            Requisição feita por: Fulano 1
          </Text>
          <Text style={styles.textRequest}>
            Livro requisitado: Livro X
          </Text>
          <Text style={styles.textRequest}>
            Como vai ser?*
          </Text>
          <TextInput
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

          <RectButton onPress={() => console.log('aceite')} style={styles.ButtonAceite}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Aceitar
              </Text>
            </View>
          </RectButton>
          <RectButton onPress={() => console.log('Recusa')} style={styles.ButtonRecuse}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Recusar
              </Text>
            </View>
          </RectButton>
        </View>
        <View style={styles.containerRequest}>
          <Text style={styles.textRequest}>
            Requisição feita por: Fulano 1
          </Text>
          <Text style={styles.textRequest}>
            Livro requisitado: Livro X
          </Text>
          <Text style={styles.textRequest}>
            Como vai ser?*
          </Text>
          <TextInput
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

          <RectButton onPress={() => console.log('aceite')} style={styles.ButtonAceite}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Aceitar
              </Text>
            </View>
          </RectButton>
          <RectButton onPress={() => console.log('Recusa')} style={styles.ButtonRecuse}>
            <View style={styles.ViewButton}>
              <Text style={styles.textButton}>
                Recusar
              </Text>
            </View>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
}
