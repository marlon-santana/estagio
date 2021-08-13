import React from  'react';
import { Container, Line } from './styles';
import { Image, Text, StyleSheet } from 'react-native';





export function Menu () {
    return (
    
        <Container>
            <Text>Encontre uma loja</Text>
            <Line />
            <Text>Fale com um vendedor</Text>
        </Container>
        

    );
}

const styles = StyleSheet.create({
    home: {
        width: 25,
        height: 25,
    },
})