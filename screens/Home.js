import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Badge } from 'react-native-paper';
import { received, sendAgainData, cloudData, nearData } from '../constants/homeData';

import { FloatingAction } from 'react-native-floating-action';

import LottieView from 'lottie-react-native';

const actions = [
  {
    text: "Dans mes contacts",
    icon: <Ionicons name='person' size={20} color="#F8F8F8" />,
    name: "WithAccount",
    position: 2
  },
  {
    text: "Autres",
    icon: <Ionicons name='ellipsis-horizontal' size={20} color="#F8F8F8" />,
    name: "WithoutAccount",
    position: 1
  },
]

const Home = ({navigation}) => {

  const [receivedData, setReceivedData] = useState(received);
  const [sendAgain, setSendAgain] = useState(sendAgainData);
  const [cloud, setCloud] = useState(cloudData);
  const [near, setNear] = useState(nearData);

  useEffect(() => {
    console.log(sendAgain)
  }, [])

  const header = () => {
    return (
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
          >
            <Image
              source={require('../assets/avatars/avatar1.png')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontFamily: 'montserrat', fontSize: 24}}>
            Home
          </Text>
        </View>
        <View>
          <View style={{height: 80, width: 80}}>
           <LottieView source={require('../assets/lottie/notification.json')} autoPlay loop />
          </View>
          {/* <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name='notifications' size={30} color='#400590' />
              <Badge style={{top: -4, right: -4, position: 'absolute'}}>1</Badge>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    )
  }

  const receivedSection = () => {
    return (
      <View style={styles.receivedSection}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Fichiers reçus</Text>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Voir tout</Text>
              <MaterialIcons name='chevron-right' size={24} color='#400590' />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          {
            receivedData.map((item, index) => (
              <View style={styles.eachReceive} key={index}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={item.image}
                    style={{height: 60, width: 60}}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text>{item.name}</Text>
                    <Text style={{fontSize: 12, color: '#808080'}}>{item.size}</Text>
                    <Text style={{fontSize: 12, color: '#808080'}}>{item.sendBy}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity>
                    <View style={{height: 32, width: 32, borderRadius: 10, backgroundColor: '#9A7EBF', justifyContent: 'center', alignItems: 'center'}}>
                      <MaterialIcons name='file-download' size={16} color='#F8F8F8' />
                    </View>
                  </TouchableOpacity>
                </View>
                
              </View>
            ))
          }
        </View>
      </View>
    )
  }

  const sendAgainSection = () => {

    const renderItem = ({item}) => {
      return(
          <TouchableOpacity style={{marginRight: 10, borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 30, }}>
            <Image 
              source={item.image}
              style={{height: 60, width: 60, borderRadius: 30}}
            />
          </TouchableOpacity>
      )
    }

    return(
      <View style={styles.receivedSection}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Envoyer encore</Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            data={sendAgain}
            keyExtractor={item => `${item.id}`} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      </View>
    )
  }

  const cloudSection = () => {

    const renderItem = ({item}) => {
      return(
        <TouchableOpacity style={{marginRight: 20}}>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{height: 60, width: 60}}
            />
            <Text style={{fontFamily: 'montserrat'}}>{item.name}</Text>
          </View>

        </TouchableOpacity>
      )
    }

    return(
      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Consultez vos fichiers</Text>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Voir tout</Text>
              <MaterialIcons name='chevron-right' size={24} color='#400590' />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={cloud}
            keyExtractor={item => `${item.id}`} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      </View>
    )
  }

  const nearSection = () =>{
    return(
      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Vous pourriez connaître...</Text>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Voir tout</Text>
              <MaterialIcons name='chevron-right' size={24} color='#400590' />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          {
            near.map(item => (
              <View style={styles.eachReceive} key={item.id}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={item.image}
                    style={{height: 60, width: 60, borderRadius: 30}}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text>{item.name}</Text>
                    <Text style={{fontSize: 12, color: '#808080'}}>{item.city}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name='ios-location-sharp'/>
                      <Text style={{fontSize: 12, color: '#808080'}}>{item.distance}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity>
                  <View style={{height: 32, width: 32, borderRadius: 10, backgroundColor: '#9A7EBF', justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome5 name='user-plus' size={16} color='#F8F8F8' />
                  </View>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </View>
    )
  }

  return (
  
    <View style={styles.container}>
      {header()}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
      {receivedSection()}
      {sendAgainSection()}
      {cloudSection()}
      {nearSection()}
      </ScrollView>
      <FloatingAction
        actions={actions}
        color='#400590'
        iconWidth={24}
        iconHeight={24}
        onPressItem={(to) => navigation.navigate(to)}
        floatingIcon={<FontAwesome name='send' color='#F8F8F8' size={24} />}
      />
    </View>
  )
}

export default Home

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
  receivedSection: {
    marginTop: 30,
    marginHorizontal: 20
  },
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