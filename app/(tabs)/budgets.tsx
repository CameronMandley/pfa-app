import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import BudgetCard from "../../components/BudgetCard";
import { apiGet } from "../../lib/api";

type Line = { name: string; spent: number; limit: number };
type BudgetResp = {
  available_to_spend: number;
  lines: Line[];
};

export default function Budgets() {
  const [data, setData] = useState<BudgetResp | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    apiGet<BudgetResp>("/budgets/current")
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  if (err) return <Text style={{ padding: 16 }}>Error: {err}</Text>;
  if (!data) return <Text style={{ padding: 16 }}>Loading…</Text>;

  return (
    <ScrollView style={{ padding: 16 }} contentContainerStyle={{ gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 8 }}>Budgets</Text>

      <View
        style={{
          padding: 12,
          borderRadius: 12,
          backgroundColor: "#0B0D12",
          borderWidth: 1,
          borderColor: "#222631",
        }}
      >
        <Text style={{ color: "#9AA3B2" }}>Available to spend</Text>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#E6E8EE" }}>
          ${data.available_to_spend.toFixed(2)}
        </Text>
      </View>

      {data.lines?.map((l, i) => (
        <BudgetCard key={i} title={l.name} spent={l.spent} limit={l.limit} />
      ))}
    </ScrollView>
  );
}
