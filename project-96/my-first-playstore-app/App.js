import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import Formal_LetterScreen from "./screens/formal_letterScreen";
import Informal_LetterScreen from "./screens/informal_letterScreen";
import Writing_SkillScreen from "./screens/writing_skillScreen";
import BadNewsScreen from './screens/badnews';
import LoveScreen from "./screens/love_letter";
 import SantaScreen from "./screens/santa_letter";
 import FriendScreen from "./screens/friendship";
 import InvitationScreen from "./screens/invitation";
 import BirthScreen from "./screens/birthday_letter";
 import BuisnessScreen from "./screens/buisness_letter";
 import ChristmasScreen from "./screens/christmas";
 import ComplaintScreen from "./screens/complaint";
 import CreativeScreen from "./screens/creativewriting";
 import DiaryScreen from "./screens/diar";
 import EnquiryScreen from "./screens/enquiry";
 import FormalScreen from "./screens/formal_letter";
 import ApplicationScreen from "./screens/job";
 import NewsScreen from "./screens/journalistic";
 import LeavesScreen from "./screens/leaving";
 import ParaScreen from "./screens/paragraph";
 import ResearchScreen from "./screens/science";
 import SpeeScreen from "./screens/speech";
 import TechScreen from "./screens/technique";

const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Informal letter" component={Informal_LetterScreen} />
        <Stack.Screen name="formal letter" component={Formal_LetterScreen} />
        <Stack.Screen name="writing skills" component={Writing_SkillScreen} />
        <Stack.Screen name="badnews" component={BadNewsScreen} />
        <Stack.Screen name="birthday_letter" component={BirthScreen}/>
        <Stack.Screen name="love_letter" component={LoveScreen}/>
        <Stack.Screen name="santaletter" component={SantaScreen}/>
        <Stack.Screen name="friendship" component={FriendScreen}/>
        <Stack.Screen name="welcome" component={InvitationScreen}/>
        <Stack.Screen name="buisness" component={BuisnessScreen}/>
        <Stack.Screen name="christmas_format" component={ChristmasScreen}/>
        <Stack.Screen name="complaint" component={ComplaintScreen}/>
        <Stack.Screen name="creativewriting" component={CreativeScreen}/>
        <Stack.Screen name="dar" component={DiaryScreen}/>
        <Stack.Screen name="enquir" component={EnquiryScreen}/>
        <Stack.Screen name="formal_letter" component={FormalScreen}/>
        <Stack.Screen name="job" component={ApplicationScreen}/>
        <Stack.Screen name="journalistic" component={NewsScreen}/>
        <Stack.Screen name="leaving" component={LeavesScreen}/>
        <Stack.Screen name="paragraph" component={ParaScreen}/>
        <Stack.Screen name="res" component={ResearchScreen}/>
        <Stack.Screen name="speech" component={SpeeScreen}/>
        <Stack.Screen name="technique" component={TechScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;