import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';
import { CustomSwitch } from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={stylesScreen.inputSyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={stylesScreen.inputSyle}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>isActive</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesScreen.inputSyle}
              placeholder="Ingrese su telefono"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

            <View style={{height: 100}} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputSyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginVertical: 5
  },
  switchText: {
    fontSize: 25,
  },
});

