"use client";
import { useState } from 'react';
import { FaHome, FaUser, FaStore, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './style.css'

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderSection = () => {
    const table = (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Jadval qatorlarini qo'shishingiz mumkin */}
        </tbody>
      </table>
    );

    switch (selectedSection) {
      case 'customer':
        return (
          <div>
            <h1>Customer Page</h1>
            {table}
          </div>
        );
      case 'seller':
        return (
          <div>
            <h1>Seller Page</h1>
            {table}
          </div>
        );
      case 'store':
        return (
          <div>
            <h1>Store Page</h1>
            {table}
          </div>
        );
      case 'settings':
        return (
          <div>
            <h1>Settings Page</h1>
            {table}
          </div>
        );
      case 'logout':
        return (
          <div>
            <h1>You have been logged out</h1>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome to the Dashboard</h1>
            {table}
          </div>
        );
    }
  };

  return (
    <div className="container">
      <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars />
      </button>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>
              <button onClick={() => setSelectedSection('home')}>
                <FaHome /> Home
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection('customer')}>
                <FaUser /> Customer
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection('seller')}>
                <FaStore /> Seller
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection('store')}>
                <FaStore /> Store
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection('settings')}>
                <FaCog /> Settings
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedSection('logout')}>
                <FaSignOutAlt /> Log out
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        {renderSection()}
      </main>
    </div>
  );
}
