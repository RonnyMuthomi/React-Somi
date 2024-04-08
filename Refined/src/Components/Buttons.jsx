// //import React from 'react'
// //import img1 from './Image'
// //import img2 from './Image'
// import {Fade} from 'react-slideshow-image';
// function Buttons() {
//     const slideImages=[
//         {
//             src: "./images",
//             alt: "images",
//         },
//         {
//             src: "./Image/shanzu.jpg",
//             alt: '.images',
//         },
//     ];
//     const divStyle={
//         display:'flex',
//         alignItems:"center",
//         justifyContent:"center",
//         height:"50px",
//         backgroundSize:'cover'
//     }
//     const spanStyle={
//         fontSize:"20px",
//         background:"#efefef",
//         color:"#000000"
//     }
//   return (
//     <>
//      <div className='slide-container'>
//         <Fade>
//             {slideImages.map((image,index)=>(
//               <div key={index}>
//                <div style={{...divStyle, backgroundImage:`src(${image.src})`}}>
//                 <span style={{spanStyle}}>{image.alt}</span>
//                </div>

//               </div>  
//             ))}
//         </Fade>
//      </div>
      
//     </>
//   )
// }

// export default Buttons
