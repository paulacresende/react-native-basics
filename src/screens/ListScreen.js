import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 24 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 34 },
    { name: 'Friend #5', age: 64 },
    { name: 'Friend #6', age: 23 },
    { name: 'Friend #7', age: 34 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name} - Age: {item.age}</Text>
      }}
    />
  )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;