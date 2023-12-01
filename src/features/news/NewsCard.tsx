/// NewsCard.tsx
import React from 'react';
import {
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura,
} from './styled';
import { INoticiasNormalizadas } from './utils';

interface NewsCardProps {
  news: INoticiasNormalizadas;
  openModal: (news: INoticiasNormalizadas) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, openModal }) => {
  const handleClick = () => {
    openModal(news);
  };

  return (
    <TarjetaNoticia onClick={handleClick}>
      <ImagenTarjetaNoticia src={news.imagen} />
      <TituloTarjetaNoticia>{news.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{news.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {news.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={handleClick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default NewsCard;
