import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - alapBD',
  description: 'Log in to your encrypted alapBD account.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-6">
        <AuthLayout mode="login">
          <LoginForm />
        </AuthLayout>
      </div>

      <Footer />
    </main>
  );
}
