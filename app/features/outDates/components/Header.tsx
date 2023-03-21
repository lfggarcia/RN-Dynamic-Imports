import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './Header.style';
import {HeaderProps} from '../models/components';
import {COLORS} from 'theme/colors';

export const HeaderComponent: React.FC<HeaderProps> = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={props.onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.BASE_GREY}
      />
    </View>
  );
};
