import React from 'react'
import {View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import cars from './cars'
import StyledButton from '../StyledButton'
const CarItem = (props)=>{
    return(
        <View style={styles.carContainer}>
          {/* 
            ImaageBackground is a special elemente
            from react-native to rendering images in the background
          */}
          <ImageBackground source={cars[1].image} 
            style={styles.image} />

          <View>
            <Text style={styles.title}>
                Model S
            </Text>
            <Text style={styles.subtitle}>
                Starting at $69,420
            </Text>
          </View>
          <StyledButton 
            type="primary" 
            content="custom order" 
            onPress={()=>
            console.warn("Hello ")
            
          }/>
          <StyledButton 
            type="secondary" 
            content="existing inventory" 
            onPress={()=>
              console.warn("Hi madafuckers")
            }
          />
        </View>
    )
}
export default CarItem