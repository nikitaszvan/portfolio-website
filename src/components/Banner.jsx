import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="banner-section">
            <FaHtml5 className="react-icons"/>
            <FaCss3Alt className="react-icons"/>
            <IoLogoJavascript className="react-icons"/>
            <FaReact className="react-icons"/>
            <FaBootstrap className="react-icons"/>
            <BiLogoPostgresql className="react-icons"/>
            <FaGitAlt className="react-icons"/>     
    </section>
  )
}

export default Banner;