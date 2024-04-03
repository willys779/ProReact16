import { sumValues } from "./sum";

export const asyncAdd = (values) => {
    return new Promise( callback =>
        setTimeout(() => {
            let total = sumValues(values);
            console.log(`Async Total: ${total}`);
            callback(total);
        }, 2000)
    ); 
};