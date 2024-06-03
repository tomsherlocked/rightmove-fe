import React from 'react';
import PropertyCard from '../PropertyCard';
import { useProperties } from '../../hooks/useProperties';
import './PropertyListing.scss';

const PropertyListing = () => {
    const propertiesData = useProperties();

    return (
        <ul className="PropertyListing">
            {propertiesData.map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
