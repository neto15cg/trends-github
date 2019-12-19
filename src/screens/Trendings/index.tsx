import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import Trending from 'components/Trending';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import gpl from 'graphql-tag';
import {Query} from 'react-apollo';

const REPOSITORIES = gpl`
{
  search(query: "is:public", type: REPOSITORY, first: 20) {
    nodes {
      ... on Repository {
        nameWithOwner
        createdAt
        databaseId
        forkCount
        url
        description
        issues {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`;

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function screens(props: Props) {
  return (
    <Query query={REPOSITORIES} variables={{}}>
      {({data, loading}: any) => {
        return loading ? (
          <View style={styles.loading}>
            <ActivityIndicator
              size={'large'}
              color={'#000'}></ActivityIndicator>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.container}>
            {data.search.nodes.map((item: any) => {
              return (
                <Trending
                  key={item.databaseId}
                  name={item.nameWithOwner}
                  stars={item.stargazers.totalCount}
                  onPress={() => {
                    props.navigation.navigate('Details', {repository: item});
                  }}
                />
              );
            })}
          </ScrollView>
        );
      }}
    </Query>
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
