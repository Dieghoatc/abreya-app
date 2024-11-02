import { View, Text, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustonButton from "./shared/CustonButton";
import { router } from "expo-router";



interface FormValues {
  email: string;
  password: string;
}


const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email no es válido").required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});

export default function LoginForm() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data: FormValues) => {
    if (data.email === "diego@abreya.com" && data.password === "123456") {
      router.push("/(stack)/home");
    } else {
      console.log("Login incorrecto");
    }
  };

  return (
    <View>
      <Text className="text-white mb-2"></Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
          return (
            <TextInput
              value={value}
              placeholder="Correo Electrónico"
              placeholderTextColor={"#f1be4899"}
              onChangeText={onChange}
              keyboardType="email-address"
              className="border border-orangeBase rounded-md p-2 text-orangeBase mb-2"
            />
          );
        }}
      />
      {errors.email && (
        <Text className="text-red-500">{errors.email.message}</Text>
      )}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
          return (
            <TextInput
              value={value}
              placeholder="Contraseña"
              placeholderTextColor={"#f1be4899"}
              onChangeText={onChange}
              secureTextEntry
              className="border border-orangeBase rounded-md p-2 text-orangeBase mb-2"
            />
          );
        }}
      />
      {errors.password && (
        <Text className="text-red-500">{errors.password.message}</Text>
      )}

      <CustonButton onPress={handleSubmit(onSubmit)}>Ingresar</CustonButton>
    </View>
  );
}
