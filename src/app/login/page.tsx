import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - alapBD',
  description: 'Log in to your encrypted alapBD account.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <LoginForm />
      </div>

      <Footer />
    </main>
  );
}
