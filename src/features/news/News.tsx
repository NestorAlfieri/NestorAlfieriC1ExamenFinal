
import React, { useState } from 'react';
import { ContenedorNoticias, TituloNoticias, ListaNoticias } from './styled';
import NewsCard from './NewsCard';
import NewsModal from './NewsModal';
import useNews from '../../app/hooks/useNews';
import { INoticiasNormalizadas } from './utils';

const News: React.FC = () => {
  const noticias = useNews();
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const openModal = (news: INoticiasNormalizadas) => {
    setModal(news);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <NewsCard key={n.id} news={n} openModal={() => openModal(n)} />
        ))}
        {modal && (
          <NewsModal
            news={modal}
            closeModal={closeModal}
            openModal={openModal}
          />
        )}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default News;

