import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-paper'

const choice = [
    {
        id: 1,
        name: 'Student'
    },
    {
        id: 2,
        name: 'Teacher'
    },
]

const SignUp = ({navigation}) => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [selectedChoice, setSelectedChoice] = useState(choice[0]);

    const onSelectChoice = (choice) => {
        setSelectedChoice(choice)
    }

    // const renderChoice = () => {
    //     return choice.map((choice) => (
    //         <TouchableOpacity style={[styles.choiceButton, {backgroundColor: (selectedChoice?.id == choice.id) ? 'grey' : '#F7EDFF'}]} key={choice.id} onPress={() => onSelectChoice(choice)}>
    //             <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
    //                 <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', margin: 10}}>
    //                     {
    //                         (selectedChoice?.id == choice.id) ? (<FontAwesome name='check' size={30} color='green' />) : (<View></View>)
    //                     }
    //                 </View>
    //             </View>
    //             <View style={{marginLeft: 10, marginBottom: 10}}>
    //                 <Text style={{
    //                     fontWeight: 'bold',
    //                     color: (selectedChoice?.id == choice.id) ? "#fff": "#000"
    //                 }}>I am a</Text>
    //                 <Text style={{fontSize: 26, color: (selectedChoice?.id == choice.id) ? "#fff": "#000", fontWeight: 'bold'}}>{choice.name}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     ))
    // }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require('../assets/icons/logo.png')}
          style={{height: 60, width: 140}}
          resizeMode='contain'
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>REGISTER</Text>
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {renderChoice()}
      </View> */}
      <View style={styles.inputSection}>
        <TextInput
          label="Nom d'utilisateur"
          value={username}
          onChangeText={username => setUsername(username)}
          style={{backgroundColor: 'transparent'}}
          placeholder="Quel est votre nom d'utilisateur"
          theme={{
          colors: {
                      text: 'black', primary: '#59079E',
                      underlineColor: 'transparent', background: '#003489'
              }
         }}
        />
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
      <View style={{marginTop: 30}}>
         <TouchableOpacity style={styles.submitButton}>
          <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#fff',fontSize: 16}}>Créer un compte</Text>
          </View>
         </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', marginTop: 15}}>
          <Text>Or sign up with</Text>
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
        <Text>Already an user? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{color:'#400572',fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20
      },
      textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      choiceButton: {
        height: 160,
        width: 160, 
        borderRadius: 20, 
        justifyContent: 'space-between'
      },
      inputSection: {
        marginTop: 40
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