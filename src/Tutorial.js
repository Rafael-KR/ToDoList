import React, {Component} from 'react';
import {View, Text, ScrollView, StatusBar, Image} from 'react-native';
import {Header} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './components/Styles/TutorialStyles';

export default class todos extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5FC'}}>
        <Header
          style={{
            backgroundColor: '#1476D2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 7,
              marginRight: 7,
            }}>
            <Icon
              name="bars"
              size={28}
              color="#fff"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 20,
              }}>
              Tutorial
            </Text>
            <Text style={{color: '#1476D2'}}>aaa</Text>
          </View>
        </Header>

        <ScrollView>
          <StatusBar backgroundColor="#146AD2" />
          <View style={styles.viewTexto}>
            <Text style={styles.tituloInstrucoes}>
              INSTRUÇÕES DE USO - TO DO LIST:
            </Text>
            <View style={styles.viewTutorial}>
              <View style={{backgroundColor: '#FFF'}}>
                <Text style={styles.tituloTutorial}>1. ADICIONAR</Text>
                <Text style={styles.textoInstrucoes}>
                  Insira o nome da sua tarefa e pressione o botão de adicionar,
                  presente ao lado do Input. Conforme mostrado abaixo:
                </Text>
              </View>
            </View>
            <View style={styles.viewImg}>
              <Image
                source={require('./imgs/tutorial/add.gif')}
                style={styles.gifView}
              />
            </View>

            <View style={styles.viewTutorial}>
              <View style={{backgroundColor: '#FFF'}}>
                <Text style={styles.tituloTutorial}>2. EDITAR</Text>
                <Text style={styles.textoInstrucoes}>
                  Mantenha pressionado o toque sobre a tarefa desejada à editar,
                  e faça as modificações no input contido acima da lista.
                  Pressione o botão adicionar novamente para salvar as
                  alterações:
                </Text>
              </View>
              <View style={styles.viewImg}>
                <Image
                  source={require('./imgs/tutorial/edit.gif')}
                  style={styles.gifView}
                />
              </View>
            </View>

            <View style={styles.viewTutorial}>
              <View style={{backgroundColor: '#FFF'}}>
                <Text style={styles.tituloTutorial}>
                  3. MARCAR COMO CONCLUÍDA
                </Text>
                <Text style={styles.textoInstrucoes}>
                  Para marcar uma tarefa como concluída, basta realizar a ação
                  de pressionar sobre a tarefa desejada. Do mesmo modo, você
                  pode desfazer a ação:
                </Text>
              </View>
              <View style={styles.viewImgLast}>
                <Image
                  source={require('./imgs/tutorial/done.gif')}
                  style={styles.gifView}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
