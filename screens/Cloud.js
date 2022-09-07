import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-paper'

import ProgressBar from "react-native-animated-progress";
import TopBar from '../navigation/TopBar';

import LottieView from 'lottie-react-native';

const Cloud = () => {

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
            My Cloud
          </Text>
        </View>
          <View style={{height: 80, width: 80}}>
           <LottieView source={require('../assets/lottie/notification.json')} autoPlay loop />
          </View>
      </View>
    )
  }

  const stockage = () => {
    return (
      <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Stockage</Text>
        </View>
        <View>
        <Text style={{ marginBottom: 20, fontSize: 24, color: '#8E8E8E' }}>
          6.2Go/10Go
        </Text>
        <ProgressBar progress={60} height={7} backgroundColor="#400590" />
      </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {header()}
      {stockage()}
      <View style={{marginTop: 20, flex: 1}}>
        {TopBar()}
      </View>
      <TouchableOpacity
        style={{height: 60, width: 60, flex:1, backgroundColor: '#400590', position: 'absolute', bottom: 20, right: 0, borderRadius: 30,  elevation: 7, justifyContent: 'center',alignItems: 'center'}}>
        <FontAwesome name='cloud-upload' size={30} color="#F8F8F8" />
      </TouchableOpacity>
    </View>
  )
}

export default Cloud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})