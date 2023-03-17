import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const clear = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(clear);
    }, [value]);
    return debounce;
}

export default useDebounce;
