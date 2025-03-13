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
  return (
    <div className="p-5 flex items-center gap-5 flex-wrap max-w-[800px]">
            <img src={html} alt="" className="md:w-[20%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={css} alt="" className="md:w-[17%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={js} alt="" className="md:w-[20%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={bootstrap} alt="" className="md:w-[20%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={tailwind} alt="" className="md:w-[24%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={jquery} alt="" className="md:w-[17%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={react} alt="" className="md:w-[16%] h-[10%] max-w-[24%] sm:w-[20%]"/>
            <img src={next} alt="" className="md:w-[15%] h-[10%] max-w-[18%] sm:w-[10%] bg-white p-1"/>
            <img src={node} alt="" className="md:w-[20%] :h-[10%] min-w-[15%] sm:w-[20%]"/>
            <img src={mongo} alt="" className="md:w-[20%] :h-[10%] min-w-[15%] sm:w-[20%]"/>
            <img src={express} alt="" className="md:w-[20%] :h-[10%] min-w-[15%] sm:w-[20%]"/>
          </div>
  )
}

export default Tools