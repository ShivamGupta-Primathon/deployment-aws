import React from 'react';

interface HelloProps {
  name: string;
}

const HelloComponent: React.FC<HelloProps> = () => {
  return (
    <div>
      <h1>Hello from Shivam</h1>
    </div>
  );
};

export default HelloComponent;