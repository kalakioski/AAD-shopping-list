import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// import screen components
import HomeScreen from './home';
import ListScreen from './list';
import GroupScreen from './group';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

export default function App () {
  return (
      <Tab.Navigator 
      initialRouteName='HomeScreen'
      screenOptions={({ route }: {
        route: {
          name: "HomeScreen" | "GroupScreen" | "ListScreen" | "ProfileScreen",
        }
      }) => ({
          tabBarIcon: ({ color, size }: {color: string, size: number}) => {
            let iconName: "home" | "team" | "shoppingcart" | "user";

            if (route.name === 'HomeScreen') {
              iconName = 'home';
            } else if (route.name === 'GroupScreen') {
              iconName = 'team' ;
            } else if (route.name === 'ListScreen') {
              iconName = 'shoppingcart';
            } else if (route.name === 'ProfileScreen') {
              iconName = 'user';
            }
            // You can return any component that you like here!
            return <AntDesign name={iconName!} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center'
        })}
      >
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home'} }/>
          <Tab.Screen name="GroupScreen" component={GroupScreen} options={{ title: 'Groups'}}/>
          <Tab.Screen name="ListScreen" component={ListScreen} options={{ title: 'Lists'}}/>
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile'}}/>
      </Tab.Navigator>
  )
}