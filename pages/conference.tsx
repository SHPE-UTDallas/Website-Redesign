import React from 'react'
import Layout from "../components/Layout";


export const conference = () => {

    const nationalConventionTitle = (top: string, middle: string, bottom: string) => {
        return (
            <div className="flex-boxes title-container">
                <h2 className=" title1">{top}</h2>
                <h1 className=" title2">{middle}</h1>
                <h2 className=" title3">{bottom}</h2>
            </div>
        )
    }

    return (
        <Layout title="National Conventions" >

            {/* <section className="gradient-background"> */}

            {/* 2021 National Convention */}
            <section className="national-convention-wrapper" >

                {/* 2021 Title */}
                {nationalConventionTitle("2021 SHPE", "National Convention", "November 10 - 14")}
                <hr style={{ width: "80%", margin: "0 auto" }}></hr>

                {/* 3 Boxes Section */}
                <section className="boxes-container" >

                    <div className="conference-radius flex-boxes gradient-background">

                        <h1>Orlando, Florida</h1>
                        <h2 className="small-line-height" style={{ fontWeight: "normal" }}> Orange County<br />Convention Center</h2>

                    </div>

                    <div className="conference-radius flex-boxes gradient-background">

                        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                            <iframe src="https://player.vimeo.com/video/503633431?color=ff9933&title=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>

                        <span className="small-line-height">
                            <br />
                            <a href="https://vimeo.com/503633431">Orange County Convention Center Tour</a>
                        </span>

                    </div>

                    <div className="conference-radius flex-boxes gradient-background">

                        <a href="https://www.shpe.org/2021" target="_blank">
                            <h1>
                                SHPE.ORG/2021
                            </h1>
                        </a>
                        <a href="/newsletter" target="_blank">
                            <button className="button is-primary" style={{ margin: "10px" }}>
                                Get Sponsored
                            </button>
                        </a>
                        <span className="small-line-height">We're currently not accepting <br /> sponsorship applications</span>

                    </div>

                </section>

                {/* Benefits Section */}
                <section className="boxes-container">
                    <div className="flex-boxes" style={{ padding: 0, margin: 0 }}>

                        <h1>Benefits of Attending</h1>
                        <div className="paragraph-flex-container">

                            <div className="paragraph">

                                <p >
                                    This year's SHPE national convention will be a 4-day convention in Orlando, Florida from November 10th to 14th! Why should you attend? Well, let's list out some of the benefits you'll get to experience:
                                </p>

                                <ul >
                                    <li>Excellent networking opportunities</li>
                                    <li>Beneficial career fair</li>
                                    <li>Limitless job/internship opportunities </li>
                                </ul>

                            </div>


                            <div className="paragraph">
                                <ul >
                                    <li>1,000+ interviews from 200+ world class companies &amp; universities </li>
                                    <li>100+ hours of educational content for all fields of STEM</li>
                                </ul>
                                <br />
                                <p >More info coming in August!</p>
                                <br />

                                <a href="/newsletter" target="_blank">
                                    <button className="button is-primary" >
                                        Newsletter Sign Up
                                    </button>
                                </a>

                            </div>


                        </div>
                    </div>
                </section>

                {/* Sponsorship Section */}
                <section className="boxes-container">
                    <div className="flex-boxes" style={{ padding: 0 }}>

                        <h1>Getting Sponsored</h1>
                        <div className="paragraph-flex-container">

                            <div className="paragraph">

                                <p>
                                    Attending the national convention can set you back a couple hundred dollars but if you apply to get sponsored and successfully recieve a sponsorship, SHPE UTD will cover most of the expenses!
                                    Keep in mind that not every one that applies will be sponsored.
                                </p>
                                <br />
                                <p>
                                    We're currently not accepting sponsorship applications but make sure to sign up to our newsletter to be notified as soon as sponsorship applications and registration opens up.
                                </p>

                            </div>


                            <div className="paragraph">

                                <h2>Sponsorship Requirements</h2>
                                <ul >
                                    <li>Must be an active member of our chapter</li>
                                    <li>Must be a SHPE National member (only $10/year for a membership)</li>
                                    <li>Must attend all national preparation events hosted by our chapter if chosen to be sponsored</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>

                {/* Map */}
                <div style={{ width: "100%" }}>
                    <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.364915375989!2d-81.46907627503198!3d28.428836965051598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e463b79f35f%3A0x890f8122e661e214!2sOrange%20County%20Convention%20Center%20north%20concourse!5e0!3m2!1sen!2sus!4v1623904501409!5m2!1sen!2sus" style={{ width: "100%" }} loading="lazy"></iframe>
                </div>
                <br />

            </section>

            {/* Separation Between the 2021 and 2020 sections  */}
            <div className="set-bottom-border"></div>

            {/* 2020 National Convention */}
            <section className="national-convention-wrapper">

                {/* 2020 Title */}
                {nationalConventionTitle("2020 SHPE", "National Convention", "Highlights")}

                {/* Video */}
                <figure className="container-iframe">
                    <iframe className="responsive-iframe" src="https://youtube.com/embed/UE75ysOZEZ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </figure>
                <br />

            </section>

            {/* </section> */}
        </Layout >
    )
}

export default conference;
