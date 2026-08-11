import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: 'Sign Up Free - alapBD',
  description: 'Create your free end-to-end encrypted alapBD account.',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-6">
        <AuthLayout mode="register">
          <RegisterForm />
        </AuthLayout>
      </div>

      <Footer />
    </main>
  );
}
