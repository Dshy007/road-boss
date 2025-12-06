import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { currentDriver, challenges } from "@/lib/mockData";
import { getNextRank } from "@/lib/types";

export default function HomeScreen() {
  const nextRank = getNextRank(currentDriver.points);
  const progressPercent = nextRank
    ? Math.min(((currentDriver.points) / (currentDriver.points + nextRank.pointsNeeded)) * 100, 100)
    : 100;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ marginBottom: 8 }}>
          <Text style={{ color: "#94a3b8", fontSize: 16 }}>Welcome back,</Text>
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>{currentDriver.name}</Text>
        </View>

        {/* Points Card */}
        <View style={{ backgroundColor: "#1e293b", borderRadius: 16, padding: 20, marginTop: 16, borderWidth: 1, borderColor: "#334155" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={{ color: "#94a3b8", fontSize: 14 }}>Total Points</Text>
              <Text style={{ color: "#FFD700", fontSize: 40, fontWeight: "bold" }}>{currentDriver.points.toLocaleString()}</Text>
            </View>
            <View style={{ backgroundColor: "rgba(59, 130, 246, 0.2)", borderRadius: 50, padding: 16 }}>
              <FontAwesome name="star" size={36} color="#FFD700" />
            </View>
          </View>

          {/* Rank Progress */}
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>{currentDriver.rank}</Text>
              {nextRank && <Text style={{ color: "#94a3b8", fontSize: 16 }}>{nextRank.name}</Text>}
            </View>
            <View style={{ height: 12, backgroundColor: "#334155", borderRadius: 6, overflow: "hidden" }}>
              <View style={{ height: "100%", backgroundColor: "#3B82F6", borderRadius: 6, width: `${progressPercent}%` }} />
            </View>
            {nextRank && (
              <Text style={{ color: "#94a3b8", fontSize: 14, marginTop: 8 }}>
                {nextRank.pointsNeeded.toLocaleString()} points to {nextRank.name}
              </Text>
            )}
          </View>
        </View>

        {/* Stats Row */}
        <View style={{ flexDirection: "row", marginTop: 16, gap: 12 }}>
          <View style={{ flex: 1, backgroundColor: "#1e293b", borderRadius: 12, padding: 16, borderWidth: 1, borderColor: "#334155" }}>
            <FontAwesome name="fire" size={28} color="#EF4444" />
            <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 8 }}>{currentDriver.streak}</Text>
            <Text style={{ color: "#94a3b8", fontSize: 14 }}>Day Streak</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#1e293b", borderRadius: 12, padding: 16, borderWidth: 1, borderColor: "#334155" }}>
            <FontAwesome name="shield" size={28} color="#22C55E" />
            <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 8 }}>{currentDriver.safetyScore}%</Text>
            <Text style={{ color: "#94a3b8", fontSize: 14 }}>Safety</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#1e293b", borderRadius: 12, padding: 16, borderWidth: 1, borderColor: "#334155" }}>
            <FontAwesome name="truck" size={28} color="#3B82F6" />
            <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginTop: 8 }}>{Math.floor(currentDriver.totalMiles / 1000)}k</Text>
            <Text style={{ color: "#94a3b8", fontSize: 14 }}>Miles</Text>
          </View>
        </View>

        {/* Active Challenges */}
        <View style={{ marginTop: 24 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Active Challenges</Text>
            <Pressable>
              <Text style={{ color: "#3B82F6", fontSize: 16 }}>See All</Text>
            </Pressable>
          </View>

          {challenges.slice(0, 3).map((challenge) => (
            <View key={challenge.id} style={{ backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: "#334155" }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <View style={{ backgroundColor: challenge.type === "daily" ? "rgba(59, 130, 246, 0.2)" : "rgba(255, 215, 0, 0.2)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                  <Text style={{ color: challenge.type === "daily" ? "#3B82F6" : "#FFD700", fontSize: 12, fontWeight: "600" }}>
                    {challenge.type.toUpperCase()}
                  </Text>
                </View>
                <Text style={{ color: "#FFD700", fontWeight: "600", fontSize: 16 }}>+{challenge.points} pts</Text>
              </View>
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18, marginBottom: 4 }}>{challenge.title}</Text>
              <Text style={{ color: "#94a3b8", fontSize: 14, marginBottom: 12 }}>{challenge.description}</Text>

              {/* Progress Bar */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={{ color: "#94a3b8", fontSize: 14 }}>Progress</Text>
                <Text style={{ color: "#fff", fontSize: 14 }}>{challenge.progress}/{challenge.maxProgress}</Text>
              </View>
              <View style={{ height: 8, backgroundColor: "#334155", borderRadius: 4, overflow: "hidden" }}>
                <View style={{ height: "100%", backgroundColor: "#22C55E", borderRadius: 4, width: `${(challenge.progress / challenge.maxProgress) * 100}%` }} />
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={{ marginTop: 16, marginBottom: 32 }}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>Quick Actions</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Pressable style={{ flex: 1, backgroundColor: "#3B82F6", borderRadius: 12, padding: 20, alignItems: "center" }}>
              <FontAwesome name="gift" size={32} color="white" />
              <Text style={{ color: "#fff", fontWeight: "600", marginTop: 8, fontSize: 16 }}>Rewards</Text>
            </Pressable>
            <Pressable style={{ flex: 1, backgroundColor: "#1E3A8A", borderRadius: 12, padding: 20, alignItems: "center" }}>
              <FontAwesome name="trophy" size={32} color="white" />
              <Text style={{ color: "#fff", fontWeight: "600", marginTop: 8, fontSize: 16 }}>Leaderboard</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
