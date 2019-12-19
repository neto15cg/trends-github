import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Trending from 'components/Trending';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import {useSelector} from 'react-redux';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function Favorites(props: Props) {
  const listFavorites = useSelector(
    (state: any) => state.repository.data.favorites,
  );

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ccc',
          padding: 15,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Favoritos: {listFavorites.length}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {listFavorites && listFavorites
          ? listFavorites.map((item: any) => {
              return (
                <Trending
                  key={item.databaseId}
                  name={item.nameWithOwner}
                  stars={item.stargazers.totalCount}
                  onPress={() => {
                    props.navigation.navigate('Details', {
                      repository: item,
                    });
                  }}
                />
              );
            })
          : undefined}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingBottom: 25,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
