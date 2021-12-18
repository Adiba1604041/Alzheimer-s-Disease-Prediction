import * as React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Signup';
import Signin from './Signin';
import COLORS from './colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'native-base/lib/typescript/theme/styled-system';
function HomeScreen({navigation}) {
  return (
    /*
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <ImageBackground source={require('./images/ad1.jpg')} resizeMode="cover" style={{width: 100, height: 100}}></ImageBackground>
      <Button title='Click' onPress={()=>navigation.navigate('signinsignup')}/>
    </View>*/
    
    <SafeAreaView style={{flex: 1}}>
      <Image
       source={require('./images/ad2.jpg')}
       style={styles.image}
       />
       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('signup')}
       >
        <Text style={styles.titles}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('signup')}
       >
        <Text style={styles.titles}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('signin')}
       >
        <Text style={styles.titles}>Sign in</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image:{
    height:420,
    width:'100%',
    borderBottomLeftRadius:80,
    borderBottomRightRadius:80,
  },
  
  button: {
    width:'100%',
    height:60,
    alignItems: "center",
    backgroundColor: COLORS.grey,
    opacity: 0.8,
    padding: 10,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },

  titles:{
    fontSize: 20,
    fontWeight:'bold',
    color: '#34495E'
  }
})
  


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="signin" component={Signin} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
