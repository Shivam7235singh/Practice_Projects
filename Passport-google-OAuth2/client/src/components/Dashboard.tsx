import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      {user ? (
        <div className='bg-white p-4 rounded shadow-md text-center'>
          <h1 className='text-2xl font-bold'>
            Welcome {user.displayName}
          </h1>
          <p className='text-gray-600'>
            Email: {user.emails?.[0]?.value}
          </p>
          <img
            src={user.photos?.[0]?.value}
            alt='User Pic'
            className='rounded-full w-24 h-24 mt-4 mx-auto'
          />
          <br />
          <a
            href='http://localhost:5000/auth/logout'
            className='text-red-500 hover:underline'
          >
            Logout
          </a>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Dashboard;
