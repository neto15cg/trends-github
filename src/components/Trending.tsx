import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface Props {
  name: string;
  stars: number;
  onPress: () => void;
}

export default function Trending(props: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
      <View style={styles.titleContainer}>
        <AntDesign name="book" color="#5f5e69" size={18} />
        <Text style={styles.name}>{props.name}</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <AntDesign name="star" color="#5f5e69" size={18} />
        <Text style={styles.star}>{props.stars}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    padding: 10,
    borderBottomWidth: 0.2,
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 16,
    color: '#200dd1',
    marginLeft: 10,
  },
  star: {
    marginLeft: 10,
    color: '#5f5e69',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
