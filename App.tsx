import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Categories from './components/Categories';
import { Bell, Search, User } from 'lucide-react';

const Header = () => (
  <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
    <div className="md:hidden font-bold text-xl text-blue-600">Financeiro360</div>
    <div className="hidden md:flex items-center w-96">
      <div className="relative w-full">
         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
         <input type="text" placeholder="Buscar..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>
      <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
        <div className="text-right hidden md:block">
          <p className="text-sm font-semibold text-gray-900">Olá, Rafael</p>
          <p className="text-xs text-gray-500">Premium Plan</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer">
           <img src="https://picsum.photos/100/100" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </header>
);

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f8fafc]">
        <Sidebar />
        <main className="flex-1 md:ml-64 transition-all duration-300">
          <Header />
          <div className="p-6 md:p-8 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;