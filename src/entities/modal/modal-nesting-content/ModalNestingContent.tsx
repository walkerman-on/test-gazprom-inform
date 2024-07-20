import { useModals } from 'features/modal';
import { Button } from 'shared/ui/button';
import { Modal } from 'features/modal';

export const ModalNestingContent = () => {
    const { modals, openModal, closeModal } = useModals();

    return (
        <>
            <h1 className='text-2xl font-extrabold'>Модальное окно №5</h1>
            <h2>Количество открытых вложенностей: {1}</h2>
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
