import React from 'react';
import { Text, View } from 'react-native';
import { Container, SecondContainer, Imgs } from './styles';
import ImgG1 from '../../../assets/Rectangle.png';
import ImgG2 from '../../../assets/Rectangle Copy 9-1.png';



export function NewIn () {
    return(
        <>
        <Container>
            <Text>NEW IN</Text>
            <Text>Ver tudo</Text>
        </Container>
        <SecondContainer>
            <View>
               <Imgs><img src={ImgG1} /></Imgs> 
            </View>
            <View>
            <Imgs><img src={ImgG2} /></Imgs> 
            </View>
        </SecondContainer>
        </>

    );
}