import React, {Component} from 'react';
import { ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const COVERS = [
  require('../KCAssets/album-art-1.jpg'),
  require('../KCAssets/album-art-2.jpg'),
  require('../KCAssets/album-art-3.jpg'),
  require('../KCAssets/album-art-4.jpg'),
  require('../KCAssets/album-art-5.jpg'),
  require('../KCAssets/album-art-6.jpg'),
  require('../KCAssets/album-art-7.jpg'),
  require('../KCAssets/album-art-8.jpg'),
];

export default class Albums extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {COVERS.map((source, i) => (
          <Image key={i} source={source} style={styles.cover} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343C46',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cover: {
    width: '30.5%',
    margin: '0.8%',
    marginLeft: '1.7%',
    height: Dimensions.get('window').width / 3,
  },
});