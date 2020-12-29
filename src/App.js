import React, { useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "./App.css";
import DynamicRadio from "./components/basic/dynamicRadio";
import AddStudent from "./components/person/addStudent";
import textToolbar from "./configs/textToolbar";
import ImageUploader from "react-images-upload";
import ReactAudioPlayer from "react-audio-player";

function App() {
  var [uploadedImgUrl, setUploadedImgUrl] = useState();
  var [audio, setAudio] = useState();

  function onChange(e) {
    console.log(e);
  }

  function onDrop(picture) {
    setUploadedImgUrl(URL.createObjectURL(picture[0]));
  }

  function onImageUploadBefore(files, info, uploadHandler) {
    console.log(files);
    console.log(info);
    console.log(uploadHandler);
  }

  function onUploadAudio(e) {
    if (e.target.files && e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  }

  function onImageUpload(e) {
    console.log(arguments);
  }

  return (
    <div className="App">
      <ReactAudioPlayer src={audio} autoPlay controls />
      <input type="file" onChange={onUploadAudio} accept=".mp3,audio/*"></input>
      <img src={uploadedImgUrl} alt=""></img>
      <ImageUploader
        width="100"
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <DynamicRadio data={[]} />
      <AddStudent />
      <SunEditor
        onChange={onChange}
        // onImageUploadBefore={onImageUploadBefore}
        onImageUpload={onImageUpload}
        setOptions={{
          height: 300,
          width: 500,
          placeholder: "Heheheheehehehehe",
          buttonList: [textToolbar],
        }}
      />
    </div>
  );
}

export default App;
