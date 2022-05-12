import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

type Props = {
  base: string;
  full: string;
};

export const useUrl = (): Props => {
  const location = useLocation();

  const [url, setUrl] = useState({
    base: '',
    full: '',
  });

  useEffect(() => {
    const { origin, href, pathname } = window.location;

    setUrl({
      base: `${origin}${pathname}`,
      full: href,
    });
  }, [location.pathname]);

  return url;
};
