import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

const HeaderText = ({title, clas, className}) => {
  gsap.registerPlugin(ScrollTrigger)

useGSAP(() => {
  gsap.to(`.${clas}`, {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: `.${clas}`,
      start: "top 80%",
      end: "top 10%",
      toggleActions: "play reverse play reverse" // Replay animation every time it enters view
    },
  });
}, []);
  return (
    <h3 className={`${clas} section-heading translate-y-5 font-normal ${className}`}>
      {title}
    </h3>
  )
}

HeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  clas: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HeaderText