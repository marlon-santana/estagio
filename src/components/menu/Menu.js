import React from  'react';
import { Container } from './stryles';
import { Image, StyleSheet } from 'react-native';





export function Menu () {
    return (
        <>
        <Container>
            <Image  style={styles.home}  source={require('../../../assets/icon_home.svg')} />
        </Container>
        </>

    );
}

const styles = StyleSheet.create({
    home: {
        width: 25,
        height: 25,
    },
})