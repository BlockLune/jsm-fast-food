import { CustomButtonProps } from "@/type";
import { clsx } from "clsx";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={clsx("custom-btn", style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white"></ActivityIndicator>
        ) : (
          <Text
            className={clsx("text-white-100 paragraph-semibold", textStyle)}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
