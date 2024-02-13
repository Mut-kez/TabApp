import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Home, Calc, Profile} from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import IntroScreen from './Views/IntroScreen';
import MainScreen from './Views/MainScreen';


const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  const [isloaded, setIsloaded] = useState(false);
  setTimeout(() => {
    setIsloaded(true);
  }, 2000)
  return (
     <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="wallet" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>WALLET</Text>
            </View>

              )
            }
          }}
          />
          <Tab.Screen 
          name="Calc" 
          component={Calc} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View>
      <StatusBar style="auto" />
      {isloaded ? <MainScreen /> : <IntroScreen />}
      {/* <MainScreen /> */}
    </View>

              )
            }
          }}
          />
          
       </Tab.Navigator>
     </NavigationContainer>
)
}
