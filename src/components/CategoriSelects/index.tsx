import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { categories } from "../../UTILS/categories";
import { Category } from "../Category";

type Props = {
  categorySelected: number,
  setCategory: (categoryId: number) => void 
}

export function CategorySelect(  { categorySelected, setCategory}: Props) {
  console.log(categories)
  return (
    <ScrollView
      contentContainerStyle={{ paddingRight: 40 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
        {
          categories.map(category => (
            <Category
            onPress={() => setCategory(category.id)}
            key={category.id}
            titulo={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            />
          ))
        }
    </ScrollView>
  );
}
