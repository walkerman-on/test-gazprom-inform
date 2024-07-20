import React, { FC } from 'react';
import { Button } from 'shared/ui/button';

interface IModalBtnContent {
    onCloseButtonClick: () => void;
}

export const ModalBtnContent: FC<IModalBtnContent> = ({ onCloseButtonClick }) => {
    const btnOnClick = () => {
        console.log("ОК")
    }

    return (
        <section className='pt-4 flex flex-col h-full'>
            <h1 className='text-2xl font-extrabold'>Модальное окно №3</h1>
            <h2 className='text-xl'>Это модальное окно с текстом, которое открывается по нажатию на кнопку 3. При нажатии на кнопку "ОК" в консоль выводится "ОК", а при нажатии на "ОТМЕНА" окно закрывается</h2>
            <div className="absolute bottom-0 right-0 p-5 flex gap-2">
                <Button onClick={btnOnClick}>ОК</Button>
                <Button onClick={onCloseButtonClick} error>Отмена</Button>
            </div>
        </section>
    );
};
