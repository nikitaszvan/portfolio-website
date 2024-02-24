import React, {useEffect} from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";

const Banner = () => {
  const icons = [{ iconName: FaHtml5, label: 'HTML5 ', color: '#F16529'}, { iconName: FaCss3Alt, label: 'CSS  ', color: '#379AD6'}, { iconName: IoLogoJavascript, label: 'JAVASCRIPT', color: '#F7DF1E'}, { iconName: FaReact, label: 'REACT', color: '#4AD5FF'}, { iconName: FaBootstrap, label: 'BOOTSTRAP', color: '#553A7D'}, { iconName: BiLogoPostgresql, label: 'POSTGRESQL', color: '#336791'}, { iconName: FaGitAlt, label: 'GIT', color: '#DD4B34'}];

  const handleHoverOver = (e) => {
    const id = parseInt(e.target.getAttribute('id'));
    document.querySelector(`svg[iconid="${id}"]`)?.classList.add('hovered');
    if (document.querySelector(`svg[iconid="${id}"]`)) {
      document.querySelector(`svg[iconid="${id}"]`).style.color = icons[id].color;
      document.querySelector(`h3[h3id="${id}"]`).style.opacity = '1';
    }
    document.querySelector(`svg[iconid="${id - 1}"]`)?.classList.add('close-hovered');
    document.querySelector(`svg[iconid="${id + 1}"]`)?.classList.add('close-hovered');
    document.querySelector(`div[id="${id - 1}"]`)?.classList.add('close-hovered');
    document.querySelector(`div[id="${id + 1}"]`)?.classList.add('close-hovered');
    if (id == 3) {
      document.querySelector(`svg[iconid="${id}"]`)?.classList.add('rotating');
    }
  };

  const handleHoverOut = (e) => {
    const id = parseInt(e.target.getAttribute('id'));
    document.querySelector(`svg[iconid="${id}"]`)?.classList.remove('hovered');
    if (document.querySelector(`svg[iconid="${id}"]`)) {
      document.querySelector(`svg[iconid="${id}"]`).style.color = 'black';
      document.querySelector(`h3[h3id="${id}"]`).style.opacity = '0';
    }
    document.querySelector(`svg[iconid="${id - 1}"]`)?.classList.remove('close-hovered');
    document.querySelector(`svg[iconid="${id + 1}"]`)?.classList.remove('close-hovered');
    document.querySelector(`div[id="${id - 1}"]`)?.classList.remove('close-hovered');
    document.querySelector(`div[id="${id + 1}"]`)?.classList.remove('close-hovered');
    if (id == 3) {
      document.querySelector(`svg[iconid="${id}"]`)?.classList.remove('rotating');
    }
  };

  return (
    <section className="banner-section">
            {icons.map((icon, index)=>(
              <div key={index} style={{textAlign: 'center'}}>
                <icon.iconName className='react-icons' iconid={index}/>
                <div className='cover-svg' id={index} onMouseOver={(e) => handleHoverOver(e)} onMouseOut={(e) => handleHoverOut(e)}>
                  <h3 style={{opacity: '0%'}} h3id={index}>{icon.label}</h3>
                </div>
              </div>
            ))
            
            }
    </section>
  )
}
export default Banner;