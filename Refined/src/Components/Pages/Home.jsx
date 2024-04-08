//import Buttons from "../Buttons"
import '../Styles/images.css'
import {Link} from 'react-router-dom'
import img1 from '../Image/shanzu.jpg'

function Home() {
  return (
    <>
      <div className="main">
      <section className="galaxy1">
        <div className="grid-container1">
         <div>
         {/*<Buttons/>*/}
          <Link><img id='img1' src={img1} alt="img" /></Link> 
         </div>
         

        </div>
       </section> 
       <section className="galaxy2">
        <div className="grid2">
          <div></div>
          <div></div>


        </div>
         
     </section>

     <section className="galaxy3">
        <div className="grid-container3">
         <div></div>

        </div>
         
     </section>
     <section className="galaxy4">
        <div className="grid-container4">
          <div></div>
          <div></div>

        </div>
         
     </section>
     <section className="galaxy5">
        <div className="grid-container5">
          <div></div>

        </div>
         
     </section>
     <section className="galaxy6">
        <div className="grid-container6">
           <div></div>

        </div>
         
     </section>
      </div>
      

    </>
  )
}

export default Home
