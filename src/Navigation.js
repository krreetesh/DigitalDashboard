import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform} from 'react-native'

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import LoginScreen from './LoginScreen'
import SettingScreen from './SettingScreen'
import PortfolioDetailScreen from './PortfolioDetailScreen'
import { ProjectScreen } from './ProjectScreen';
import { ReportScreen } from './ReportScreen';
import { DashboardScreen } from './DashboardScreen';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

//Tab
const Tab = TabNavigator({
    dashboard:{screen:DashboardScreen},
    projects:{screen:ProjectScreen},
    reports:{screen:ReportScreen}
},{
    tabBarOptions:{
        activeTintColor:'steelblue',
        style:{backgroundColor:Platform.select({ios:'white', android:'steelblue'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'#fff'})},
        indicatorStyle:{backgroundColor:'#fff'},
    },
})

const TabNavigationOptions = (props) => ({
    title:'Digital Dashboard',
    headerStyle:{backgroundColor:'steelblue', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
    headerLeft:<DrawerOpenButton {...props} />
})

const StackNavigationOptions = (props) => ({
    headerStyle:{backgroundColor:'steelblue'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    headerBackTitle:null,
})

export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('./../res/icon_menu.png')}/>
    </TouchableOpacity>
)

//Stack
const Stack = StackNavigator({
    root:{screen:Tab, navigationOptions:TabNavigationOptions},
    portfolio:{screen:PortfolioDetailScreen},
},{
    navigationOptions:StackNavigationOptions,
    transitionConfig:getSlideFromRightTransition
})

const Stack_Setting = StackNavigator({
    root:{screen:SettingScreen}
},{
    navigationOptions:StackNavigationOptions
})

//Drawer
const Drawer = DrawerNavigator({
    main:{screen:Stack},
    setting:{screen:Stack_Setting},
},{
    navigationOptions:{
        drawerLockMode:'locked-closed',
    },
    backBehavior:'none'
})

//Modal Stack (root)
const ModalStack = StackNavigator({
    logout:{screen:LoginScreen},
    login:{screen:Drawer},
},{
    mode:'modal',
    headerMode:'none'
})

export default class Navigation extends React.Component{
    render(){
        return([
            <StatusBar key='statusbar' barStyle="light-content"/>,
            <ModalStack key='navigation'/>,
        ])
    }
}
