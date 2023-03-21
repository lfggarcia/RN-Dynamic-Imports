import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends PropsWithChildren, TouchableOpacityProps {}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};
