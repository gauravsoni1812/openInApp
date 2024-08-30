import { useState } from "react";
import Uploader from "./Uploader";
import img2 from "../assets/close.png";
import Navbar from "./Navbar";
import img1 from "../assets/Theme_Switch_light.svg"
import img3 from "../assets/Theme_Switch_dark.svg"


const Upload = () => {
   
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(null);
    const [data, setData] = useState(null);
    const [values, setValues] = useState({}); // Use an object to store selected tags by row ID
    const [background, setBackground]=useState(true)

    const funSetData = (arg) => {
        setData(arg);
    };

  
    console.log(data)
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
        { title: "Dashboard", src: "category" },
        { title: "upload", src: "Ticket" },
        { title: "Invoice", src: "Ticket" },
        { title: "Schedule", src: "lole" },
        { title: "Calendar", src: "Search" },
        { title: "Notifications", src: "Notification" },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div>
            <div className="md:hidden">
                {/* <MobileComponent /> */}
                <div>
                    <Navbar />
                </div>
            </div>

            <div className="flex" >
                <div
                    className={`${open ? "w-[20%]" : "w-[10%]"
                        } ${background ? "bg-black" : "bg-[#FFFFFF]" } hidden md:block  h-screen p-5 pt-8 fixed  pb-10 duration-300`}
                >
                    <img
                        src="./src/assets/Vector.svg"
                        className={`absolute cursor-pointer right-5 top-9 w-7 ${!open && "rotate-180"
                            }`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <img
                            src="./src/assets/logo.svg"
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        />
                        <h1
                            className={`${background ? "text-white" : "text-black" } origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Base
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex rounded-md p-5 cursor-pointer ${background ? "text-[#6e6e6e]" : "text-[]" } text-sm items-center gap-x-4 hover:bg-light-white  ${selected === index ? `${background ? "bg-gradient-to-r from-[#6c6cffe8] to-[black]" : "bg-gradient-to-r from-[#bdbdf2e8] to-[white]" } ` : ""
                                    }`}
                                onClick={() => setSelected(index)}
                            >
                                <img src={`./src/assets/${Menu.src}.svg`} />
                                <span
                                    className={`origin-left duration-500 ${!open ? "hidden-text" : "visible-text"
                                        }`}
                                >
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-28" onClick={()=>{
                        setBackground(!background)
                    }}>
                       {background==true?<img src={img3} alt="" />:<img src={img1} alt="" />} 
                    </div>
                </div>
                <div className={`flex justify-end w-[100vw] ${background ? "bg-black" : "bg-white" }`}>
                    <div className={`${open ? "md:w-[80%]" : "md:w-[90%]"
                        } ${background ? "bg-[#161616] text-[#E0DCDD]" : "bg-[#FAFAFB] text-[black]"} w-full h-[105%]   text-[14px] p-10 duration-300`}>
                        <h1 className="text-2xl font-semibold">Upload CSV</h1>
                        <div className="w-full my-28 flex flex-col justify-center items-center">
                            <Uploader functionDataset={funSetData} background={background} />
                        </div>

                        {data && <div className=" flex flex-col">
                            <h1 className="text-[24px] font-semibold my-5">Upload</h1>
                            <div className="overflow-x-scroll">
                            <table className={`w-full ${background ? "bg-black" : "bg-[#F5F5F5]"} p-5`}>
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
                                        <tr key={c.id} className={`${background ? "bg-[#161616]" : "bg-[white]"} rounded-xl border-[2px] border-gray-700`}>
                                            <td className="p-2">{c.id}</td>
                                            <td className="p-2">
                                                <a href={c.links} className="text-blue-400 hover:underline">{c.links}</a>
                                            </td>
                                            <td className="p-2">{c.prefix}</td>
                                            <td className="p-2">
                                                <select
                                                    onChange={(e) => handleChange(e, c.id)}
                                                    className={`p-3 rounded-xl ${background ? "bg-black text-white" : "bg-[white] text-black border-[1px] border-[#f2f2f2]"}  `}
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
                                                            <span key={tag} className={`bg-[#605BFF] ${background ? "text-black" : " text-white"} p-2 rounded flex justify-center items-center gap-3`}>
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
                            </div>
                         
                        </div>}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Upload;
