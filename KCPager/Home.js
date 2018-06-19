import * as React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
const winWidth = Dimensions.get('window').width;

export default class Article extends React.Component {
    
  render() {
    return (
        
        <View>

            <StatusBar
                backgroundColor="#09236e"
                barStyle="light-content"
            />
        
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.content}
                >
                    <Image source={require('../KCImage/bg/KCTechnology.png')} 
                        style={{
                            width : winWidth,
                            height : (winWidth * 302)/1024,
                        }}
                        />
                    <View style={styles.author}>
                    <Image
                        style={styles.avatar}
                        source={require('../KCImage/icons/kc_tech.png')}
                    />
                    <View style={styles.meta}>
                        <Text style={styles.name}>KC TECHNOLOGY</Text>
                        <Text style={styles.timestamp}>01 JUNE 2018</Text>
                    </View>
                    </View>
                    
          {/* Objective of KC Technology */}

                    <Text style={styles.title}>OBJECTIVES</Text>
                    <Text style={styles.paragraph}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                    </Text>
                    <Image style={styles.image} source={require('../KCAssets/book.jpg')} />
                    <Text style={styles.paragraph}>
                    Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                    </Text>

          {/* Objective of KC Technology */}                

                    <Text style={styles.title}>Creation Date</Text>
                    <Text style={styles.paragraph}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                    </Text>
                    <Image style={styles.image} source={require('../KCAssets/avatar-2.png')} />
                    <Text style={styles.paragraph}>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics, very
                    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in szxection 1.10.32.
                    </Text>

            {/* Objective of KC Technology */}                

                    <Text style={styles.title}>Archivement</Text>
                    <Text style={styles.paragraph}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                    </Text>
                    <Image style={styles.image} source={require('../KCAssets/album-art-8.jpg')} />
                    <Text style={styles.paragraph}>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics, very
                    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in szxection 1.10.32.
                    </Text>
                </ScrollView>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingVertical: 0,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 0,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 12,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});