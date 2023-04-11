import React, { useState, useEffect } from "react";
import { GiRank3 } from "react-icons/gi";

import { FcRating } from "react-icons/fc";
import { MdOutlineSafetyCheck } from "react-icons/md";

import axios from "axios";
import CanvasJSReact from "../canvasjs/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const converRating = (number) => {
  return (Number(number) / 1000).toFixed(2);
};
// const options = {

//     animationEnabled: true,
//     // exportEnabled: true,
//     theme: "light2",
//     backgroundColor: "black",
//     colorSet: "customColorSet1",

//     zoomEnabled: true,
//     dataPointWidth: 20,
//     title: {
//         text: `Rank`,
//         fontFamily: "",
//         fontColor: "white",
//         fontWeight: 600,
//         fontSize: 12,
//       },

//       axisX: {
//         title: "Growth Hike",
//         // maximum: 15,
//         titleFontColor: "white",
//         // margin: 8,
//         titleFontSize: 12,
//         marginTop:10,
//         titleFontFamily: "Rajdhani",

//         // labelBackgroundColor: "white",
//         // labelFontColor: "red",

//         // labelFontFamily: "Rajdhani",
//         // labelFontSize: 26,

//         gridColor: "transparent",
//       },
//     data: [{
//               type: "column",
//               dataPoints: [
//                   { label: "Apple",  y: 10  },
//                   { label: "Orange", y: 15  },
//                   { label: "Banana", y: 25  },
//                   { label: "Mango",  y: 30  },
//                   { label: "Grape",  y: 28  }
//               ]
//      }]
//  }

export default function SearchYTKey() {
  const [searchBox, setSearchBox] = useState(false);
  const [apitestData, setApitestData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [filterClick, setFilterClick] = useState(false);
  const [movies, setMovies] = useState(false);
  const [gener, setGener] = useState(false);
  const [actor, setActor] = useState(false);
  const [series, setSeries] = useState(false);
  const [episodes, setEpisodes] = useState(false);

console.log('ggg',movieData)

  const [year, setYear] = useState('');
 

  const baseUrl = "https://moviesminidatabase.p.rapidapi.com/";

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${baseUrl}movie/byYear/${year}`,
      headers: {
        "X-RapidAPI-Key": "f6e252e67cmsh1c0aaf58151e562p139fa1jsn36a696c4d3ce",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setApitestData([response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [year]);

  useEffect(() => {
    let popu = apitestData[0]?.results;
    let popularityData = [];
    for (var key in popu) {
      if (popu.hasOwnProperty(key)) {
        popularityData.push(popu);
      }
    }
    setMovieData(popularityData);
  }, [apitestData]);
  return (
    <>
      <div className="flex md:flex-row p-3 flex-col  gap-2 md:gap-0">
        <p
          onClick={() => setSearchBox(!searchBox)}
          className="bg-red-500 hover:opacity-60  p-2 cursor-pointer w-32 flex items-center  rounded-sm"
        >
          Search Movie
          <GiRank3 className="ml-1" />
        </p>
        {searchBox && (
          <input
            type="text"
            placeholder="Type here.."
            className="w-52 h-8 md:h-10 p-2 outline-none placeholder:text-black text-black"
          />
        )}
      </div>
      <div className="p-6 px-10 bg-gray-900 mt-4">
        <p
          onClick={() => {
            setFilterClick(!filterClick);
            setMovies(false);
          }}
          className="bg-white text-black text-xs w-20 px-2 py-1 cursor-pointer "
        >
          filter Movie
        </p>
        {filterClick && (
          <ul className="flex gap-3 text-xs mt-4 flex-wrap ">
            <li
              onClick={() => setMovies(!movies)}
              className="border-2 px-2 border-white border-opacity-60 hover:opacity-80 mx-4 cursor-pointer"
            >
              Movies{" "}
            </li>
            <li
              onClick={() => setGener(!gener)}
              className="border-2 px-2 border-white border-opacity-60 hover:opacity-80 mx-4 cursor-pointer"
            >
              Geners
            </li>
            <li
              onClick={() => setActor(!actor)}
              className="border-2 px-2 border-white border-opacity-60 hover:opacity-80 mx-4 cursor-pointer"
            >
              Actor
            </li>
            <li
              onClick={() => setSeries(!series)}
              className="border-2 px-2 border-white border-opacity-60 hover:opacity-80 mx-4 cursor-pointer"
            >
              Series
            </li>
            <li
              onClick={() => setEpisodes(!episodes)}
              className="border-2 px-2 border-white border-opacity-60 hover:opacity-80 mx-4 cursor-pointer"
            >
              Episides
            </li>
          </ul>
        )}

        <div className="my-4">
          {movies && (
            <div className="flex">
              <div className="flex gap-1 items-center  bg-blue-500  justify-center rounded-sm  text-black">
                <input
                  className="w-16 h-8 text-center text-white  bg-black placeholder:text-xs placeholder:text-white outline-none "
                  type="text"
                  placeholder="2012.."
                  value={year}
                  onChange={(e) =>setYear(e.target.value)}
                />
                <MdOutlineSafetyCheck className="mx-3 cursor-pointer hover:opacity-25  text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-6">
        <p className="text-4xl pl-3 mb-1">{year} ---</p>
        <div className="flex flex-wrap  items-center h-80 scrollable  overflow-y-scroll cursor-pointer">
          {movieData &&
            movieData[0]?.map((movie) => {
              return (
                <div className="bg-gray-800 m-4 flex gap-5 p-3 items-center  rounded-sm">
                  {" "}
                  <p className="">{movie?.title} </p>
                
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
