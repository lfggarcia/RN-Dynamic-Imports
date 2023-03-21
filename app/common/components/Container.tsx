import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

const Container: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={style.wrapper}>
      <SafeAreaView style={style.wrapper}>
        <View style={style.wrapper}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Container;
