import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800">
      <Text className="text-xl font-bold text-white">Modal</Text>
      <Text className="text-slate-400 mt-2">This is a modal screen</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
