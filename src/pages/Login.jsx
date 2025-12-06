import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-bg-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <Link to="/" className="inline-block">
            <div className="w-20 h-20 bg-brand-orange flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 rounded-lg">
              ITG
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Welcome Back
          </h2>
          <p className="text-text-secondary">
            Sign in to access your ITG account
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up" data-aos-delay="100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-border-color rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-text-secondary">
                  Remember me
                </label>
              </div>

              <a href="#" className="text-sm text-brand-orange hover:text-orange-hover font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-orange text-white py-3 rounded-lg hover:bg-orange-hover transition font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-color"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-text-secondary">
                  New to ITG?
                </span>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6">
            <Link
              to="/"
              className="w-full flex justify-center items-center py-3 border-2 border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition font-semibold"
            >
              Create an Account
            </Link>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-sm text-text-secondary">
            Need help?{' '}
            <a href="#" className="text-brand-orange hover:text-orange-hover font-medium">
              Contact Support
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-text-secondary hover:text-text-primary inline-flex items-center">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;