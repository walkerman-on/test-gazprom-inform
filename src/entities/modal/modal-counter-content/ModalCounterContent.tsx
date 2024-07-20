import { useCounter } from 'app/providers/counter-provider';
import React from 'react';

export const ModalCounterContent = () => {
    const { count } = useCounter()
    console.log(count)

    return (
        <>
            <h1 className='text-2xl font-extrabold'>Модальное окно №4</h1>
            <h2>Количество нажатий на кнопки: {count}</h2>
        </ >
    );
};
