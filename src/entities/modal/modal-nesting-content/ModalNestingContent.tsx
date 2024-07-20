import { useModals } from 'features/modal';
import { Button } from 'shared/ui/button';
import { Modal } from 'features/modal';

export const ModalNestingContent = () => {
    const { modals, openModal, closeModal } = useModals();

    return (
        <>
            <h1 className='text-2xl font-extrabold'>Модальное окно №5</h1>
            <h2 className='pt-4 pb-3 text-xl'>Количество открытых вложенностей: <span className='font-bold'>{1}</span></h2>
            <Button onClick={() => openModal('counter')}>Открыть окно 4</Button>
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
};
