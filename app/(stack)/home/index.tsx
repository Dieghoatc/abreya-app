import ProfileCard from "@/components/shared/ProfileCard";
import { technicals } from "@/storage/technical";
import { View, FlatList } from "react-native";

const numColumns = 2;

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={technicals}
        renderItem={({ item }) => {
          return (<ProfileCard technical={item} />
          )
        }}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}
