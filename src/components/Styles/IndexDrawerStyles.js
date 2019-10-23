import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerMenu: {
    paddingTop: 15,
    paddingHorizontal: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  tituloAppDrawer: {
    paddingLeft: 15,
    fontSize: 20,
    color: '#146AD2',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  fotoPerfilDrawer: {
    width: 55,
    borderRadius: 30,
    height: 55,
  },
  nome: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    paddingBottom: 10,
    fontSize: 15,
  },
  footerView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  botaoLogout: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  footerDrawer: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 13,
    color: '#000',
  },
});
