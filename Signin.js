import React, {useState, Component} from 'react';

import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { authentication } from './firebase.js/firebase-config';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Signin () {

  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const signInUser = ()=>{
    signInWithEmailAndPassword(authentication,email,password)
    .then((re)=>{
      setIsSignedIn(true);
    })   
    .catch((err)=>{
      console.log(err);
    })

  }

  const signOutUser = ()=>{
    signOut(authentication)
    .then((re)=>{
      setIsSignedIn(false);
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  return(
    <View>
      <TextInput placeholder='Email' value={email} onChangeText={text =>setEmail(text)}/>
      <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={text =>setPassword(text)}/>
      {isSignedIn=== true?
        <Button title='Sign out' onPress={signOutUser}/>
        :
        <Button title='Sign in' onPress={signInUser}/>
      }



    </View>
  );
};

  

const styles = StyleSheet.create({
 });

export default Signin;
