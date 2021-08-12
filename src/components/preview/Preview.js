import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Container, VistosRecentemente, Transparencia } from './styles';



export function  Preview() {
    return(
        <Container>
           <Image   style={styles.imagem}source={require('../../../assets/preview.png')} />
           <VistosRecentemente>
               <Text style={styles.texto}>vistos recentemente</Text>
               <Transparencia><Text style={styles.texto2}>Limpar</Text></Transparencia>
           </VistosRecentemente>
        </Container>

    );
}

const styles = StyleSheet.create({
    imagem: {
        marginTop: 80,
      width: 343,
      height: 424,
    },
    texto: {
        fontSize: 16
    },
    texto2: {
        fontSize: 16,
        marginRight: 10
    }
  });