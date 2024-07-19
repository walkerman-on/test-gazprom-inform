import React, { FC } from 'react';
import { Button } from 'shared/ui/button';

interface IModalBtnContent {
    setActive: (prev: boolean) => void
}

export const ModalBtnContent: FC<IModalBtnContent> = ({ setActive }) => {
    const btnOnClick = () => {
        console.log("ОК")
    }

    return (
        <section className='pt-4 flex flex-col h-full justify-between'>
            <h1 className='text-2xl'>Это модальное окно с текстом, которое открывается по нажатию на кнопку 3</h1>
            <div className='flex justify-end gap-2 mb-8'>
                <Button onClick={btnOnClick}>ОК</Button>
                <Button error onClick={() => setActive(false)}>Отмена</Button>
            </div>
        </section>
    );
};
