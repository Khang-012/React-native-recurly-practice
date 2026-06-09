import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <Text className="text-2xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded-xl bg-primary text-white p-4"
      >
        Spotify Subscriptions
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded-xl bg-primary text-white p-4"
      >
        Claude Max
      </Link>
    </SafeAreaView>
  );
}
