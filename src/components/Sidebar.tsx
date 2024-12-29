import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Shield } from 'lucide-react';

interface SidebarProps {
  items: {
    icon: React.ElementType;
    label: string;
    href: string;
  }[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4">
      <div className="flex items-center gap-2 px-3 py-4">
        <Shield className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-semibold">InsuranceIQ</span>
      </div>
      <nav className="space-y-1 mt-8">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                location.pathname === item.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;