
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../tabs/Profile.jsx';
import AllTimes from '../tabs/AllTimes.jsx';
import AllTimesByCompetition from '../tabs/AllTimesByCompetition.jsx';
import SeasonTimes from '../tabs/SeasonTimes.jsx';

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
                    tabBarLabel: 'Info. General',
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
                name="Competiciones"
                component={AllTimesByCompetition}
                options={{
                    tabBarLabel: 'Competiciones',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pool" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tiempos Temp. 23/24"
                component={SeasonTimes}
                options={{
                    tabBarLabel: 'Temp. 23/24',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="timelapse" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

