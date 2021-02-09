import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../../assets/Logo.png';
import styles from './styles';
// import styles from './styles'

interface IId {
  id: string;
}
export default function SearchPage() {
  const route = useRoute();
  const params = route.params as IId;

  const navigation = useNavigation();

  function handleLoginPage() {
    alert('ok');
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
        <Text style={styles.textLogo}>
          Books Loan
        </Text>
        <Text
          style={styles.titlePage}
        >
          Ache aqui o livro
          que procura
        </Text>
        <Text style={styles.subPage}>
          Basta digitar o título que procura, ou o nome do autor ou a linguagem
          do livro que deseja encontrar;
        </Text>
        <TextInput
        // value={stateEmail}
        // onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
        />
        <View style={styles.boxButton}>
          <RectButton onPress={handleLoginPage} style={styles.Button}>
            <Text>
              Pesquisar
            </Text>
          </RectButton>
        </View>
        <TextInput
        // value={stateEmail}
        // onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
        />
        <RectButton onPress={handleLoginPage} style={styles.Button}>
          <View>
            <Text>
              Pesquisar
            </Text>
          </View>
        </RectButton>
        <TextInput
        // value={stateEmail}
        // onChangeText={(email) => setStateEmail(email)}
          placeholderTextColor="#c1bccc"
          style={styles.input}
          placeholder="Digite seu email..."
        />
        <RectButton onPress={handleLoginPage} style={styles.Button}>
          <View>
            <Text>
              Pesquisar
            </Text>
          </View>
        </RectButton>
      </ScrollView>
    </View>
  );
}
