import React, { FC } from 'react';
import { ModalBtnContent } from 'entities/modal/modal-btn-content';
import { ModalTextContent } from 'entities/modal/modal-text-content';
import { ModalImgContent } from 'entities/modal/modal-img-content';
import { ModalCounterContent } from 'entities/modal/modal-counter-content';

interface IModal {
    active: boolean;
    setActive: (prev: boolean) => void;
    contentType: string;
}

export const Modal: FC<IModal> = ({ active, setActive, contentType }) => {

    const handleCloseModal = () => {
        setActive(false);
    };


    return (
        <div
            className={active ? "h-screen w-screen bg-gray-800 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center scale-1 " : "h-screen w-screen bg-gray-800 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center scale-0"}
        >
            <div
                className='p-5 bg-white rounded-xl w-1/2 h-1/2 relative'
            >
                <span className='text-3xl text-gray-600 absolute right-4 top-1 cursor-pointer hover:text-opacity-60' onClick={handleCloseModal}>x</span>
                <h1 className='text-2xl font-extrabold '>Модальное окно №1</h1>

                {
                    contentType === "text" && <ModalTextContent />
                }
                {
                    contentType === "img" && <ModalImgContent />
                }
                {
                    contentType === "btn" && <ModalBtnContent setActive={setActive} />
                }
                {
                    contentType === "counter" && <ModalCounterContent />
                }
            </div>
        </div>
    );
};
