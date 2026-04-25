export interface Plan {
  id: string;
  name: string;
  description: string | null;
  price_monthly: number;
  price_yearly: number;
  feature_flags: string[] | null;
  plan_code: string;
  display_order: number;
  trial_period_days: number | null;
  resource_limits: {
    max_users: number | null;
    max_projects: number | null;
    storage_gb: number | null;
  } | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
