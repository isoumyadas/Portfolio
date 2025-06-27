import Skills from "../components/Skills";
import javascript from "../assets/js.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import graphql from "../assets/graphql.svg";
import html from "../assets/html.svg";
import linux from "../assets/linux.svg";
import mongo from "../assets/mongo.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import ts from "../assets/ts.svg";

const SkillsCard = () => {
  return (
    // Here you need to rethink when container changes to col-span-2.
    <div className="bg-[#222222] w-full max-h-fit rounded-3xl flex flex-col gap-8 p-5 col-span-4">
      <div className="flex flex-col gap-4">
        <p className="text-[#EEEEEE] text-base">Skills</p>
        <div className="grid grid-cols-4 gap-4">
          <Skills
            skillIcon={javascript}
            skillName="Javascript"
            techLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skills
            skillIcon={ts}
            skillName="Typescript"
            techLink="https://www.typescriptlang.org/"
          />
          <Skills
            skillIcon={react}
            skillName="React"
            techLink="https://react.dev/"
          />
          <Skills
            skillIcon={mongo}
            skillName="Mongo DB"
            techLink="https://www.mongodb.com/"
          />
          <Skills
            skillIcon={postgresql}
            skillName="Postgresql"
            techLink="https://www.postgresql.org/"
          />
          <Skills
            skillIcon={node}
            skillName="Node JS"
            techLink="https://nodejs.org/en"
          />
          <Skills
            skillIcon={html}
            skillName="HTML"
            techLink="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <Skills
            skillIcon={css}
            skillName="CSS"
            techLink="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <Skills
            skillIcon={tailwind}
            skillName="Tailwind"
            techLink="https://tailwindcss.com/"
          />
          <Skills
            skillIcon={graphql}
            skillName="GraphQL"
            techLink="https://graphql.org/"
          />
          <Skills
            skillIcon={linux}
            skillName="Linux OS"
            techLink="https://www.linux.org/"
          />
          <Skills
            skillIcon={git}
            skillName="Git"
            techLink="https://git-scm.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
