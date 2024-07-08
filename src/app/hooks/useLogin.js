import { useState } from 'react';
import { useRouter } from 'next/router';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace this with your actual API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      
      // Handle successful login (e.g., store token, update user state)
      localStorage.setItem('token', data.token);

      // Redirect to dashboard or home page
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}