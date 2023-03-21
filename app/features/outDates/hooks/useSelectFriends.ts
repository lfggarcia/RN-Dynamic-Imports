import {useCallback, useEffect, useMemo, useState} from 'react';
import {Friends} from '../models/API';
import outdatesNetworking from '../API/firebase';
import debounce from 'lodash.debounce';
import {useNavigation} from '@react-navigation/native';

export interface SelectFriendsData {
  query: {
    value: string;
    onChange: (value: string) => void;
  };
  data: Friends[];
  handleInviteFriend: (friend: Friends) => void;
  onNext: () => void;
  isSelected: (friendID: string) => boolean;
}

export const useFilterFriends = (): SelectFriendsData => {
  const navigation = useNavigation();
  const {findFriends} = outdatesNetworking();
  const [listFriend, setListFriend] = useState<Friends[]>([]);
  const [listFriendFilter, setListFriendFilter] = useState<Friends[]>([]);
  const [friendsSelected, setFriendsSelected] = useState<Friends[]>([]);
  const [query, setQuery] = useState<string>('');

  const onNext = () => {
    navigation.navigate('CreateOutDateInformationScreen', {});
  };

  const handleInviteFriend = (friend: Friends) => {
    const _friendsSelected = [...friendsSelected];
    const hasInvited = friendsSelected.findIndex(({id}) => friend.id === id);
    if (hasInvited >= 0) {
      _friendsSelected.splice(hasInvited, 1);
    } else {
      _friendsSelected.push(friend);
    }
    setFriendsSelected(_friendsSelected);
  };

  const fetchFriends = async () => {
    const results = await findFriends();
    setListFriend(results);
  };

  const filterFriends = useCallback(
    (value: string) => {
      if (listFriend.length === 0) {
        setListFriendFilter([]);
        return;
      }
      const filterList = listFriend.filter(({name}) =>
        name.toLowerCase().includes(value.toLowerCase()),
      );
      setListFriendFilter(filterList);
    },
    [listFriend],
  );

  const debouncedFilter = useCallback(
    debounce((value: string) => {
      filterFriends(value);
    }, 750),
    [filterFriends],
  );

  const handleFilter = useCallback(
    (value: string) => {
      debouncedFilter(value);
    },
    [debouncedFilter],
  );
  const isSelected = (friendID: string) =>
    friendsSelected.filter(({id}) => friendID === id).length > 0;

  useEffect(() => {
    handleFilter(query);
  }, [query, handleFilter]);

  useEffect(() => {
    fetchFriends();
  }, []);

  return {
    query: {
      value: query,
      onChange: (value: string) => setQuery(value),
    },
    data: listFriendFilter,
    handleInviteFriend,
    isSelected,
    onNext,
  };
};
