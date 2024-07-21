import { FC } from 'react';
import { ModalType, MODAL_TYPES } from '../types/types';

interface IModal {
    contentType: ModalType;
    show: boolean;
    onCloseButtonClick: () => void;
}

export const Modal: FC<IModal> = ({ contentType, show, onCloseButtonClick }) => {
    if (!show) {
        return null;
    }

    const ModalContent = MODAL_TYPES[contentType];

    return (
        <div className="flex fixed justify-center items-center top-0 right-0 bottom-0 left-0 z-10 size-full min-h-screen bg-gray-800 bg-opacity-60">
            <div className="fixed bg-white w-1/2 h-1/2 rounded-xl overflow-hidden p-5">
                <span className='text-3xl text-gray-600 absolute right-4 top-1 cursor-pointer hover:text-opacity-60' onClick={onCloseButtonClick}>x</span>
                {contentType === 'btn' ? (
                    <ModalContent onCloseButtonClick={onCloseButtonClick} />
                ) : (
                    <ModalContent />
                )}
            </div>
        </div>
    );
};
