import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const otherData = [
    {
        id: 1, 
        name: 'Windows10 2002.iso',
        size: '4.5.Go',
    }
]

const Other = () => {
  return (
    <View style={{marginTop: 20}}>
      {
          otherData.map(other => (
            <View style={styles.eachReceive} key={other.id}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/doc.png')}
                style={{height: 60, width: 60}}
              />
              <View style={{marginLeft: 20}}>
                <Text>{other.name}</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>{other.size}</Text>
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

export default Other

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