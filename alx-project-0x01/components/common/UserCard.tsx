import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard :React.FC<UserProps> = (
    {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
    }
) => {
    return(
        <div className='border rounded-lg shadow-md p-5 bg-white hover:shadow-lg transition'>
            {/* User Name and Username */}
            <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
            <p className="text-sm text-gray-500 mb-3">@{username}</p>

             {/* Contact Info */}
        <div className="mb-3">
        <p className="text-gray-700">
            <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-700">
            <span className="font-medium">Phone:</span> {phone}
        </p>
        <p className="text-gray-700">
            <span className="font-medium">Website:</span> {website}
        </p>
        </div>
        {/* Address */}
        <div className=' mb-3'>
            <h3 className=' font-semibold text-grey-800 text-sm mb-1'>Address</h3>
            <p className=' text-gray-700 text-sm'> {address.suite}, {address.street} </p>
            <p className=' text-gray-700 text-sm'>{address.city}, {address.zipcode} </p>
            <p className="text-gray-600 "> Geo: {address.geo.lat}, {address.geo.lng}
        </p>
        </div>
        {/* Company Info */}
        <div>
            <h3 className=' font-semibold text-grey-800 text-sm mb-1'>Company</h3>
            <p className=' text-gray-700 text-sm'> {company.name} </p>
            <p className=' text-gray-700 text-sm italic'>"{company.catchPhrase}"</p>
            <p className=' text-gray-700 text-sm'> {company.bs} </p>
            </div>
        </div>
    )
}
 export default UserCard;
