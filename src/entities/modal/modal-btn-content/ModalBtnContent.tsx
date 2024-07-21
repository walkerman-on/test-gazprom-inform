import { FC } from 'react';
import { Button } from 'shared/ui/button';

interface IModalBtnContent {
    onCloseButtonClick: () => void;
}

export const ModalBtnContent: FC<IModalBtnContent> = ({ onCloseButtonClick }) => {
    const btnOnClick = () => {
        console.log("ОК")
    }

    return (
        <section className='flex flex-col h-full'>
            <h1 className='text-2xl font-extrabold'>Модальное окно №3</h1>
            <h2 className='pt-4 text-xl'>Это модальное окно с текстом, которое открывается по нажатию на кнопку
                <span className='font-bold'> "Открыть окно 3"</span>
                . При нажатии на кнопку <span className='font-bold'>"ОК" </span>
                в консоль выводится "ОК", а при нажатии на кнопку
                <span className='font-bold'> "ОТМЕНА"</span> окно закрывается</h2>
            <div className="absolute bottom-0 right-0 p-5 flex gap-2">
                <Button onClick={btnOnClick}>ОК</Button>
                <Button onClick={onCloseButtonClick} error>ОТМЕНА</Button>
            </div>
        </section>
    );
}
