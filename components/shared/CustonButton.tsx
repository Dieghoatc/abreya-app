import { Pressable, PressableProps, Text, View } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text-only"
}

const CustonButton = React.forwardRef(
  ({
    children,
    color = "primary",
    onPress,
    onLongPress,
    variant = "contained",
  }: Props, ref: React.Ref<View>) => {
  
    const btnColor = {
      primary: "bg-yellowBase",
      secondary: "bg-orangeBase",
      tertiary: "bg-mandarineBase",
    }[color];

    const textColor = {
      primary: "text-yellowBase",
      secondary: "text-orangeBase",
      tertiary: "text-mandarineBase",
    }[color]

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center text-lg font-work-medium ${textColor}`}>{children}</Text>
        </Pressable>
      );
    }
  
    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-black text-center text-lg font-work-medium">{children}</Text>
      </Pressable>
    );
  }
)

export default CustonButton;
