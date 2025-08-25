import { Text, View } from "react-native";

type Props = {
  title: string;
  spent: number;      // amount spent in this category/month
  limit: number;      // category budget
};

const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));
const currency = (n: number) => `$${n.toFixed(2)}`;

export default function BudgetCard({ title, spent, limit }: Props) {
  const pct = limit > 0 ? clamp(spent / limit) : 0;
  const remaining = Math.max(0, limit - spent);
  const status =
    pct < 0.5 ? "Good" : pct < 0.85 ? "Watch" : remaining > 0 ? "Tight" : "Over";

  return (
    <View
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: "#111318",
        borderWidth: 1,
        borderColor: "#222631",
        gap: 8,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#E6E8EE", fontSize: 16, fontWeight: "600" }}>{title}</Text>
        <Text style={{ color: "#9AA3B2" }}>{status}</Text>
      </View>

      {/* Progress bar */}
      <View style={{ height: 10, borderRadius: 999, backgroundColor: "#222631", overflow: "hidden" }}>
        <View
          style={{
            height: "100%",
            width: `${pct * 100}%`,
            backgroundColor: pct < 0.85 ? "#4CC38A" : "#F76808",
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#9AA3B2" }}>Spent</Text>
        <Text style={{ color: "#E6E8EE" }}>{currency(spent)}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#9AA3B2" }}>Budget</Text>
        <Text style={{ color: "#E6E8EE" }}>{currency(limit)}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#9AA3B2" }}>Remaining</Text>
        <Text style={{ color: remaining > 0 ? "#4CC38A" : "#F76808" }}>
          {currency(remaining)}
        </Text>
      </View>
    </View>
  );
}
