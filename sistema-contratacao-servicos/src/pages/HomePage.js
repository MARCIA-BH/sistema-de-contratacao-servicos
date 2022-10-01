import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';





const HomePage = () => {

  return (


      <View syle={styles.container}>
      
      <Text style={styles.text}> BH Prestação de Serviços </Text>

    
  <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    E-mail
  </Button>
  <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    Senha
  </Button>


  <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    Entrar
  </Button>

 


      <Text> Cadastrar </Text>

      <Text> Esqueci minha senha </Text>

     <Text> @2022 Todos os Direitos Reservados</Text>
      
      </View>

  );




}


const styles = StyleSheet.create({

  container: {

    flex:1, 
    backgroundColor:'gree',
    alignItems:'center', 
    justifyContent:'center'

  },

  text:{
    fontSize:20,
    textAlign:'center',
    paddingTop: 20,
    fontWeight:'bold'


  }

  


 


  


  


})
export default HomePage;