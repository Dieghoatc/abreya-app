import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Technicians } from "@/storage/technical";
import { router } from "expo-router";

interface Props {
  technical: Technicians;
}

export default function ProfileCard({ technical }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.push(`/technical/${technical.id}`)}>
      <View className="border-2 border-orange rounded-full w-20 h-20 bg-slate-700"></View>
      <Text className="font-work-black text-center text-yello">
        {technical.name}
      </Text>
      <View className="flex-row justify-between items-center">
        <Text className="font-work-medium">Sector: </Text>
        <Text className="font-work-light">{technical.sector}</Text>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="font-work-medium">Tafifa: </Text>
        <Text className="font-work-light">$80.000</Text>
      </View>
      <Text className="font-work-light">{technical.description}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 10,
    margin: 4,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.3,
    //   shadowRadius: 3,
  },
});
