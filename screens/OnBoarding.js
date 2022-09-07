import { StyleSheet, Text, View,FlatList, Animated, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import Paginator from '../components/Paginator';
import {dataCarousel} from '../constants/dataCarousel'

import LottieView from 'lottie-react-native';


const OnBoarding = ({navigation}) => {

    const [data, setData] = useState([]);
    const {width, height} = useWindowDimensions();

    const scrollX = useRef(new Animated.Value(0)).current;

    const slidesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;


    useEffect (() => {
        setData(dataCarousel);
    })

    const renderCarousel = ({item}) => {
        return(
            <View style={[styles.container, {width}]}>
                    <LottieView source={item.image} autoPlay loop style={{marginBottom: 100}} />
                    <View style={{flex: 1}}></View>
                {/* <Image
                    source={item.image} style={[styles.image, {width}]}
                    resizeMode='contain'
                /> */}
                <View style={{flex: 0.3}}>
                    <Text style={{fontSize: 24, fontFamily: 'montserrat'}}>{item.text1}</Text>
                    <Text style={{fontSize: 28, color: '#400590'}}>{item.text2}</Text>
                </View>
                
                {item.button && (
                    <View style={{flex: 0.2}}>
                        <TouchableOpacity 
                            onPress={() => navigation.replace('Login')}
                            style={{height: 40, width: 160, backgroundColor: 'rgba(64,5,144,1)', height: 50, borderRadius: 30}}>
                                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                    <Text style={{color: '#fff'}}>GET STARTED</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View style={{flex: 3}}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCarousel}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                    useNativeDriver: false
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
        </View>
      <Paginator data={data} scrollX={scrollX} />
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.8,
        justifyContent: 'center'
    }
})