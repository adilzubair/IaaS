import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

const StatsCard = ({ title, value, icon: Icon, trend }: StatsCardProps) => {
  const isPositive = trend.startsWith('+');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <p className={cn(
        'text-sm mt-2',
        isPositive ? 'text-green-600' : 'text-red-600'
      )}>
        {trend} from last month
      </p>
    </div>
  );
};

export default StatsCard;