import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded-xl bg-primary text-white p-4"
      >
        Go to onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded-xl bg-primary text-white p-4"
      >
        Go to Sign in
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded-xl bg-primary text-white p-4"
      >
        Go to Sign up
      </Link>

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
    </View>
  );
}
