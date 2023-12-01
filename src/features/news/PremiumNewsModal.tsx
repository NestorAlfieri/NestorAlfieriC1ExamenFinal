
import React from 'react';
import { ImagenModal, TituloModal, DescripcionModal, CotenedorTexto, BotonSuscribir } from './styled';
import { SuscribeImage } from '../../assets';
import { INoticiasNormalizadas } from './utils';

interface PremiumNewsModalProps {
  news: INoticiasNormalizadas;
  closeModal: () => void;
}

const PremiumNewsModal: React.FC<PremiumNewsModalProps> = ({ news, closeModal }) => (
  <div>
    <ImagenModal src={SuscribeImage} alt="mr-burns-excellent" />
    <CotenedorTexto>
      <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
      <DescripcionModal>
        Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
      </DescripcionModal>
      <BotonSuscribir
        onClick={() =>
          setTimeout(() => {
            alert('Suscripto!');
            closeModal();
          }, 1000)
        }
      >
        Suscríbete
      </BotonSuscribir>
    </CotenedorTexto>
  </div>
);

export default PremiumNewsModal;
