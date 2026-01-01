import React from 'react';
import { LayoutDashboard, ArrowRightLeft, PieChart, Wallet, Settings, List } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: LayoutDashboard, label: 'Painel', path: '/' },
    { icon: ArrowRightLeft, label: 'Transações', path: '/transactions' },
    { icon: PieChart, label: 'Relatórios', path: '/reports' },
    { icon: Wallet, label: 'Orçamento', path: '/budget' },
    { icon: List, label: 'Categorias', path: '/categories' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col shadow-sm z-10 hidden md:flex">
      <div className="p-6 flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">Financeiro360</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
        >
          <Settings className="w-5 h-5 text-gray-400" />
          Configurações
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;