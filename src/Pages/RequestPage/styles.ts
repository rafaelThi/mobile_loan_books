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
  input: {
    height: 60,
    width: 240,
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '18%',
  },
  ButtonRecuse: {
    margin: 15,
    backgroundColor: '#D30404',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '18%',
  },

});
export default styles;
