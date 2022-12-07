import React, {useContext, useRef} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';
import { color } from 'react-native-reanimated';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  
	const { opacity, top, fadeIn, fadeOut } = useAnimation()
  const { theme: { colors } } = useContext( ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={{
          ...styles.purpleBos,
          backgroundColor: colors.primary,
          marginBottom: 20, 
          opacity,
          transform:[{
            translateY: top
          }]
        }} 
        
        />
	  
      <Button 
        title='FadeIn' 
        onPress={ () => {
          fadeIn();
        } }
        color={ colors.primary}/>

      <Button 
        title='FadeOut' 
        onPress={ fadeOut }
        color={ colors.primary }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBos: {    
    width: 150,
    height: 150,
  },
});
