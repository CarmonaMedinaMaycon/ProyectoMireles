import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Avatar, Button, Icon } from '@rneui/themed';
import AvatarProfile from './src/components/AvatarProfile';
import FormLogin from './src/components/FormLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <AvatarProfile
      url={'https://picsum.photos/200/300'}
      post={60}
      followers={130}
      following={1024}
    />
    <FormLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    marginTop: 50,
  },
});
