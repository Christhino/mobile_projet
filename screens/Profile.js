import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { LineChart } from 'react-native-chart-kit';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
          <Image
            source={require('../assets/img/pdc.jpg')}
            style={{
                height: 200,
                width: '100%'
            }}
          />
          <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Image 
                source={require('../assets/avatars/avatar1.png')}
                style={{
                    height: 80, width: 80, borderRadius: 40, marginTop: -40, borderWidth: 3, borderColor: '#fff'
                }}
            />
            <Text style={{fontSize: 24, fontFamily: 'montserrat'}}>Kayra Smith</Text>
            <Text style={{fontSize: 16, fontFamily: 'montserrat', color: '#999'}}>Antsahavola</Text>
          </View>
      </View>
      <View style={{marginHorizontal: 20,marginTop: 20, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.2)',flexDirection: 'row', borderRadius: 10, borderStyle: 'dashed'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', flex: 1, paddingVertical: 10}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold'}}>97</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='md-folder' size={16} color='#000' />
                        <Text>Total</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold'}}>65</Text>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome name='send' size={16} color='#000' />
                        <Text>Send</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold'}}>32</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialIcons name='file-download' size={16} color='#000' />
                        <Text>Received</Text>
                    </View>
                </View>
            </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <LineChart
                data={{
                labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
                datasets: [
                    {
                    data: [
                        // Math.random() * 10,
                        // Math.random() * 10,
                        // Math.random() * 10,
                        // Math.random() * 10,
                        // Math.round(Math.random()*10),
                        // Math.random() * 10
                        2,
                        4,
                        6,
                        4,
                        8,
                        2
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#000D71",
                backgroundGradientTo: "#6E00B4",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                // bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    marginHorizontal: 40
                }}
            />
            <Text style={{fontSize: 16, fontFamily: 'montserrat'}}>Statistiques</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{height: 60, width: 60, flex:1, backgroundColor: '#FF3C3C', position: 'absolute', bottom: 20, right: 0, borderRadius: 30,  elevation: 7, justifyContent: 'center',alignItems: 'center', marginRight: 20}}>
        <Ionicons name='ios-exit' size={30} color="#F8F8F8" />
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex :1
    }
})