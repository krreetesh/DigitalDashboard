import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from 'react-native-pie'
 
export default class PieChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={60}
          innerRadius={30}
          series={[10, 20, 30, 40]}
          colors={['red', 'lime', 'blue', 'gray']} />
          <Text>Portfolio Budget Chart</Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'space-around',
  },
})