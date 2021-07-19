import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Header } from 'react-native-elements'
import styled from 'styled-components';
import { Heading, Page, SummonBackground } from './components';




const  ButtonContainer = styled(View)`
display: flex;
flex-wrap: wrap
flex-direction: row;
justify-content: space-between;
padding: 10px 0px
height: 370px;
`
const SummonButton = styled(TouchableOpacity)<{color?:string}>`
background-color: ${p=> {
return p.color || '#C1E7E3';
} };
display: flex;
flex: 45% 0 0;
border-radius: 10px;
margin: 7px;
height: 150px;
align-items: center;
justify-content: center;
`

const SummonText = styled(Text)`
color: #616771;
font-size: 18px;
margin: 10px;
text-align: center;
`

const BlueScreen: React.FC = () =>{
    return (
    <View>
         <Header statusBarProps={{ barStyle: 'light-content' }}
                        barStyle="light-content" // or directly
                        centerComponent={{ text: '❤❤❤', style: { color: '#fff' } }}
                        backgroundColor="#88AED0"></Header>
  <SummonBackground source={require('../../assets/images/wall2.jpg')} >
        <Page>
            <View>
                <Heading>Triệu hồi chồng yêu</Heading>
            </View>
            <ButtonContainer>
                <SummonButton color ='#FFAEA5'>
                    <SummonText>Bé đói bụng 😢</SummonText>
                </SummonButton>
                <SummonButton  color ='#C6DBDA'>
                    <SummonText>Gọi bé điii  😒</SummonText>
                </SummonButton>
                <SummonButton color ='#B5EAD7'>
                    <SummonText>Nhớ chồng quá !!!!😟 </SummonText>
                </SummonButton>
                <SummonButton color ='#B5EAD7'>
                    <SummonText>Hehe !!!!😈 </SummonText>
                </SummonButton>
            </ButtonContainer>
        </Page>
        </SummonBackground>
    </View>
    )
}
export default BlueScreen

