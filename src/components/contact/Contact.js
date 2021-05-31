import React from 'react';

const Contact = () => (
  <section id="three" className="wrapper style1 fade-up fullscreen">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        You can reach out to me on my different social media platforms like{' '}
        <a
          href="https://www.linkedin.com/in/gortizdev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{' '}
        or{' '}
        <a
          href="https://github.com/guillermo-rebolledo"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>{' '}
        ,{' '}
        <a
          href="mailto:gortiz.dev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          email
        </a>{' '}
        or read my{' '}
        <a
          href="https://www.memorebo.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          personal dev blog
        </a>
        .
      </p>
      <p className="align-center">Want to work with me? Get in contact!</p>

      <ul className="actions center">
        <li>
          <a
            href="https://www.linkedin.com/in/gortizdev/"
            rel="noopener noreferrer"
            target="_blank"
            className="button"
          >
            <span className={`icon contact-link fa-linkedin-square`} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/guillermo-rebolledo"
            rel="noopener noreferrer"
            target="_blank"
            className="button"
          >
            <span className={`icon contact-link fa-github`} />
          </a>
        </li>
        <li>
          <a
            href="https://www.memorebo.dev/"
            rel="noopener noreferrer"
            target="_blank"
            className="button"
          >
            <span className={`icon contact-link fa-rss`} />
          </a>
        </li>
        <li>
          <a
            href="mailto:gortiz.dev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="button"
          >
            <span className={`icon contact-link fa-envelope`} />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Contact;
