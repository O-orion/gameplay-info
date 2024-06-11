import React from "react";
import { View,Text } from "react-native";
import { styles } from "./style";
import { Avatar } from "../Avatar";

export function Profile() {
    return (
        <View style={styles.container} >
            <Avatar urlImage="https://github.com/O-orion.png"></Avatar>
           <View>
                <View style={ styles.user } >
                    <Text style={styles.greeting} >
                        Olá
                    </Text>

                    <Text style={styles.username} >
                        Lucas
                    </Text>

                </View>
                <Text style={styles.mensagem} >
                    Hoje é dia de vitória
                </Text>

           </View>
        </View>
    )
}
