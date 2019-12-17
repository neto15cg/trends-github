import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Trending from 'components/Trending';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

const mock = [
  {
    name: 'xingshaocheng / architect-awesome',
    stars: 20,
  },
  {
    name: 'dwarvesf / hidden',
    stars: 30,
  },
  {
    name: 'rasbt / python-machine-learning-book-2nd-edition',
    stars: 36,
  },
  {
    name: 'ZHacker13 / ReverseTCPShell',
    stars: 152,
  },
  {
    name: 'A3M4 / YouTube-Report',
    stars: 152,
  },
  {
    name: 'terraform-providers / terraform-provider-azurerm',
    stars: 152,
  },
  {
    name: 'Entromorgan / Autoticket',
    stars: 152,
  },
  {
    name: 'slackhq / nebula',
    stars: 152,
  },
];

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function screens(props: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mock.map((item: any, index: number) => {
        return (
          <Trending
            key={index}
            name={item.name}
            stars={item.stars}
            onPress={() => {
              props.navigation.navigate('Details', {repository: item});
            }}></Trending>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingBottom: 25,
  },
});
