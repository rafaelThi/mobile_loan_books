import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Img: {
    position: 'absolute',
    width: 93,
    height: 82,
    left: 21,
    top: 35,
    borderRadius: 15,
  },
  logo: {
    position: 'absolute',
    // width: 93,
    // height: 82,
    left: 120,
    top: 45,
    fontSize: 38,
    color: '#DBDBDB',
  },
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginTop: 0,
  },
  titleLoginPage: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 26,
    marginHorizontal: 35,
    marginBottom: 30,
    marginTop: 125,
  },
  subTitleLoginPage: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 15,
    marginHorizontal: 35,
    marginBottom: 30,
    marginTop: 5,
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  Button: {
    backgroundColor: '#04D361',
    borderRadius: 15,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 200,

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
});
export default styles;
