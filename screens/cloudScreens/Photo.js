import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const photoData = [
    {
        id: 1, 
        name: 'Profil.png',
        size: '3.2mo',
    },
    {
        id: 2, 
        name: 'DarkMeme.png',
        size: '4.1mo',
    },
    {
        id: 3, 
        name: 'Dogs life.jpg',
        size: '3.6mo',
    },
    {
        id: 4, 
        name: 'Fond.png',
        size: '3.5mo',
    },
    {
        id: 5, 
        name: 'PhotoCouple/jpg',
        size: '3.5mo',
    },
]

const Photo = () => {
  return (
    <View style={{marginTop: 20}}>
      {
          photoData.map(photo => (
            <View style={styles.eachReceive} key={photo.id}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/gallery.png')}
                style={{height: 60, width: 60}}
              />
              <View style={{marginLeft: 20}}>
                <Text>{photo.name}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{photo.size}</Text>
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

export default Photo

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