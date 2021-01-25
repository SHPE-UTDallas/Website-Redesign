import * as React from "react";

type Props = {
  TreasurerEmail: string;
  TreasurerName: string;
};

const LocalTable = ({ TreasurerEmail, TreasurerName }: Props) => (
  <div className="box box1 is-flex-wrap-wrap">
    <div className="h2-utd">
      <h2>Local (UTD)</h2>
    </div>
    <table className="column">
      <tr className="columns is-flex is-flex-direction-row">
        <th className="has-text-centered column is-half">Price</th>
        <th className="has-text-centered column is-half">Payment Options</th>
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
              <li>Contact {TreasurerName} (Treasurer)</li>
              <li>
                E-Mail:
                <a
                  href={`mailto:${TreasurerEmail}?Subject=I%20Would%20Like%20to%20Pay%20my%20Membership%20Dues`}
                  target="_blank"
                >
                  <span className="has-hover">{TreasurerEmail}</span>
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
                Please click <span className="has-hover">here</span> to fill out
                our membership form first
              </li>
              <li>
                Venmo: pay at <span className="has-hover">@SHPE-UTD</span>
              </li>
            </ol>
          </ul>
        </td>
      </tr>
    </table>
  </div>
);

export default LocalTable;
