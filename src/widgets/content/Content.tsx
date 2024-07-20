import { useCounter } from 'app/providers/counter-provider';
import React, { useCallback, useState } from 'react';
import { Modal } from 'features/modal/ui';

export const Content = () => {

    return (
        <main className='pt-4 px-20 flex-grow h-full'>
            <span className='text-3xl font-extrabold'>Тут находится какой-то контент</span>
        </main>
    );
};