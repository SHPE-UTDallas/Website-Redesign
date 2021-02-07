import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    name: string;
    description: string;
    image: string;
    repo: string;
};

const TechProject = ({ name, description, image, repo }: Props) => {
    return (
        <div className="project card" style={{height: "100%", marginBottom: "auto"}}>
            <div className="card-image">
                <figure className="image">
                    <img src={image} alt="Placeholder image" />
                </figure>
            </div>

            <div className="content" style={{ margin: "20px 20px" }}>
                <div className="level">
                    <div className="level-left">
                        <h1 className="projects-title title" style={{ marginBottom: "0" }}>
                            {name}
                        </h1>
                    </div>

                    <div className="level-right">
                        <a className="button" href={repo} target="_blank">
                            <span className="icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span>Repository</span>
                        </a>
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default TechProject;