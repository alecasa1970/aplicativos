import React from 'react';
import { Plus, MoreHorizontal, Wallet, Briefcase, TrendingUp, Home, Utensils, Car, Music, Heart, GraduationCap } from 'lucide-react';
import { CATEGORIES } from '../constants';

const IconMap: Record<string, any> = {
    Wallet, Briefcase, TrendingUp, Home, Utensils, Car, Music, Heart, GraduationCap
};

const Categories = () => {
  const incomeCategories = CATEGORIES.filter(c => c.type === 'income');
  const expenseCategories = CATEGORIES.filter(c => c.type === 'expense');

  const CategoryList = ({ title, items, type, buttonColor }: { title: string, items: typeof CATEGORIES, type: 'income' | 'expense', buttonColor: string }) => (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-bold ${type === 'income' ? 'text-blue-600' : 'text-rose-600'}`}>{title}</h2>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${buttonColor} hover:opacity-90`}>
                  <Plus className="w-4 h-4" /> Nova {type === 'income' ? 'Receita' : 'Despesa'}
              </button>
          </div>
          <div className="space-y-1">
              {items.map((cat) => {
                  const Icon = IconMap[cat.icon] || Wallet;
                  return (
                      <div key={cat.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl group transition-all cursor-pointer border border-transparent hover:border-gray-100">
                          <div className="flex items-center gap-4">
                              <div className={`p-2.5 rounded-lg bg-opacity-10 ${type === 'income' ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-500'}`}>
                                  <Icon className="w-5 h-5" />
                              </div>
                              <span className="font-medium text-gray-700">{cat.name}</span>
                          </div>
                          <button className="text-gray-300 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all">
                              <MoreHorizontal className="w-5 h-5" />
                          </button>
                      </div>
                  );
              })}
              <div className="flex items-center justify-between p-4 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-dashed border-gray-200 mt-2">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                          <MoreHorizontal className="w-5 h-5" />
                      </div>
                      <span className="font-medium">Outros</span>
                  </div>
                   <MoreHorizontal className="w-5 h-5 opacity-0" />
              </div>
          </div>
      </div>
  );

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Categorias</h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
          <CategoryList 
            title="Receitas" 
            items={incomeCategories} 
            type="income" 
            buttonColor="bg-blue-600" 
          />
          <CategoryList 
            title="Despesas" 
            items={expenseCategories} 
            type="expense" 
            buttonColor="bg-rose-600" 
          />
      </div>
    </div>
  );
};

export default Categories;