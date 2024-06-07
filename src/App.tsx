import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const routing = useRoutes(routes);
  return (
    <div>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      {routing}
    </div>
  );
};

export default App;
