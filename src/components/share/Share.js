import React, { useContext } from "react";
import "./Share.scss";
import {
  PermMedia,
  Loyalty,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { users } from "../../mockData";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [progress, setProgess] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(file);
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgess(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          uploadPost(url);
        });
      }
    );
  };

  const uploadPost = async (url) => {
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: url,
    };

    try {
      await axios.post("/posts", newPost);
      setProgess(0);
      setFile(null);
      desc.current.value = "";
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <form className="share__wrapper" onSubmit={handleSubmit}>
        <div className="share__top">
          <img
            src={
              user.profilePicture !== ""
                ? publicFolder + user.profilePicture
                : publicFolder + "no-image.png"
            }
            alt="profile img on share tab"
            className="share__profileImg"
          />
          <input
            type="text"
            className="share__input"
            placeholder={`What's on your mind ${
              user.username.charAt(0).toUpperCase() + user.username.slice(1)
            }?`}
            ref={desc}
          />
        </div>
        <hr />
        <div className="share__bottom">
          <div className="share__options">
            <label htmlFor="file" className="share__option">
              <PermMedia htmlColor="blue" />
              <span className="share__optionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".jpeg, .jpg, .png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share__option">
              <Loyalty htmlColor="red" />
              <span className="share__optionText">Tag</span>
            </div>
            <div className="share__option">
              <LocationOn htmlColor="green" />
              <span className="share__optionText">Location</span>
            </div>
            <div className="share__option">
              <EmojiEmotions htmlColor="#f2a500" />
              <span className="share__optionText">Feelings</span>
            </div>
          </div>
          <button className="share__button" type="submit">
            Share
          </button>
        </div>
        <div className="share__fileInfoSection">
          {file && <span>{file.name + " "}</span>}
          {progress !== 0 && (
            <span className="share__fileProgress" style={{ color: "blue" }}>
              Uploaded {progress}%
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Share;
