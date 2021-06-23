
type Props = {
    imgPath: string;
    name: string;
    position: string;
    experience: string;
  };

const MentorIcon = ({ imgPath, name, position, experience}: Props) => {
    return (
        <div className="is-flex is-flex-direction-column officer" style={{width: "100%"}}>
            <figure className="center-image image is-215x215">
                <img src = {imgPath} alt = {position} className="is-rounded " style={{objectFit: "cover"}}/>
            </figure>
            <span className="has-text-centered">
                <p className="is-size-5 has-text-weight-semibold">{name}</p>
                <p>{position}</p> 
                <p>{experience}</p>
            </span>
        </div>
        
    )
}

export default MentorIcon;