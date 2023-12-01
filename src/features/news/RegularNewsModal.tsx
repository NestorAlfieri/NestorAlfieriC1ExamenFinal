
import React from 'react';
import { ImagenModal, TituloModal, DescripcionModal, CotenedorTexto } from './styled';
import { INoticiasNormalizadas } from './utils';

interface RegularNewsModalProps {
  news: INoticiasNormalizadas;
}

const RegularNewsModal: React.FC<RegularNewsModalProps> = ({ news }) => (
  <div>
    <ImagenModal src={news.imagen} alt="news-image" />
    <CotenedorTexto>
      <TituloModal>{news.titulo}</TituloModal>
      <DescripcionModal>{news.descripcion}</DescripcionModal>
    </CotenedorTexto>
  </div>
);

export default RegularNewsModal;
