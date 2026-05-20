import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import DevPage from './pages/DevPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}
    >
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
