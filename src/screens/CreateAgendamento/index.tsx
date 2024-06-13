import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Background } from "../../components/BackGround";
import { Header } from "../../components/Header";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { CategorySelect } from "../../components/CategoriSelects";

export function CreateAgendamento() {
  const [category, setCategory] = useState(0);

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  return (
    <Background>
      <Header
        title="Agendar Partida"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.salmao} />
          </BorderlessButton>
        }
      ></Header>

      <Text style={styles.label}>Categorias</Text>
      <CategorySelect
        setCategory={handleCategorySelect}
        categorySelected={category}
      ></CategorySelect>
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select} >
             <View  style={styles.image} />

             <View style={styles.selectBody} >

             </View>

          </View>
        </RectButton>
      </View>
    </Background>
  );
}
