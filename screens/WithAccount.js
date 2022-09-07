import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useCallback} from 'react'
// import { DocumentPicker, ImagePicker } from 'expo';
// import DocumentPicker from 'react-native-document-picker'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dialog, Portal, Paragraph, Provider} from 'react-native-paper'
import axios from 'axios'

import Ionicons from 'react-native-vector-icons/Ionicons'

const userData = [
    {
        id: 1,
        name: 'John Doe',
        city: 'Ambohijatovo',
        image: require('../assets/avatars/avatar7.png')
    },
    {
        id: 2,
        name: 'Jane',
        city: 'Bypass',
        image: require('../assets/avatars/avatar8.png')
    },
    {
        id: 3,
        name: 'Sarah',
        city: 'Anosy',
        image: require('../assets/avatars/avatar9.png')
    },
]

const WithAccount = ({navigation}) => {

    const [image, setImage] = useState(null);
    const [titre, setTitre] = useState('');

    const [selected, setSelected] = useState(null);

    const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

    const onSelect = (item) => {
        setSelected(item)
    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
        //   allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const getMimeType = (ext) => {
        // mime type mapping for few of the sample file types
        switch (ext) {
          case 'pdf': return 'application/pdf';
          case 'jpg': return 'image/jpeg';
          case 'jpeg': return 'image/jpeg';
          case 'png': return 'image/png';
        }
      }

    const onSubmit = async() => {
    if(image){
        console.log(image)
      const fileUri = image;
      let fileName = fileUri.split('/').pop();

      const extArr = /\.(\w+)$/.exec(fileName);
      console.log(fileName);
      console.log(typeof(fileName))
      const type = getMimeType(extArr[1]);
      setImage(null);

      let fd = new FormData();
      fd.append('titre', titre);
      fd.append('message','titre');
      fd.append('fichier[0]', fileName)

      axios.post('http://192.168.43.157:8000/api/file/upload', fd, {
          header: {
              'content-type': 'multipart/form-data'
          }
      }).then(res => {
          console.log(res.data)
      }).catch(err =>{
          console.log(err)
      })

    }
  }

  return (
      <Provider>
        <ScrollView style={styles.container}>
            <View style={{marginTop: 60}}>
                <View style={{marginBottom: 10}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name='chevron-back' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#400590', fontSize: 16, fontWeight: 'bold'}}>Envoi fichier</Text>
                </View>
                <TouchableOpacity
                onPress={()=>pickImage()}
                style={{width: 200, height: 40, backgroundColor: '#400590', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20}}>
                    <Text style={{color: '#fff'}}>Sélectionner un  fichier</Text>
                </TouchableOpacity>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, borderRadius: 10, marginBottom: 10}} />}
                </View>

                <Text style={{color: '#400590', fontWeight: 'bold', marginBottom: 10}}>Choisissez le destinataire</Text>
                <View>
                    {
                        userData.map(item => (
                            <TouchableOpacity style={[
                                styles.eachReceive, {backgroundColor: (selected?.id == item.id) ? '#EBDCFF' : '#fff'}
                                ]} key={item.id} onPress={() => setSelected(item)}>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                    <Image
                                        source={item.image}
                                        style={{height: 60, width: 60, borderRadius: 30}}
                                    />
                                    <View style={{marginLeft: 20}}>
                                        <Text>{item.name}</Text>
                                        <Text style={{fontSize: 12, color: '#808080'}}>{item.city}</Text>
                                    </View>
                                </View>
                                {
                                    selected?.id == item.id && (
                                        <View style={{marginRight: 20}}>
                                            <Ionicons name='checkmark' color='#19C500' size={30} />
                                        </View>
                                    )
                                }
                            </TouchableOpacity>
                            )
                        )
                    }
                </View>
                <TouchableOpacity
                onPress={() => showDialog()}
                style={{width: 160, height: 40, backgroundColor: '#400590', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20, marginBottom: 20, alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{color: '#fff', marginRight: 20}}>Envoyer</Text>
                    <Ionicons name='send' size={24} color='#fff' />
                </TouchableOpacity>
            </View>
            <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Notification</Dialog.Title>
                <Dialog.Content>
                <Paragraph>Votre fichier a bien été envoyé</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{margin: 20}}>
                        <Text style={{fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
            </Portal>
        </ScrollView>
      </Provider>
  )
}

export default WithAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    eachReceive: {
        flexDirection: 'row', 
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#E4E4E4',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    }
})