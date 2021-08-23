import { useState, useEffect } from 'react'

const useDebounce = (value, setValue, debouceTime = 500) => {
    const [debouncedValue, setdebouncedValue] = useState(value)

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setValue(debouncedValue)
        }, debouceTime)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [debouncedValue, setValue, debouceTime])

    return [debouncedValue, setdebouncedValue];
}

export default useDebounce;
