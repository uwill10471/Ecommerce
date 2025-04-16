import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await fetch('http://localhost:5000/logout', { method: 'POST' });
      navigate('/');
    })();
  }, [navigate]);

  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold">Logging Out...</h2>
    </div>
  );
};

export default Logout;
