import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import PortfolioListScreen from './PortfolioListScreen';
import PieChart from './PieChartScreen';

export class DashboardScreen extends React.Component {

  static navigationOptions = (props) => ({
    title:'Dashboard',
    tabBarIcon:({tintColor}) => <Image style={{width:40, height:40, tintColor:tintColor}} source={require('./../res/icon_dashboard.png')}/>,
})

    render() {
      return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
        <View style={{flex:1, paddingTop:10}}>  
        <Text>Portfolio Dashboard!</Text>
        <View style={{flex: 2, flexDirection: 'row', paddingTop:10, justifyContent:'space-around'}}>
          <View style={{width: 120, height: 80, backgroundColor: 'powderblue', justifyContent:'center', alignItems: 'center'}} >
          <Text>Planned Budget Across Portfolios</Text>
          <Text style={{paddingTop:10, color:'green', fontWeight: 'bold', fontSize: 15,}}>26.27 M</Text>
          </View>
          <View style={{width: 120, height: 80, backgroundColor: 'powderblue', justifyContent:'center', alignItems: 'center'}} >
          <Text>Used Budget Across Portfolios</Text>
          <Text style={{paddingTop:10, color:'green', fontWeight: 'bold', fontSize: 15,}}>14.14 M</Text>
          </View>
          <View style={{width: 120, height: 80, backgroundColor: 'powderblue', justifyContent:'center', alignItems: 'center'}} >
          <Text>Used Budget Percentage</Text>
          <Text style={{paddingTop:10, color:'green', fontWeight: 'bold', fontSize: 15,}}>54%</Text>
          </View>
      </View>
      <View style={{flex: 3, flexDirection: 'row', justifyContent:'flex-start'}}>
          <View style={{width: 120, height: 80, backgroundColor: 'powderblue', justifyContent:'center', alignItems: 'center', marginLeft:2, marginTop:1}} >
          <Text>Actual Cost Across Portfolios</Text>
          <Text style={{paddingTop:10, color:'green', fontWeight: 'bold', fontSize: 15,}}>9.95 M</Text>
          </View>
          {this.renderDonutPieChart()}
      </View>
      <View style={{paddingBottom:20}}>{this.renderTableView()}</View>
      </View>
      );
    }

    renderTableView() {
        return (
          <PortfolioListScreen navigation={this.props.navigation}/>
        )
    }

    renderDonutPieChart() {
      return (
        <PieChart/>
      )
  }

  }
