import './styles/outerAppStyles.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Support from './pages/Support';
import ProtectedRoute from './private/ProtectedRoute';
import InAppRoutes from './routes/InAppRoutes';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <ToastContainer />
                <Routes>
                      <Route path="*" element={<NotFound />} />
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/support" element={<Support />} />
                      <Route
                            path="/user/*"
                            element={
                                <ProtectedRoute>
                                    <ThemeProvider>
                                        <InAppRoutes />
                                    </ThemeProvider>
                                </ProtectedRoute>
                            }
                      />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;