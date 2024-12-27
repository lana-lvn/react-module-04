import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './components/context/AuthProvider/AuthProvider';
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
    <Toaster />
  </AuthProvider>
);
