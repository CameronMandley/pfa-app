import { useState } from "react";
import { Button, Text, View } from "react-native";
import { apiPost } from "../../lib/api";

// Simple fake generator
const fakeToken = () =>
  "public-sandbox-" + Math.random().toString(36).slice(2) + Date.now().toString(36);

export default function LinkStub() {
  const [status, setStatus] = useState<string>("Not linked");
  const [token, setToken] = useState<string | null>(null);

  const connect = async () => {
    const t = fakeToken();
    setToken(t);
    setStatus("Connected (stub)");

    // Optional: tell backend you “linked” an item
    try {
      await apiPost("/plaid/link/exchange", { public_token: t });
    } catch (e) {
      // ignore in stub
    }
  };

  const unlink = async () => {
    setToken(null);
    setStatus("Not linked");
    try {
      await apiPost("/plaid/unlink", {});
    } catch (e) {}
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Link Bank (Stub)</Text>
      <Text>Status: {status}</Text>
      {token && (
        <Text selectable style={{ color: "#7a8a9e" }}>
          token: {token}
        </Text>
      )}
      <Button title="Connect bank (stub)" onPress={connect} />
      <Button title="Unlink" onPress={unlink} />
      <Text style={{ marginTop: 8, color: "#7a8a9e" }}>
        This simulates Plaid Link. Replace with real Link later.
      </Text>
    </View>
  );
}
