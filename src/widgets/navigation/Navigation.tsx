import { useModals } from 'features/modal';
import { Modal } from 'features/modal';
import { Button } from 'shared/ui/button';

export const Navigation = () => {
    const { modals, openModal, closeModal } = useModals();

    return (
        <nav className='py-10 px-20 bg-slate-300 bg-opacity-50 grid grid-cols-5 gap-6'>
            {modals.map(modal => (
                <Modal
                    key={modal.contentType}
                    show={modal.state}
                    onCloseButtonClick={() => closeModal(modal.contentType)}
                    contentType={modal.contentType}
                />
            ))}
            <Button onClick={() => openModal('img')}>Открыть окно 1</Button>
            <Button onClick={() => openModal('text')}>Открыть окно 2</Button>
            <Button onClick={() => openModal('btn')}>Открыть окно 3</Button>
            <Button onClick={() => openModal('counter')}>Открыть окно 4</Button>
            <Button onClick={() => openModal('nesting')}>Открыть окно 5</Button>
        </nav>
    );
};

