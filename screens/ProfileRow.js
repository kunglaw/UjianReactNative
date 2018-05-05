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
    List,
    ListItem,
} from "native-base"

export default class ProfileRow extends Component{
    render()
    {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <List style={style1.hightlightList}>
                            <ListItem>
                                <Text style={style1.title}>Simon Mignolet</Text>
                                <Text>{'\n'}</Text>
                                <Text style={style1.description}> Lorem Ipsum </Text>
                            </ListItem>
                            <ListItem>
                                <Text style={style1.title}>Simon Mignolet</Text>
                                <Text>{'\n'}</Text>
                                <Text style={style1.description}> Lorem Ipsum </Text>
                            </ListItem>
                            <ListItem>
                                <Text style={style1.title}>Simon Mignolet</Text>
                                <Text>{'\n'}</Text>
                                <Text style={style1.description}> Lorem Ipsum </Text>
                            </ListItem>
                        </List>
                    </Body>
                </CardItem>  
            </Card>
        )
    }
}

const style1 = StyleSheet.create({
    hightlight:{

    },
    hightlightList:{
        width:'100%'
    },
    title:{
        fontSize:14
    },
    description:{
        fontSize:12
    }
})