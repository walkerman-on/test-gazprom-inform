import { FC, ReactNode, useState } from "react";
import { CounterContext } from "../lib/CounterContext";

interface ICounterProvider {
    children: ReactNode;
}

export const CounterProvider: FC<ICounterProvider> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    return (
        <CounterContext.Provider value={{ count, increment }}>
            {children}
        </CounterContext.Provider>
    );
};
