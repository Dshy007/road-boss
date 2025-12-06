import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { achievements } from "@/lib/mockData";

type Filter = "all" | "earned" | "inProgress";

export default function AchievementsScreen() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredAchievements = achievements.filter((a) => {
    if (filter === "earned") return a.earned;
    if (filter === "inProgress") return !a.earned;
    return true;
  });

  const earnedCount = achievements.filter((a) => a.earned).length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>Achievements</Text>
          <Text style={{ color: "#94a3b8", fontSize: 16, marginTop: 4 }}>
            {earnedCount} of {achievements.length} badges earned
          </Text>
        </View>

        {/* Filter Selector */}
        <View style={{ flexDirection: "row", backgroundColor: "#1e293b", borderRadius: 12, padding: 4, marginBottom: 24 }}>
          {(["all", "earned", "inProgress"] as Filter[]).map((f) => (
            <Pressable
              key={f}
              onPress={() => setFilter(f)}
              style={{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 8,
                backgroundColor: filter === f ? "#3B82F6" : "transparent",
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "600", fontSize: 16, color: filter === f ? "#fff" : "#94a3b8" }}>
                {f === "inProgress" ? "In Progress" : f.charAt(0).toUpperCase() + f.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Achievements List */}
        {filteredAchievements.map((achievement) => (
          <View
            key={achievement.id}
            style={{
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              backgroundColor: achievement.earned ? "#1e293b" : "rgba(30, 41, 59, 0.5)",
              borderWidth: 1,
              borderColor: achievement.earned ? "rgba(255, 215, 0, 0.5)" : "#334155",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              {/* Icon */}
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 16,
                  backgroundColor: achievement.earned ? "rgba(255, 215, 0, 0.2)" : "#334155",
                }}
              >
                <FontAwesome
                  name={achievement.icon as any}
                  size={32}
                  color={achievement.earned ? "#FFD700" : "#64748b"}
                />
              </View>

              {/* Content */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: achievement.earned ? "#fff" : "#94a3b8" }}>
                    {achievement.title}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome name="star" size={16} color="#FFD700" />
                    <Text style={{ color: "#FFD700", fontWeight: "600", marginLeft: 4, fontSize: 16 }}>{achievement.points}</Text>
                  </View>
                </View>
                <Text style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>{achievement.description}</Text>

                {achievement.earned ? (
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                    <FontAwesome name="check-circle" size={16} color="#22C55E" />
                    <Text style={{ color: "#22C55E", fontSize: 14, marginLeft: 6 }}>
                      Earned {achievement.earnedDate}
                    </Text>
                  </View>
                ) : achievement.progress !== undefined ? (
                  <View style={{ marginTop: 12 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                      <Text style={{ color: "#94a3b8", fontSize: 14 }}>Progress</Text>
                      <Text style={{ color: "#fff", fontSize: 14 }}>
                        {achievement.progress}/{achievement.maxProgress}
                      </Text>
                    </View>
                    <View style={{ height: 8, backgroundColor: "#334155", borderRadius: 4, overflow: "hidden" }}>
                      <View
                        style={{
                          height: "100%",
                          backgroundColor: "#3B82F6",
                          borderRadius: 4,
                          width: `${(achievement.progress / (achievement.maxProgress || 1)) * 100}%`,
                        }}
                      />
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
