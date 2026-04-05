# Road Boss - Full Product Blueprint
## Tagline: "Safety Pays"

---

## DESIGN PHILOSOPHY

Premium. Rugged. Mature.

Road Boss must look like something a serious professional respects.
Think American Express Black Card meets a heavy-duty truck brand.
Every UI decision passes one test: would a 15-year CDL driver take this seriously?

- Dark, rich palette - no bright primaries, no cartoon gradients
- Scratch cards are a sleek card-reveal, not a spinning cartoon wheel
- Typography is bold and industrial, not whimsical
- Animations are smooth and purposeful, never bouncy

---

## 1. BRAND AND DESIGN IDENTITY

Name: Road Boss
Tagline: Safety Pays
Primary Palette: Amazon dark blue #1A2B4A | Jet black #0D0D0D | Chrome silver #C0C0C0
Accent Palette: Deep gold #C9A84C | Dark maroon #6B1F2A | Warm brown #4A2C1A
Vibe: Rugged premium - blacked-out semi with chrome trim. Not a casino. Not a toy.
Game Elements: Scratch card only - dark metallic card with gold foil reveal. Luxury feel.
Hero Visual: Dark blue Amazon-style semi-truck + trailer, black chrome wheels
Typography: Barlow Condensed (headings) + Inter (body) - industrial, legible, serious
FireCrawl Targets: Starbucks Rewards, McDonalds app, Subway rewards, Dutch Brothers app

FireCrawl scrapes color systems, card layouts, animation timings, and reward UI patterns.
We extract what works and apply it through our dark, mature aesthetic.

---

## 2. TECH STACK

Frontend:    Next.js 14 (App Router) - mobile-first web app, SSR, API routes
Backend/DB:  Supabase - PostgreSQL, auth, real-time, file storage
Auth:        Supabase Phone OTP - driver logs in with phone, receives SMS code
Excel:       xlsx npm library - parse Sunday Amazon upload
Real-time:   Supabase Realtime - challenge alerts, live leaderboard
Email:       Resend - gift card delivery, transactional emails
Design Intel: FireCrawl - scrape reward app UIs for design inspiration
Styling:     CSS Modules + CSS variables - full custom design system

---

## 3. USER ROLES

Super Admin (Road Boss owner):
- View ALL companies across the platform
- Manage fleet owner accounts
- Platform-wide configuration

Fleet Admin (you now, other owners later):
- Add / edit / deactivate drivers
- Upload Sunday Excel file with preview before commit
- Create and push challenges live
- Post Driver HQ content (announcements, policies, messages, prizes)
- Approve or deny reward redemptions
- View all driver scores and point history

Driver:
- Phone OTP login (admin pre-registers them - they just show up and log in)
- Mobile dashboard: points, grade, rank, challenges, rewards
- Redeem rewards (gated behind monthly safety video completion)
- Scratch card when randomly triggered

---

## 4. SCORING SYSTEM

Grade Scale:
  A+  = 1,200 and above
  A   = 1,000 to 1,199
  B   = 800 to 999
  C   = 600 to 799
  D   = 400 to 599
  F   = Below 400

Metrics from Sunday Excel Upload:
  SAFETY
    Distracted driving alerts    -> Deduction
    Drowsy driving alerts        -> Deduction
    Speeding violations          -> Deduction
    Traffic light/sign violations -> Deduction
    Following distance alerts    -> Deduction
    Hard braking events          -> Deduction
    U-turns                      -> Deduction
  COMPLIANCE
    DVI pre-trip inspection      -> Deduction if missed
    DVI post-trip inspection     -> Deduction if missed
    Monthly safety videos        -> Required to unlock redemption
  PERFORMANCE
    On-time stop score (0-100)   -> Direct contribution
    Late stops 100-120 min       -> Minor deduction
    Late stops 121+ min          -> Major deduction
    Green zone minutes analyzed  -> Bonus for high count

Excel Matching:
- Match key: first initial + period + last name (example: J.Smith)
- Upload shows full preview table before committing
- Mismatches flagged in amber for admin to correct

Points Rules:
- Points expire monthly (use them or lose them)
- Leaderboard resets monthly
- Historical scores kept forever for reference

---

## 5. DRIVER DASHBOARD (Mobile-First)

Navigation: Bottom tab bar, 4 tabs, clean icons + labels

TAB 1 - DRIVER HQ
  Owner announcements (red unread dot indicator)
  Company policy updates
  Special prize announcements (paid day off, game tickets, bonuses)
  Personal owner messages to the team
  New challenge alerts

TAB 2 - CHALLENGES
  Active weekly/daily challenges pushed live by admin
  Types: Zero hard braking / Watch safety videos / Hit top 5 / Custom
  Each card shows: title, deadline, reward
  Complete a challenge -> 1-in-5 random chance triggers a scratch card
  Challenge history (completions and wins)

TAB 3 - LEADERBOARD
  Top 10 drivers ranked by monthly points
  Columns: Rank, Name, Points, Grade badge
  Driver's own rank always shown even if outside top 10
  Monthly reset countdown visible
  Past months' final rankings in archive

TAB 4 - REWARDS
  Points balance (large, prominent, count-up animation on load)
  Grade badge (color-coded, subtle metallic glow)
  Safety video gate (redemption locked if monthly videos not watched)
  Reward Shop: Amazon gift card links $10/$25/$50/$100, admin prizes
  Scratch card: dark metallic card with gold foil reveal (no confetti, no cartoon)
  Redemption history: Pending / Approved / Sent
  All redemptions require admin approval before gift card is sent

PROFILE (top-right icon, accessible from any tab)
  Name, current grade, monthly points
  Phone and email on file
  Points history by month (simple chart)
  Logout

---

## 6. ADMIN DASHBOARD

Overview Panel:
  Active drivers, average score, grade distribution
  Pending redemption approvals (action required)
  Recent activity feed

Driver Management:
  Add: first name, last name, phone, email
  Driver auto-receives OTP when they first log in
  Edit / deactivate
  View individual score history and point ledger

Sunday Excel Upload:
  1. Drop or select file
  2. System parses and shows preview table - each row matched to a driver
  3. Unmatched entries flagged in amber
  4. Admin confirms -> scores committed -> points updated immediately

Challenge Manager:
  Create: title, description, deadline, reward type and value
  Push live immediately -> all drivers see alert badge
  View completions per challenge
  Challenge archive

Driver HQ Publisher:
  Post announcements, policies, prize callouts, owner messages
  Goes live immediately with unread alert to all drivers
  Full post history

Redemption Queue:
  Pending list: driver name, points requested, reward type
  Approve -> gift card link auto-sent via email + SMS
  Deny -> driver notified with reason

Scratch Card Controls:
  Set trigger odds (default: 1-in-5 for challenge completion)
  View all triggered cards and prize log
  Manual trigger for one-off rewards

---

## 7. DATABASE SCHEMA (Supabase)

companies             (id, name, admin_user_id, created_at)
users                 (id, role, company_id, first_name, last_name, phone, email, created_at)
driver_scores         (id, driver_id, week_date, grade, raw_score, metrics_json, uploaded_by, created_at)
points_ledger         (id, driver_id, amount, type[earn|spend|expire], reason, month_year, created_at)
challenges            (id, company_id, title, description, reward_type, reward_value, deadline, is_active)
challenge_completions (id, challenge_id, driver_id, completed_at, scratch_card_triggered)
scratch_cards         (id, driver_id, prize_amount, prize_type, revealed_at, approved_at, sent_at)
redemptions           (id, driver_id, points_spent, reward_type, reward_value, status, approved_by, created_at)
announcements         (id, company_id, title, body, posted_by, posted_at)
safety_videos         (id, driver_id, month_year, watched_at, verified_by)

Row-Level Security on all tables.
Drivers see only their data. Admins see only their company.

---

## 8. SCRATCH CARD LOGIC

ON CHALLENGE COMPLETION:
  Roll random int 1-5
  If result == 1 -> trigger $5 scratch card

END OF MONTH (leaderboard close):
  Rank #1      -> Guaranteed $10 scratch card
  Rank #2-#3   -> 50% chance of $10 scratch card
  Rank #4-#10  -> 33% chance of $5 scratch card

ALL WINS:
  -> Admin notified in approval queue
  -> Admin approves
  -> Gift card link sent via email + SMS

CARD REVEAL UI:
  Dark metallic card surface
  Gold foil scratch animation on interaction
  Prize revealed underneath
  No confetti. No cartoon effects. Clean and premium.

---

## 9. MULTI-TENANT ARCHITECTURE

Phase 1 (Now):
  Single company record for your operation
  38 drivers
  You as Fleet Admin
  Test everything here first

Phase 2 (SaaS Launch):
  Each fleet owner gets their own isolated company record
  Supabase RLS ensures zero data bleed between tenants
  Each admin sees only their company, their drivers, their challenges
  Super admin (you) sees all companies on the platform
  Future: Stripe subscription billing, optional per-tenant company branding

---

## 10. BUILD PHASES

PHASE 1 - FOUNDATION
  FireCrawl scraping: extract design patterns from target apps
  Next.js 14 project scaffold in workspace
  Supabase project: create schema + RLS policies
  Design system: CSS variables (color tokens, type scale, spacing, shadows)
  Hero component: dark semi-truck + trailer

PHASE 2 - AUTH AND ADMIN CORE
  Phone OTP login flow (driver-facing)
  Admin email/password login
  Driver management UI (add/edit/deactivate)
  Excel upload with preview and confirm

PHASE 3 - DRIVER DASHBOARD
  Bottom tab navigation (mobile)
  Driver HQ tab
  Challenges tab with completion flow
  Leaderboard tab (Top 10 + monthly archive)
  Rewards tab (points, grade, shop, scratch card)
  Profile page with history chart

PHASE 4 - GAME LAYER (Premium Execution)
  Scratch card: dark metallic card, gold foil CSS animation
  Points balance: smooth count-up on load
  Grade badge: metallic glow on render
  Challenge completion: clean checkmark and brief success state
  Leaderboard: smooth rank-change transitions

PHASE 5 - REDEMPTION AND NOTIFICATIONS
  Admin approval workflow
  Gift card link delivery via Resend and SMS
  Supabase Realtime challenge push notifications
  Monthly reset Edge Function (scheduled, automatic)
  Historical score chart on profile

PHASE 6 - MULTI-TENANT AND SAAS
  Fleet owner onboarding flow
  Super admin portal
  Stripe subscription billing
  Per-tenant company name branding
