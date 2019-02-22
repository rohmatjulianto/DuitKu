/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, TouchableNativeFeedback} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

class LoginPage extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.label}>Duitku</Text>

           <View style ={styles.form}> 
              <TextInput
                style={styles.input}
                placeholder ="Username"
                underlineColorAndroid = "blue"/>
    
              <TextInput
                style={styles.input}
                secureTextEntry = {true}
                placeholder ="Password"
                underlineColorAndroid = "blue"/>
      
              <TouchableNativeFeedback
                onPress={() => navigate('Dashboard', {name: 'Jane'})}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>LOGIN</Text>
                </View>
              </TouchableNativeFeedback>
              <View style={styles.txtBtn}>
                <Text
                onPress={() => navigate('Register')}>
                  Don't have account? 
                  <Text style={styles.txtbtnclick}>
                  {' '}Register
                  </Text>
                </Text>
              </View>
            </View> 
      </View>
    );
  }
}
class Register extends Component {
  static navigationOptions = {
    title : 'Register'
  }
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder ="Full Name"
          underlineColorAndroid = "blue"/>
        <TextInput
          style={styles.input}
          placeholder ="Username"
          underlineColorAndroid = "blue"/>
        <TextInput
          style={styles.input}
          secureTextEntry = {true}
          placeholder ="Password"
          underlineColorAndroid = "blue"/>
        <TextInput
          style={styles.input}
          secureTextEntry = {true}
          placeholder ="Confirm Password"
          underlineColorAndroid = "blue"/>
        <TouchableNativeFeedback
          onPress={()=>{}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home : LoginPage,
//     Dashboard : Dashboard
//   }
// )
const AppStackNavigator = createStackNavigator({
  Home : LoginPage,
  Register : Register,
});
const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  txtbtnclick:{
    color : '#68a0cf'
  },
  txtBtn :{
    alignItems : 'center',
    marginTop: 5
  },
  btn :{
    alignItems : 'center',
    backgroundColor : '#68a0cf',
    borderRadius : 5,
    padding : 10
  },

  btnText : {
    color : '#ffffff'
  },

  label : {
    marginBottom : 70,
    textAlign : 'center',
    fontSize : 20,
    fontWeight : 'bold'
  },

  form : {
    padding : 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  input :{
    width : '100%',
  },
});
