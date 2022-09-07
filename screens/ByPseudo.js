import { StyleSheet, Text, View, TouchableOpacity, Image,ActivityIndicator} from 'react-native'
import { TextInput } from 'react-native-paper'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Badge } from 'react-native-paper'

const contactData = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Andranomena',
      image: require('../assets/avatars/avatar9.png')
    },
    {
      id: 2,
      name: 'John Wick',
      city: 'Analakely',
      image: require('../assets/avatars/avatar10.png')
    },
  ]

const ByPseudo = ({navigation}) => {

    const [pseudo ,setPseudo] = useState('');
    const [show, setShow] = useState(false);


    const header = () => {
        return (
          <View style={styles.header}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Ionicons name='chevron-back' size={30} color='#000' />
              </TouchableOpacity> 
            </View>
            <View>
              <Text style={{fontFamily: 'montserrat', fontSize: 24}}>
                Contact
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons name='notifications' size={30} color='#400590' />
                  <Badge style={{top: -4, right: -4, position: 'absolute'}}>1</Badge>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    

  return (
    <View style={styles.container}>
        {header()}
      <View style={{marginTop: 30}}>
            <View>
                <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Ajout contact</Text>
                {/* <ActivityIndicator  color='#000'/> */}
            </View>
            <View style={{marginTop: 20}}>
                <TextInput
                label="Pseudo"
                value={pseudo}
                onChangeText={pseudo => setPseudo(pseudo)}
                style={{backgroundColor: 'transparent'}}
                placeholder='Entrez le pseudo à rechercher'
                theme={{
                colors: {
                        text: 'black', primary: '#59079E',
                        underlineColor: 'transparent', background: '#003489'
                    }
                }}
                />
            </View>
        </View>

        <View style={{marginTop: 20, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <TouchableOpacity
                onPress={()=>{setTimeout(() => {
                  setShow(true)
                },2000)}}
                style={{height: 40, width: 120, backgroundColor: '#400590', borderRadius: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Ionicons name='search' size={24} color='#F8F8F8' />
                    <Text style={{color: '#fff'}}>Rechercher</Text>
                </View>
            </TouchableOpacity>
        </View>
        {
          (pseudo != '' && show == false) && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator  color='#000' size='large'/>
          </View>
          )
        }
        {
            show && (
                <View style={{marginTop: 30}}>
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
        
    </View>
  )
}

export default ByPseudo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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