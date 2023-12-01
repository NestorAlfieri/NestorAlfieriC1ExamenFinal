
import { useEffect, useState } from 'react';
import { obtenerNoticias } from './../../features/news/fakeRest';
import { processNewsData, INoticiasNormalizadas } from './../../features/news/utils';

const useNoticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await obtenerNoticias();
      const data = processNewsData(response);
      setNoticias(data);
    };

    fetchData();
  }, []);

  return noticias;
};

export default useNoticias;
