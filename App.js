import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function App(){
  return(
    <View style={styles.conteiner}>
      <Image
      source={require('./assets/img/biscoito.png')}
      style={styles.img}
      />
      <TouchableOpacity>
        <View>
          <Text>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Text>Reiniciar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230
  }
})

export default App;