import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    top: 50
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;