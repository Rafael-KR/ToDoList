import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1476D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 7,
    marginRight: 7,
  },
  tituloHeader: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  backgroundImg: {
    flex: 1,
    width: null,
  },
  footerView: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1476D2',
    borderTopWidth: 1,
    borderTopColor: '#146AD2',
  },
  versaoFooter: {
    flex: 1,
    textAlign: 'right',
    marginRight: 15,
    color: '#ddd',
    //fontWeight: 'bold',
  },
  textNomeFooter: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#ddd',
  },
});
