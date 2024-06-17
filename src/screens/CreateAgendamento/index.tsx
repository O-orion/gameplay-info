import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./style";
import { Background } from "../../components/BackGround";
import { Header } from "../../components/Header";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { CategorySelect } from "../../components/CategoriSelects";
import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/Smalnput";
import { TextArea } from "../../components/TextArea";
import { Buttonn } from "../../components/Button";

export function CreateAgendamento() {
  const [category, setCategory] = useState(0);

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView 
    behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container} 
    >
      <ScrollView>
        <Background>
          <Header
            title="Agendar Partida"
            action={
              <BorderlessButton>
                <Fontisto name="share" size={24} color={theme.colors.salmao} />
              </BorderlessButton>
            }
          ></Header>

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categorias
          </Text>

          <CategorySelect
            setCategory={handleCategorySelect}
            categorySelected={category}
          ></CategorySelect>

          {/* FORMULÁRIO */}
          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>
                {/* <View  style={styles.image} /> */}
                <GuildIcon />
                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um servidor!</Text>
                </View>

                <Feather color={theme.colors.gray} name="chevron-right" />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e Mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e Minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

            </View>

              <View style={ [styles.field, {marginBottom:12}]} >
                <Text style={styles.label} >
                  Descrição
                </Text>
                <Text style={styles.caracteresLimit} >
                  Max 100 caracteres
                </Text>
              </View>
              <TextArea 
              
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              ></TextArea>

              <View style={styles.footer} >
                <Buttonn titulo="Agendar" ></Buttonn>
              </View>
          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
