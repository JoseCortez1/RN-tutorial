import React from 'react'
import {View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import cars from './cars'
const CarItem = (props)=>{
    return(
        <View style={styles.carContainer}>
          {/* 
            ImaageBackground is a special elemente
            from react-native to rendering images in the background
          */}
          <ImageBackground source={cars[1].image} 
            style={styles.image} />

          <Text style={styles.title}>
            Model S
          </Text>
          <Text style={styles.subtitle}>
            Starting at $69,420
          </Text>

        </View>
    )
}
export default CarItem