import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const API_URL = 'http://localhost:3001/api/intern';

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      setError(null);
      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setInternData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Fetch error:', error);
          setError('Failed to load data. Please ensure the Node.js backend is running on port 3001.');
          setLoading(false);
        });
    }
  }, [isLoggedIn]);

  const LoginPage = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 sm:mx-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Intern Dashboard
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          This is a dummy login page. Click the button to proceed.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
        </div>
        <button
          onClick={handleLogin}
          className="mt-6 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 dark:bg-gray-900 font-inter">
      <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md mb-6">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">Intern Dashboard</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-300"
        >
          Logout
        </button>
      </header>

      {loading && (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
          <p>Loading intern data...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center text-red-500 mt-10">
          <p>{error}</p>
        </div>
      )}

      {internData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Intern Details Card */}
          <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome, {internData.name}!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
              You're doing great! Keep up the hard work.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-500 dark:text-gray-400">Your Referral Code</p>
                <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-1">{internData.referral_code}</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Donations Raised</p>
                <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mt-1">
                  ${internData.donations_raised.toLocaleString()}
                </p>
              </div>
            </div>
            
            {/* Rewards Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rewards & Unlockables</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {internData.rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      reward.unlocked
                        ? 'bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700'
                        : 'bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`text-2xl ${reward.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                        {reward.unlocked ? '🏆' : '🔒'}
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{reward.name}</h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{reward.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Card */}
          <div className="lg:col-span-1 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Leaderboard</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {internData.leaderboard
                .sort((a, b) => b.donations_raised - a.donations_raised)
                .map((intern, index) => (
                  <li key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-400 w-6 text-center">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {intern.name}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      ${intern.donations_raised.toLocaleString()}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  return isLoggedIn ? <Dashboard /> : <LoginPage />;
};

export default App;
