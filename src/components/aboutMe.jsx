// AboutMe.jsx
import Reveal from "./Reveal";

const AboutMe = () => {
  return (
    <Reveal>
      <div className="text-gray-300 my-3" id="about me">
        <h3 className="text-4xl font-semibold mb-5 text-center">
          About <span>Me</span>
        </h3>
        <p className="text-justify leading-7 w-11/12 mx-auto">
          Driven by a commitment to excellence,
            I build frontend applications that marry aesthetic design with robust functionality.
            I believe that a great user experience is achieved through thoughtful attention to detail,
            responsiveness, and accessibility. By leveraging modern frameworks and best practices,
            <span className="block text-center mt-2 text-gray-300">
            I deliver solutions that not only meet but exceed client expectations in today’s competitive digital landscape.
            </span>
        </p>

        <div className="flex justify-center mt-10 items-center gap-7">
          <div className="bg-gray-800/40 p-4 rounded-lg text-center">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              13<span>+</span>
            </h3>
            <p className="text-xs md:text-base">
              <span>Projects</span>
            </p>
          </div>

          <div className="bg-gray-800/40 p-5 rounded-lg text-center">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              0<span>+</span>
            </h3>
            <p className="text-xs md:text-base">
              <span>years of experience</span>
            </p>
          </div>

          <div className="bg-gray-800/40 p-5 rounded-lg text-center">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              0<span>+</span>
            </h3>
            <p className="text-xs md:text-base">
              <span>happy clients</span>
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default AboutMe;
