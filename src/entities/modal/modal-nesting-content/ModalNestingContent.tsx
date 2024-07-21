import { useModals } from 'features/modal';
import { Button } from 'shared/ui/button';
import { Modal } from 'features/modal';
import { useCounter } from 'app/providers/state-provider';
import { useCallback } from 'react';

export const ModalNestingContent = () => {
    const { modals, openModal, closeModal } = useModals();
    const { depthCount, incrementDepthCount } = useCounter()

    const openCounterModal = useCallback(() => {
        openModal("counter")
        incrementDepthCount()
    }, []);

    return (
        <>
            <h1 className='text-2xl font-extrabold'>Модальное окно №5</h1>
            <h2 className='pt-4 pb-3 text-xl'>Количество открытых вложенностей: <span className='font-bold'>{depthCount}</span></h2>
            <Button onClick={openCounterModal}>Открыть окно 4</Button>
            {modals.map(modal => (
                <Modal
                    key={modal.contentType}
                    show={modal.state}
                    onCloseButtonClick={() => closeModal(modal.contentType)}
                    contentType={modal.contentType}
                />
            ))}
        </>
    );
}
