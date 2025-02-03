import React, { useState } from 'react';
import GameList from '../components/GameList.jsx';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

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