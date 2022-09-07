import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Badge } from 'react-native-paper'
import React from 'react'
import { FloatingAction } from "react-native-floating-action";
import LottieView from 'lottie-react-native';

const Contact = ({navigation}) => {

  const actions = [
    {
      text: "Par localisation",
      icon: <Ionicons name='location-sharp' size={20} color="#F8F8F8" />,
      name: "ByLocation",
      position: 2
    },
    {
      text: "Par pseudo",
      icon: <Ionicons name='person-add' size={20} color="#F8F8F8" />,
      name: "ByPseudo",
      position: 1
    },
  ]

  const contactData = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Andohoranofotsy',
      image: require('../assets/avatars/avatar9.png')
    },
    {
      id: 2,
      name: 'Marie Jane',
      city: 'Analakely',
      image: require('../assets/avatars/avatar10.png')
    },
    {
      id: 3,
      name: 'Price',
      city: 'Tsimbazaza',
      image: require('../assets/avatars/avatar11.png')
    },
    {
      id: 4,
      name: 'Soap Jones',
      city: 'Ambanidia',
      image: require('../assets/avatars/avatar12.png')
    },
  ]

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
            Contact
          </Text>
        </View>
        <View style={{height: 80, width: 80}}>
           <LottieView source={require('../assets/lottie/notification.json')} autoPlay loop />
          </View>
      </View>
    )
  }

  const contactSection = () => {
    return(
      <View style={{marginTop: 20}}>
        {
          contactData.map(contact => (
            <View key={contact.id} style={styles.eachReceive}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{borderRadius: 30, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <Image 
                    source={contact.image}
                    style={{
                      height: 60, 
                      width: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text>{contact.name}</Text>
                  <Text style={{fontSize: 12, color: '#808080'}}>{contact.city}</Text>
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

  return (
      <View style={styles.container}>
        {header()}
        <View style={{marginTop: 30}}>
          <View style={{marginHorizontal: 20}}>
            <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Contact</Text>
          </View>
        </View>
        {contactSection()}
        <FloatingAction
          actions={actions}
          color='#400590'
          iconWidth={24}
          iconHeight={24}
          onPressItem={(to) => navigation.navigate(to)}
        />
      </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  eachReceive: {
    flexDirection: 'row', 
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#E4E4E4',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})