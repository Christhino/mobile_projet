import { StyleSheet, Text, View, Dimensions, Animated, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import * as Location from 'expo-location';
import MapView, {Marker, Circle} from 'react-native-maps';
import { markers } from '../constants/mapData';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { getDistance } from 'geolib';

const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const mapStyle= [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]

const state = {
    region: {
        latitude: -18.908666458431014,
        longitude: 47.52282130071091,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 
    },
    coordinate: {
        latitude: -18.908666458431014,
        longitude: 47.52282130071091,
    }
}

const ByLocation = () => {

    const [location, setLocation] = useState(null);
    // const [region, setRegion] = useState(regionData);
    const [latitude, setLatitude] = useState(null);
    const [markersData, setMarkersData] = useState(markers)
    const [longitude, setLongitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [radius, setRadius] = useState('500')
    const [inputRadius, setInputRadius] = useState(radius);
    const [markersTaken, setMarkersTaken] = useState([]);

    const _map = useRef(null);
    const _scrollView = useRef(null);

    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    const distance = (start, end) => {
        let dis = getDistance(
            start,end
        );
        return dis;
    }

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        })();
        markers.map(marker => (
            marker.distance = distance(state.region, marker.coordinate)
          ));
          console.log(markers)
        //   console.log('RADIUS:'+radius);
        //   console.log('INPUT:'+inputRadius);
    
          let markersTaken = markers.filter(function(el) {
            return el.distance < radius
          });
          setMarkersTaken(markersTaken);
    
          console.log(markersTaken);
    
          mapAnimation.addListener(({value}) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3);
            if(index >= markersTaken.length){ //state.markers
              index = markersTaken.length - 1; //state.markers
            }
            if(index <= 0){
              index = 0;
            }
    
            clearTimeout(regionTimeout)
    
            const regionTimeout = setTimeout(() => {
                if(mapIndex !== index){
                  mapIndex = index;
                  const {coordinate} = markersTaken[index] //state.markers
                  _map.current.animateToRegion(
                    {
                      ...coordinate,
                      latitudeDelta: state.region.latitudeDelta,
                      longitudeDelta: state.region.longitudeDelta
                    },
                    350
                  )
                }
              }, 10)
            })
    }, [radius, inputRadius]);

    const interpolations = markersData.map((marker, index) => { //state.markers
        const inputRange = [
          (index -1) * CARD_WIDTH,
          index * CARD_WIDTH,
          ((index+1) * CARD_WIDTH),
        ];
  
        const scale = mapAnimation.interpolate({
          inputRange,
          outputRange: [1, 1.5, 1],
          extrapolate: 'clamp'
        })
        return {scale};
    })

    const onMarkerPress = (mapEventData) => {
      const markerID = mapEventData._targetInst.return.key;
      // const markerID = mapEventData._targetInst.return.index;
      let x= (markerID * CARD_WIDTH) + (markerID * 20);
      
      _scrollView.current.scrollTo({x: x, y: 0, animated: true})
    }

    const updateRadius = () => {
        setRadius(inputRadius)
      }

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    // const initialRegion = {
    //     localisation: {
    //         latitude: location.coords.latitude,
    //         longitude: location.coords.longitude,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //     }
    // }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: -18.908666458431014,
            longitude: 47.52282130071091,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        ref={_map}
        // customMapStyle={mapStyle}
      >
          <Circle center={state.region} radius={parseInt(radius)} fillColor='rgba(132,193,255,0.3)' strokeColor='#B5B5B5' />
          <Marker
            coordinate={{
                // -18.908666458431014, 47.52282130071091
                latitude: -18.908666458431014,
                longitude: 47.52282130071091,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            title='Here'
            description='You are here'
            />
            {markersTaken.map((marker, index) => {
                const scaleStyle = {
                  transform: [
                    {
                      scale: interpolations[index].scale,
                    },
                  ],
                };
                  return(
                    <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                      <Animated.View style={[styles.markerWrap]}>
                        <Animated.Image
                          source={require('../assets/icons/location-man.png')}
                          style={[styles.marker, 
                            scaleStyle
                        ]}
                          resizeMode="cover"
                        />
                      </Animated.View>
                    </MapView.Marker>
                  )
              })}
      </MapView>
        <View style={styles.searchBox}>
              <TextInput
                keyboardType='numeric'
                placeholder='Search here'
                placeholderTextColor='#000'
                autoCapitalize='none'   
                style={{flex: 1, padding: 0}}
                onChangeText={(inputRadius) => setInputRadius(inputRadius)}
                value={inputRadius}
              />
              <TouchableOpacity 
              onPress={() => updateRadius()}
              >
                <Ionicons name='ios-search' size={20} />
              </TouchableOpacity>
            </View>
            <Animated.ScrollView
              ref={_scrollView}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={1}
              style={styles.scrollView}
              pagingEnabled
              snapToInterval={CARD_WIDTH + 20}
              snapToAlignment= 'center'
              contentContainerStyle= {{
                paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
              }}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation
                    }
                  }
                }
              ],{
                useNativeDriver: true
              })}
            >
              {
                markersTaken.map((marker, index) => {
                    return(
                      <View style={styles.card} key={index}>
                          <View style={{height: 80,backgroundColor:'rgba(0, 0, 0, 0.3)', width: '100%' }}>
                          </View>
                          <View style={{justifyContent:'center', alignItems: 'center', marginTop: -30}}>
                              <View style={{borderWidth: 3, borderColor: '#fff', borderRadius: 30}}>
                                <Image
                                    source={marker.image}
                                    style={{height: 60, width: 60, borderRadius: 30}}
                                />
                              </View>
                              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{marker.name}</Text>
                                  <Text>{marker.city}</Text>
                              </View>
                              <View style={{marginTop: 10}}>
                                  <TouchableOpacity style={{backgroundColor: '#400590', height: 40, width: 140, borderRadius: 30, justifyContent:'center', alignItems: 'center'}}>
                                      <Text style={{color: '#fff'}}>Ajouter au contact</Text>
                                  </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                    )

                })
              }
            </Animated.ScrollView>
    </View>
  )
}

export default ByLocation

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
      },
      map: {
        width: Dimensions.get('window').width,
        height: '100%'
      },
      bubble: {
          flexDirection: 'column',
          alignSelf: 'flex-start',
          backgroundColor: '#fff',
          borderRadius: 6,
          borderColor: '#ccc',
          borderWidth: 0.5,
          padding: 15,
          width: 150,
      },
      name: {
          fontSize: 16,
          marginBottom: 5
      },
      arrow: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderTopColor: '#fff',
          borderWidth: 16,
          alignSelf: 'center',
          marginTop: -32,
      },
      arrowBorder: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderTopColor: '#007a87',
          borderWidth: 16,
          alignSelf: 'center',
          marginTop: -0.5,
      },
      image: {
          width: 120,
          height: 80
      },
      chipsIcon: {
        marginRight: 5
      },
      chipsScrollView: {
        position:'absolute', 
        // top: 90,
        top: Platform.OS === 'ios' ? 90 : 100, 
        paddingHorizontal:10
      },
      chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      searchBox: {
        position:'absolute', 
        marginTop: Platform.OS === 'ios' ? 40 : 40, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      scrollView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10
      },
      card: {
        elevation: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: {x: 2, y: -2},
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: 'hidden'
      },
      cardImage: {
        flex: 3,
        width: '100%',
        height: '100%',
        alignSelf: 'center'
      },
      textContent: {
        flex: 2,
        padding: 10
      },
      cardTitle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      cardDescription: {
        fontSize: 12,
        color: '#444'
      },
      markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
      },
      marker: {
        width: 30,
        height: 30
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
      },
      textSign: {
          fontSize: 14,
          fontWeight: 'bold'
      }
})