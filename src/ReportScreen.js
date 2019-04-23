import React from 'react';
import { Text, View, Image } from 'react-native';
export class ReportScreen extends React.Component {

  static navigationOptions = (props) => ({
    title:'Reports',
    tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_report.png')}/>,
})

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Report!</Text>
        </View>
      );
    }
}