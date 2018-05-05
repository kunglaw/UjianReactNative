import React,{Component} from "react"

import {
    Platform,
    StyleSheet,

    Image,
    View
} from 'react-native';

import {
    Container,
    Body,
    Text,
    Content,
    Button,
    Card,
    CardItem,
    Fab,
    Icon
} from "native-base";

import axios from "axios";

import ProfileRow from "./ProfileRow";
//import Test from "./Test";

export default class ProfileList extends Component{
    
    constructor()
    {
        super();
       
        this.state = {
           
            hightlights:[ {title:" Elsa Syarif",description:"Hari ini Elsa Syarif Menghubungi Anda"},
            {title:"Muhammad Aslan ",description:" Sedang Melihat Profile Anda"},
            {title:"Fadil ",description:"Mengirimkan anda pesan"}],
            
            profile:{}
        }
    }
    handleEditProfile()
    {

    }
    get_data()
    {
        axios.get("https://api.backendless.com/C7F83389-DB35-3C3C-FF9D-BBEB7096C300/17F4DD7B-E991-44F2-FFFF-6AFCB7E8F800/data/profiles/61AD29C7-F468-C90F-FFB7-AA4C7FB43100").
        then((result) => {
            this.setState({ profile: result.data})
        });
    }
    componentDidMount(){

        this.get_data()

    }
    render()
    {
        return (
            <Container>
                <Card style={style1.cardProfile}>
                    <CardItem>
                        <Body style={style1.myProfile}>
                            <Image style={style1.photo} source={require('../assets/img/dimas.jpg')} />
                            <Text style={style1.name}> { this.state.profile.name } </Text> 
                            <Text style={style1.profession}> Web Developer { this.state.profile.profession } </Text>
                            <Text style={style1.location}> Bina Nusantara - Jakarta Barat </Text> 
                            <Text> Tangerang </Text>

                            <View style={style1.buttonList}>
                             <Button style={style1.button1} small light><Text> Message </Text></Button>
                             <Button style={style1.button2} small  primary><Text> Connect </Text></Button>
                            </View>

                            <Text style={style1.description}> Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet </Text>
                        </Body>
                    </CardItem>  
                </Card>
                <ProfileRow />
                <Fab onPress={this.handleEditProfile} >
                    <Icon  type="FontAwesome" name="edit" />
                </Fab>
            </Container>
        )
    }
}

const style1 = StyleSheet.create({
    wrapper:{
        alignItems: 'center',
       
    },

    backgroundImage:{
        backgroundColor:"white",  
    },
    cardProfile:{
        height:400
    },
    myProfile:{       
        alignItems:"center"
    },
    photo:{
        height:80,
        width:80
    },
    name:{
        fontSize:20
    },
    profession:{
        fontSize:16
    },
    location:{
        fontSize:16
    },
    buttonList:{
        marginTop:20,
        alignItems: 'center',
       
        flexDirection:"row",
       
    },
    button1:{
        width:120,
        marginRight:20,
    },
    button2:{
        width:120
    },
    description:{
        marginTop:20,
        marginBottom:20
    }

})

/*
    <View style={style1.wrapper}>  
        <View style={style1.backgroundImage}> 
            

        </View>
        <View style={style1.myProfile}>
            
            <Text style={style1.name}> Aries Dimas Yudhistira </Text> 
            <Text style={style1.profession}> Web Developer </Text>
            <Text style={style1.location}> Bina Nusantara - Jakarta Barat </Text> 
        </View> 
    </View>

*/
