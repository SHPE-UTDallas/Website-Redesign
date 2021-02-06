
type Props = {
    name: string;
    description: string;
    image: string;
    repo: string;
};

const TechProject = ({ name, description, image, repo }: Props) => {
    return (
        <div className="project card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Placeholder image" />
                </figure>
            </div>

            <div className="content" style={{ margin: "20px 20px" }}>
                <h1 className="projects-title title" style={{marginBottom: "0"}}>
                    {name + "  "}
                </h1>
                <div>
                    <a href={repo}  target="_blank" style={{textDecoration: "underline"}}>
                        Repository
                    </a>
                </div>
                <div style={{marginTop: "20px"}}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default TechProject;