import React, { useState, useEffect } from "react";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { RiFacebookLine } from "react-icons/ri";
import { TbBrandTiktok } from "react-icons/tb";
import { HiOutlineCloudDownload } from "react-icons/hi";
import axios from "axios";
import { CgSoftwareDownload } from "react-icons/cg";
// import Modal from 'react-modal';
import { useSpring, animated } from "@react-spring/web";
import SearchYTKey from "./SearchYTKey";


export default function DownloadVideo() {
  const [inputState, setInputState] = useState("");
  const [inputVideoId, setInputVideoId] = useState("");
  const [videoDetail, setVideoDetail] = useState([]);
  const [videoDownload, setVideoDownload] = useState([]);
  const [videoDownloadLink, setVideoDownloadLink] = useState([]);

 const config= {
    mass: 5,
    friction: 320,
    tension: 120,
  }
  const [props, api] = useSpring(
  
    () => ({
      config,
      from: {width:'100%',opacity:0},
      to: {width:'90%',opacity:1},
      loop:true,
    }),
  
    []
    
  );

  useEffect(() => {
    var myObject = videoDetail[0]?.link;
    var bug = [];
    for (var key in myObject) {
      if (myObject.hasOwnProperty(key)) {
        bug.push(myObject[key]);
      }
    }

    setVideoDownload([bug]);
  }, [videoDetail]);

  useEffect(() => {
    var downLoadV = [];
    videoDownload.map((video) => {
      video.map((videoss) => {
        downLoadV.push({
          videoLink: videoss[0],
          size: videoss[1],
          type: videoss[3],
        });
      });
    });
    setVideoDownloadLink([downLoadV]);
  }, [videoDownload]);
  console.log("gggg", videoDetail[0]);

  // { 'a': 2, 'b': 4, 'c': 6 }

  const getVideoId = () => {
    if (inputState) {
      let result = inputState.split("/");
      setInputVideoId(result[result.length - 1]);
    }
    setInputState("");
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-video-download-info.p.rapidapi.com/dl",
      params: { id: `${inputVideoId}` },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("reso", response.data);

        setVideoDetail([response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [inputVideoId]);

  useEffect(() => {
    setInputVideoId("");
  }, []);

  return (
    <div className="flex py-20 px-4 my-4 bg-gray-900 bg-opacity-70  gap-6 flex-col items-center">
      <p className="flex text-white  textShadow flex-col items-center text-4xl gap-3">
        Here You can Dowload any Online Video
        <div className="flex gap-2">
          <CiTwitter />
          <CiInstagram />
          <RiFacebookLine />
          <TbBrandTiktok />
        </div>
      </p>
      <div className="bg-black flex p-2 items-center  w-80 rounded-md  gap-4">
        <input
          placeholder="Paste Video Url"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          type="text"
          className="outline-none p-2 placeholder:text-black placeholder:text-sm rounded-full px-4 flex-1 text-black"
        />
        <HiOutlineCloudDownload
          onClick={getVideoId}
          className="text-2xl cursor-pointer"
        />
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > */}

     
        <animated.div  style={props} className="bg-black  z-40 m-6 p-4 rounded-md">
          {videoDetail.length ? (
            <div className=" flex flex-col items-center">
              <div className="relative my-6">
                <img className="" src={videoDetail[0]?.thumb} alt="" />
                {videoDetail[0]?.thumb && (
                  <p className="bg-red-600 cursor-pointer absolute z-10 top-2 right-2 px-4 py-1 rounded-full text-xs ">
                    Suscribe
                  </p>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
  
          {videoDetail[0]?.length && (
            <div className="">
              <div className="flex flex-col  text-black  bg-gray-800 p-5 mx-2 rounded-sm bg-opacity-80">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-white w-60">
                    {videoDetail[0]?.title}
                  </p>
                  {videoDetail[0]?.lengthsec && (
                    <p className="text-xs text-white">
                      {videoDetail[0]?.length}
                      <span className="text-xxs">min</span>
                    </p>
                  )}
                </div>
                <p className="text-xs text-white my-4">
                  {videoDetail[0]?.description}
                </p>
              </div>
              <p className="bg-white mx-1 p-2 text-black text-sm">
                <span className="text-xs mr-2">Author:</span>
                {videoDetail[0]?.author}
              </p>
            </div>
          )}
          {videoDownloadLink[0] && (
            <div className="flex flex-wrap items-center  w-full h-80  scrollable  overflow-y-scroll my-6 p-10 ">
              <p className="text-xs mx-4">Download Here--</p>
              {videoDownloadLink[0].map((videLink) => {
                return (
                  <a
                    className="bg-red-500 rounded-md block px-4 py-2 m-2 "
                    href={videLink.videoLink}
                  >
                    {videLink.size.length ? (
                      <p className="flex items-center gap-2">
                        {videLink.size}
                        <span className="">{videLink.type}</span>
                        <CgSoftwareDownload />
                      </p>
                    ) : (
                      <p className="">
                        <CgSoftwareDownload />
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
          )}

        </animated.div>
        <SearchYTKey/>
    
      {/* </Modal> */}
    </div>
  );
}
