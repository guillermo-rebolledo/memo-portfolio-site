import React from 'react';
import CapabilityList from './CapabilityList';
import Scroll from '../common/Scroll';

const Capabilities = () => (
  <section id="two" className="wrapper style3 fade-up fullscreen">
    <div className="inner">
      <h2>How I Work</h2>
      <p>
        My primary area of interest and my main area of expertise is frontend
        and web technologies but I have experience working as a Fullstack
        Engineer. I am a self-sufficient and independent engineer but I enjoy
        working and collaborating with a team to build scalable, responsive, and
        performant software.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              Get in touch
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Capabilities;
