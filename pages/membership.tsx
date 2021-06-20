import Link from "next/link";
import Layout from "../components/Layout";
import OfficerJson from "../data/Officer.json";
import LocalTable from "../components/membership/LocalTable";
import NationalTable from "../components/membership/NationalTable";
/*
  Heading: How to Join
  reference: http://shpeutd.org/membership.php
    - similar "How to Join" section
    - How to Pay due sections
  Bulma: https://bulma.io/
*/

/*
  Files on your local computer
  git status -> What files have changed in that folder since the last "commit"
  commit -> snapshot of changes
  Changes not staged for commit : Files that you've previously commited or taken a snapshot of
  untracked files: files that you've never commited or taken a snapshot of
  add a file to our current "commit" -> be in green if it's added
  whenever you run "git commit -m "Message here" " -> it'll take a snapshot/add the files that are in green
  origin
*/

type Props = {
  TreasurerEmail: string;
  TreasurerName: string;
};
const MembershipPage = ({ TreasurerEmail, TreasurerName }: Props) => (
  <Layout title="SHPE UTD">
    <div>
      <div className="columns is-centered membership-container">
        <div className="column is-full-mobile is-11-tablet">
          <div className="join">
            <br />
            <h1 className="is-size-3" style={{ fontWeight: "bold" }}>
              How to Joi<span>n</span>
            </h1>
            <br />
            <ol className="pl-4">
              <li>
                Fill out our membership form by clicking{" "}
                <span className="has-hover">here</span>
              </li>
              <li>Pay the local dues below</li>
              <li>Join SHPE (UTD) on Presence</li>
              <li>
                Register with SHPE (national) on{" "}
                <span className="has-hover">SHPEConnect</span>
              </li>
              <li>Pay the national dues below</li>
            </ol>
          </div>
          <br />
          <br />
        </div>
      </div>
      <h2 className="title is-size-5 membership">Membership Dues</h2>
      <div className="columns is-flex is-flex-direction-row">
        <div className="column is-full-tablet is-full-desktop is-half-widescreen">
          <div className="main-container">
            <LocalTable
              TreasurerEmail={TreasurerEmail}
              TreasurerName={TreasurerName}
            />
          </div>
        </div>
        <div className="column is-full-tablet is-full-desktop  is-half-widescreen">
          <div className="main-container ">
            <NationalTable />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  let TreasurerEmail = "";
  let TreasurerName = "";
  OfficerJson.map((obj) => {
    const { name, position, email } = obj;
    if (position === "Treasurer") {
      TreasurerEmail = email;
      TreasurerName = name;
    }
  });
  return {
    props: {
      TreasurerEmail,
      TreasurerName,
    },
  };
}
export default MembershipPage;