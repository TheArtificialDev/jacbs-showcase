"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { User, Mail, Calendar, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.user_metadata?.first_name || '',
        lastName: user.user_metadata?.last_name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    
    try {
      // Here you would update the user profile in Supabase
      // For now, we'll just simulate a save
      setTimeout(() => {
        setMessage('Profile updated successfully!');
        setIsEditing(false);
        setIsSaving(false);
      }, 1000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile. Please try again.');
      setIsSaving(false);
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
    <div className="min-h-screen bg-black py-12 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Dashboard */}
        <Link
          href="/dashboard"
          className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Profile Header */}
        <div className="bg-black border border-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-8">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">
                  User Profile
                </h1>
                <p className="text-teal-100">{user.email}</p>
                <p className="text-teal-200 text-sm">
                  Member since {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-6 py-8">
            {message && (
              <div className={`mb-6 p-4 rounded-md ${
                message.includes('Error') 
                  ? 'bg-red-900/20 text-red-300 border border-red-800' 
                  : 'bg-teal-900/20 text-teal-300 border border-teal-800'
              }`}>
                {message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              {/* Personal Information */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-white">Personal Information</h2>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center px-3 py-2 border border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white">
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-white">{formData.firstName || 'Not provided'}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white">
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-white">{formData.lastName || 'Not provided'}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email Address
                    </label>
                    <div className="mt-1 flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-white">{formData.email}</p>
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      Email cannot be changed. Contact support if you need to update your email.
                    </p>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setMessage('');
                        // Reset form data
                        setFormData({
                          firstName: user.user_metadata?.first_name || '',
                          lastName: user.user_metadata?.last_name || '',
                          email: user.email || '',
                        });
                      }}
                      className="px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSaving ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Account Information */}
              <div className="border-t border-gray-800 pt-6">
                <h2 className="text-lg font-medium text-white mb-4">Account Information</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-400">Account created:</span>
                    <span className="ml-2 text-sm text-white">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-400">Email verified:</span>
                    <span className={`ml-2 text-sm ${user.email_confirmed_at ? 'text-teal-400' : 'text-red-400'}`}>
                      {user.email_confirmed_at ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
