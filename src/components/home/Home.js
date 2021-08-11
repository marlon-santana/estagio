import React from 'react';
import Img1 from '../../../assets/editorial_pic.png';
import { New, Preview, Container } from './styles';
import { Button } from 'react-native-elements';
import { Alert } from 'react-native';



export function Home() {
    return (
        <>
        <Container>
            <img src={Img1} />
            <Preview>PREVIEW</Preview>
            <New>NEW WAVE</New>
            <Button
            title="SHOP NOW"
            onPress={() => Alert.alert('clicou aqui')}
            color="#ffffff"
            type="outline"
            style={{width: 188, margin: 10 }}
             />
            </Container>
            
            </>


          
            
        
            


    );
}