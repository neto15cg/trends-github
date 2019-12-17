import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const mock = {
  name: 'xingshaocheng/architect-awesome',
  stars: 15151,
  issues: 1512,
  forks: 232,
  contributors: 121,
  url: 'https://github.com/xingshaocheng/architect-awesome',
  description: '后端架构师技术图谱',
};

export default function Trendings() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="book" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.name}</Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="star" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.stars}</Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="exclamationcircleo" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.issues}</Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="fork" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.forks}</Text>
      </View>
      <View style={styles.subConainer}>
        <MaterialIcons name="person" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.contributors}</Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="link" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.url}</Text>
      </View>
      <View style={styles.subConainer}>
        <MaterialIcons name="description" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.description}</Text>
      </View>

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: favorite ? '#000' : '#ccc',
        }}
        onPress={() => setFavorite(favorite ? false : true)}>
        <AntDesign
          name="heart"
          color={favorite ? '#fff' : '#5f5e69'}
          size={18}
        />

        <Text
          style={{
            ...styles.textButton,
            color: favorite ? '#fff' : '#5f5e69',
          }}>
          {`${favorite ? 'REMOVER' : 'FAVORITAR'}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: '#5f5e69',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subConainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    minHeight: 80,
    backgroundColor: '#ccc',
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 18,
    marginLeft: 10,
  },
});
