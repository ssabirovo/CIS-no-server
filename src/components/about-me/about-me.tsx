import React from "react";

import cls from "./about-me.module.scss";
import Photo from "../../assets/images/img.png";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <img src={Photo} alt="" />

    <div className={cls.info}>
      <h3 className={cls.title}>Sobirov Muhiddin</h3>
      <p className={cls.paragraph}>
        i'm junior frontend developer. i work as a trainee for a two month for
        my mentor’s company. Whether you’re trying to find disciplined,
        hard-working and sociable worker, I could be one of the right cadre.
      </p>
    </div>
  </div>
);

export default AboutMe;
