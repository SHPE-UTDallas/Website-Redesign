import Link from 'next/link'
import Layout from '../components/Layout'

/*
  Heading: How to Join
  reference: http://shpeutd.org/membership.php
    - similar "How to Join" section
    - How to Pay due sections
  Bulma: https://bulma.io/
*/

const MembershipPage = () => (
  <Layout title="SHPE UTD">
    <h1 className="is-size-3 has-text-centered">How to Join</h1>

    <div className="columns is-centered">
      <div className="column is-full-mobile is-11-tablet">
      <h2 className="title is-size-5">Membership Dues</h2>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th style={{width: "33%"}}>Types</th>
            <th style={{width: "33%"}}>Price</th>
            <th style={{width: "33%"}}>Payment Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Local (UTD Only)</td>
            <td>$6 Per Semester</td>
            <td>
              <ul className="add-ul-bold">
                <li> <strong>Cash</strong></li>
                <p>Contact Reyna Garcia (Treasurer)</p>
                <p>E-Mail:
                  <a href="mailto:Reyna.Garcia@utdallas.edu?Subject=I%20Would%20Like%20to%20Pay%20my%20Membership%20Dues" target="_blank"> Reyna.Garcia@utdallas.edu</a>
                </p>
                <li> <strong>Online</strong> </li>
              </ul>
              <p>Please click <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRZXaej0rd4KfcRiI7Sc3qsp_DaPVqPplxjnjAsxEhVbm41g/viewform" target="_blank"> here </a>to fill out our membership form first</p>
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
                    <li>Go to  <a href="https://www.shpe.org/join-shpe">shpe.org/join-shpe</a></li>
                    <li>Click "Join Now"</li>
                    <li>Either log in or follow the registration process</li>
                    <li>Click "My Membership"</li>
                  </ol>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div className="card">
      {/* <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div> */}
      <div className="card-content is-flex is-flex-direction-row">
        <div className="media">
          {/* <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div> */}
          <div className="media-content">
            <p className="title is-4"></p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
)

export default MembershipPage
