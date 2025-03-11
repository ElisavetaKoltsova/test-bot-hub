export type UserData = {
  email: string;
  token: string;
};

export type Role = 'USER' | 'ADMIN';

export type Subscription = {
  id:             string;
  plan_id:        string;
  user_id:        string;
  enterprise_id:  string;
  balance:        number;
  payment_plan:   string;
  hard_limit:     number;
  soft_limit:     number;
  credit_limit:   number;
  system_limit:   number;
  created_at:     Date;
};

export type User = {
  id: string;
  email: string;
  tg_id: string;
  name: string;
  avatar: string;
  role: Role;
  created_at: Date;
  emailVerified: boolean;
  useEncryption: boolean;
  subscription: Subscription;
};