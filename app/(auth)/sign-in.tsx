import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import useAuthStore from "@/store/auth.store";
import * as Sentry from "@sentry/react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuthStore();
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please enter valid email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      await login(form.email, form.password);
      Alert.alert("Success", "You have signed in successfully!");
      // 移除手动导航，让路由守卫自动处理
    } catch (error: any) {
      Alert.alert("Error", error.message || "Something went wrong.");
      Sentry.captureEvent(error);
    }
    setIsSubmitting(false);
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />
      <View className="justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account?
        </Text>
        <Link href="/(auth)/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
