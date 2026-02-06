'use client'; // 💡 important for useState

import { useState } from 'react';
import LoginPage from './login/page';
import SignUpPage from './signup/page';

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginPage />
          <p className="text-center mt-4">
            Not yet have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer underline"
              onClick={() => setShowLogin(false)}
            >
              Register here
            </span>
          </p>
        </>
      ) : (
        <>
          <SignUpPage />
          <p className="text-center mt-4">
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer underline"
              onClick={() => setShowLogin(true)}
            >
              Login here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
