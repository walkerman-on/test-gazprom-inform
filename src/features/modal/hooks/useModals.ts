import { useState } from 'react';
import { ModalType } from '../types/types';
import { useCounter } from 'app/providers/counter-provider';
import { IModalReturn, IModalState } from './types';

export const useModals = (): IModalReturn => {
    const { increment } = useCounter()

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
        increment()
    };

    const closeModal = (id: ModalType) => {
        setModals(modals.map(modal =>
            modal.contentType === id ? { ...modal, state: false } : modal
        ));
    };

    return { modals, openModal, closeModal };
};
