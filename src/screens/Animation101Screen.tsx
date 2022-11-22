import React, {useRef} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  
	const { opacity, top, fadeIn, fadeOut } = useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBos, opacity,transform:[{translateY: top}]}} />
	  <Button title='FadeIn' onPress={ fadeIn }/>
	  <Button title='FadeOut' onPress={ fadeOut }/>
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
