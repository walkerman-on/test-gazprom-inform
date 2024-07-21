import { useModals, Modal } from 'features/modal';
import { useCallback } from 'react';
import { Button } from 'shared/ui/button';


export const Navigation = () => {
    const { modals, openModal, closeModal } = useModals();

    const openImgModal = useCallback(() => openModal("img"), []);
    const openTextModal = useCallback(() => openModal("text"), []);
    const openBtnModal = useCallback(() => openModal("btn"), []);
    const openCounterModal = useCallback(() => openModal("counter"), []);
    const openNestingModal = useCallback(() => openModal("nesting"), []);

    return (
        <nav className="py-10 px-20 bg-slate-300 bg-opacity-50 grid grid-cols-5 gap-6">
            {modals.map((modal) => (
                <Modal
                    key={modal.contentType}
                    show={modal.state}
                    onCloseButtonClick={() => closeModal(modal.contentType)}
                    contentType={modal.contentType}
                />
            ))}
            <Button onClick={openImgModal}>Открыть окно 1</Button>
            <Button onClick={openTextModal}>Открыть окно 2</Button>
            <Button onClick={openBtnModal}>Открыть окно 3</Button>
            <Button onClick={openCounterModal}>Открыть окно 4</Button>
            <Button onClick={openNestingModal}>Открыть окно 5</Button>
        </nav>
    );
};

