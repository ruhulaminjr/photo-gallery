import React, { useState } from "react";
import ProgressBar from "../comps/Progress";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error,setError] = useState(null)
  const types = ["image/jpeg", "image/png"];
  const fileHandler = (e) => {
    const selected = e.target.files[0];
    if(selected && types.includes(selected.type)){
        setFile(selected);
        setError('');
    }else{
        setFile(null)
        setError("Please Select A valid File (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={fileHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
