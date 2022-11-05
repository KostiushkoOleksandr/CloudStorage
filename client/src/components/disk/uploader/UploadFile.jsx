import React from "react";
import "./uploader.css";
import { useDispatch } from "react-redux";
import { removeUploadFile } from "../../../reducers/uploadReducer";
import Exit from "../../../assets/img/close-outline.svg";

const UploadFile = ({ file }) => {
  const dispatch = useDispatch();

  return (
    <div className="upload-file">
      <div className="upload-file__header">
        <div className="upload-file__name">{file.name}</div>
        <img src={Exit} alt="" className="upload-file__remove" onClick={() => dispatch(removeUploadFile(file.id))} />
      </div>
      <div className="upload-file__progress-bar">
        <div
          className="upload-file__upload-bar"
          style={{ width: file.progress + "%" }}
        />
        <div className="upload-file__percent">{file.progress}%</div>
      </div>
    </div>
  );
};

export default UploadFile;
