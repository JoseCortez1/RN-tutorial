import React from 'react' 
import { View, Text, Pressable } from 'react-native' 
import styles from './styles' 

const StyledButton = (props)=>{
  /**
   * Getting props like in normal react
   */
  const { type, content, onPress } = props
  const blackColor = '#323232'
  const whiteColor = '#F2F2F2'
  const  backgroundColor = type == 'primary' ? blackColor : whiteColor
  const color = type == 'primary' ? whiteColor : blackColor

  return(
    <View style={styles.container}>
      <Pressable 
        style={
          /**
           * To add diferent style in styles just need
           * create an array for adding the object of style 
          */
           
          [
            styles.button, 
            {
              backgroundColor
            }]}
        onPress={()=> onPress()}
      >
          <Text style={
            [styles.text,
            {
              color
            }]}>
              {content}
          </Text>

      </Pressable>
    </View>
  )
}
export default StyledButton