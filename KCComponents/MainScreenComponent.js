import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Button from 'react-native-button';
import { ProfileScreen, AboutScreen } from './ScreenName';
// import newsResourceData from '../KCData/Json/newsResources'

export default class MainScreenComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = 'Main';
    let headerTitleStyle = {
        color : 'white',
        fontSize: 16,
        fontWeight: 'normal', 
    };
    let headerTintColor= '#ffffff';
    let headerStyle= {
        height : 50,
        elevation: 0,       //remove shadow on Android
        shadowOpacity: 0,
        backgroundColor : '#09236e',
        shadowOpacity: 0,
        shadowOffset: {
        height: 0,
        width:0,
        },
        shadowRadius: 0,
    };
    let headerRight = (
      <Image 
          style={{height: 20}} 
          source={require('../KCImage/icons/menu_vertical.png')} 
          // onPress={
          //   ()=>{
          //     alert("Settings")
          //   }
          // }
          />
    )
    // let headerBackTitle = 'Back';
    return { headerTitle, headerTitleStyle, headerRight, headerStyle, headerTintColor };
}

  render(){
    const {navigate} = this.props.navigation;
    return(
        
        <View style={styles.Container}>
            <StatusBar
                backgroundColor="#09236e"
                barStyle="light-content"/>

                <Text
                  onPress={() => {
                            navigate('AboutScreen');
                        }}
                >KCTechnology</Text>
                <Text
                  onPress={() => {
                            navigate('ProfileScreen');
                        }}
                >Profile</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    textCenter:{
      color:'#09236e', 
      fontWeight:'bold', 
      fontSize: 20, 
      textAlign: 'center'
    },
    Container:{
      flex:1, 
      backgroundColor: '#ececec',
    }

})