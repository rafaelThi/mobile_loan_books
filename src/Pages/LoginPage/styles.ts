import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLoginPage: {
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 28,
    marginHorizontal: 35,
    marginBottom:10,
    marginTop:25,
  },
  subTitleLoginPage:{
    justifyContent: 'center',
    textAlign: 'left',
    // flex: 1,
    color: '#DBDBDB',
    fontSize: 15,
    marginHorizontal: 35,
    marginBottom:15,
    marginTop:0,
  },
  input:{
    height:40,
    backgroundColor: '#fff',
    paddingHorizontal:12,
    borderRadius:8,
    justifyContent:'center',
    marginTop:4,
    marginBottom:14,
},
  Img: {
    position:'absolute',
    width: 93,
    height: 82,
    left: 21,
    top: 35,
    borderRadius: 15,
  },
  logo: {
    position:'absolute',
    // width: 93,
    // height: 82,
    left: 120,
    top: 45,
    fontSize:38,
    color: '#DBDBDB'
  },
  Button: {
    backgroundColor: '#04D361',
    borderRadius:15,  
    paddingLeft:35,
    paddingRight:34,
    paddingTop:20,
    paddingBottom:20,
  },
  ViewButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImgButton: {
    height: 45,
    width: 40,
  }
});
export default styles;