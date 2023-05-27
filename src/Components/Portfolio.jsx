/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mountains-1761292_1280.jpg";

const imageAltText = "mountains";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Facial Recognition Software",
    description:
      "We developed a Facial Recognition Software using Python(a programming language) that uses machine learning algorithms to analyze and compare images of human faces in order to identify individuals. ",
    url: "https://drive.google.com/drive/folders/1sMoi_tqZzQlw6dn0THkhaG4OwZpTZnPp",
  },
  {
    title: "Automatic Floor Cleaner",
    description:
      "We designed a floor cleaner that included a vacuum, a water dispenser, and a mop that could be operated by the handle attached to it.",
    url: "https://drive.google.com/file/d/1VkvwGhvoKsS5ZEPWLsJPPxcAv5yjBh6C/view?usp=sharing",
  },
  {
    title: "Destini - A GIAS based application",
    description:
      "iOS application based on the Graphical Password Authentication System using Swift.",
    url: "https://www.linkedin.com/posts/abhilekh-borah-aa758a15a_manipaluniversity-hackathon-ios-activity-7023984464024252417-FmZl?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "3D Printed Modern Plough",
    description:
      "We created a 3D plough for the Atal Innovation Mission's 3D printing competition. This is a contemporary plough with capabilities to alter farming practises.",
    url: "https://youtu.be/AXNpi3WiN2k",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
