import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
  const routing = useRoutes(routes);
  return (
    <div>
      <h1>My Vite React App</h1>
      {routing}
    </div>
  );
};

export default App;
