import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', //borda inferior das tarefas
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
    color: '#ddd', //cor do texto da tarefa adicionada
  },
  tarefaConcluida: {
    color: 'cyan',
    textDecorationLine: 'line-through',
  },
});
