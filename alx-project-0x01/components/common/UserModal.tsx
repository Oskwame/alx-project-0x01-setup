import React, {useState} from "react";
import { UserProps, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [post, setPost] = useState<UserProps>({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });
    const handleChange = (path: string, value: string) =>{
        const keys = path.split(".");
        const updatedUser = {...post};

        let current: any = updatedUser;
        for(let i = 0; i < keys.length - 1; i++){
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setPost(updatedUser);
    };
    const handleSubmit = () => {
        onSubmit(post);
        onClose();
    }

    return(
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        {/* Basic Fields */}
        <input 
          className="border p-2 rounded w-full mb-2"
          placeholder="Name"
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Username"
          onChange={(e) => handleChange("username", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Email"
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Phone"
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Website"
          onChange={(e) => handleChange("website", e.target.value)}
        />

        {/* Address Section */}
        <h3 className="font-semibold mt-3">Address</h3>

        <input className="border p-2 rounded w-full mb-2" placeholder="Street"
          onChange={(e) => handleChange("address.street", e.target.value)} />

        <input className="border p-2 rounded w-full mb-2" placeholder="Suite"
          onChange={(e) => handleChange("address.suite", e.target.value)} />

        <input className="border p-2 rounded w-full mb-2" placeholder="City"
          onChange={(e) => handleChange("address.city", e.target.value)} />

        <input className="border p-2 rounded w-full mb-2" placeholder="Zipcode"
          onChange={(e) => handleChange("address.zipcode", e.target.value)} />

        {/* Company Section */}
        <h3 className="font-semibold mt-3">Company</h3>

        <input className="border p-2 rounded w-full mb-2" placeholder="Company Name"
          onChange={(e) => handleChange("company.name", e.target.value)} />

        <input className="border p-2 rounded w-full mb-2" placeholder="Catch Phrase"
          onChange={(e) => handleChange("company.catchPhrase", e.target.value)} />

        <input className="border p-2 rounded w-full mb-2" placeholder="BS"
          onChange={(e) => handleChange("company.bs", e.target.value)} />

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-400 rounded text-white"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 rounded text-white"
            onClick={handleSubmit}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
