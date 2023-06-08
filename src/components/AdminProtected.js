import React from 'react';
import { Navigate } from 'react-router-dom';
function AdminProtected({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default AdminProtected;
