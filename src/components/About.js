import React from "react";

function About(props) {
  const about = props.about;
  return (
    <div className={about ? "active about" : "about"}>
      <h2>About Me</h2>
      <p>
        Hey! My name is Chris. I’m a new web developer who enjoys design work,
        too. This blog is a playground of sorts to try out new ideas. Currently,
        I'm in the middle of a design refresh inspired by the early Macintosh
        software so the code is kinda a mess; but hey, it’s a mess with a
        direction.
      </p>
      <h4>Let’s Connect:</h4>
      <a href="https://twitter.com/cpenned">Twitter: @cpenned</a>
      <a href="https://www.youtube.com/channel/UCUSxKiac-miugK9CDsxGS9Q">
        YouTube: Coding in Public
      </a>
      <a href="mailto:hello@chrispennington.blog">
        Email: hello@chrispennington.blog
      </a>
      <a href="https://chrispennington.blog/blog/index.xml">RSS Feed</a>
    </div>
  );
}

export default About;
