ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS block_trackers boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS block_ads boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS https_only boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS ai_suggestions boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS telemetry boolean NOT NULL DEFAULT false;