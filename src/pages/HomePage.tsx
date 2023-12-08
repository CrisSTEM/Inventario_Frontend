// src/pages/HomePage.tsx
import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <header className="text-center my-10">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido ackerman</h1>
            <div className="logo my-5">
              <img src="/Logo.png" alt="Another Logo" className="mx-auto" />
            </div>
      </header>
    </Layout>
  );
};

export default HomePage;