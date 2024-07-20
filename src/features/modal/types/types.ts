import { FC } from "react";
import { ModalBtnContent } from "entities/modal/modal-btn-content";
import { ModalCounterContent } from "entities/modal/modal-counter-content";
import { ModalImgContent } from "entities/modal/modal-img-content";
import { ModalNestingContent } from "entities/modal/modal-nesting-content";
import { ModalTextContent } from "entities/modal/modal-text-content";

export type ModalType = 'img' | 'text' | 'btn' | 'counter' | 'nesting';

export const MODAL_TYPES: Record<ModalType, FC<any>> = {
    img: ModalImgContent,
    text: ModalTextContent,
    btn: ModalBtnContent,
    counter: ModalCounterContent,
    nesting: ModalNestingContent
};