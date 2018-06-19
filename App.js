import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {


  render(){

    return(
        <View style={styles.Container}>
            <Text style={styles.textCenter}>Welcome to CK-Technologies</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    textCenter:{
      color:'#1145cf', 
      fontWeight:'bold', 
      fontSize: 20, 
      textAlign: 'center'
    },
    Container:{
      flex:1, 
      backgroundColor: '#ececec',
      justifyContent:'center', 
      alignItems:'center'
    }

})