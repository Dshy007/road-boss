import { View, Text, ScrollView, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { currentDriver, achievements } from "@/lib/mockData";
import { RANKS, getNextRank } from "@/lib/types";

export default function ProfileScreen() {
  const nextRank = getNextRank(currentDriver.points);
  const earnedBadges = achievements.filter((a) => a.earned).length;

  const stats = [
    { label: "Total Miles", value: currentDriver.totalMiles.toLocaleString(), icon: "road" },
    { label: "On-Time Deliveries", value: currentDriver.onTimeDeliveries.toString(), icon: "clock-o" },
    { label: "Safety Score", value: `${currentDriver.safetyScore}%`, icon: "shield" },
    { label: "Current Streak", value: `${currentDriver.streak} days`, icon: "fire" },
    { label: "Badges Earned", value: `${earnedBadges}/${achievements.length}`, icon: "trophy" },
    { label: "Member Since", value: new Date(currentDriver.joinedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }), icon: "calendar" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Profile Header */}
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <View style={{ width: 100, height: 100, backgroundColor: "#334155", borderRadius: 50, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 36 }}>
              {currentDriver.name.split(" ").map(n => n[0]).join("")}
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>{currentDriver.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
            <FontAwesome name="star" size={18} color="#FFD700" />
            <Text style={{ color: "#FFD700", fontWeight: "600", marginLeft: 6, fontSize: 18 }}>{currentDriver.rank}</Text>
          </View>
        </View>

        {/* Points Card */}
        <View style={{ backgroundColor: "#1e293b", borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "#334155", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>Total Points</Text>
              <Text style={{ color: "#FFD700", fontSize: 36, fontWeight: "bold" }}>{currentDriver.points.toLocaleString()}</Text>
            </View>
            <View>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>Level</Text>
              <Text style={{ color: "#fff", fontSize: 36, fontWeight: "bold" }}>{currentDriver.level}</Text>
            </View>
          </View>

          {nextRank && (
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                <Text style={{ color: "#fff", fontSize: 14 }}>{currentDriver.rank}</Text>
                <Text style={{ color: "#94a3b8", fontSize: 14 }}>{nextRank.name}</Text>
              </View>
              <View style={{ height: 8, backgroundColor: "#334155", borderRadius: 4, overflow: "hidden" }}>
                <View
                  style={{
                    height: "100%",
                    backgroundColor: "#FFD700",
                    borderRadius: 4,
                    width: `${(currentDriver.points / (currentDriver.points + nextRank.pointsNeeded)) * 100}%`,
                  }}
                />
              </View>
              <Text style={{ color: "#94a3b8", fontSize: 14, marginTop: 8, textAlign: "center" }}>
                {nextRank.pointsNeeded.toLocaleString()} points to {nextRank.name}
              </Text>
            </View>
          )}
        </View>

        {/* Rank Progress */}
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>Rank Progress</Text>
        <View style={{ backgroundColor: "#1e293b", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#334155", marginBottom: 20 }}>
          {RANKS.map((rank, index) => {
            const isCurrentRank = rank.name === currentDriver.rank;
            const isEarned = currentDriver.points >= rank.minPoints;

            return (
              <View
                key={rank.name}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: index < RANKS.length - 1 ? 16 : 0,
                }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 16,
                    backgroundColor: isEarned ? "rgba(255, 215, 0, 0.2)" : "#334155",
                  }}
                >
                  <FontAwesome
                    name={rank.icon as any}
                    size={22}
                    color={isEarned ? "#FFD700" : "#64748b"}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 16,
                      color: isCurrentRank ? "#FFD700" : isEarned ? "#fff" : "#94a3b8",
                    }}
                  >
                    {rank.name}
                  </Text>
                  <Text style={{ color: "#94a3b8", fontSize: 14 }}>{rank.minPoints.toLocaleString()} points</Text>
                </View>
                {isCurrentRank && (
                  <View style={{ backgroundColor: "rgba(255, 215, 0, 0.2)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                    <Text style={{ color: "#FFD700", fontSize: 12, fontWeight: "600" }}>CURRENT</Text>
                  </View>
                )}
                {isEarned && !isCurrentRank && (
                  <FontAwesome name="check-circle" size={24} color="#22C55E" />
                )}
              </View>
            );
          })}
        </View>

        {/* Statistics */}
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>Statistics</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
          {stats.map((stat) => (
            <View
              key={stat.label}
              style={{
                backgroundColor: "#1e293b",
                borderRadius: 16,
                padding: 16,
                borderWidth: 1,
                borderColor: "#334155",
                width: "48%",
              }}
            >
              <FontAwesome name={stat.icon as any} size={24} color="#3B82F6" />
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 8 }}>{stat.value}</Text>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
