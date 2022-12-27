import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/name.png')}
              style={{ width: 150, height: 150 }}></Image>
            <Text style={styles.titleText}>Formats Of Letter</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Informal letter')}>
            <Text style={styles.routeText}>Informal letter format</Text>
            <Image
              source={require('../screens/informal_letterScreen.js')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('formal letter')}>
            <Text style={styles.routeText}>Formal letter format</Text>
            <Image
              source={require('../screens/formal_letterScreen.js')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('writing skills')}>
            <Text style={styles.routeText}> Writing Skills </Text>
            <Image
              source={require('../screens/formal_letterScreen.js')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D11583',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeImage: {
    position: 'absolute',
    top: -20,
    right: -15,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
