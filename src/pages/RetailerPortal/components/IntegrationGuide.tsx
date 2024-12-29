import React from 'react';
import { Code2 } from 'lucide-react';

const IntegrationGuide = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Integration Guide</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium flex items-center gap-2">
            <Code2 className="h-5 w-5 text-blue-600" />
            Quick Integration
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Add this script to your checkout page:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
            {`<script src="https://api.insuranceiq.com/widget.js"></script>`}
          </pre>
        </div>
        <div className="text-sm text-gray-600">
          <p>This will automatically add the insurance option to your checkout flow.</p>
          <p className="mt-2">Need help? Contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;