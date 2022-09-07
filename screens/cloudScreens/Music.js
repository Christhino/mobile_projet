import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const musicData = [
    {
        id: 1, 
        name: 'Avenged Sevenfold - So Far Away.mp3',
        size: '3.2mo',
        duration: '4:16'
    },
    {
        id: 2, 
        name: 'Imagine Dragons - Enemy.mp3',
        size: '4.1mo',
        duration: '3:34'
    },
    {
        id: 3, 
        name: 'Avicii - The Nights.mp3',
        size: '3.6mo',
        duration: '3:31'
    },
    {
        id: 4, 
        name: 'Naruto - Blue Bird.mp3',
        size: '3.5mo',
        duration: '3:16'
    },
    {
        id: 5, 
        name: 'Luis Fonsi - Despacito.mp3',
        size: '3.5mo',
        duration: '3:16'
    },
]

const Music = () => {
  return (
    <View style={{marginTop: 20}}>
      {
          musicData.map(music => (
            <View style={styles.eachReceive} key={music.id}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/musicHD.png')}
                style={{height: 60, width: 60}}
              />
              <View style={{marginLeft: 20}}>
                <Text>{music.name}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{music.size}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{music.duration}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{height: 32, width: 32, borderRadius: 10, backgroundColor: '#9A7EBF', justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesome name='send' size={16} color='#F8F8F8' />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          ))
      }
      
    </View>
  )
}

export default Music

const styles = StyleSheet.create({
    eachReceive: {
        flexDirection: 'row', 
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#E4E4E4',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
})