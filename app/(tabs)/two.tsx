import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { leaderboard, currentDriver } from "@/lib/mockData";

type Period = "weekly" | "monthly" | "allTime";

export default function LeaderboardScreen() {
  const [period, setPeriod] = useState<Period>("weekly");

  const getRankColors = (rank: number) => {
    if (rank === 1) return { bg: "rgba(255, 215, 0, 0.2)", border: "#FFD700" };
    if (rank === 2) return { bg: "rgba(148, 163, 184, 0.2)", border: "#94a3b8" };
    if (rank === 3) return { bg: "rgba(180, 83, 9, 0.2)", border: "#b45309" };
    return { bg: "#1e293b", border: "#334155" };
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <FontAwesome name="trophy" size={24} color="#FFD700" />;
    if (rank === 2) return <FontAwesome name="trophy" size={24} color="#94a3b8" />;
    if (rank === 3) return <FontAwesome name="trophy" size={24} color="#b45309" />;
    return <Text style={{ color: "#94a3b8", fontWeight: "bold", fontSize: 20 }}>{rank}</Text>;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>Leaderboard</Text>
          <Text style={{ color: "#94a3b8", fontSize: 16, marginTop: 4 }}>See how you rank against other drivers</Text>
        </View>

        {/* Period Selector */}
        <View style={{ flexDirection: "row", backgroundColor: "#1e293b", borderRadius: 12, padding: 4, marginBottom: 16 }}>
          {(["weekly", "monthly", "allTime"] as Period[]).map((p) => (
            <Pressable
              key={p}
              onPress={() => setPeriod(p)}
              style={{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 8,
                backgroundColor: period === p ? "#3B82F6" : "transparent",
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "600", fontSize: 16, color: period === p ? "#fff" : "#94a3b8" }}>
                {p === "allTime" ? "All Time" : p.charAt(0).toUpperCase() + p.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Your Position Card */}
        <View style={{ backgroundColor: "#1e293b", borderRadius: 16, padding: 16, borderWidth: 2, borderColor: "#3B82F6", marginBottom: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 48, height: 48, backgroundColor: "rgba(59, 130, 246, 0.2)", borderRadius: 24, alignItems: "center", justifyContent: "center", marginRight: 16 }}>
              <Text style={{ color: "#3B82F6", fontWeight: "bold", fontSize: 20 }}>3</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>Your Position</Text>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>{currentDriver.name}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: "#FFD700", fontWeight: "bold", fontSize: 20 }}>{currentDriver.points.toLocaleString()}</Text>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>points</Text>
            </View>
          </View>
        </View>

        {/* Leaderboard List */}
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>Top Drivers</Text>

        {leaderboard.map((entry) => {
          const colors = getRankColors(entry.rank);
          const isCurrentUser = entry.driver.id === currentDriver.id;

          return (
            <View
              key={entry.driver.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 16,
                borderRadius: 16,
                marginBottom: 12,
                backgroundColor: colors.bg,
                borderWidth: isCurrentUser ? 2 : 1,
                borderColor: isCurrentUser ? "#3B82F6" : colors.border,
              }}
            >
              {/* Rank */}
              <View style={{ width: 48, height: 48, alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                {getRankIcon(entry.rank)}
              </View>

              {/* Avatar */}
              <View style={{ width: 56, height: 56, backgroundColor: "#334155", borderRadius: 28, alignItems: "center", justifyContent: "center", marginRight: 12 }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                  {entry.driver.name.split(" ").map(n => n[0]).join("")}
                </Text>
              </View>

              {/* Info */}
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>{entry.driver.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <Text style={{ color: "#94a3b8", fontSize: 14 }}>{entry.driver.rank}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="fire" size={14} color="#EF4444" />
                    <Text style={{ color: "#94a3b8", fontSize: 14, marginLeft: 4 }}>{entry.driver.streak}d</Text>
                  </View>
                </View>
              </View>

              {/* Points */}
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#FFD700", fontWeight: "bold", fontSize: 18 }}>{entry.pointsThisPeriod}</Text>
                <Text style={{ color: "#94a3b8", fontSize: 14 }}>this week</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
