import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [nav, setNav] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('/api/nav/')
      .then(res => res.json())
      .then(data => setNav(data));
  }, []);

  return (
    <nav style={{
      display: 'flex',
      gap: 20,
      padding: 10,
      background: '#eee',
      alignItems: 'center'
    }}>
      
      {/* API navigation items */}
      {nav.map(item => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            fontWeight: location.pathname === item.path ? 'bold' : 'normal'
          }}
        >
          {item.name}
        </Link>
      ))}

      {/* STATIC AUTH LINKS */}
      <Link 
        to="/login"
        style={{
          fontWeight: location.pathname === "/login" ? 'bold' : 'normal'
        }}
      >
        Login
      </Link>

      <Link 
        to="/register"
        style={{
          fontWeight: location.pathname === "/register" ? 'bold' : 'normal'
        }}
      >
        Signup
      </Link>

      <Link 
        to="/profile"
        style={{
          fontWeight: location.pathname === "/profile" ? 'bold' : 'normal'
        }}
      >
        Profile
      </Link>
    </nav>
  );
}
