import React, { useState } from 'react';
import { Search, Filter, Download, ChevronLeft, ChevronRight, Briefcase, Music, ShoppingCart, Car, Utensils, Home } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../constants';
import { Transaction } from '../types';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
        case 'lazer': return <Music className="w-4 h-4" />;
        case 'alimentação': return <ShoppingCart className="w-4 h-4" />;
        case 'transporte': return <Car className="w-4 h-4" />;
        case 'moradia':
        case 'renda': return <Briefcase className="w-4 h-4" />;
        default: return <Utensils className="w-4 h-4" />;
    }
}

const Transactions = () => {
  const [filter, setFilter] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = MOCK_TRANSACTIONS.filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filter === 'Todas' 
        ? true 
        : filter === 'Entradas' 
            ? t.type === 'income' 
            : t.type === 'expense';
      return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Histórico de Transações</h1>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                <Download className="w-4 h-4" /> Exportar
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Filter Bar */}
        <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Pesquisar transações..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
                {['Todas', 'Entradas', 'Saídas'].map((f) => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            filter === f 
                                ? f === 'Entradas' ? 'bg-emerald-100 text-emerald-700' : f === 'Saídas' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        {f}
                    </button>
                ))}
                 <div className="relative">
                     <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded-lg text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                         <option>Outubro 2023</option>
                         <option>Setembro 2023</option>
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                 </div>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                        <th className="px-6 py-4">Data</th>
                        <th className="px-6 py-4">Descrição</th>
                        <th className="px-6 py-4">Categoria</th>
                        <th className="px-6 py-4 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {filteredTransactions.map((t) => (
                        <tr key={t.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4 text-sm text-gray-500 font-medium">{t.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t.description}</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                                    {getCategoryIcon(t.category)}
                                    {t.category}
                                </span>
                            </td>
                            <td className={`px-6 py-4 text-sm font-bold text-right ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-gray-600">Página 1 de 12</span>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;