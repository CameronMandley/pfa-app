import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { apiGet } from "../../lib/api";

export default function Home() {
  const [status, setStatus] = useState<string>("loading...");
  useEffect(() => {
    apiGet<{ status: string }>("/health")
      .then(d => setStatus(d.status))
      .catch(e => setStatus(`error: ${e.message}`));
  }, []);
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>PFA Home</Text>
      <Text style={{ marginTop: 8 }}>API health: {status}</Text>
    </View>
  );
}
