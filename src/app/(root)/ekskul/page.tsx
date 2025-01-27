import React from 'react';
import WidgetList from './widgetList';
import ActivityCards from './card';

const Ekstrakurikuler: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Content: Cards */}
        <div className="lg:col-span-2">
          <ActivityCards />
        </div>

        {/* Right Content: Widgets */}
        <div className="space-y-4">
          <WidgetList />
        </div>
      </div>
    </div>
  );
};

export default Ekstrakurikuler;
