import { View, Text, ScrollView, Pressable, Alert, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { rewards, currentDriver } from "@/lib/mockData";
import { Reward } from "@/lib/types";

type Category = "all" | "gift_card" | "merchandise" | "time_off" | "bonus";

export default function RewardsScreen() {
  const [category, setCategory] = useState<Category>("all");

  const filteredRewards = rewards.filter((r) => {
    if (category === "all") return true;
    return r.category === category;
  });

  const handleRedeem = (reward: Reward) => {
    if (currentDriver.points >= reward.pointsCost) {
      Alert.alert(
        "Confirm Redemption",
        `Redeem ${reward.pointsCost} points for ${reward.title}?`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Redeem", onPress: () => Alert.alert("Success!", "Your reward has been redeemed. Check your email for details.") }
        ]
      );
    } else {
      Alert.alert("Not Enough Points", `You need ${reward.pointsCost - currentDriver.points} more points to redeem this reward.`);
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "gift_card": return "credit-card";
      case "merchandise": return "shopping-bag";
      case "time_off": return "sun-o";
      case "bonus": return "money";
      default: return "gift";
    }
  };

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "gift_card", label: "Gift Cards" },
    { key: "merchandise", label: "Merch" },
    { key: "time_off", label: "Time Off" },
    { key: "bonus", label: "Bonus" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>Rewards Store</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
            <Text style={{ color: "#94a3b8", fontSize: 16 }}>Available balance: </Text>
            <FontAwesome name="star" size={18} color="#FFD700" />
            <Text style={{ color: "#FFD700", fontWeight: "bold", fontSize: 20, marginLeft: 6 }}>{currentDriver.points.toLocaleString()}</Text>
          </View>
        </View>

        {/* Category Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
          {categories.map((cat) => (
            <Pressable
              key={cat.key}
              onPress={() => setCategory(cat.key)}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 25,
                marginRight: 10,
                backgroundColor: category === cat.key ? "#3B82F6" : "#1e293b",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 16, color: category === cat.key ? "#fff" : "#94a3b8" }}>
                {cat.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Rewards List */}
        {filteredRewards.map((reward) => {
          const canAfford = currentDriver.points >= reward.pointsCost;

          return (
            <View
              key={reward.id}
              style={{
                backgroundColor: "#1e293b",
                borderRadius: 16,
                padding: 16,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: "#334155",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                {/* Icon */}
                <View
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderRadius: 16,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 16,
                  }}
                >
                  <FontAwesome
                    name={getCategoryIcon(reward.category) as any}
                    size={32}
                    color="#3B82F6"
                  />
                </View>

                {/* Content */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{reward.title}</Text>
                  <Text style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>{reward.description}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                    <FontAwesome name="star" size={16} color="#FFD700" />
                    <Text style={{ color: "#FFD700", fontWeight: "bold", marginLeft: 6, fontSize: 18 }}>{reward.pointsCost.toLocaleString()}</Text>
                    <Text style={{ color: "#94a3b8", marginLeft: 4, fontSize: 14 }}>points</Text>
                  </View>
                </View>
              </View>

              {/* Redeem Button */}
              <Pressable
                onPress={() => handleRedeem(reward)}
                style={{
                  marginTop: 16,
                  paddingVertical: 14,
                  borderRadius: 12,
                  alignItems: "center",
                  backgroundColor: canAfford ? "#3B82F6" : "#334155",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 16, color: canAfford ? "#fff" : "#94a3b8" }}>
                  {canAfford ? "Redeem Now" : `Need ${(reward.pointsCost - currentDriver.points).toLocaleString()} more`}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
