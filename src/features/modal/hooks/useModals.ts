import { useState } from 'react';
import { ModalType } from '../types/types';
import { IModalReturn, IModalState } from './types';
import { useCounter } from 'app/providers/state-provider';

export const useModals = (): IModalReturn => {
    const { incrementBtnCount, decrementDepthCount } = useCounter()

    const [modals, setModals] = useState<IModalState[]>([
        { state: false, contentType: 'img' },
        { state: false, contentType: 'text' },
        { state: false, contentType: 'btn' },
        { state: false, contentType: 'counter' },
        { state: false, contentType: 'nesting' },
    ]);

    const openModal = (id: ModalType) => {
        setModals(modals.map(modal =>
            modal.contentType === id ? { ...modal, state: true } : modal
        ));
        incrementBtnCount()
    };

    const closeModal = (id: ModalType) => {
        setModals(modals.map(modal =>
            modal.contentType === id ? { ...modal, state: false } : modal
        ));
        decrementDepthCount()
    };

    return { modals, openModal, closeModal };
};
