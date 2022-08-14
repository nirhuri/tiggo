import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Colors';

const styles = useStyles();
export const ButtonPrim = (Props: any) => {
  {
    /* add adisable style diffrent if the  TouchableOpacity is disabled*/
  }
  return (
    <TouchableOpacity
      style={[styles.button]}
      disabled={Props.disabled}
      onPress={Props.onPress}>
      <Text style={[styles.buttonTitle, , Props.disabled && {color: '#ccc'}]}>
        {Props.text}
      </Text>
    </TouchableOpacity>
  );
};

function useStyles() {
  return StyleSheet.create({
    button: {
      //backgroundColor: COLORS.Primary,

      padding: 10,
      margin: 10,
      marginTop: 20,
      // borderRadius: 8,
      // borderWidth: 1,
      // borderColor: COLORS.Primary,
    },
    buttonTitle: {
      color: COLORS.Primary,
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 22,
    },
  });
}
