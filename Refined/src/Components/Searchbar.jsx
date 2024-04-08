
// import { useState } from 'react'
// import './Styles/Sidebar.css'
// var data = require('./MOCK_DATA.json')
// export default function Searchbar() {
//     const [value,setValue]=useState('');
//     const onChange=(event)=>{
//         setValue(event.target.value);}
//     const onSearch=(searchTerm)=>{
//         setValue(searchTerm);
//         //api to fetch the search result
//         console.log('search',searchTerm)
//     }   
    
//   return (
//     <>
//       <div className='App'>
//         <div className="search-container">
//             <div className="search-inner">
//                <input type="text" value={value} onChange={onChange} />
//                <button onClick={()=> onSearch(value)}>search</button>

//             </div>
//             <div className='dropdown'>
//                 {data.filter(item =>{const searchTerm=value.toLowerCase();
//                 const full_name=item.full_name.toLowerCase
//                 return searchTerm && full_name.startWidth(searchTerm) &&full_name !==searchTerm })
//                 .slice(0,10)
                
//                 .map((item)=>(<div onClick={()=>onSearch(item.full_name)} className='dropdown-row' key={item.full_name}>
//                 {item.full_name}
//                 </div> )) }
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

import './Styles/Sidebar.css'
export default function Searchbar() {
  return (
    <div>
      <form className='blue'>
        <input className='grey' type="search" name="search" placeholder="Enter keyword" />
        <input type="submit" value="Search" />
     </form>
    </div>
  )
}

