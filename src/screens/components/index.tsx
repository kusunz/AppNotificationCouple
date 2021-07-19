import { View, Text } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import styled from "styled-components";


export const Page = styled(View)`
padding: 20px;
`;

export const Heading = styled(Text)`
color: #616771;
font-size: 24px;
font-weight: bold;
text-align: center;
marginTop: 25px;
padding: 50px 5px 5px;
`
export const SummonBackground = styled(BackgroundImage)`
width: auto;
resizeMode: cover;
padding: 0px 1px 50px
marginLeft: 1px;
marginRight: 1px;
height: 100%;
`