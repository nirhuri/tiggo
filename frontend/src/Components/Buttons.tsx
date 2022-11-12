import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Colors';

export const ButtonPrim = (props: any) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[styles.button]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={[styles.buttonTitle, , props.disabled && styles.button]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

function useStyles() {
  return StyleSheet.create({
    button: {
      color: COLORS.Primary,
      padding: 10,
      margin: 10,
      marginTop: 20,
      textAlign: 'center',
      alignItems: 'center',
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
