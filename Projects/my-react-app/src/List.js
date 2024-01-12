import { people } from './data.js';
import { getImageUrl } from './Utils.js';
export default function List() {
    const chemists = people.filter(person =>
      person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
      <div>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </div>
    );
    return <ul>{listItems}</ul>;
  }