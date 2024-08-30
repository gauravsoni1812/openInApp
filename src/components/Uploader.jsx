/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import img from "../assets/excel.svg"
import img1 from "../assets/upload.svg"
import Papa from 'papaparse'


const Uploader = ({functionDataset,background}) => {
    const [fileName, setFileName] = useState(null)
    console.log(background)
 
    const handleClick = (e) => {
        setFileName(e.target.files[0].name)
        
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (result) {
                const colArr = []
                const valArr = []
                
                functionDataset(result.data)
            }
        })
    }
    return (
        <main>
            <div className={`${ background ? "bg-black" : "bg-white" } p-3 rounded-2xl`}>
                <form action="" className={`flex flex-col justify-center items-center border-[1px] border-dashed border-[#474747] ${background ? "bg-black" : "bg-white" } h-[200px] md:h-[300px] w-[300px] md:w-[500px] cursor-pointer rounded-lg p-10`}>
                    <input className='input-field' hidden type="file" accept='.csv' onChange={handleClick} />
                    <div className='flex flex-col justify-center items-center text-[#999CAD]'>
                        <img src={img} alt="" className='h-[36px] w-[36px]' />
                        {fileName === null ? <p>Drop your Excel File here or <span className='text-[#605bff]'>browse</span></p> :
                            <p>{fileName}</p>}
                        {fileName && <span onClick={() => {
                            functionDataset(null)
                            setFileName(null)
                        }} className='text-red-600'>Remove</span>}
                    </div>
                </form>
                <button onClick={() => {
                    document.querySelector(".input-field").click()
                }} className='bg-[#605BFF] text-black w-full p-3 rounded-lg my-3 font-semibold flex justify-center items-center'> <div className='flex justify-center items-center gap-3'><img src={img1} alt="" /> <span>upload</span> </div></button>
            </div>


        </main>
    )
}

export default Uploader