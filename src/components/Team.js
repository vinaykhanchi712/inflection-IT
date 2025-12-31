import React from "react";
import vinay from "../images/professional-picture.png";
import webDev from "../images/web-dev.svg";
import app from "../images/app.svg";
import consult from "../images/consultation.svg";

const TeamCard = ({ img, name, role, org, bio, twitter, linkedIn }) => (
  <article className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center group h-full">
    <div className="w-28 h-28 rounded-full bg-blue-50 overflow-hidden mb-4">
      {/* image fills the circle and is cropped (no distortion) */}
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover block"
        loading="lazy"
      />
    </div>

    <h4 className="text-lg font-semibold text-blue-900">{name}</h4>
    <div className="text-sm text-blue-700 font-medium mb-3">{role}</div>
    <div className="text-sm text-blue-700 font-medium mb-3">{org}</div>
    <p className="text-sm text-gray-600">{bio}</p>

    <div className="mt-4 flex gap-3">
      {twitter && (
        <a
          className="text-blue-500 hover:text-blue-800"
          href={twitter}
          aria-label={`${name} twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-80"
          >
            <path d="M19 7.5c.01.14.01.28.01.42 0 4.3-3.28 9.26-9.26 9.26-1.84 0-3.55-.54-4.99-1.48.26.03.52.05.79.05 1.53 0 2.94-.52 4.06-1.4-1.43-.03-2.64-.97-3.06-2.27.2.04.4.06.61.06.29 0 .57-.04.83-.11-1.5-.3-2.62-1.62-2.62-3.2v-.04c.44.24.95.39 1.49.41-0.89-.6-1.48-1.62-1.48-2.78 0-.61.16-1.17.45-1.66 1.62 1.99 4.05 3.3 6.78 3.44-.05-.23-.08-.47-.08-.71 0-1.72 1.4-3.12 3.12-3.12.9 0 1.71.38 2.28.98.71-.14 1.38-.4 1.99-.76-.24.75-.75 1.38-1.42 1.77.63-.07 1.24-.24 1.8-.48-.42.63-.95 1.18-1.56 1.62z"></path>
          </svg>
        </a>
      )}
      {linkedIn && (
        <a
          className="text-blue-500 hover:text-blue-800"
          href={linkedIn}
          aria-label={`${name} linkedin`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-80"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zM9 8h3.7v1.6h.1C13.8 8.4 14.9 7.5 17 7.5 21 7.5 21.5 10.1 21.5 14.1V20h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V20H9V8z" />
          </svg>
        </a>
      )}
    </div>
  </article>
);

const Team = () => {
  const members = [
    {
      img: vinay,
      name: "Vinay Khanchi",
      role: "Sr. Software Engineer",
      org: "Birdeye",
      twitter: "https://x.com/vinay43219057?s=21",
      linkedIn: "https://www.linkedin.com/in/vinaay-khanchi-082a12196/",
    },
    {
      img: webDev,
      name: "Rahul Sharma",
      role: "Sr. Software Engineer",
      org: "S&P Global",
      twitter: "https://x.com/rahulsharma",
      linkedIn: "https://www.linkedin.com/in/rahul-sharma-123456789/",
    },
    {
      img: app,
      name: "Akash Chaudhary",
      role: "Sr. Software Engineer",
      org: "S&P Global",
      twitter: "https://x.com/akashchaudhary",
      linkedIn: "https://www.linkedin.com/in/akash-chaudhary-987654321/",
    },
    {
      img: consult,
      name: "Somya Sanu",
      role: "Lead Dev-sec Ops",
      org: "Zoom",
      twitter: "https://x.com/somyasanu",
      linkedIn: "https://www.linkedin.com/in/somya-sanu-456789123/",
    },
    {
      img: consult,
      name: "Abhishek Saran",
      role: "Lead Dev-Ops & Infra",
      org: "Zoom",
      twitter: "https://x.com/abhisheksaran",
      linkedIn: "https://www.linkedin.com/in/abhishek-saran-123456789/",
    },
  ];

  return (
    <section id="team" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 uppercase">
            Our Team
          </h2>
          <p className="mt-3 text-gray-600">
            A small group of thinkers and makers dedicated to delivering great
            software.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {members.map((m, i) => (
            <TeamCard
              key={i}
              img={m.img}
              name={m.name}
              role={m.role}
              org={m.org}
              bio={m.bio}
              twitter={m.twitter}
              linkedIn={m.linkedIn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
