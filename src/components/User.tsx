import React from 'react';
import { useAuth } from '../context/AuthContext';

const User: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in to see user information.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
