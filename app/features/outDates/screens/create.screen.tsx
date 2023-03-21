import React from 'react';
import Container from 'components/Container';
import {FlatList} from 'react-native';
import {HeaderComponent} from '../components/Header';
import {useFilterFriends} from '../hooks/useSelectFriends';
import {FriendColum} from '../components/Friend/Element';

export const CreateOutdateScreen = () => {
  const {data, query, handleInviteFriend, isSelected, onNext} =
    useFilterFriends();
  return (
    <Container>
      <HeaderComponent
        label="Invitados"
        placeholder="Encuentra a tus panas"
        value={query.value}
        onChange={query.onChange}
        onClose={() => {}}
        onNext={onNext}
      />
      <FlatList
        renderItem={({item}) => (
          <FriendColum
            selected={isSelected(item.id)}
            onPress={() => handleInviteFriend(item)}
            {...item}
          />
        )}
        data={data}
      />
    </Container>
  );
};
