import { View, Text, Image, StatusBar, Button } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import imagem from "../../assets/cerebro.jpg"
import { ButtonIcon } from "../../components/ButtonIcon";


export function SignIn() {
    // estados armazenam valores e a interface reage a mudança desse estado
    const [ text, setText ] = useState('')

    function onChangeText(texto: string) {
        setText(texto)
    }

    return(
        <View style={styles.container} >

            <Image resizeMode="stretch" style={styles.image} source={imagem}></Image>
            <View style={styles.content}>
                <Text   style={styles.titule}>
                   Organize  {`\n`}
                    suas jogatinas {`\n`}
                    facilmente 
                </Text>
                <Text style={styles.subTitule}>
                  Crie grupos para jogar {`\n`}
                  com seus amigos
                </Text>

                <ButtonIcon activeOpacity={0.9}  titulo="Entrar com Discord"></ButtonIcon>
            </View>
        </View>
    )
}
