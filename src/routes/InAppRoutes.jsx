import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/inApp/Dashboard';
import Budget from '../pages/inApp/Budgets';
import Expense from '../pages/inApp/Expenses';
import Report from '../pages/inApp/Reports'
import Notifications from '../pages/inApp/Notifications';
import Profile from '../pages/inApp/Profile';
import NotFound from '../pages/inApp/NotFound'

function InAppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="budget" element={<Budget />} />
            <Route path="expense" element={<Expense />} />
            <Route path="report" element={<Report />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            {/* Add more admin-specific routes here */}
        </Routes>
    );
};

export default InAppRoutes;