import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {TextInput} from 'react-native-paper'

const Login = ({navigation}) => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} >
      <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require('../assets/icons/logo.png')}
          style={{height: 60, width: 140}}
          resizeMode='contain'
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>LOGIN</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          label="Email"
          value={mail}
          onChangeText={mail => setMail(mail)}
          style={{backgroundColor: 'transparent'}}
          placeholder='Entrez votre adresse e-mail'
          theme={{
          colors: {
                text: 'black', primary: '#59079E',
                underlineColor: 'transparent', background: '#003489'
              }
         }}
        />
        <TextInput
          label="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={password => setPassword(password)}
          style={{backgroundColor: 'transparent'}}
          placeholder='Saisissez votre mot de passe'
          theme={{
          colors: {
                text: 'black', primary: '#59079E',
                underlineColor: 'transparent', background: '#003489'
              }
         }}
        />
      </View>
      <View style={{paddingHorizontal: 30}}>
         <TouchableOpacity 
            onPress={() => navigation.navigate('BottomTab')}
            style={styles.submitButton}>
          <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#fff',fontSize: 16}}>Login</Text>
          </View>
         </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 15}}>
        <Text>Or login with</Text>
      </View>
      <View style={styles.socialSection}>
         <TouchableOpacity style={styles.socialButton}>
           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:1}}>
             <Image
                source={require('../assets/icons/google.png')}
                style={{height: 30, width: 30}}
             />
             <Text>Google</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.socialButton}>
           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:1}}>
             <Image
                source={require('../assets/icons/facebook.png')}
                style={{height: 30, width: 30}}
             />
             <Text>Facebook</Text>
           </View>
         </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text>New User? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{color:'#400572', fontWeight: 'bold'}}>Sign up now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputSection: {
    padding: 30,
    marginTop: 90
  },
  submitButton: {
    height: 60,
    backgroundColor: 'green' ,
    backgroundColor: '#400572',
    borderRadius: 30
  },
  socialSection:{
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  socialButton: {
    backgroundColor: '#DADADA',
    flex: 1,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 30
  }
})