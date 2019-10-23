import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import styles from '../../components/Styles/IndexDrawerStyles';

function CustomDrawer({...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerMenu}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/foto-perfil.png')}
            style={styles.fotoPerfilDrawer}
          />
          <Text style={styles.tituloAppDrawer}>To Do List</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://github.com/Rafael-KR');
          }}>
          <Text style={styles.nome}>Rafael Kuhn Rodrigues</Text>
          <Text style={styles.email}>rafael.kuhn@rede.ulbra.br</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://github.com/NicholasBorja');
          }}>
          <Text style={styles.nome}>Nicholas de Souza Borja</Text>
          <Text style={styles.email}>nicholas.borja@rede.ulbra.br</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
      <View style={styles.footerView}>
        <Text style={styles.footerDrawer}>To Do List - G2</Text>
        <Text style={styles.botaoLogout}>v(1.0)</Text>
      </View>
    </SafeAreaView>
  );
}

export default CustomDrawer;
