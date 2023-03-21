import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './Element.style';
import {Friends} from '../../models/API';

interface FriendColumProps extends Friends {
  onPress: (friend: Friends) => void;
  selected: boolean;
}

export const FriendColum: React.FC<FriendColumProps> = ({
  onPress,
  selected,
  ...props
}) => {
  const handleOnPress = () => {
    onPress(props);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleOnPress}
      style={style.container}>
      <View style={style.infoWrapper}>
        <Image source={{uri: props.image}} style={style.image} />
        <View>
          <Text>{props.name}</Text>
          <Text>{props.name.split('').reverse().join('')}</Text>
        </View>
      </View>
      <View style={[style.rightButton, selected && style.rightButtonSelected]}>
        <Text style={style.rightButtonText}>
          {selected ? 'Invited' : 'Invite'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
