import React, {useState, Component} from 'react';

import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import { authentication } from './firebase.js/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup () {
  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const signUpUser = ()=>{
    createUserWithEmailAndPassword(authentication,email,password)
    .then((re)=>{
      console.log(re)
    })
    .catch((re)=>{
      console.log(re);
    })

  }


  return(
      
      <ImageBackground source={require('./images/su1.jpg')} style={{height: '100%', weight: '100%'}} >
        <View>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#85929E'} underlineColorAndroid={'transparent'} value={email} onChangeText={text =>setEmail(text)}/>
          <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={text =>setPassword(text)}/>
          <Button title='Sign up' onPress={signUpUser}/>
        </View>

      </ImageBackground>
      
      

  );
};

  

const styles = StyleSheet.create({
 });

export default Signup;
