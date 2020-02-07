import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            pacotes: [],
        };
    }

    _carregarPacotes = async () => {
        await fetch('http://localhost:49352/api/pacote/mobile')
            .then(resposta => resposta.json())
            .then(data => this.setState({ pacotes: data }))
    };

    componentDidMount() {
        this._carregarPacotes();
    }

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: 'black', height: "100%" }}
            >
                <View>
                    {this.state.pacotes.map(element => {
                        return (
                            <View>
                                <Image src={element.image} />
                                <Text>{element.titulo}</Text>
                                <Text>{element.descricao}</Text>
                                <Text>{element.pais}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        )
    }

};