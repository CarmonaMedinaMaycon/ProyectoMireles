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

const data = [
    { id: '1', image: 'https://picsum.photos/200/300' },
    { id: '2', image: 'https://picsum.photos/200/300' },
    { id: '3', image: 'https://picsum.photos/200/300' },
    { id: '4', image: 'https://picsum.photos/200/300' },
    { id: '5', image: 'https://picsum.photos/200/300' },
    { id: '6', image: 'https://picsum.photos/200/300' },
    { id: '7', image: 'https://picsum.photos/200/300' },
    { id: '8', image: 'https://picsum.photos/200/300' },
    { id: '10', image: 'https://picsum.photos/200/300' },
    { id: '11', image: 'https://picsum.photos/200/300' },
    { id: '12', image: 'https://picsum.photos/200/300' },
    { id: '13', image: 'https://picsum.photos/200/300' },
    { id: '14', image: 'https://picsum.photos/200/300' },
    { id: '15', image: 'https://picsum.photos/200/300' },
    { id: '16', image: 'https://picsum.photos/200/300' },
    { id: '17', image: 'https://picsum.photos/200/300' },
    { id: '18', image: 'https://picsum.photos/200/300' },
  ];

  const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns;


export default function AvatarProfile(props) {
    const {url ,post, followers, following} = props
  return (
    <View style={styles.container}>
    {/* <View style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Avatar
          size={72}
          rounded
          source={{uri: url}}
          containerStyle={{ backgroundColor: 'blue' }}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{post}</Text>
            <Text>Post</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{followers}</Text>
            <Text>Members</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{following}</Text>
            <Text>Admins</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>OTD Everyday</Text>
        <Text>Fit check! 👔</Text>
        <Text>You know we'll hype you up.</Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Button type="outline">
          <Text style={{color: 'grey'}}>Member</Text>
          <Icon name="keyboard-arrow-down" />
        </Button>
      </View>
    </View> */}
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    grid: {
      alignItems: 'center',
    },
    gridImage: {
      width: imageSize,
      height: imageSize,
      margin: 1,
    },
  });
  