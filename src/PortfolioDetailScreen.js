import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
export default class PortfolioDetailScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Title',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      };


    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Portfolio Detail</Text>
        </View>
      );
    }
}