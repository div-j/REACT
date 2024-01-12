 function Item ({name,isPacked}){
    let ItemContent = name
    if(isPacked){
      ItemContent =  name + " ✔";
    }
      return(
        <li className='item'>
          {ItemContent}
        </li>
      )
  
          }

export default function PackingList(){
return(
    <section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
      <Item isPacked={true} name="Space suit" />
      <Item isPacked={true} name="Helmet with a golden leaf"/>
      <Item  isPacked={false} name="Photo of Tam" />
    </ul>
  </section>
)
}