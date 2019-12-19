import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

export interface Props {
  navigation?: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function Trendings(props: Props) {
  const [favorite, setFavorite] = useState(false);
  const [repository, setRepository] = useState({} as any);

  useEffect(() => {
    const params = props.navigation && props.navigation.getParam('repository');
    setRepository(params);
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="book" color="#5f5e69" size={18} />
        <Text style={styles.title}>
          {repository && repository.nameWithOwner}
        </Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="star" color="#5f5e69" size={18} />
        <Text style={styles.title}>
          {repository && repository.stargazers.totalCount}
        </Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="exclamationcircleo" color="#5f5e69" size={18} />
        <Text style={styles.title}>
          {repository && repository.issues.totalCount}
        </Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="fork" color="#5f5e69" size={18} />
        <Text style={styles.title}>{repository && repository.forkCount}</Text>
      </View>
      {/* <View style={styles.subConainer}>
        <MaterialIcons name="person" color="#5f5e69" size={18} />
        <Text style={styles.title}>{mock.contributors}</Text>
      </View> */}
      <View style={styles.subConainer}>
        <AntDesign name="link" color="#5f5e69" size={18} />
        <Text style={styles.title}>{repository && repository.url}</Text>
      </View>
      <View style={styles.subConainer}>
        <MaterialIcons name="description" color="#5f5e69" size={18} />
        <Text style={styles.title}>{repository && repository.description}</Text>
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
