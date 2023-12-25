
import React from 'react';
import { AuthProvider } from './Context/AuthContext ';
import AppNavigator from './AppNavigator/Navigator';

const App = () => {
  return (
    <AuthProvider>
        <AppNavigator />
    </AuthProvider>
  );
};

export default App;

