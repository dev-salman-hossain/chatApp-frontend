import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: 'Sign Up Free - alapBD',
  description: 'Create your free end-to-end encrypted alapBD account.',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <RegisterForm />
      </div>

      <Footer />
    </main>
  );
}
