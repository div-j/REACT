import { getImageUrl } from "./Utils";





function Avatar({person,size,}){
    return(
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    )
}

function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }


export function Profile({person}) {
    return (
      <section className='' width='' height= ''>
    <h1>{person.name}</h1>

    <Card>
        <Avatar person={person}  size={100} />
    </Card>
    <ul>
          <li>
            <b>Profession: </b> 
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.num} </b> 
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>

      </section>
    );
  }


