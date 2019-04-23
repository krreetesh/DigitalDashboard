import React from 'react';
import { Text, View, Image, Button } from 'react-native';
export class ProjectScreen extends React.Component {

  static navigationOptions = (props) => ({
    title:'Projects',
    tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_project.png')}/>,
})

    render() {
      console.log("print=",this.props.navigation)
      console.log("props=",this.props)
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Project!</Text>
          
          <Button title="Learn More" onPress={() => this.props.navigation.navigate('portfolio')}/>
        </View>
      );
    }
}