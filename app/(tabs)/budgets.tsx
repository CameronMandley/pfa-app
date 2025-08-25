import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { apiGet } from "../../lib/api";

type BudgetResp = {
  available_to_spend: number;
  lines?: Array<{ name: string; amount: number }>;
};

export default function Budgets() {
  const [data, setData] = useState<BudgetResp | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    apiGet<BudgetResp>("/budgets/current")
      .then(setData)
      .catch(e => setErr(e.message));
  }, []);

  if (err) return <Text style={{ padding: 16 }}>Error: {err}</Text>;
  if (!data) return <Text style={{ padding: 16 }}>Loading…</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Budget</Text>
      <Text style={{ marginTop: 8 }}>
        Available to spend: ${data.available_to_spend?.toFixed(2)}
      </Text>
      {data.lines?.map((l, i) => (
        <Text key={i} style={{ marginTop: 4 }}>
          • {l.name}: ${l.amount.toFixed(2)}
        </Text>
      ))}
    </View>
  );
}
