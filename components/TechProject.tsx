
type Props = {
    name: string;
    description: string;
    image: string; 
  };

const TechProject = ({ name, description, image }: Props) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default TechProject;