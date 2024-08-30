/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'
import img2 from "../assets/close.png";
import Uploader from './Uploader';

const MobileComponent = () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(null);
    const [data, setData] = useState(null);
    const [values, setValues] = useState({}); // Use an object to store selected tags by row ID

    
    const funSetData = (arg) => {
        setData(arg);
    };

    const handleChange = (e, rowId) => {
        const selectedValue = e.target.value;

        // If no value is selected, return early
        if (!selectedValue) return;

        // Update the selected tags for the specific row
        setValues((prev) => {
            const currentTags = prev[rowId] || [];
            // Avoid adding duplicates
            if (currentTags.includes(selectedValue)) return prev;
            return {
                ...prev,
                [rowId]: [...currentTags, selectedValue],
            };
        });
    };

    const handleRemoveTag = (tag, rowId) => {
        setValues((prev) => {
            const updatedTags = (prev[rowId] || []).filter((t) => t !== tag);
            return {
                ...prev,
                [rowId]: updatedTags,
            };
        });
    };

    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "upload", src: "Chat" },
        { title: "Invoice", src: "Ticket" },
        { title: "Schedule", src: "Calendar" },
        { title: "Calendar", src: "Search" },
        { title: "Notifications", src: "Notification" },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div>
                <div className={` bg-[#161616] h-[105%] text-[#E0DCDD] text-[14px] p-10 duration-300`}>
                    <h1 className="text-2xl font-semibold">Upload CSV</h1>
                    <div className="w-full my-28 flex flex-col justify-center items-center">
                        <Uploader functionDataset={funSetData} />
                    </div>

                    {data && <div className="flex flex-col  overflow-x-scroll">
                        <h1 className="text-[24px] font-semibold my-5">Uploads</h1>
                        <table className="w-full bg-black p-5">
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Links</th>
                                    <th>Prefix</th>
                                    <th>Add Tags</th>
                                    <th className="w-[30%]">Selected tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((c) => (
                                    <tr key={c.id} className="bg-[#161616] rounded-xl border-[2px] border-gray-700">
                                        <td className="p-2">{c.id}</td>
                                        <td className="p-2">
                                            <a href={c.links} className="text-blue-400 hover:underline">{c.links}</a>
                                        </td>
                                        <td className="p-2">{c.prefix}</td>
                                        <td className="p-2">
                                            <select
                                                onChange={(e) => handleChange(e, c.id)}
                                                className="p-3 rounded-xl bg-black text-white"
                                            >
                                                <option value="">Select tag</option>
                                                <option value="Tag 1">Tag1</option>
                                                <option value="Tag 2">Tag2</option>
                                                <option value="Tag 3">Tag3</option>
                                                <option value="Tag 4">Tag4</option>
                                                <option value="Tag 5">Tag5</option>
                                            </select>
                                        </td>
                                        <td className="p-2">
                                            {values[c.id] && values[c.id].length > 0 ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {values[c.id].map((tag) => (
                                                        <span key={tag} className="bg-[#605BFF] text-black p-2 rounded flex justify-center items-center gap-3">
                                                            {tag}
                                                            <span
                                                                onClick={() => handleRemoveTag(tag, c.id)}
                                                                className="cursor-pointer ml-2"
                                                            >
                                                                <img src={img2} alt="Remove" className="h-3 w-3" />
                                                            </span>
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                'No tags selected'
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default MobileComponent