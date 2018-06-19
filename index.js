import { AppRegistry } from 'react-native';
// import App from './App';
import MainScreenComponent from './KCComponents/MainScreenComponent'
import ProfileScreenComponent from './KCComponents/ProfileScreenComponent'
import AboutScreenComponent from './KCComponents/AboutScreenComponent'
import {StackNavigator} from 'react-navigation'
import { MainScreen,  ProfileScreen, AboutScreen} from './KCComponents/ScreenName'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';
    
const App = StackNavigator({
    MainScreen:{
        screen : MainScreenComponent,
    },
    AboutScreen:{
        screen : AboutScreenComponent,
    },
    ProfileScreen:{
        screen : ProfileScreenComponent,
    },
})


AppRegistry.registerComponent('KCTech', () => App);
