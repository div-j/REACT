import { getImageUrl } from './Utils.js';
import { Profile } from './Profile.js';

const person =[{name:"Maria Skłodowska-Curie",
imageId:'szV5sdG', 
profession:'physicist and chemist',
awards:'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
num:4,
discovered:'polonium (chemical element)'
},
{name:"Katsuko Saruhashi",
imageId:'YfeOqp2', 
profession:'geochemist',
awards:'(Miyake Prize for geochemistry, Tanaka Prize)',
num:2,
discovered:'a method for measuring carbon dioxide in seawater'
},
]

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
         <Profile person={person[0]}/ >
         <Profile person={person[1]}/ >
        </section>
     
    </div>
  );
}
