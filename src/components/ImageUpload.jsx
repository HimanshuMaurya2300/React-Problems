import React, { useState } from 'react'

const ImageUpload = () => {

    const [file, setFile] = useState(null)

    return (
        <div>
            <input
                type="file"
                accept='image/*'
                onChange={(e) => setFile(e.target.files[0])}
            />

            {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}

        </div>
    )
}

export default ImageUpload