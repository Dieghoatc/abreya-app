import LoginForm from "@/components/LoginForm";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-backgroundMain px-4">
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center gap-4">
        <Image
          source={require("../../assets/images/logo.png")} className="w-24 h-24 mb-4" 
        />
        <Text className="text-yellowBase text-7xl font-work-black">AbreYa</Text>
      </View>
      <View className="flex-1 justify-center">
        <Text className="text-yellowBase mb-2 text-center font-work-medium">Inicio de sesión</Text>
        
        <View>
          <LoginForm />
        </View>
        <View className="flex-row justify-center gap-2 mt-2">
          <Text className="text-white">¿No tienes cuenta?</Text>
          <Link href="./Register">
            <Text className="text-orangeBase">Registrate</Text>
          </Link>
        </View>
      </View>
      
    </View>
  );
};

export default LoginScreen;
