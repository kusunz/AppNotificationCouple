import * as React from 'react'
import { Alert, Platform, Text, View } from 'react-native'
import * as Notifications from 'expo-notifications';
import { Button, Header } from 'react-native-elements'
import { Page, SummonBackground } from './components'

async function gettingNotificationToken() {
    const {status} = await Notifications.getPermissionsAsync()
    if(status!= 'granted'){
        const  {status} = await Notifications.requestPermissionsAsync()
        if(status != 'granted'){
            alert('failed to get notification token')
            return
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log({token})
    return token
}

if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#123640',
    });
  }
const SunScreen: React.FC = () =>(
    <View>
        <Header statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            backgroundColor="#88AED0"></Header>
        <SummonBackground source={require('../../assets/images/wall2.jpg')}>
            <Page>
                <Button title="Bam lay ma ban oi" onPress={gettingNotificationToken}>
                </Button>
            </Page>
        </SummonBackground>
    </View>
)
export default SunScreen