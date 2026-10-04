import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import HR from "./pages/HR/HR";
import CRM from "./pages/CRM/CRM";
import Inventory from "./pages/Inventory/Inventory";
import Purchase from "./pages/Purchase/Purchase";
import Sales from "./pages/Sales/Sales";
import Reports from "./pages/Reports/Reports";

import Users from "./pages/Administration/Users";
import Roles from "./pages/Administration/Roles";
import AuditLogs from "./pages/Administration/AuditLogs";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/hr" element={<HR />} />

            <Route path="/crm" element={<CRM />} />

            <Route path="/inventory" element={<Inventory />} />

            <Route path="/purchase" element={<Purchase />} />

            <Route path="/sales" element={<Sales />} />

            <Route path="/reports" element={<Reports />} />

            <Route path="/admin/users" element={<Users />} />

            <Route path="/admin/roles" element={<Roles />} />

            <Route path="/admin/audit-logs" element={<AuditLogs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
