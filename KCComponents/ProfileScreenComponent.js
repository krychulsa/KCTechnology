import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Animated, ScrollView} from 'react-native';
import Button from 'react-native-button';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
const winWidth = Dimensions.get('window').width;

const Page = ({label}) => (
  <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator = {false}
        showsVerticalScrollIndicator = {false}
      >
          <Text style={styles.welcome}>
            {label}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload Cmd+D or shake for dev menu
          </Text>
      </ScrollView>
  </View>
);
const Page1 = ({label}) => (
  <View>
      <ScrollView
        showsHorizontalScrollIndicator = {false}
        showsVerticalScrollIndicator = {false}
      >
          <Image source={require('../KCImage/bg/KCTechnology.png')} 
              style={{
                  width : winWidth,
                  height : (winWidth * 302)/1024,
              }}
            />
          
          
      </ScrollView>
  </View>
);

export default class ProfileScreenComponent extends Component {
  _scrollX = new Animated.Value(0);
  // 6 is a quantity of tabs
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    scale: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [1, 1.2, 1],
      extrapolate: 'clamp',
    }),
    opacity: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    }),
    textColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['#000', '#fff', '#000'],
    }),
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));

  render(){
    
    return(
        <View style={styles.Container}>
          <ScrollableTabView
            tabBarUnderlineColor="#ffffff"
            tabBarActiveTextColor="#ffffff"
            tabBarUnderlineColor ="#133980"
            tabBarBackgroundColor= "#133980"
            renderTabBar={() => (
              <TabBar underlineColor="#ffffff" activeTabTextStyle={{ color: "#ffffff" }} backgroundColor="#133980" />
            )}
          >
            <Page1 tabLabel={{label: "Home"}} label="Page #1"/>
            <Page tabLabel={{label: "Videos"}} label="Page #2"/>
            <Page tabLabel={{label: "About"}} label="Page #3"/>
            <Page tabLabel={{label: "Playlists"}} label="Page #4 aka Page"/>
            <Page tabLabel={{label: "Channels"}} label="Page #5"/>
            <Page tabLabel={{label: "Page #6 SUPER HYPER LONG PAGE"}} label="Page #6 SUPER HYPER LONG PAGE WITH NITRO ACCELERATORS"/>
          </ScrollableTabView> 
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
      backgroundColor: '#133980',
    }

});
const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
  const { label, icon } = tab;
  const style = {
    marginHorizontal: 20,
    paddingVertical: 10,
  };
  
  const containerStyle = {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: styles.backgroundColor,
    opacity: styles.opacity,
    transform: [{ scale: styles.opacity }],
  };
  const textStyle = {
    color: '#fff',
    fontWeight: '600',
  };
  const iconStyle = {
    tintColor: styles.textColor,
    resizeMode: 'contain',
    width: 22,
    height: 22,
    marginLeft: 10,
  };
  return (
    <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
      <Animated.View style={containerStyle}>
        <Animated.Text style={textStyle}>{label}</Animated.Text>
        <Animated.Image style={iconStyle} source={icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};