import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = useStyles();
export const RequiredText = (Props: any) => {
  return (
    // <View style={styles.container}>
    <Text style={styles.text}>This is required.</Text>
    // </View>
  );
};

function useStyles() {
  return StyleSheet.create({
    container: {
      //   paddingLeft: 50,
      //   paddingTop: 30,
      //   paddingBottom: 20,
      //   alignSelf: 'baseline',
    },
    text: {
      width: '100%',
      alignSelf: 'baseline',
      color: '#4285f4', //#D8000C'
      fontSize: 17,
    },
  });
}
