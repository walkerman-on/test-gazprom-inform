import { useCounter } from "app/providers/state-provider";

export const ModalCounterContent = () => {
    const { btnCount, depthCount } = useCounter()

    return (
        <>
            <h1 className='text-2xl font-extrabold'>Модальное окно №4</h1>
            <h2 className='text-xl pt-4'>Количество нажатий на кнопки:
                <span className='font-bold'> {btnCount}</span>
            </h2>
            {
                (depthCount > 1) &&
                <h2 className='pt-4 pb-3 text-xl'>Количество открытых вложенностей: <span className='font-bold'>{depthCount}</span></h2>
            }
        </ >
    );
}
