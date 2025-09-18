
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // sempre que o pathname mudar, volta ao topo da página
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
