import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthWrapperProps {
  children: React.ReactNode;
  requiredUserType: 'insurance' | 'retailer';
}

const AuthWrapper = ({ children, requiredUserType }: AuthWrapperProps) => {
  const userType = localStorage.getItem('userType') as 'insurance' | 'retailer' | null;

  if (!userType) {
    return <Navigate to="/login" replace />;
  }

  if (userType !== requiredUserType) {
    return <Navigate to={`/${userType}`} replace />;
  }

  return <>{children}</>;
};

export default AuthWrapper;