import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView,Image,TextInput,SafeAreaView} from 'react-native';
import GalleryCard from './components/GalleryCard.jsx';
import { products } from './assets/data.js';
//Create a Gallery component that will display the current image, its description, and navigation buttons.

export default function App() {
  return (
    <SafeAreaView>
      <GalleryCard products={products}/>
    </SafeAreaView >
  );
}

