import seed from "@/constants/seed";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Search</Text>
        <Button
          title="Seed"
          onPress={() => {
            seed().catch(console.error);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
