import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
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
  titlePage: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 28,
    marginHorizontal: 35,
    marginBottom: 10,
    marginTop: 130,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  subPage: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 35,
    marginBottom: 10,
    marginTop: 10,

  },
  search: {
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 12,
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
