import React, { useState,useEffect } from 'react'
import html from "../assets/codingLogos/html.png"
import css from "../assets/codingLogos/css.png"
import js from "../assets/codingLogos/js.png"
import mongo from "../assets/codingLogos/mongo.png"
import node from "../assets/codingLogos/nodejs.png"
import react from "../assets/codingLogos/React.png"
import spring from "../assets/codingLogos/spring.png"
import express from "../assets/codingLogos/Express.png"
import java from "../assets/codingLogos/java.png"

const CodingLogos = () => {
    const logoimgprm={
        height:"65px",
        width:"65px",
        margin:"10px",

    }
    


  return (
    <>
        <div className="coding-logos mt-2">
            <img style={logoimgprm} src={html} alt="" />
            <img style={logoimgprm} src={css} alt="" />
            <img style={logoimgprm} src={js} alt="" />
            <img style={logoimgprm} src={java} alt="" />
            <img style={logoimgprm} src={spring} alt="" />
            <img style={logoimgprm} src={node} alt="" />
            <img style={logoimgprm} src={react} alt="" />
            <img style={logoimgprm} src={express} alt="" />
            <img style={logoimgprm} src={mongo} alt="" />
        </div>
    </>
  )
}

export default CodingLogos