"use client";

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { LogOut, User, FileText, Settings, Bell } from 'lucide-react';

export default function DashboardPage() {
  const { user, signOut, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400"></div>
      </div>
    );
  }

  if (!user) {
    router.push('/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 gap-4 sm:gap-0">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Dashboard</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-white text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">
                {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              >
                <LogOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Card */}
        <div className="bg-black border border-gray-800 overflow-hidden shadow-xl rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">
                  User
                </h3>
                <p className="text-sm text-white">{user.email}</p>
                <p className="text-xs text-gray-400">
                  Member since {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Submissions Card */}
          <div className="bg-black border border-gray-800 overflow-hidden shadow-xl rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-teal-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      My Submissions
                    </dt>
                    <dd className="text-lg font-medium text-white">0</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3">
              <div className="text-sm">
                <a
                  href="/submit"
                  className="font-medium text-teal-400 hover:text-teal-300"
                >
                  Submit a paper
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-black border border-gray-800 overflow-hidden shadow-xl rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Settings className="h-6 w-6 text-teal-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Profile Settings
                    </dt>
                    <dd className="text-lg font-medium text-white">Manage</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3">
              <div className="text-sm">
                <a
                  href="/profile"
                  className="font-medium text-teal-400 hover:text-teal-300"
                >
                  Edit profile
                </a>
              </div>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-black border border-gray-800 overflow-hidden shadow-xl rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Bell className="h-6 w-6 text-teal-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">
                      Notifications
                    </dt>
                    <dd className="text-lg font-medium text-white">0</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3">
              <div className="text-sm">
                <span className="font-medium text-gray-400">No new notifications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-black border border-gray-800 shadow-xl rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-white mb-4">
                Recent Activity
              </h3>
              <div className="text-center py-8">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-white">No activity yet</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Start by submitting a paper or browsing journals.
                </p>
                <div className="mt-6">
                  <a
                    href="/browse"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Browse Journals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
