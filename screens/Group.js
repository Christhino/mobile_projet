import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native'



const Group = () => {

  const header = () => {
    return (
      <View style={styles.header}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/avatars/avatar1.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontFamily: 'montserrat', fontSize: 24}}>
            Groupe
          </Text>
        </View>
        <View style={{height: 80, width: 80}}>
           <LottieView source={require('../assets/lottie/notification.json')} autoPlay loop />
          </View>
      </View>
    )
  }

  return (
    <View style={{marginHorizontal: 20}}>
      {header()}
      <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Vos groupes</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <Image
            source={require('../assets/avatars/group.png')}
            style={{height: 60, width: 120}}
          />
          <View style={{width: 160, marginLeft: 20}}>
            <Text>
              Vous, John Doe et 4 autres personnes
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 20}}>
          <TouchableOpacity style={{height:40, width: 40, borderRadius: 20, backgroundColor: '#400590', justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='person-add' size={24} color='#fff' />
          </TouchableOpacity>
            <Text style={{marginLeft: 10, fontSize: 16}}>Créer un nouveau groupe</Text>
        </View>
      </View>
    </View>
  )
}

export default Group

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
})