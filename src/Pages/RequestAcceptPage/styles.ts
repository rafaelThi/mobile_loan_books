import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHome: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 25,
    marginHorizontal: 10,
    marginBottom: 30,
    marginTop: 140,
  },
  ImgLogo: {
    position: 'absolute',
    width: 93,
    height: 82,
    left: 21,
    top: 35,
    borderRadius: 15,
  },
  search: {
    marginTop: 0,
  },
  TextLogo: {
    position: 'absolute',
    // width: 93,
    // height: 82,
    left: 120,
    top: 45,
    fontSize: 38,
    color: '#DBDBDB',
  },
  Button: {
    backgroundColor: '#04D361',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '18%',
  },
  ViewButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewButtonAdmin: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 25,
  },
  ImgButton: {
    height: 45,
    width: 40,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Roboto',
    marginVertical: 0,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  containerRequest: {
    paddingVertical: 13,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 22,
    marginTop: 15,
    marginHorizontal: 8,
    textAlign: 'right',
  },
  textRequestMessage: {
    color: '#3D3D4D',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: -7,
  },
  textRequest: {
    color: '#3D3D4D',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  textRequestExemplo: {
    color: '#3D3D4D',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: -3,
  },
  input: {
    height: 30,
    width: 120,
    backgroundColor: '#D8D8D8',
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'flex-start',
    marginTop: 4,
    marginBottom: 0,
  },
  textSpan: {
    fontSize: 9,
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: -70,
  },
  textSpan1: {
    fontSize: 9,
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: -133,
  },
  ButtonAceite: {
    margin: 15,
    backgroundColor: '#04D361',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    width: 115,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '18%',
  },
  OKorX: {
    marginLeft: -225,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  ImgOK: {
    height: 25,
    width: 25,

  },
  ImgX: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  Perfil: {
    color: '#fff',
    marginBottom: 20,
    marginTop: 5,
  },

});
export default styles;
