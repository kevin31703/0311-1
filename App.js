import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fontStyle}>
        <Text style={styles.num1}>110</Text>
        <Text style={styles.num2}>719</Text>
        <Text style={styles.num3}>030</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameStyle1}>張</Text>
        <Text style={styles.nameStyle2}>皓</Text>
        <Text style={styles.nameStyle3}>凱</Text>
      </View>
      <View style={styles.dec}>
        <Text style={styles.dec1}>✦</Text>
        <Text style={styles.dec2}>✦</Text>
        <Text style={styles.dec3}>✦</Text>
        <Text style={styles.dec4}>✦</Text>
        <Text style={styles.dec5}>✦</Text>
        <Text style={styles.dec6}>✦</Text>
        <Text style={styles.dec7}>✦</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  num1: {
    fontSize:200,
    fontWeight:'bold',
    color:'white',
    marginTop:20,
    marginLeft:-5,
  },
  num2: {
    fontSize:200,
    fontWeight:'bold',
    color:'white',
    marginTop:-80,
  },
  num3: {
    fontSize:200,
    fontWeight:'bold',
    color:'white',
    marginTop:-80,
  },
  nameStyle1: {
    fontSize:25,
    fontWeight:'bold',
    color:'#444444',
    marginLeft:13,
    marginTop:-350,
  },
  nameStyle2: {
    fontSize:25,
    fontWeight:'bold',
    color:'#444444',
    marginLeft:13,
    marginTop:-5,
  },
  nameStyle3: {
    fontSize:25,
    fontWeight:'bold',
    color:'#444444',
    marginLeft:13,
    marginTop:-5,
  },
  dec1: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginTop:-420,
    marginLeft:150,
  },
  dec2: {
    fontSize:10,
    fontWeight:'bold',
    color:'white',
    marginTop:-190,
    marginLeft:-30,
  },
  dec3: {
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginTop:50,
    marginLeft:220,
  },
  dec4: {
    fontSize:10,
    fontWeight:'bold',
    color:'white',
    marginTop:-10,
    marginLeft:220,
  },
  dec5: {
    fontSize:40,
    fontWeight:'bold',
    color:'black',
    marginTop:360,
    marginLeft:30,
  },
  dec6: {
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    marginTop:-180,
    marginLeft:40,
  },
  dec7: {
    fontSize:10,
    fontWeight:'bold',
    color:'black',
    marginTop:50,
    marginLeft:-30,
  },
});
