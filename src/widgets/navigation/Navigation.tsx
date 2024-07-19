import { useCounter } from 'app/providers/counter-provider';
import React, { useState } from 'react';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';

export const Navigation = () => {
    const [modals, setModals] = useState([
        { state: false, contentType: "text" },
        { state: false, contentType: "img" },
        { state: false, contentType: "btn" },
        { state: false, contentType: "counter" },
    ]);
    const { increment } = useCounter()

    const btnOnClick = (index: number) => {
        // Create a copy of modals state
        const newModals = [...modals];
        // Toggle the state of the modal at the specified index
        newModals[index].state = !newModals[index].state;
        // Update the modals state with the modified copy
        increment()
        setModals(newModals);
    };

    return (
        <nav className='navigation'>
            {
                modals?.map((item, index) => (
                    <Modal key={index} active={item.state} setActive={() => btnOnClick(index)} contentType={item.contentType} />
                ))
            }
            <Button onClick={() => btnOnClick(0)}>Show Text Modal</Button>
            <Button onClick={() => btnOnClick(1)}>Show Image Modal</Button>
            <Button onClick={() => btnOnClick(2)}>Show Button Modal</Button>
            <Button onClick={() => btnOnClick(3)}>Show Counter Modal</Button>
        </nav>
    );
};
