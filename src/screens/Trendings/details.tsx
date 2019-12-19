import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from 'store/ducks/repository';

export interface Props {
  navigation?: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function Trendings(props: Props) {
  const [repository, setRepository] = useState({} as any);
  const dispatch = useDispatch();

  const listFavorites = useSelector(
    (state: any) => state.repository.data.favorites,
  );

  console.log(listFavorites);

  useEffect(() => {
    const params = props.navigation && props.navigation.getParam('repository');
    setRepository(params);
  });

  function verifyFavorite() {
    const verify = listFavorites.find(
      (item: any) => item.databaseId === repository.databaseId,
    );

    return verify;
  }
  function handleFavorite() {
    verifyFavorite()
      ? dispatch(removeFavorite(repository))
      : dispatch(addFavorite(repository));
  }

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
          {repository &&
            repository.stargazers &&
            repository.stargazers.totalCount}
        </Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="exclamationcircleo" color="#5f5e69" size={18} />
        <Text style={styles.title}>
          {repository && repository.issues && repository.issues.totalCount}
        </Text>
      </View>
      <View style={styles.subConainer}>
        <AntDesign name="fork" color="#5f5e69" size={18} />
        <Text style={styles.title}>{repository && repository.forkCount}</Text>
      </View>
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
          backgroundColor: verifyFavorite() ? '#000' : '#ccc',
        }}
        onPress={() => handleFavorite()}>
        <AntDesign
          name="heart"
          color={verifyFavorite() ? '#fff' : '#5f5e69'}
          size={18}
        />
        <Text
          style={{
            ...styles.textButton,
            color: verifyFavorite() ? '#fff' : '#5f5e69',
          }}>
          {`${verifyFavorite() ? 'REMOVER' : 'FAVORITAR'}`}
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
