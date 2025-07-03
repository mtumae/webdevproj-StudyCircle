import { useState } from "react"
import './Uploader.css'

const Uploader = () => {
    const [file, setFile]=useState<File|null>(null)
    const [uploadstatus, setUploadStatus]=useState({
        isuploading:false,
        isuploaded:false
    })



    const handleFileChange = (e) => {
        const selectedfile = e.target.files?e.target.files[0]:null;
        selectedfile?setFile(selectedfile):setStatus(true)
    }

    const handleUpload = async()=>{
        if(!file) return;
        setStatus(false)
        setStatus({})
    }



    return(
        <div class="wrapper">
            <input 
                type="file"

            
            />

        </div>
    )
}



export default Uploader;