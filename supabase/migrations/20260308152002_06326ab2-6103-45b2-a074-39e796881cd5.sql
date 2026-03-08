
CREATE TABLE public.battle_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  wins integer NOT NULL DEFAULT 0,
  losses integer NOT NULL DEFAULT 0,
  elo_rating integer NOT NULL DEFAULT 1000,
  total_battles integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE public.battle_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view battle stats" ON public.battle_stats FOR SELECT USING (true);
CREATE POLICY "Users can insert own battle stats" ON public.battle_stats FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own battle stats" ON public.battle_stats FOR UPDATE USING (auth.uid() = user_id);
