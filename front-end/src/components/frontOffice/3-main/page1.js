import BookModel from "../3d components/three"
import './page1.css'
import 'animate.css';
const style = {
   
    
  };
  
function Page1(){



    return (
        <div className="background-container" >
        <div className="overlay">
          <div className="item1">
       
        
         
      <BookModel path="/book2.gltf" />
   

           </div>
          <div className="item2">
            <h2 class="animate__animated animate__bounce">Open a book <br/>unlock a world.</h2>
          
            <p>Discover our carefully selected collection of literature books, featuring timeless classics and modern masterpieces.</p>
            <button>Shop Now</button>
          </div>
          <div className="item3">
            <BookModel path='/book3.gltf'/>
          </div>
        </div>
      </div>
      
      
    )

}
export default Page1;