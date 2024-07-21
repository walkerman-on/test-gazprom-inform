import { FC, ButtonHTMLAttributes, memo } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    error?: boolean
}

export const Button: FC<IButton> = memo(({ children, error, ...props }) => {
    return (
        <button
            {...props}
            className={error ? 'bg-red-500 text-rose-50 text-xl rounded-xl py-3 px-6 hover:bg-opacity-80 transition-all' : 'bg-orange-400 text-rose-50 text-xl rounded-xl py-3 px-6 hover:bg-opacity-80 transition-all'}
        >
            {children}
        </button >
    );
})
