import React from "react";
import { PROJECTS } from "../constants";

const ProjectShowcase = () => {
  return (
    <section
      className="container mx-auto px-4 py-12
    md:px-8"
      id="projects"
    >
      <div>
        <h2
          className="my-8 text-center justify-center text-4xl
            font-semibold tracking-tighter"
        >
          Projects
        </h2>
      </div>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center md:flex-row-reverse 
                md:items-start"
            >
              <div className="w-full md:w-1/2 p-8">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="
                        w-full rounded-3xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="mb-2 text-lg text-emerald-950">
                  {project.year}
                </h2>
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-2 text-4xl text-emerald-950">
                  {project.description}
                </p>
                <p className="mb-4 text-lg text-emerald-950">
                  {project.details}
                </p>

                <table>
                  <tr>
                    <td
                      className="
                    px-6 py-4 font-medium text-emerald-950"
                    >
                      <p>Investment</p>
                    </td>
                    <td
                      className="
                    px-6 py-4 text-emerald-950"
                    >
                      <p>{project.figures.investment}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-6 py-4 font-medium text-emerald-950">
                      Duration
                    </td>
                    <td className=" px-6 py-4 text-emerald-950">
                      {project.figures.duration}
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-6 py-4 font-medium text-emerald-950">
                      Outcomes
                    </td>
                    <td className=" px-6 py-4 text-emerald-950">
                      {project.figures.outcome}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;
