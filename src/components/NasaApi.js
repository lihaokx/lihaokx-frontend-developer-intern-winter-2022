import useFetch from "react-fetch-hook";
import { useEffect, useState } from 'react';
// import { Col, Row } from 'reactstrap';
import Search from "./Search";
import Picture from "./Picture";  
import ClipLoader from "react-spinners/ClipLoader";
// import { RiHeartLine, RiFacebookLine, RiTwitterLine, RiCalendarLine } from 'react-icons/ri';
 
 
 
function NasaApi() {
    const [picState, setPicState] = useState([]);
    const [q, setQ] = useState("");
    const [isLoadPicState, setIsLoadPicState] = useState(true);

    // console.log("islike before: ", localStorage.getItem("islike"));
    const [islike, setIslike] = useState((localStorage.getItem("islike")===null  || localStorage.getItem("islike").length === 0 ) ? [] : localStorage.getItem("islike").split(",").map((val)=>{return JSON.parse(val) })  );
    const [isExplan, setIsExplan] = useState([]);

    const { isLoading, data } = useFetch("https://api.nasa.gov/planetary/apod?start_date=2021-05-02&end_date=2021-05-24&api_key=XLMRzybJ1sxCqjnb1yJZAynuc7mCGNfZKoQjaO7c");
    // console.log(picState);
 
    // console.log(q);

    function searchParam(datas){
        return(
            datas.filter((data)=>{
                return data.title.toLowerCase().indexOf(q) >-1  
            })
        )
    }
    function renderPic(pics){
        return(
            <div>
                
                <div className ="row mb-3 searchdiv">
                    <Search q={q} setQ ={setQ} />
                </div>
                <button onClick ={(e)=>{
                    localStorage.removeItem("islike");
                    setIslike(Array(data.length).fill(false));
                }} >

                </button>
                <div className ="row">
                    {
                    searchParam(pics).map((pic )=>{
                            return(
                                <Picture key={pic.id} pic={pic} islike={islike} setIslike ={setIslike} isExplan = {isExplan} setIsExplan = {setIsExplan}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    useEffect( ()=>{
        if(!isLoading){
            var promis = new Promise((resolv, reject) =>{
                setPicState(data.map((currdata, idx)=>{
                    currdata.id =idx;
                    return currdata;
                }));
                resolv();
            } );
            promis.then(()=>{ setIslike( localStorage.getItem("islike") === null || localStorage.getItem("islike").length === 0 ? Array(data.length).fill(false) : localStorage.getItem("islike").split(",").map((val)=>{return JSON.parse(val) })   ) })
            .then(()=> {setIsExplan(Array(data.length).fill(false))} )
            .then(setIsLoadPicState(false));
        }    
    }, [isLoading]);

    if(!isLoadPicState){
        return ( 
            renderPic(picState)
        );
    }
    else{
        return(
            <div className = "loading">
                 <ClipLoader size={150} />
            </div>
        )
    }
}

export default NasaApi;