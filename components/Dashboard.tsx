import React from 'react';
import { ArrowUp, ArrowDown, TrendingUp, Home, ShoppingCart, Car, Zap, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_DATA, MOCK_TRANSACTIONS } from '../constants';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const Card = ({ title, value, trend, trendValue, type }: { title: string, value: number, trend?: 'up' | 'down', trendValue?: string, type?: 'balance' | 'income' | 'expense' }) => {
  const isBalance = type === 'balance';
  const isIncome = type === 'income';
  const isExpense = type === 'expense';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg ${isBalance ? 'bg-blue-50' : isIncome ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          {isBalance && <DollarSign className="w-5 h-5 text-blue-600" />}
          {isIncome && <ArrowUp className="w-5 h-5 text-emerald-600" />}
          {isExpense && <ArrowDown className="w-5 h-5 text-rose-600" />}
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold text-gray-900">{formatCurrency(value)}</h2>
      </div>
      <div className="mt-2 flex items-center text-sm">
        {trend === 'up' ? (
          <span className="text-emerald-600 font-medium flex items-center bg-emerald-50 px-1.5 py-0.5 rounded text-xs">
            <TrendingUp className="w-3 h-3 mr-1" /> {trendValue}
          </span>
        ) : (
          <span className="text-rose-600 font-medium flex items-center bg-rose-50 px-1.5 py-0.5 rounded text-xs">
             <TrendingUp className="w-3 h-3 mr-1 rotate-180" /> {trendValue}
          </span>
        )}
        <span className="text-gray-400 ml-2 text-xs">vs. mês anterior</span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Visão Geral</h1>
        <div className="text-sm text-gray-500">
            Última atualização: Hoje, 14:30
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Saldo Atual" value={12450.00} trend="up" trendValue="+ 12%" type="balance" />
        <Card title="Receitas do Mês" value={8500.00} trend="up" trendValue="+ R$ 200,00" type="income" />
        <Card title="Despesas do Mês" value={4200.00} trend="down" trendValue="+ R$ 150,00" type="expense" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Evolução Financeira</h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-gray-600">Receitas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="text-gray-600">Despesas</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  itemStyle={{fontSize: '12px', fontWeight: 600}}
                />
                <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                <Area type="monotone" dataKey="expense" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorExpense)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 text-lg mb-6">Resumo do Mês</h3>
          <div className="space-y-6">
             {[
               { icon: Home, label: 'Moradia', amount: 12450.00, color: 'text-gray-600' },
               { icon: ShoppingCart, label: 'Alimentação', amount: -8500.00, color: 'text-gray-600' },
               { icon: Car, label: 'Transporte', amount: -300.00, color: 'text-gray-600' },
               { icon: Home, label: 'Aluguel', amount: -500.00, color: 'text-gray-600' },
               { icon: DollarSign, label: 'Salário', amount: 30.00, color: 'text-gray-600' }
             ].map((item, idx) => (
               <div key={idx} className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <item.icon className={`w-5 h-5 text-gray-400`} />
                   <span className="text-gray-600 font-medium">{item.label}</span>
                 </div>
                 <span className={`font-semibold ${item.amount > 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
                   {item.amount > 0 ? '' : '- '}{formatCurrency(Math.abs(item.amount))}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-lg">Transações Recentes</h3>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">Ver todas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            {MOCK_TRANSACTIONS.slice(0, 6).map((t, idx) => (
                <div key={t.id} className={`p-4 flex items-center justify-between ${idx % 2 === 0 ? 'md:border-r border-gray-100' : ''} border-b border-gray-100 hover:bg-gray-50 transition-colors`}>
                    <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-full ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                            {t.type === 'income' ? <DollarSign className="w-5 h-5"/> : <ShoppingCart className="w-5 h-5"/>}
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">{t.description}</p>
                            <p className="text-xs text-gray-500">{t.category} • {t.date}</p>
                        </div>
                    </div>
                    <span className={`font-semibold ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;