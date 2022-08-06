import * as React from 'react';
import { AuthContext } from 'utils/context/AuthContext';

export const useAuth = () => {
  return React.useContext(AuthContext);
};
