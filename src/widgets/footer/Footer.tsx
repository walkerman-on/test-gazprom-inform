import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='py-10 px-20 bg-slate-300 bg-opacity-50 flex-shrink-0 flex flex-col items-center'>
            <h2 className='text-gray-500 text-center'>Данный проект был выполнен в качестве тестового задания для
                <Link to={"https://inform.gazprom.ru/"}>
                    <span className='text-blue-500 hover:opacity-80 cursor-pointer'> ООО "Газпром Информ"</span>
                </Link>
            </h2>
            <Link to={"https://t.me/walkerman_on"}>
                <h2 className='text-gray-500 text-center'>made by
                    <span className='text-blue-500 hover:opacity-80 cursor-pointer'> @walkerman_on</span>
                </h2>
            </Link>
        </footer>
    );
};
