import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProgrammePage from './pages/ProgrammePage';
import ApplyPage from './pages/ApplyPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/writing-coaching"
          element={<ProgrammePage programmeKey="writing" />}
        />
        <Route
          path="/relationship-coaching"
          element={<ProgrammePage programmeKey="relationships" />}
        />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

