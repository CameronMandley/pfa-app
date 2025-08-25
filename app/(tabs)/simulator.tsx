import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { apiPost } from "../../lib/api";

export default function Simulator() {
  const [price, setPrice] = useState("25");
  const [merchant, setMerchant] = useState("Test Store");
  const [result, setResult] = useState<string>("");

  const run = async () => {
    setResult("Checking…");
    try {
      const resp = await apiPost<{ ok: boolean; message: string }>(
        "/simulator/check",
        { price: Number(price), merchant }
      );
      setResult(resp.message);
    } catch (e: any) {
      setResult("Error: " + e.message);
    }
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Purchase Simulator</Text>
      <Text>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Merchant</Text>
      <TextInput
        value={merchant}
        onChangeText={setMerchant}
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Button title="Check" onPress={run} />
      {!!result && <Text style={{ marginTop: 8 }}>{result}</Text>}
    </View>
  );
}
