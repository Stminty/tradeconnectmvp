"use client"

import { useState } from 'react';

export default function TradeConnectMVP() {
  const [currentPage, setCurrentPage] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const HomePage = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Find a Local Tradesperson</h1>
      <p>Post your job below and we&apos;ll connect you with reliable tradespeople near you.</p>
      
      {formSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Job posted successfully! We&apos;ll connect you with local tradespeople soon.
        </div>
      )}
      
      <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <input 
          name="name" 
          placeholder="Your Name" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="phone" 
          placeholder="Phone Number" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          name="location" 
          placeholder="Location / Eircode" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <select 
          name="trade" 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Trade</option>
          <option>Plumber</option>
          <option>Electrician</option>
          <option>Carpenter</option>
          <option>Welder</option>
          <option>Handyman</option>
          <option>Landscaper</option>
          <option>Cleaner</option>
          <option>Painter & Decorator</option>
          <option>Roofer</option>
          <option>Tiler</option>
          <option>Plasterer</option>
          <option>Builder</option>
          <option>Flooring Specialist</option>
          <option>Window & Door Installer</option>
          <option>Heating Engineer</option>
          <option>Appliance Repair</option>
          <option>Locksmith</option>
          <option>Other</option>
        </select>
        <select 
          name="priority" 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Job Priority</option>
          <option>No Rush - Just getting quotes</option>
          <option>This month</option>
          <option>This week</option>
          <option>ASAP</option>
        </select>
        <textarea 
          name="details" 
          placeholder="Job details" 
          required 
          className="w-full p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photos (optional)
          </label>
          <input 
            type="file" 
            name="photos" 
            multiple 
            accept="image/*" 
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
          />
          <p className="text-xs text-gray-500">
            You can upload up to 3 photos (max 5MB each). This helps tradespeople understand your job better.
          </p>
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Post Job
        </button>
      </form>
      
      <p className="text-sm text-center">
        Are you a tradesperson?{' '}
        <button 
          onClick={() => setCurrentPage('trades')}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Join TradeConnect
        </button>
      </p>
    </div>
  );

  const TradesPage = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Home
        </button>
      </div>
      
      <h1 className="text-2xl font-bold">Join TradeConnect</h1>
      <p>We&apos;re looking for reliable tradespeople across Ireland.</p>
      
      {formSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thanks for signing up! We&apos;ll be in touch soon with job opportunities.
        </div>
      )}
      
      <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <input 
          name="name" 
          placeholder="Full Name" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <input 
          name="phone" 
          placeholder="Phone Number" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <input 
          name="email" 
          placeholder="Email" 
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <input 
          name="area" 
          placeholder="Areas You Serve" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <input 
          name="trade" 
          placeholder="Your Trade (e.g. Plumber)" 
          required 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
        />
        <button 
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto p-4">
        {currentPage === 'home' ? <HomePage /> : <TradesPage />}
      </div>
    </div>
  );
}