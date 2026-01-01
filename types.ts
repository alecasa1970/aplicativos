export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: TransactionType;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  icon: string;
  color: string;
}

export interface ChartData {
  month: string;
  income: number;
  expense: number;
}

export interface MonthlySummary {
  category: string;
  amount: number;
  icon: any;
}