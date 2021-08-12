import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, SecondContainer, ImgContainer1, ImgContain2, ButtonShopNow,Viewer } from './styles';



export function NewIn () {
    return(
        <>
        <Container>
            <Text style={styles.newIn}>NEW IN</Text>
            <Viewer><Text>Ver tudo</Text></Viewer>
        </Container>
        <SecondContainer>
            <ImgContainer1>
            <Image  style={styles.imagem1}  resizeMode='contain' source={require('../../../assets/Rectangle.png')} />
            <ButtonShopNow>
                <Text style={styles.texto}>HOT TRENDS</Text>
            <Button
            buttonStyle={styles.button}
                title="shop now"
                onPress={() => Alert.alert('clicou aqui')}
                type="outline"
                color="#841584"
                
             /> 
             </ButtonShopNow>
               
              
            </ImgContainer1>
            <ImgContain2>
            <Image  style={styles.imagem2}  resizeMode='contain'  source={require('../../../assets/Rectangle-2.png')} /> 
            </ImgContain2>
        </SecondContainer>
        </>

    );
}


const styles = StyleSheet.create({
    imagem1: {
        width: 192,
        height: 256,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 30

    },
    imagem2: {
        width: 179,
        height: 256,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 30
    },
     button: {
        width: 108,
        height: 24,
        marginTop: 1,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 100,
        fontWeight: 5
    }, 
    texto: {
        color: "white",
        fontSize:18,
        marginLeft: 4,
        marginTop: -30,
        marginBottom: 20
    },
    newIn: {
        marginLeft: 5
    }
});