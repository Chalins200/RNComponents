
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { CustomeSectionListScreen } from '../screens/CustomeSectionListScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer
            theme={ theme }
          >
            <Stack.Navigator
              screenOptions={{
                headerShown:false,
                // cardStyle:{
                //   backgroundColor:'white'
                // }
            }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
              <Stack.Screen name="Animation102Screen" component={Animation102Screen} /> 
              <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
              <Stack.Screen name="AlertScreen" component={AlertScreen} />
              <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
              <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
              <Stack.Screen name="CustomeSectionListScreen" component={CustomeSectionListScreen} />
              <Stack.Screen name="ModalScreen" component={ModalScreen} />
              <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
              <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
              <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </View>
    
    
  );
};
