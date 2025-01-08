import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

const HeaderText = ({title, clas}) => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(`.${clas}`, { 
      opacity: 1, 
      translateY: 0, 
      scrollTrigger: {
        trigger: `.${clas}`, 
        start: "top 80%", 
        end: "top 50%", 
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <h3 className={`${clas} section-heading translate-y-5 font-normal`}>
      {title}
    </h3>
  )
}

HeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  clas: PropTypes.string.isRequired// Ensures children is required and can be any renderable node
};

export default HeaderText