import { useEffect, useCallback, useState } from 'react';

export const useProperties = () => {
    const [propertiesData, setPropertiesData] = useState([]);
    const fetchPropertiesData = useCallback(async () => {
        const response = await fetch('http://localhost:3000/api/properties');
        const data = await response.json();
        setPropertiesData(data);
    }, []);

    useEffect(() => {
        fetchPropertiesData();
    }, [fetchPropertiesData]);

    return propertiesData;
};
