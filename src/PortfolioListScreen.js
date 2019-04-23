import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StyleSheet, Button} from 'react-native'

export default class PortfolioListScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            friends:[
                {id:'0', name:'IT Laung Haul', health:'green', budget:'3.54 M', photoFilename:"pic1.jpg"},
                {id:'1', name:'Product Engineering', health:'green', budget:'5.10 M', photoFilename:"pic2.jpg"},
                {id:'2', name:'Insurance Biz', health:'yellow', budget:'4.85 M', photoFilename:"pic3.jpg"},
                {id:'3', name:'Facilities Upgrade', health:'red', budget:'2.75 M', photoFilename:"pic4.jpg"},
                {id:'4', name:'Operational Excellence', health:'red', budget:'4.50 M', photoFilename:"pic4.jpg"},
                {id:'5', name:'Human Capital', health:'green', budget:'1.52 M', photoFilename:"pic1.jpg"},
                {id:'6', name:'Strategic Initiative', health:'green', budget:'2.50 M', photoFilename:"pic2.jpg"},
            ]
        }
    }

    render(){
        console.log("print=",this.props.navigation)
        console.log("props=",this.props)
        return (
            <View style={{height:240}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding:5, height:30, backgroundColor:'steelblue' }}>
                <Text>{'Portfolio Name'}</Text>
                <Text>{'Health'}</Text>
                <Text>{'Budget'}</Text>
            </View>
            <FlatList
                data={this.state.friends}
                keyExtractor={item => item.id}
                renderItem={item => (
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('portfolio')} //this.props.navigation.navigate('portfolio')} //, {imageFilename:item.item.photoFilename}
                        style={{flex:1, width:'100%', height:40, flexDirection:'row', justifyContent: 'space-between', paddingHorizontal:20, borderBottomWidth:1, borderColor:'#0002'}}>
                        {/* <Image style={{alignSelf:'center', resizeMode:'cover', width:50, height:50, borderRadius:25}} source={getAssetByFilename(item.item.photoFilename)}/>  */}
                        <Text style={{alignSelf:'center', width:150}}>{item.item.name}</Text>
                        <View style={[styles.innerCircle, {backgroundColor: item.item.health}]} />
                        <Text style={{alignSelf:'center', marginRight:20}}>{item.item.budget}</Text>
                    </TouchableOpacity>
                )}
            />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
  }
});