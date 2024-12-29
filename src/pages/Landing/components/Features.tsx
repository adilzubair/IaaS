
import { Shield, Store, Zap, PieChart, Lock, Clock } from 'lucide-react';

const features = [
  {
    name: 'Easy Integration',
    description: 'Add insurance options to your checkout with just a few lines of code.',
    icon: Zap,
  },
  {
    name: 'Retailer Dashboard',
    description: 'Track sales, commissions, and customer insights in real-time.',
    icon: Store,
  },
  {
    name: 'Secure Transactions',
    description: 'Enterprise-grade security for all insurance transactions.',
    icon: Lock,
  },
  {
    name: 'Analytics',
    description: 'Detailed analytics and reporting for data-driven decisions.',
    icon: PieChart,
  },
  {
    name: 'Instant Coverage',
    description: 'Immediate insurance coverage for your customers.',
    icon: Shield,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock support for you and your customers.',
    icon: Clock,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive tools and features to help you manage insurance offerings effectively.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
