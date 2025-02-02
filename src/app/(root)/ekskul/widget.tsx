import React from 'react';

interface WidgetProps {
  title: string;
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default Widget;
