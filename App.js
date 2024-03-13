import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>História TORMENTA 20</Text>
      </View>
      
     

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          "Tormenta 20" é o nome de um popular sistema de RPG brasileiro, uma versão atualizada e revisada do clássico "Tormenta RPG". Vou criar uma história baseada nesse universo:

          No mundo de Arton, um continente marcado por guerras, magia e deuses caprichosos, uma tempestade de proporções épicas se aproxima. Conhecida como a Tempestade Rubra, é um fenômeno misterioso que assola a região sudoeste do continente. Não é uma tempestade comum, mas sim um evento mágico de proporções catastróficas, capaz de distorcer a própria realidade.

          Os habitantes de Arton, acostumados com perigos diversos, sabem que a Tempestade Rubra é um presságio de desastre iminente. Reinos inteiros se preparam para enfrentar o caos que se aproxima, enquanto os estudiosos e os sacerdotes buscam compreender as origens e a natureza dessa tempestade terrível.

          No entanto, enquanto os líderes discutem estratégias e os magos tecem encantamentos defensivos, um grupo improvável de heróis emerge das sombras.
        </Text>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
  },
  header: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10, 
    alignSelf: 'stretch', 
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, 
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginBottom: 20, 
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
