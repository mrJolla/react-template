import { useEffect, useState } from 'react';

import { authCheck } from '~/utils/auth-check';

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authCheck().finally(() => {
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
  };
};
