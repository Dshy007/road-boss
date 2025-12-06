# Road Boss - Complete Implementation Plan

## Executive Summary

**Road Boss** is a gamified driver rewards app for Amazon Freight Partners (AFP) and Delivery Service Partners (DSP). It turns Amazon's scorecard pressure into a win-win: drivers earn points and rewards for safe driving, while owners hit Gold status and protect their contracts.

**Core Value Prop:** "Temu engagement meets badass trucker rewards"

---

## Part 1: User Roles & Apps

### 1.1 Driver App (Mobile - React Native/Expo)
- Primary interface for 40+ drivers
- Personal phone, QR code signup
- Premium dark theme with semi-truck branding

### 1.2 Admin Dashboard (Web or Mobile Tab)
- Owner/manager view
- Push challenges, verify training, manage rewards store
- Track company Amazon status progress
- Multi-tenant ready for selling to other AFPs

---

## Part 2: Core Screens (Driver App)

### 2.1 Onboarding Flow (3-4 screens)
1. **Splash Screen** - Badass semi-truck animation, Road Boss logo
2. **QR Code Scan / Invite Code** - Admin generates, driver scans
3. **Profile Setup** - Name, phone (for notifications), profile pic optional
4. **Welcome Spin** - First free spin to hook them immediately

### 2.2 Main Tab Navigation (5 tabs)
1. **Home** - Dashboard with points, streaks, company goal, active challenges
2. **Challenges** - Daily/weekly/monthly challenges, training video tasks
3. **Leaderboard** - Driver rankings with semi-truck theme
4. **Store** - Rewards redemption (digital gift cards, swag)
5. **Profile** - Stats, badges, rank progress, notification settings

### 2.3 Key Modal/Overlay Screens
- **Daily Spin Wheel / Slot Machine** - Triggered on app open (once per day)
- **Training Video Lockout** - Blocks app until training acknowledged
- **Social Proof Notifications** - Slide-in toasts ("Marcus just earned 50 pts!")
- **Challenge Detail** - Full challenge info, progress, timer
- **Reward Redemption** - Confirm points spend, delivery method
- **Company Goal Celebration** - Full-screen animation when team hits milestone

---

## Part 3: Points Economy

### 3.1 Earning Points

| Action | Points | Frequency |
|--------|--------|-----------|
| Perfect driving day (zero Netradyne events) | +25 | Daily |
| DVIR completed properly | +10 | Daily |
| On-time arrival/departure | +15 | Per route |
| Training video completed | +100 | Per video |
| First to complete monthly training | +500 BONUS | Monthly |
| Netradyne score 850+ | +50 | Weekly |
| Netradyne score 1000+ | +150 | Weekly |
| Cover a shift/block for teammate | +75 | Per occurrence |
| Daily app check-in | +5 | Daily |
| Daily spin wheel | 5-100 | Daily |
| Perfect week (zero events) | +200 BONUS | Weekly |
| Perfect month | +1000 BONUS | Monthly |
| Streak bonuses (7 days, 14 days, 30 days) | +50/+150/+500 | Milestone |

### 3.2 Losing Points

| Infraction | Points Lost |
|------------|-------------|
| Hard braking event | -50 |
| Following too closely | -50 |
| Speeding | -75 |
| U-turn | -100 |
| Fatigue/distraction event | -100 |
| Any Netradyne critical alert | -75 |
| Missed DVIR | -25 |

### 3.3 Points Rules
- **Expiration:** Points expire at end of calendar month (use them or lose them)
- **No cash out:** Points have no cash value, cannot be redeemed upon leaving
- **Minimum balance:** Points cannot go negative (floor at 0)
- **Instant deduction:** Infractions immediately deduct points (no grace period)

---

## Part 4: Rewards Store

### 4.1 Digital Rewards (Auto-Delivery)
| Item | Point Cost |
|------|------------|
| $5 Amazon Gift Card | 500 pts |
| $10 Amazon Gift Card | 950 pts |
| $25 Amazon Gift Card | 2,250 pts |
| $50 Amazon Gift Card | 4,500 pts |
| Gas Card $10 | 1,000 pts |
| Gas Card $25 | 2,400 pts |

### 4.2 Physical Rewards (Admin Fulfills)
| Item | Point Cost |
|------|------------|
| Road Boss Hat | 300 pts |
| Company T-Shirt | 400 pts |
| Premium Hoodie | 1,200 pts |
| Yeti Tumbler | 800 pts |
| Bluetooth Headset | 2,000 pts |
| Amazon Swag (from your stash) | Varies |

### 4.3 Premium Rewards (Big Ticket)
| Item | Point Cost |
|------|------------|
| Extra PTO Day | 5,000 pts |
| Baseball/Sports Tickets | 7,500 pts |
| Smart TV | 15,000 pts |
| Weekend Getaway | 25,000 pts |

### 4.4 Store Mechanics
- Admin sets inventory and point costs
- Admin can mark items as "limited quantity" or "unlimited"
- Auto-fulfill for digital (API to gift card service)
- Manual fulfill for physical (admin gets notification, marks shipped)
- Driver sees order history and status

---

## Part 5: Challenges System

### 5.1 Challenge Types

**Daily Challenges**
- "Zero Events Today" - Complete route with no Netradyne alerts
- "Perfect DVIR" - Submit DVIR before departure
- "Early Bird" - Check in to app before 6am

**Weekly Challenges**
- "Clean Slate" - Zero infractions all week
- "Consistency King" - 5+ perfect days in a row
- "Fuel Saver" - Best MPG in fleet this week

**Monthly Challenges**
- "Training Sprint" - First 3 to complete monthly videos win bonus
- "Iron Man" - Perfect driving entire month
- "Team Player" - Cover 2+ shifts for teammates

**Special/Flash Challenges (Admin-triggered)**
- "TV Race" - First to complete training wins a TV
- "Zero Hard Braking Week" - Company-wide, everyone gets bonus if achieved
- "Gold Rush" - Double points this weekend

### 5.2 Challenge Templates (Admin)
Pre-built templates admin can deploy with one tap:
- Training Video Race
- Perfect Week Challenge
- Zero Events Day
- Cover Shift Bonus
- Custom (admin writes their own)

### 5.3 Team Challenges
- Visible company-wide goal (e.g., "0 hard braking events this week")
- Progress bar everyone can see
- If goal achieved: everyone gets flat bonus (e.g., 100 pts each)
- Ties into Amazon status tracking

---

## Part 6: Engagement Mechanics

### 6.1 Daily Spin Wheel / Slot Machine

**Trigger:** Once per day when driver opens app (if they haven't spun today)

**Wheel Segments:**
- 5 points (common)
- 10 points (common)
- 25 points (uncommon)
- 50 points (rare)
- 100 points (very rare)
- Free Hat (rare)
- 2x Next Earning (rare)
- Try Again Tomorrow (common)

**Design:**
- Premium slot machine aesthetic (chrome, gold accents)
- Satisfying animations and sounds
- Semi-truck themed (wheels look like truck wheels?)

### 6.2 Streak System

| Streak | Bonus |
|--------|-------|
| 3 days perfect | +25 pts |
| 7 days perfect | +50 pts |
| 14 days perfect | +150 pts |
| 30 days perfect | +500 pts |

- Streak breaks on ANY Netradyne event
- Visual flame icon grows with streak length
- "Streak Shield" - one-time protection item from store? (future feature)

### 6.3 Social Proof Notifications

**When triggered:**
- Driver earns significant points (50+)
- Driver redeems a reward
- Driver completes a challenge
- Driver hits a streak milestone
- Driver reaches new rank

**Display:**
- Slide-in toast at top of screen
- Shows driver name, action, points earned
- Taps to dismiss or auto-dismiss after 3 seconds
- Stored in Notifications tab for history

**Examples:**
- "Marcus just earned 200 pts for Perfect Week!"
- "Sarah redeemed a $25 Amazon Gift Card"
- "David hit a 14-day streak!"
- "Jessica just completed Training Sprint first!"

### 6.4 Company Goal Tracker

**Amazon Status Progress Bar:**
- Shows current week's progress toward Gold/Silver/Bronze
- Based on aggregate Netradyne scores, on-time %, etc.
- Visible on Home screen for all drivers
- When company hits Gold: celebration animation + company-wide bonus

**Team Milestones:**
- Admin can set team goals with rewards
- Example: "Hit Gold Status = Company Pizza Party + 100 pts each"
- Countdown timer to end of scoring period

---

## Part 7: Training Video Integration

### 7.1 The Lockout Flow

1. Admin marks "Monthly Training Required" with deadline
2. Driver opens app
3. If training not complete AND deadline approaching:
   - Modal overlay appears: "Complete your training to unlock full app!"
   - Shows video title, estimated time
   - CTA: "Watch Now" (opens video link/embedded player)
4. After watching, driver taps "I've Completed Training"
5. Goes into "Pending Verification" state
6. Admin verifies (checks Amazon training portal)
7. Points awarded, lockout removed

### 7.2 Training Race Challenge

1. Admin creates "Training Sprint" challenge
2. Sets reward: "First to complete wins 500 bonus pts + Prize"
3. All drivers see challenge with live leaderboard
4. As drivers submit "completed," list updates
5. Admin verifies in order received
6. First verified = winner

### 7.3 Verification Queue (Admin)
- Admin sees list of pending training verifications
- One-tap approve or reject
- Reject sends notification to driver: "Training not verified - please rewatch"

---

## Part 8: Admin Dashboard

### 8.1 Home/Overview
- Company Amazon Status (current week projection)
- Total points distributed this month
- Rewards redeemed this month (cost to owner)
- Drivers at risk (low scores, recent events)
- Top performers this week

### 8.2 Drivers Management
- List of all drivers with current points, rank, streak
- Tap to see individual driver detail
- Manually award/deduct points with reason
- Mark driver inactive (pause their account)

### 8.3 Challenges Management
- Active challenges with participation stats
- Create new challenge (from template or custom)
- End challenge early / extend deadline
- Announce winners

### 8.4 Rewards Store Management
- Add/edit/remove items
- Set point costs
- Set inventory limits
- View redemption queue
- Mark orders as fulfilled

### 8.5 Training Management
- Mark training as required
- Set deadline
- View completion status per driver
- Verification queue

### 8.6 Analytics
- Points earned vs redeemed over time
- Challenge participation rates
- Reward popularity
- Driver engagement (daily active users)
- Correlation: engagement vs Netradyne scores

### 8.7 Settings
- Company name, logo
- Point values (customize earning/deduction amounts)
- Notification preferences
- Invite links / QR code generator

---

## Part 9: Technical Architecture

### 9.1 Current Stack (Keep)
- React Native + Expo SDK 54
- TypeScript
- Expo Router (file-based navigation)
- React Navigation theming

### 9.2 Add: State Management
- **Zustand** - Lightweight, simple, works great with React Native
- Stores: AuthStore, DriverStore, ChallengesStore, RewardsStore, NotificationsStore

### 9.3 Add: Backend (Required for Multi-tenant)
**Option A: Supabase (Recommended for speed)**
- Postgres database
- Auth (phone/email)
- Real-time subscriptions (for social proof)
- Edge functions for business logic
- Row-level security for multi-tenant

**Option B: Firebase**
- Firestore database
- Firebase Auth
- Cloud Functions
- Good, but Supabase SQL is easier for complex queries

### 9.4 Add: Push Notifications
- **Expo Notifications** - Built-in, works with Expo
- For: Social proof, challenge announcements, training reminders

### 9.5 Add: Animations
- **React Native Reanimated** - For spin wheel, celebrations
- **Lottie** - For confetti, truck animations

### 9.6 Add: Analytics (Future)
- Mixpanel or Amplitude for engagement tracking

---

## Part 10: Database Schema (Supabase)

```sql
-- Companies (multi-tenant)
companies (
  id, name, logo_url, owner_id,
  settings JSONB, created_at
)

-- Users (drivers + admins)
users (
  id, company_id, email, phone, name,
  role ENUM('driver', 'admin', 'owner'),
  avatar_url, created_at
)

-- Driver Stats
driver_stats (
  id, user_id,
  total_points, current_streak, longest_streak,
  rank, netradyne_score,
  updated_at
)

-- Point Transactions
point_transactions (
  id, user_id, amount, type ENUM('earn', 'deduct', 'redeem'),
  reason, challenge_id, created_at
)

-- Challenges
challenges (
  id, company_id, title, description, type,
  points_reward, start_date, end_date,
  goal_type, goal_value, is_team_challenge,
  created_by, created_at
)

-- Challenge Participants
challenge_participants (
  id, challenge_id, user_id,
  progress, completed_at, verified_at
)

-- Rewards Store Items
store_items (
  id, company_id, title, description, image_url,
  point_cost, category, inventory_count,
  is_digital, is_active, created_at
)

-- Reward Redemptions
redemptions (
  id, user_id, store_item_id, points_spent,
  status ENUM('pending', 'fulfilled', 'cancelled'),
  fulfilled_at, created_at
)

-- Training Requirements
training_requirements (
  id, company_id, title, video_url, deadline,
  points_reward, is_active, created_at
)

-- Training Completions
training_completions (
  id, training_id, user_id,
  submitted_at, verified_at, verified_by
)

-- Activity Feed (for social proof)
activity_feed (
  id, company_id, user_id,
  action_type, message, points,
  created_at
)

-- Daily Spins
daily_spins (
  id, user_id, spin_date, result,
  points_won, created_at
)
```

---

## Part 11: Multi-Tenant (Selling to Other AFPs)

### 11.1 Tenant Isolation
- Every query filtered by company_id
- Row-level security in Supabase
- Each AFP sees only their drivers, their store, their data

### 11.2 Pricing Tiers (Suggestions)

| Tier | Drivers | Price/Month | Notes |
|------|---------|-------------|-------|
| Trial | 3 | FREE | 14 days, then convert or expire |
| Starter | 1-30 | $49/mo | ~$1.63/driver |
| Growth | 31-75 | $99/mo | ~$1.32/driver |
| Scale | 76-150 | $179/mo | ~$1.19/driver |
| Enterprise | 150+ | Custom | Contact for pricing |

"Less than a cup of coffee per driver per week"

### 11.3 Onboarding Flow for New AFP
1. Owner signs up on website
2. Creates company profile
3. Gets unique invite QR code
4. Shares with first 3 drivers (free trial)
5. After 14 days: prompt to upgrade
6. Payment via Stripe subscription

### 11.4 White-Label Options (Future)
- Keep "Road Boss" branding initially
- Later: allow custom logo, custom colors for premium tiers

---

## Part 12: Implementation Phases

### Phase 1: Core MVP (Build First)
1. Onboarding flow (QR code signup)
2. Home dashboard with points, streak, rank
3. Basic leaderboard
4. Daily spin wheel
5. Social proof notifications (in-app only)
6. Mock data (no backend yet)

### Phase 2: Challenges & Store
1. Supabase backend setup
2. Auth (phone number login)
3. Challenges system (create, participate, complete)
4. Rewards store (browse, redeem)
5. Point transactions (earn, deduct, spend)
6. Admin: basic dashboard to create challenges

### Phase 3: Training & Verification
1. Training lockout flow
2. Admin verification queue
3. Training race challenge type
4. Push notifications (training reminders)

### Phase 4: Polish & Engagement
1. Slot machine upgrade (from basic wheel)
2. Celebration animations (Lottie)
3. Company goal tracker
4. Team challenges
5. Advanced admin analytics

### Phase 5: Multi-Tenant & Sales
1. Multi-company support
2. Stripe billing integration
3. Trial flow
4. Landing page for AFP owners
5. Onboarding for new companies

---

## Part 13: Design System

### 13.1 Colors

```javascript
colors: {
  // Backgrounds
  background: '#0f172a',      // Deep slate (main bg)
  card: '#1e293b',            // Card backgrounds
  cardHover: '#334155',       // Borders, hover states

  // Brand
  primary: '#3B82F6',         // Action blue
  gold: '#FFD700',            // Points, premium
  success: '#22C55E',         // Positive actions
  danger: '#EF4444',          // Warnings, deductions
  truckBlue: '#1E3A8A',       // Secondary blue

  // Text
  textPrimary: '#f8fafc',     // White text
  textSecondary: '#94a3b8',   // Muted text
  textMuted: '#64748b',       // Very muted

  // Accents
  chrome: '#C0C0C0',          // Metallic accents
  amber: '#F59E0B',           // Warning/streak fire
}
```

### 13.2 Typography
- Headers: Bold, large (28-40px)
- Body: Regular, readable (14-18px)
- Labels: Medium, muted (12-14px)
- Numbers: Bold, standout (points, stats)

### 13.3 Iconography
- FontAwesome for utility icons
- Custom semi-truck illustrations for:
  - Rank badges (small truck → big rig progression)
  - Leaderboard (truck racing visual)
  - Splash/loading screen
  - Empty states

### 13.4 Components to Build
- Card (reusable container)
- ProgressBar (points, challenges, company goal)
- Badge (rank, achievement)
- Button (primary, secondary, danger)
- Toast (social proof notification)
- Modal (confirmations, spin wheel)
- StatBox (streak, safety score, miles)
- LeaderboardRow (rank, avatar, name, points)
- ChallengeCard (type badge, progress, timer)
- StoreItem (image, title, cost, redeem button)

---

## Part 14: File Structure (Proposed)

```
road-boss/
├── app/
│   ├── (auth)/
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   └── onboarding.tsx
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx          (Home)
│   │   ├── challenges.tsx
│   │   ├── leaderboard.tsx
│   │   ├── store.tsx
│   │   └── profile.tsx
│   ├── (admin)/
│   │   ├── _layout.tsx
│   │   ├── dashboard.tsx
│   │   ├── drivers.tsx
│   │   ├── challenges.tsx
│   │   ├── store.tsx
│   │   ├── training.tsx
│   │   └── settings.tsx
│   ├── challenge/[id].tsx
│   ├── reward/[id].tsx
│   ├── _layout.tsx
│   └── modal.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Badge.tsx
│   │   ├── Toast.tsx
│   │   └── Modal.tsx
│   ├── home/
│   │   ├── PointsCard.tsx
│   │   ├── StatsRow.tsx
│   │   ├── CompanyGoal.tsx
│   │   └── ActiveChallenges.tsx
│   ├── SpinWheel.tsx
│   ├── SocialProofToast.tsx
│   ├── LeaderboardRow.tsx
│   ├── ChallengeCard.tsx
│   ├── StoreItem.tsx
│   └── TrainingLockout.tsx
├── lib/
│   ├── supabase.ts
│   ├── types.ts
│   ├── constants.ts
│   ├── utils.ts
│   └── mockData.ts
├── stores/
│   ├── authStore.ts
│   ├── driverStore.ts
│   ├── challengesStore.ts
│   ├── rewardsStore.ts
│   └── notificationsStore.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useChallenges.ts
│   ├── usePoints.ts
│   └── useSpinWheel.ts
├── assets/
│   ├── fonts/
│   ├── images/
│   │   ├── trucks/
│   │   └── badges/
│   └── animations/
│       └── confetti.json
└── supabase/
    └── migrations/
```

---

## Part 15: Success Metrics

### For You (The Owner)
- Amazon status improvement (Bronze → Silver → Gold)
- Reduction in Netradyne events per week
- Training completion rate improvement
- Driver retention (engaged drivers stay longer)

### For Drivers
- Points earned per week
- Rewards redeemed
- Streak length
- Leaderboard position

### For the App (Selling to Others)
- Daily active users (DAU)
- Challenge participation rate
- Store redemption rate
- Trial → paid conversion rate

---

## Next Steps

When you say "GO":

1. **Redesign Home screen** with new branding, company goal, better layout
2. **Build the Spin Wheel** - Engaging, animated, premium feel
3. **Create component library** - Cards, buttons, progress bars
4. **Add onboarding flow** - QR code, welcome spin
5. **Build social proof toasts** - Animated notifications

Ready when you are.
