// NewsModal.jsx
import React from 'react';
import { ContenedorModal, TarjetaModal, CloseButton } from './styled';
import { CloseButton as CloseIcon } from '../../assets';
import RegularNewsModal from './RegularNewsModal';
import PremiumNewsModal from './PremiumNewsModal';
import { INoticiasNormalizadas } from './utils';


interface NewsModalProps {
    news: INoticiasNormalizadas;
    closeModal: () => void;
    openModal: (news: INoticiasNormalizadas) => void; // Add this line
}
const NewsModal: React.FC<NewsModalProps> = ({ news, closeModal }) => {
    const isPremium = news && news.esPremium;

    return (
        <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={closeModal}>
                    <img src={CloseIcon} alt="close-button" />
                </CloseButton>
                {isPremium ? <PremiumNewsModal news={news} closeModal={closeModal} /> : <RegularNewsModal news={news} />}
            </TarjetaModal>
        </ContenedorModal>
    );
};

export default NewsModal;
