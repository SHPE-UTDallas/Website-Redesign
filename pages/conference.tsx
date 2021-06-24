import React from 'react'
import Layout from "../components/Layout";
// import { useState } from 'react'


export const conference = () => {

    // const [counter, setcounter] = useState(4)

    // const buttonClicked = () => {
    //     console.log("clicked on the button")
    //     setcounter(counter + 1)
    // }



    return (
        <Layout title="National Conference 2021" >

            <div className="setBottomBorder">
                <div className="nCwrapper is-flex is-flex-direction-column is-align-items-center " >

                    <div className="conferenceBox NCTitle" style={{ margin: "5px", lineHeight: "35px", width: "100%" }}>

                        {/* Get rid of the style attributes in the following 2 lines */}
                        <h2 className=" has-text-weight-bold title1" style={{ color: "#fd652f", fontSize: "2rem" }}>2021 SHPE</h2>
                        <h1 className=" has-text-weight-bold title2" style={{ fontSize: "3rem" }} > National Convention</h1>
                        <h2 className=" has-text-weight-bold title3">November 10 - 14</h2>

                        <hr style={{ width: "80%", margin: "0 auto" }}></hr>

                    </div>

                    {/* <button className="button testClass" onClick={buttonClicked} >
                    Enter
                    </button>
                    {counter} */}


                    <div className="boxesContainer" >

                        <div className="conferenceBox loc setSmokeBack">

                            {/* remove is-size-3 */}
                            <h1 className=" has-text-weight-bold is-size-3">Orlando, Florida</h1>
                            {/* <br /> */}
                            <h2 className="smallLH"> Orange County<br />Convention Center</h2>

                        </div>

                        <div className="conferenceBox setSmokeBack">

                            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                                <iframe src="https://player.vimeo.com/video/503633431?color=ff9933&title=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <script src="https://player.vimeo.com/api/player.js"></script>

                            <span className="smallLH">
                                <br />
                                <a href="https://vimeo.com/503633431">Orange County Convention Center Tour</a>
                            </span>

                        </div>

                        <div className="conferenceBox SHPElink setSmokeBack">

                            <a href="https://www.shpe.org/2021" target="_blank">
                                <h1 className=" has-text-weight-bold is-size-3" >
                                    SHPE.ORG/2021
                                </h1>
                            </a>
                            <a href="/newsletter" target="_blank">
                                <button className="button is-primary" style={{ margin: "10px", width: "auto" }}>
                                    Get Sponsored
                                </button>
                            </a>
                            <span className="smallLH">We're currently not accepting <br /> sponsorship applications</span>

                        </div>

                    </div>


                    <div className="boxesContainer">
                        <div className="conferenceBox" style={{ padding: 0 }}>

                            <h1 className="has-text-weight-bold">Benefits of Attending</h1>
                            <div className="paragraphFlexContainer">

                                {/* Get rid of is-size-4 */}
                                <div>

                                    <p className="is-size-4 " >
                                        This year's SHPE national conference will be a 4-day conference in Orlando, Florida from November 10th to the 14th! Why should you attend? Well, let's list out some of the benefits you'll get to experience:
                                    </p>

                                    <ul className="is-size-4 ">
                                        <li>Excellent networking opportunities</li>
                                        <li>Beneficial career fair</li>
                                        <li>Limitless job/internship opportunities </li>
                                    </ul>

                                </div>


                                <div>

                                    {/* <h2 className="has-text-weight-bold">Sponsorship Requirements</h2> */}
                                    {/* <p className="is-size-4 ">*/}
                                    <ul className="is-size-4 ">
                                        <li>1,000+ interviews from 200+ world class companies &amp; universities </li>
                                        <li>100+ hours of educational content for all fields of STEM</li>
                                    </ul>
                                    <br />
                                    <p className="is-size-4 ">More info coming in August!</p>
                                    <br />

                                    <a href="/newsletter" target="_blank">
                                        <button className="button is-primary" >
                                            Newsletter Sign Up
                                        </button>
                                    </a>

                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="boxesContainer">
                        <div className="conferenceBox" style={{ padding: 0 }}>

                            <h1 className="has-text-weight-bold">Getting Sponsored</h1>
                            <div className="paragraphFlexContainer">
                                {/* Get rid of is-size-4 */}
                                <div>

                                    <p className="is-size-4 " >
                                        Attending the national conference can set you back a couple hundred dollars but if you apply to get sponsored and successfully recieve a sponsorship, SHPE UTD will cover most of the expenses!
                                    </p>
                                    <br />
                                    <p className="is-size-4 ">
                                        We're currently not accepting sponsorship applications but make sure to sign up to our newsletter to be notified as soon as sponsorship applications and registration opens up.
                                    </p>

                                </div>


                                <div>

                                    <h2 className="has-text-weight-bold">Sponsorship Requirements</h2>
                                    {/* <p className="is-size-4 ">*/}
                                    <ul className="is-size-4 ">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li> consectetur adipisicing elit.</li>
                                        <li>Odit modi officia, cum earum nisi nihil beatae </li>
                                        <li> quaerat natus nesciunt, numquam maxime sapiente,</li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.364915375989!2d-81.46907627503198!3d28.428836965051598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e463b79f35f%3A0x890f8122e661e214!2sOrange%20County%20Convention%20Center%20north%20concourse!5e0!3m2!1sen!2sus!4v1623904501409!5m2!1sen!2sus" style={{ width: "100%" }} loading="lazy"></iframe>
                    </div>
                    <br />

                </div>
            </div>

            <div className="nCwrapper is-flex is-flex-direction-column is-align-items-center ">
                <div className="conferenceBox NCTitle" style={{ margin: "5px", lineHeight: "35px", width: "100%" }}>
                    {/* <hr style={{ width: "80%", margin: "0 auto" }}></hr>
                     */}
                    {/* <hr style={{ width: "100vw", position: "relative", left: "-50px" }}></hr> */}

                    {/* Get rid of the style attributes in the following 2 lines */}
                    <h2 className=" has-text-weight-bold title1" style={{ color: "#fd652f" }}>2020 SHPE</h2>
                    <h1 className=" has-text-weight-bold title2" style={{}} > National Convention</h1>
                    <h2 className=" has-text-weight-bold title3">Highlights</h2>

                    {/* <iframe width="904" height="480" src="https://www.youtube.com/embed/UE75ysOZEZ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                </div>

                <figure className="container-iframe">
                    <iframe className="responsive-iframe" src="https://youtube.com/embed/UE75ysOZEZ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </figure>
                <br />

            </div>




        </Layout >
    )


}

export default conference;
