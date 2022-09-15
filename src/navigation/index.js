
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../tabs/Profile.js';
import AllTimes from '../tabs/AllTimes.js';
import SeasonTimes from '../tabs/SeasonTimes.js';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Información General"
        component={Profile}
        options={{
          tabBarLabel: 'Información General',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Todos los tiempos"
        component={AllTimes}
        options={{
          tabBarLabel: 'Todos los tiempos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock-time-three" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tiempos Temp. 22/23"
        component={SeasonTimes}
        options={{
          tabBarLabel: 'Temp. 22/23',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timelapse" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

