import React, { useEffect, useState } from "react";
import { View, Text,FlatList } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategoriSelects";
import { ListHeader } from "../../components/ListHeader/ListHeader";
import { Appointment } from "../../components/Appointments";
import { ListDivisor } from "../../components/ListDivisor";
import { Background } from "../../components/BackGround";
import { useNavigation } from "@react-navigation/core";


export function Home() {
  const [category, setCategory] = useState(0);
  const navigation = useNavigation()

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description: "É hoje que iremos entrar para a glória",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description: "É hoje que iremos entrar para a glória",
    },
  ];

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("Details")
  }
  function handleAppointmentCreate() {
    navigation.navigate("Create")
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile></Profile>
          <ButtonAdd onPress={handleAppointmentCreate} ></ButtonAdd>
        </View>


          <CategorySelect
            setCategory={handleCategorySelect}
            categorySelected={category}
          ></CategorySelect>

          <View style={styles.content}>
            <ListHeader
              title="Partidas Agendadas"
              subTitle="Total: 0"
            ></ListHeader>
            <FlatList
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivisor />}
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Appointment 
              onPress={handleAppointmentDetails}
              data={item} />}
            />
          </View>

      </View>
    </Background>
  );
}
