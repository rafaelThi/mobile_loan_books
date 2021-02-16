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
    fontSize: 40,
    marginHorizontal: 35,
    marginBottom: 10,
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
    height: 60,
    marginHorizontal: 60,
    marginVertical: 25,
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

  textButton: {
    color: '#fff',
    fontFamily: 'Roboto',
    marginVertical: 0,
    marginHorizontal: 5,
  },
});
export default styles;
