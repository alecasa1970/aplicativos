import { ChartData, Transaction, Category } from './types';

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', description: 'Salário - 01/06', amount: 12450.00, date: '2023-06-01', category: 'Salário', type: 'income' },
  { id: '2', description: 'Supermercado - 03/06', amount: 850.00, date: '2023-06-03', category: 'Alimentação', type: 'expense' },
  { id: '3', description: 'Aluguel - 05/06', amount: 2500.00, date: '2023-06-05', category: 'Moradia', type: 'expense' },
  { id: '4', description: 'Freelance Design', amount: 3200.00, date: '2023-06-10', category: 'Freelance', type: 'income' },
  { id: '5', description: 'Uber', amount: 45.60, date: '2023-06-12', category: 'Transporte', type: 'expense' },
  { id: '6', description: 'Spotify Assinatura', amount: 21.90, date: '2023-06-15', category: 'Lazer', type: 'expense' },
  { id: '7', description: 'Restaurante Outback', amount: 180.00, date: '2023-06-18', category: 'Alimentação', type: 'expense' },
  { id: '8', description: 'Academia', amount: 120.00, date: '2023-06-20', category: 'Saúde', type: 'expense' },
  { id: '9', description: 'Dividendos', amount: 450.00, date: '2023-06-25', category: 'Investimentos', type: 'income' },
];

export const CHART_DATA: ChartData[] = [
  { month: 'JAN', income: 4000, expense: 2400 },
  { month: 'FEV', income: 5500, expense: 3800 },
  { month: 'MAR', income: 6000, expense: 4200 },
  { month: 'ABR', income: 11000, expense: 5000 },
  { month: 'MAI', income: 9500, expense: 7500 },
  { month: 'JUN', income: 14500, expense: 5200 },
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Salário', type: 'income', icon: 'Wallet', color: 'text-blue-600' },
  { id: '2', name: 'Freelance', type: 'income', icon: 'Briefcase', color: 'text-blue-500' },
  { id: '3', name: 'Investimentos', type: 'income', icon: 'TrendingUp', color: 'text-emerald-600' },
  { id: '4', name: 'Moradia', type: 'expense', icon: 'Home', color: 'text-rose-500' },
  { id: '5', name: 'Alimentação', type: 'expense', icon: 'Utensils', color: 'text-orange-500' },
  { id: '6', name: 'Transporte', type: 'expense', icon: 'Car', color: 'text-slate-600' },
  { id: '7', name: 'Lazer', type: 'expense', icon: 'Music', color: 'text-purple-500' },
  { id: '8', name: 'Saúde', type: 'expense', icon: 'Heart', color: 'text-red-500' },
  { id: '9', name: 'Educação', type: 'expense', icon: 'GraduationCap', color: 'text-indigo-500' },
];
