import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Fallback } from './exports/exports';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const EnterOTP = lazy(() => import('./pages/EnterOTP/EnterOTP'));
const Error404 = lazy(() => import('./pages/Error404/Error404'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/enter-otp" element={<EnterOTP />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
