import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Languages and Technologies',
      description:
        'Javascript/Typescript, React.js, Node.js, webpack, HTML, CSS, Jest, react-testing-library, enzyme, Storybook, AWS and GCP Services, and others. I do not limit myself to these, I am always looking to adopt more skills and technologies. Mobile development, for example, is an area that I would love to explore.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Teamwork',
      description:
        'Although I can work independently, I enjoy working with a team. Working with multi-disciplinary teams has given me the chance to see new perspectives and to learn new things and technologies everyday like backend technologies, security, cloud technologies, performance and accessibility, UI/UX design and others.',
      iconClass: 'fa-handshake-o',
    },
    {
      heading: 'Driven by learning',
      description:
        'I truly believe that we can always keep learning. Every day brings new challenges and I like to work on projects that challenge me and force me out of my comfort zone. I think this is the best way to learn. That is also why I love the web and frontend, there is always new technologies and libraries to keep up with!',
      iconClass: 'fa-book',
    },
    {
      heading: 'Problem Solving',
      description:
        'I enjoy the problems and challenges that come with software development. Creative problem solving and a critical thiking process are part of my workflow.',
      iconClass: 'fa-commenting-o',
    },
    {
      heading: 'Mentorship',
      description:
        'One of the things I enjoy a lot, is to be in the middle when it comes to experience. I love learning from more experienced teammates, but also mentor people with less experience. When I started my career as an intern/trainee I had awesome mentors and people that I learned a lot from, so I like to be that mentor for people.',
      iconClass: 'fa-hand-peace-o',
    },
    {
      heading: 'Accessibility and Inclusion',
      description:
        'I like to work on diverse teams where people are comfortable being who they are and also build and ship products that everybody can use and have a good experience.',
      iconClass: 'fa-universal-access',
    },
  ];

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map(capability => (
        <Capability key={capability.heading} {...capability} />
      ))}
    </>
  );
};

export default CapabilityList;
