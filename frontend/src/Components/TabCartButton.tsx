import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TabCartButton = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="md-cart" size={27} color={COLORS.Primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 30,
    borderColor: COLORS.light,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabCartButton;
