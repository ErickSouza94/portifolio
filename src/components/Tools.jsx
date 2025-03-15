import { useLocation } from "react-router-dom"

import html from "/html-logo.svg"
import css from "/css.svg"
import js from "/js.svg"
import bootstrap from "/bootstrap.svg"
import tailwind from "/tailwind.svg"
import react from "/react.svg"
import jquery from "/jquery.svg"
import next from "/nextjs.svg"
import node from "/node.svg"
import mongo from "/mongo.svg"
import express from "/express.svg"

const Tools = () => {
  const location = useLocation()
  const isMoreAbout = location.pathname === '/more-about'
  

  return (
    <div className={`p-5 flex items-center gap-5 flex-wrap max-w-[800px] ${isMoreAbout && 'justify-center'}`}>
            <img src={html} alt="" className="md:w-[16%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={css} alt="" className="md:w-[15%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={js} alt="" className="md:w-[20%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={bootstrap} alt="" className="md:w-[20%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={tailwind} alt="" className="md:w-[24%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={jquery} alt="" className="md:w-[17%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={react} alt="" className="md:w-[16%] h-[10%] max-w-[24%] sm:w-[20%] hover:scale-110 rounded-t-xl"/>
            <img src={next} alt="" className="md:w-[15%] h-[10%] max-w-[18%] sm:w-[10%] hover:scale-110 rounded-t-xl bg-white p-1"/>
            <img src={node} alt="" className="md:w-[20%] :h-[10%] max-w-[24%] min-w-[20%] sm:w-[14%] hover:scale-110 rounded-t-xl"/>
            <img src={mongo} alt="" className="md:w-[20%] :h-[10%] max-w-[24%] min-w-[20%] sm:w-[14%] hover:scale-110 rounded-t-xl"/>
            <img src={express} alt="" className="md:w-[20%] :h-[10%] max-w-[24%] min-w-[20%] sm:w-[14%] hover:scale-110 rounded-t-xl"/>
          </div>
  )
}

export default Tools