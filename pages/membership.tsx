import Link from "next/link";
import Layout from "../components/Layout";
import OfficerJson from "../data/Officer.json";

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
            <div className="box box1 is-flex-wrap-wrap">
              <div className="h2-utd">
                <h2>Local (UTD)</h2>
              </div>
              <table className="column">
                <tr className="columns is-flex is-flex-direction-row">
                  <th className="has-text-centered column is-half">Price</th>
                  <th className="has-text-centered column is-half">
                    Payment Options
                  </th>
                </tr>
                <tr className="columns is-flex">
                  <td className="border-right column is-half">
                    <ul className="add-ul-bold">
                      <li>
                        <strong>Payment:</strong>
                      </li>
                    </ul>
                    <ol>
                      <li className="none">$6 Per Semester</li>
                    </ol>
                  </td>
                  <td className="column is-half">
                    <ul className="add-ul-bold">
                      <li>
                        <strong>Cash</strong>
                      </li>
                      <ol className="pl-4">
                        <li>Contact Reyna Garcia (Treasurer)</li>
                        <li>
                          E-Mail:
                          <a
                            href="mailto:Reyna.Garcia@utdallas.edu?Subject=I%20Would%20Like%20to%20Pay%20my%20Membership%20Dues"
                            target="_blank"
                          >
                            <span className="has-hover">
                              Reyna.Garcia@utdallas.edu
                            </span>
                          </a>
                        </li>
                      </ol>
                    </ul>
                  </td>
                </tr>
                <tr className="columns is-flex">
                  <td className="border-right column is-half"></td>
                  <td className="column is-half">
                    {" "}
                    <ul className="add-ul-bold">
                      <li>
                        <strong>Online</strong>
                      </li>
                      <ol className="pl-4">
                        <li>
                          Please click <span className="has-hover">here</span>{" "}
                          to fill out our membership form first
                        </li>
                        <li>
                          Venmo: pay at{" "}
                          <span className="has-hover">@SHPE-UTD</span>
                        </li>
                      </ol>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="column is-full-tablet is-full-desktop  is-half-widescreen">
          <div className="main-container ">
            <div className="box box2 ">
              <div className="h2-local">
                <h2>National</h2>
              </div>
              <table>
                <tr>
                  <th className="has-text-centered">Price</th>
                  <th className="has-text-centered">Payment Options</th>
                </tr>
                <tr>
                  <td className="border-right">
                    <ul className="add-ul-bold">
                      <li>
                        <strong>Payment:</strong>
                      </li>
                    </ul>
                    <ol>
                      <li className="none">$10 Annually</li>
                    </ol>
                  </td>
                  <td>
                    <ul className="add-ul-bold">
                      <li>
                        <strong>Online</strong>
                        <ol className="pl-4">
                          <li>
                            Go to{" "}
                            <a href="https://www.shpe.org/join-shpe">
                              <span className="has-hover">
                                shpe.org/join-shpe
                              </span>
                            </a>
                          </li>
                          <li>Click "Join Now"</li>
                          <li>
                            Either log in or follow the registration process
                          </li>
                          <li>Click "My Membership"</li>
                        </ol>
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <h1>Membership</h1>
    <p>This is the membership page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p> */}
  </Layout>
);

/*<table className="table is-fullwidth" style={{ borderRadius: "2%" }}>
          <thead>
            <tr>
              <th style={{ width: "33%" }}>Types</th>
              <th style={{ width: "33%" }}>Price</th>
              <th style={{ width: "33%" }}>Payment Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Local (UTD Only)</td>
              <td>$6 Per Semester</td>
              <td>
                <ul className="add-ul-bold">
                  <li>
                    {" "}
                    <strong>Cash</strong>
                  </li>
                  <p>Contact Reyna Garcia (Treasurer)</p>
                  <p>
                    E-Mail:
                    <a
                      href="mailto:Reyna.Garcia@utdallas.edu?Subject=I%20Would%20Like%20to%20Pay%20my%20Membership%20Dues"
                      target="_blank"
                    >
                      {" "}
                      Reyna.Garcia@utdallas.edu
                    </a>
                  </p>
                  <li>
                    {" "}
                    <strong>Online</strong>{" "}
                  </li>
                </ul>
                <p>
                  Please click{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRZXaej0rd4KfcRiI7Sc3qsp_DaPVqPplxjnjAsxEhVbm41g/viewform"
                    target="_blank"
                  >
                    {" "}
                    here{" "}
                  </a>
                  to fill out our membership form first
                </p>
                <p>Venmo: pay at @SHPE-UTD</p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>National</td>
              <td>$10 Annually</td>
              <td>
                <ul className="add-ul-bold">
                  <li>
                    <strong>Online</strong>
                    <ol className="pl-4">
                      <li>
                        Go to{" "}
                        <a href="https://www.shpe.org/join-shpe">
                          shpe.org/join-shpe
                        </a>
                      </li>
                      <li>Click "Join Now"</li>
                      <li>Either log in or follow the registration process</li>
                      <li>Click "My Membership"</li>
                    </ol>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>*/
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
