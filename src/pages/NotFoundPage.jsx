import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  const path = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-slate-300 font-display">404</h1>
            <div className="h-0.5 w-16 bg-slate-200 mx-auto" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-slate-800 font-display">
              Page Not Found
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-[15px]">
              The page{' '}
              <span className="font-medium text-slate-700">"{path}"</span> could
              not be found in this application.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 shadow-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

