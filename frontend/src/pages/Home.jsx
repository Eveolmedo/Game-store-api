import React, { useState } from 'react';
import GameList from '../components/GameList';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('role') || '');
  
  return (
    <div>
      <Header />
      <div>
      {!userRole ? (
        <LoginForm setUserRole={setUserRole} />
      ) : (
        <GameList />
      )} 
    </div>
      <Footer />
    </div>
  );
};

export default Home;