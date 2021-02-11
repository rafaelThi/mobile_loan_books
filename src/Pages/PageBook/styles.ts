import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginTop: 150,
  },
  ImgLogo: {
    position: 'absolute',
    width: 93,
    height: 82,
    left: 21,
    top: 35,
    borderRadius: 15,
  },
  textLogo: {
    position: 'absolute',
    // width: 93,
    // height: 82,
    left: 120,
    top: 45,
    fontSize: 38,
    color: '#DBDBDB',
  },
  titleBook: {
    justifyContent: 'center',
    textAlign: 'center',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 25,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  authorBook: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#DBDBDB',
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 0,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  requestBook: {
    justifyContent: 'center',
    textAlign: 'left',
    color: '#DBDBDB',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 5,
    marginTop: 0,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  requestText: {
    justifyContent: 'center',
    textAlign: 'left',
    color: '#DBDBDB',
    fontSize: 15,
    marginHorizontal: 15,
    marginBottom: 5,
    marginTop: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 12,
    marginLeft: '10%',
  },
  boxButton: {
    justifyContent: 'center',
    marginHorizontal: '25%',
  },
  Button: {
    backgroundColor: '#04D361',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'center',
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: '25%',
  },
  ViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImgButton: {
    height: 45,
    width: 40,
  },
  ImgBook: {
    height: 120,
    width: 120,
    borderRadius: 25,
    backgroundColor: '#eee',
    marginRight: 5,
    marginLeft: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  books: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 7,
    marginRight: 10,
    marginLeft: -12,
    maxWidth: 360,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  boxBook: {
    marginHorizontal: 5,
  },
  nameBook: {
    maxHeight: 20,
    maxWidth: 250,
  },
});
export default styles;
