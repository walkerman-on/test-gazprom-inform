import { ModalType } from "../types/types";

export interface IModalState {
    state: boolean;
    contentType: ModalType;
}

export interface IModalReturn {
    modals: IModalState[];
    openModal: (id: ModalType) => void;
    closeModal: (id: ModalType) => void;
}