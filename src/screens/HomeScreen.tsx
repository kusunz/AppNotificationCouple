import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlueScreen from './BlueScreen';
import SunScreen from './SunScreen';
import { Image } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Blue"
      options={{tabBarIcon: ({focused, color, size})=>(
        <Image
                source={
                    require('../../assets/images/sunflower.png')
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                }}
              />
      ) }}
    component={BlueScreen} />
    <Tab.Screen name="Sun"
    options={{tabBarIcon: ({focused, color, size})=>(
      <Image
              source={
                  require('../../assets/images/sun.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
    ) }}
    component={SunScreen} />
  </Tab.Navigator>
  )
}

export default HomeScreen
