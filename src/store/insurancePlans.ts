import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface InsurancePlan {
  id: string;
  name: string;
  description: string;
  coverage: string;
  price: string;
  retailers: number;
  activePolicies: number;
  integrated?: boolean;
}

interface InsurancePlansStore {
  plans: InsurancePlan[];
  addPlan: (plan: Omit<InsurancePlan, 'id' | 'retailers' | 'activePolicies'>) => void;
  toggleIntegration: (planId: string) => void;
  removePlan: (planId: string) => void;
}

export const useInsurancePlans = create<InsurancePlansStore>()(
  persist(
    (set) => ({
      plans: [],
      addPlan: (plan) => set((state) => ({
        plans: [...state.plans, {
          ...plan,
          id: crypto.randomUUID(),
          retailers: 0,
          activePolicies: 0,
        }],
      })),
      toggleIntegration: (planId) => set((state) => ({
        plans: state.plans.map((plan) =>
          plan.id === planId
            ? { ...plan, integrated: !plan.integrated }
            : plan
        ),
      })),
      removePlan: (planId) => set((state) => ({
        plans: state.plans.filter((plan) => plan.id !== planId),
      })),
    }),
    {
      name: 'insurance-plans',
    }
  )
);