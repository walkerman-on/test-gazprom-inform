import { useCounter } from 'app/providers/counter-provider';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/modal';

export const Content = () => {
    const [modals, setModals] = useState([
        { state: false, contentType: "text" },
        { state: false, contentType: "img" },
        { state: false, contentType: "btn" },
        { state: false, contentType: "counter" },
    ]);
    const { increment } = useCounter()

    const btnOnClick = useCallback(
        (index: number) => {
            // Create a copy of modals state
            const newModals = [...modals];
            // Toggle the state of the modal at the specified index
            newModals[index].state = !newModals[index].state;
            // Update the modals state with the modified copy
            increment()
            setModals(newModals);
        }, [])
    return (
        <div>
            {
                modals?.map((item, index) => (
                    <Modal key={index} active={item.state} setActive={() => btnOnClick(index)} contentType={item.contentType} />
                ))
            }
        </div>
    );
};