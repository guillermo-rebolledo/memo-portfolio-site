import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hello, I'm Guillermo Rebolledo</h1>
      <p>
        I'm a Software Engineer from Mexico. I'm very passionate about
        designing, coding, and shiping software to the web.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="two">
            <a href="#two" className="button">
              How I Work
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Introduction;
