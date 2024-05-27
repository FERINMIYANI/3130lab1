import React from 'react';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const getV = localStorage.getItem('visit');
    if (getV) {
      const newCount = parseInt(getV) + 1;
      localStorage.setItem('visit', newCount);
    } else {
      localStorage.setItem('visit', 1);
    }
  }, []);

  return (
    <div>
      <h1>Ferin Miyani B00914896</h1>
    </div>
  );
}

export default Home;