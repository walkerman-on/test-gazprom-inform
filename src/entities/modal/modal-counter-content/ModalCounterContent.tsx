import { useCounter } from 'app/providers/counter-provider';
import React from 'react';

export const ModalCounterContent = () => {

    const { count } = useCounter()
    console.log(count)
    return (
        <h1>Количество нажатий на кнопки: {count}</h1>
    );
};
