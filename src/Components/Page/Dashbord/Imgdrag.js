import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
const fileTypes = ["JPG", "PNG", "GIF"];
const Imgdrag = () => {
    const [file, setFile] = useState(null);
    const handleChange = (files) => {
      setFile(files);
    };
    console.log(file);
    return (
        <div className='mx-auto w-[450px] my-10'>
             <FileUploader className='w-screen' handleChange={handleChange} name="file" types={fileTypes} />
        </div>
    );
};

export default Imgdrag;