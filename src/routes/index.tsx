import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Trenddings from 'screens/Trendings';
import Favorites from 'screens/Favorites';
import Details from 'screens/Trendings/details';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainStack = createStackNavigator({
  Trenddings: {
    screen: Trenddings,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
});

const FavoriteStack = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      header: null,
    },
  },
});

const BottomTab = createBottomTabNavigator(
  {
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        title: 'Trendings',
        tabBarIcon: <Ionicons name="ios-trending-up" size={22} color="#fff" />,
      },
    },
    FavoriteStack: {
      screen: FavoriteStack,
      navigationOptions: {
        title: 'Favorites',
        tabBarIcon: <MaterialIcons name="favorite" size={22} color="#fff" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ccc',
      activeBackgroundColor: 'black',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: '#ccc',
      },
    },
  },
);

const AppSwitch = createSwitchNavigator(
  {
    BottomTab,
  },
  {
    initialRouteName: 'BottomTab',
  },
);
export default createAppContainer(AppSwitch);
