import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Container, VistosRecentemente, Transparencia, ContainerImg, ContainerPreço, Line,
VC, IMG, Line2 } from './styles';



export function  Preview() {
    return(
        <Container>
            <Image   style={styles.imagem}source={require('../../../assets/preview.png')} />
                <VistosRecentemente>

               <Text style={styles.texto}>vistos recentemente</Text>
               <Transparencia><Text style={styles.texto2}>Limpar</Text></Transparencia>
               </VistosRecentemente>

           <ContainerImg>
           <Image  style={styles.imagem1}source={require('../../../assets/Rectangle Copy 8-1.png')}/>
           <Image  style={styles.imagem2}source={require('../../../assets/Rectangle Copy 9-1@2x.png')}/>
           </ContainerImg>

           
            <ContainerPreço>
           <Text style={styles.formaPagamento}>Camisa de seda Parka mi...</Text>
           <Text style={styles.preço}>R$ 529</Text>
           <Text style={styles.formaPagamento}>5x de R$105,80</Text>
           </ContainerPreço>

           <Line></Line>

           <VC>VOCÊ PODE CURTIR</VC>
           <ContainerImg>
           <IMG  style={styles.imagem1}source={require('../../../assets/Rectangle Copy 8.png')}/>
           <IMG  style={styles.imagem2}source={require('../../../assets/Rectangle Copy 9.png')}/>
           </ContainerImg>

           <ContainerPreço>
           <Text style={styles.formaPagamento}>Camisa de seda Parka mi...</Text>
           <Text style={styles.preço}>R$ 529</Text>
           <Text style={styles.formaPagamento}>5x de R$105,80</Text>
           </ContainerPreço>

           <Line2></Line2>
                
                
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
    },
    imagem1: {
        marginTop: 20,
        width: 188,
        height: 281,
        marginLeft: 10
    },
    imagem2: {
        marginTop: 20,
        width: 188,
        height: 281,
        marginLeft: 10
    },
    preço: {
        fontSize: 13,
        fontWeight: 800,
        color: "black"

    },
    formaPagamento: {
        fontSize: 13,
        fontWeight: 600,
        color: "black",
    },
    testando: {
        fontSize: 13,
        fontWeight: 600,
        color: "black",
    }
  
  });