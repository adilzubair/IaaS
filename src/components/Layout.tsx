import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Store, Shield, LogOut } from 'lucide-react';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();
  const isRetailerPortal = location.pathname.startsWith('/retailer');

  const retailerNavItems = [
    { icon: Store, label: 'Retailer Portal', href: '/retailer' },
    { icon: ShoppingCart, label: 'Demo Checkout', href: '/checkout' },
    { icon: LogOut, label: 'Logout', href: '/login' },
  ];

  const insuranceNavItems = [
    { icon: Shield, label: 'Insurance Portal', href: '/insurance' },
    { icon: LayoutDashboard, label: 'Analytics', href: '/insurance/analytics' },
    { icon: LogOut, label: 'Logout', href: '/login' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar items={isRetailerPortal ? retailerNavItems : insuranceNavItems} />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;