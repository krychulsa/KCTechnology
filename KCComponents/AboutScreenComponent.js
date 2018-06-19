import * as React from 'react';
import { StyleSheet, Dimensions , Platform, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import { TabView, TabBar, SceneMap, type Route, type NavigationState} from 'react-native-tab-view';
import Home from '../KCPager/Home';
import MoreApp from '../KCPager/MoreApp';
import Contact from '../KCPager/Contact';
import About from '../KCPager/About';
//import { ProfileScreen } from './ScreenName';


type State = NavigationState<
  Route<{
    key: string,
    title: string,
  }>
>;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class TopBarTextExample extends React.Component<*, State> {

  static navigationOptions = ({ navigation }) => {


    let headerTitle = 'CK Technology';
    let headerTitleStyle = {
        color : 'white',
        fontSize: 16,
        fontWeight: 'normal', 
    };
    //Change back arrow color
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
          />
    )
    // let headerBackTitle = 'Back';
    return { headerTitle, headerTitleStyle, headerRight, headerStyle, headerTintColor };
}


  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'HOME' },
      { key: 'more_app', title: 'MORE APP' },
      { key: 'contact', title: 'CONTACTS' },
      { key: 'about', title: 'ABOUT' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    home: Home,
    more_app: MoreApp,
    contact: Contact,
    about: About,
  });

  render() {
    return (
      <TabView
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#09236e',
    elevation : 0,
  },
  tab: {
    width: 90,
  },
  indicator: {
    backgroundColor: '#ffff',
  },
  label: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 11,
  },
});