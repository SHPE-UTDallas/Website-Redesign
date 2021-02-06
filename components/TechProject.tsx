
type Props = {
    name: string;
    description: string;
  };

const TechProject = ({ name, description }: Props) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default TechProject;