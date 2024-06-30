/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about_me.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Final year student studying at MKSSS Cummins College of Engineering for Women , Pune. I enjoy coding , creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "MySQL",
  "JavaScript",
  "Python",
  "HTML & CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am passionate about coding and creating unique and simplistic user interfaces in creative ways. I am always ready to take up new challenges and work on them. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am passionate about coding and creating unique and simplistic user interfaces in creative ways. I am always ready to take up new challenges and work on them. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am passionate about coding and creating unique and simplistic user interfaces in creative ways. I am always ready to take up new challenges and work on them.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "peach",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
