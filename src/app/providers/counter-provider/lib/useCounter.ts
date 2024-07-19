import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (context === null) {
        throw new Error('useCounter must be used within a CounterContextProvider');
    }

    return context;
};