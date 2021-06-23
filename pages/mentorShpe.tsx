import Layout from "../components/Layout";
import MentorIcon from "../components/MentorIcon";
import MentorJson from "../data/MentorShpe.json";

type Props = {
    MentorJson: Member[];
};

interface Member {
    name: string;
    position: string;
    image: string;
    experience: string;
}


const mentorShpe = ({ MentorJson }: Props) => (
    <Layout title="SHPE UTD">
        <section className="section gradient-background">

            <div className="has-text-link-dark has-text-centered is-size-1 has-text-weight-bold">
                MentorSHPE
            </div>

            <div
                className="columns is-mobile"
                style={{ paddingLeft: "7%", paddingRight: "7%", paddingTop: "3%", fontSize: "20px" }}
            >
                <div className="column">
                    <h1 className="benefits-text" style={{ textAlign: "left" }}>
                        Resume Review
                    </h1>
                </div>
                <div className="column">
                    <h1 className="benefits-text" style={{ textAlign: "center" }}>
                        Mentorship
                    </h1>
                </div>
                <div className="column">
                    <h1 className="benefits-text" style={{ textAlign: "right" }}>
                        Skill Development
                    </h1>
                </div>
            </div>
            <div
                className="columns is-mobile"
                style={{ paddingLeft: "7%", paddingRight: "7%" }}
            >

                <p className="is-size-4 benefits-p" >
                    Here we want our members to know they are not alone! Joining our chapter opens up members to countless resources
                    including our very own MentorSHPE program. We pair students with upperclassmen who offer advice and wisdom to
                    our younger members. Mentors meet with their mentees at least twice a month, and offer many services depending on
                    the mentees goal. These may be resume reviews, technical skill development, public speaking, or anything you
                    want help in!
                </p>
            </div>

            <div className="columns is-mobile is-centered" style={{ marginTop: "75px", marginBottom: "75px"}}>
                <div className="column is-one-quarter has-text-centered">
                    <button className="button is-primary">
                        Become a Mentor
                    </button>
                </div>
                <div className="column is-one-quarter has-text-centered">
                    <button className="button is-primary">
                        Become a Mentee
                    </button>
                </div>
            </div>

            
                <div className="columns is-mobile is-centered">
                    {MentorJson.map((obj) => {
                        const { name, position, image, experience } = obj;
                        return (
                            <div
                                key={position}
                                className="column is-one-third"
                                
                            >
                                <MentorIcon
                                    name={name}
                                    position={position}
                                    imgPath={image}
                                    experience={experience}
                                />
                            </div>
                        );
                    })}
                </div>

        </section>

    </Layout >
);

export async function getStaticProps() {
    MentorJson.map((obj) => {
        const { name, position, experience } = obj;
    });
    return {
        props: {
            MentorJson,
        },
    };
}

export default mentorShpe;