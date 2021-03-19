
type Props = {
    imgPath: string;
    name: string;
    position: string;
    email: string;
  };

const OfficerIcon = ({ imgPath, name, position, email}: Props) => {
    return (
        <div className="is-flex is-flex-direction-column officer" style={{width: "100%"}}>
            <figure className="center-image image is-215x215">
                <img src = {imgPath} alt = {position} className="is-rounded " style={{objectFit: "cover"}}/>
            </figure>
            <span className="has-text-centered">
                <p className="is-size-5 has-text-weight-semibold">{name}</p>
                <p>{position}</p> 
                <span className="email is-size-7" style={{fontSize: "0.9rem"}}>Email: <a className="aboutPage" href={`mailto:${email}`}>{email}</a></span>
            </span>
        </div>
        
    )
}

export default OfficerIcon;