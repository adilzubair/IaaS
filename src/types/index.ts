export interface InsurancePolicy {
  policy_id: string;
  name: string;
  price: string;
  coverage: string;
}

export interface Transaction {
  transaction_id: string;
  status: 'Success' | 'Failed';
  commission_split: {
    insurance_company: string;
    retailer: string;
    platform: string;
  };
}

export interface Analytics {
  total_transactions: number;
  total_revenue: string;
  commission_split: {
    insurance_companies: string;
    retailers: string;
    platform: string;
  };
}

export interface User {
  id: string;
  type: 'insurance' | 'retailer';
  name: string;
}