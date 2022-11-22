import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';


interface Props{
	isOn: boolean;
	onChange: (value:boolean) => void;
}
export const CustomSwitch = ({ isOn, onChange }: Props) => {
	
	const [isEnable, setIsEnable] = useState(isOn);
	const toggleSwitch = () => {
		setIsEnable(!isEnable);
		onChange(!isEnable);
	};

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856d6'}}
      thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnable}
    />
  );
};
