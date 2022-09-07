import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const videoData = [
    {
        id: 1, 
        name: 'FunnyMoments.mp4',
        size: '50.2mo',
        duration: '7:43'
    },
    {
        id: 2, 
        name: 'Festival.mp4',
        size: '1.2Go',
        duration: '35:23'
    },
    {
        id: 3, 
        name: 'CoursPython.mp4',
        size: '1.3Go',
        duration: '48:22'
    },
    {
        id: 4, 
        name: 'Video20220314.mp4',
        size: '102.5mo',
        duration: '4:55'
    },
    {
        id: 5, 
        name: 'Video20220423.mp4',
        size: '122.9mo',
        duration: '5:22'
    },
]

const Video = () => {
  return (
    <View style={{marginTop: 20}}>
      {
          videoData.map(video => (
            <View style={styles.eachReceive} key={video.id}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/video.png')}
                style={{height: 60, width: 60}}
              />
              <View style={{marginLeft: 20}}>
                <Text>{video.name}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{video.size}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{video.duration}</Text>
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

export default Video

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