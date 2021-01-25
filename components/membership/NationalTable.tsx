import * as React from "react";

const NationalTable = () => (
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
                    <span className="has-hover">shpe.org/join-shpe</span>
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
    </table>
  </div>
);

export default NationalTable;
