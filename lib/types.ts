export interface Driver {
  id: string;
  name: string;
  avatar?: string;
  points: number;
  level: number;
  rank: string;
  streak: number;
  totalMiles: number;
  safetyScore: number;
  onTimeDeliveries: number;
  joinedDate: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
  maxProgress?: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  icon: string;
  pointsCost: number;
  category: "gift_card" | "merchandise" | "time_off" | "bonus";
  available: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  type: "daily" | "weekly" | "monthly";
  progress: number;
  maxProgress: number;
  expiresAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  driver: Driver;
  pointsThisPeriod: number;
}

export const RANKS = [
  { name: "Rookie", minPoints: 0, icon: "star-o" },
  { name: "Road Runner", minPoints: 500, icon: "star-half-o" },
  { name: "Highway Hero", minPoints: 1500, icon: "star" },
  { name: "Fleet Captain", minPoints: 3500, icon: "trophy" },
  { name: "Road Boss", minPoints: 7500, icon: "crown" },
] as const;

export function getRank(points: number): string {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (points >= RANKS[i].minPoints) {
      return RANKS[i].name;
    }
  }
  return RANKS[0].name;
}

export function getNextRank(points: number): { name: string; pointsNeeded: number } | null {
  for (let i = 0; i < RANKS.length; i++) {
    if (points < RANKS[i].minPoints) {
      return { name: RANKS[i].name, pointsNeeded: RANKS[i].minPoints - points };
    }
  }
  return null;
}
