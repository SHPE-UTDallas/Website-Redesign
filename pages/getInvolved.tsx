import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const getInvolved = () => {
  const mentorProgramImg = "/imgs/SHPE_Icon.png";
  const SHPEJrImg = "/imgs/SHPE_Icon.png";
  const TechnologyTeamImg = "/imgs/SHPE_Icon.png";

  const MentorProgram = (
    <div>
      <p className="title is-4">Mentor Program</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );

  const SHPEJr = (
    <div>
      <p className="title is-4">SHPE JR</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );

  const TechnologyTeam = (
    <div>
      <p className="title is-4">Technology Team</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );

  const imageRight = (template: any, img: string, pageLink?: string | null) => {
    return (
      <div className="card itemCard">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="section">{template}</div>
            <div style={{width:"15%", margin:"auto"}}>
              {pageLink ? (
                <Link href={pageLink}>
                  <div className="button">More Info</div>
                </Link>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
          <div className="column">
            <figure className="image ">
              <img src={img} />
            </figure>
          </div>
        </div>
      </div>
    );
  };

  const imageLeft = (template: any, img: string, pageLink?: string | null) => {
    return (
      <div className="card itemCard">
        <div className="columns">
          <div className="column">
            <figure className="image ">
              <img src={img} />
            </figure>
          </div>
          <div className="column is-two-thirds">
            <div className="section">{template}</div>
            <div style={{width:"15%", margin:"auto"}}>
              {pageLink ? (
                <Link href={pageLink}>
                  <div className="button">More Info</div>
                </Link>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout title="SHPE UTD">
      <div className="container section">
        {imageRight(MentorProgram, mentorProgramImg)}
        {imageLeft(SHPEJr, SHPEJrImg)}
        {imageRight(TechnologyTeam, TechnologyTeamImg, "/tech-team")}
      </div>
    </Layout>
  );
};

export default getInvolved;
