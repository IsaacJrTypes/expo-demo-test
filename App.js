//import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView,Image,TextInput } from 'react-native';
//import './global.css';

export default function App() {
  return (
    <ScrollView>
      <View className='h-40 bg-amber-200'> 
      <Text className="text-slate-700 text-center text-xl text-bold pt-20 ">The Place for Doggos</Text>
    </View>
    <Image source={require('./assets/images/dogLogo.png')} />
      <View className='h-40 bg-amber-500'>
        <Text className="text-center text-xl">We take care of all kinds of dogs. Come as you are, Woof! </Text>
        <Text className="text-center text-xl">If you like Peanut Butter, Bones, and Chasing squirrels, This is the kennel club for you!</Text>
        </View>
      <View>
        <TextInput className="border-4 h-10 border-rose-500" value='Enter Name'></TextInput>
        <TextInput className="border-4 h-10 border-rose-500"  value='Enter Comment'></TextInput>
        <Text className="border-4 h-10 bg-blue-500 text-center" >Submit</Text>
        </View>    
    </ScrollView >
  );
}

