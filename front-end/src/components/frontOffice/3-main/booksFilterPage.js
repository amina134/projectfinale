import React, { useState ,useEffect} from 'react';
import NavBar from '../1-header/navBar';
import './booksFilterPage.css';
import Slider from 'react-slider'
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../2-hero/bookCard';
import HeaderUser from '../../backOffice/user/headerUser/headerUser';
import CartExpress from '../cartItems/cartExpress';
import Footer from '../1-header/footer';
const MIN=2
const MAX=100
function FilterBooks({ isLoggedIn,user}){
  /////// redux part for bringing the books
    const books =useSelector(state=>state.bookElement)
     const dispatch=useDispatch()
     const[arr,setArr]=useState(books);
     const [values,setValues]=useState([MIN,MAX])
     const [selectedCategory,setSelectedCategory]=useState([])
     const [selectedMood,setSelectedMood]=useState([])
     const [selectedLanguage,setSelectedLanguage]=useState([])
     const [bookToDelete,setBookToDelete]=useState(null)
     const[buttons,setButtons]=useState([])
     // function to create the array of buttons
     const createChosenButtons = (value) => {
      let test=buttons.includes(value)
      if(!test) {
        setButtons([...buttons, `${value}` ]);
      }
    
    
    };
  
    //  console.log('buttons',buttons);

    //  console.log('SelectedCategory',selectedCategory)
    //  console.log('book introooooooo ', books[0].genre)

   
     const [filteredBooks,setFilteredBooks]=useState([])
    // setFilteredBooks(books)
    
    

     useEffect(() => {
      
        filterBooks();
       

      
    }, [selectedCategory, selectedMood, selectedLanguage, values,filteredBooks]);


///////////////////////////////// FILTER PART ///////////////////////
const filterBooks=()=>{
  let filtered=[...books];
  
  
  // filter by category
  if(selectedCategory.length >0) {
    // console.log('filtered initiale',filtered);
 filtered=filtered.filter((book)=>selectedCategory.includes(book.genre))
     
  //  console.log('filtered books genre:',filtered);
  }
   // filter by mood
  if (selectedMood.length >0){
     filtered=filtered.filter((book)=>selectedMood.includes(book.mood))
  }
     // filter by language
  if (selectedLanguage.length>0){
  filtered=filtered.filter((book)=>selectedLanguage.includes(book.language))

  }

  // if ((selectedCategory.length >0)|| (selectedMood)||(selectedLanguage)){
  //   filtered=filtered.filter(((book)=>selectedCategory.includes(book.genre))|| ((book)=>selectedMood.includes(book.mood))||((book)=>selectedLanguage.includes(book.language)))
 
  // }


  // filter by price
  filtered=filtered.filter((book)=>book.price>values[0] && book.price<values[1])




  
  setFilteredBooks(filtered)

  // console.log('filtered finaaaaaaal',filtered)

}
/*/*///*/*/*/*/*/*/*// radio filter category //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleCategoryChange=event=>  {
          const {value}=event.target
          // console.log('value of genre',{value})
          setSelectedCategory((prev)=>
          prev.includes(value) ? prev.filter((cat)=>cat !== value) :[...prev,value]);

    
        }  
/*/*///*/*/*/*/*/*/*// button mood  filter //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleMoodClick=(value)=>  {
           setSelectedMood((prev)=>
          prev.includes(value)? prev.filter((cat)=>cat !==value) :[...prev,value])
         }  
/*/*///*/*/*/*/*/*/*// button Language filter //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleLanguageClick=(value)=>{
          setSelectedLanguage((prev)=>
          prev.includes(value)? prev.filter((cat)=>cat !==value) :[...prev,value])
        }

      

  

         /////////////// remove button from an array 

         const removeButton = (value) => {
          // console.log('filtered books before removing',filteredBooks)
          // console.log('the value to remove is ',value)
          setFilteredBooks((prevBooks) => prevBooks.filter((cat) => cat !== value));
          // console.log('filtered books after removing',filteredBooks)
          setButtons((prevButtons) => prevButtons.filter((cat) => cat !== value));
          

        };



        //////****************************** */ add to cart/////////////////////////////////////
        const { isOpen } = useSelector((state) => state.cartElement);
       
          
    

    return(
        <div>
      
          {/* {isLoggedIn ? <HeaderUser user={user} /> : <NavBar className='navbar-filterpage'/>} */}

          {isOpen && <CartExpress/>}
        <div className={`${!isOpen ?'container-filter-page' :'container-filter-page blurpage'} `}>
            {/* //// part of the filter options */}
            <div className='part1-books'>
                
          
            <div className='scroll-down'>
            <h5 className='category'>Category </h5><hr className='line'/>
            <div className='category-buttons'>
            <form>
                <label  className='container1'>romance
   
                 <input  className='category-radio'type="checkbox" name="romance" value="romance"   
                 onChange={(event) => {
                  handleCategoryChange(event);
                 createChosenButtons('romance');
                  }}/> <span className='checkmark' > </span>
                 </label><br/>
                 <label className='container1'> thriller
                 <input className='category-radio' type="checkbox" name="thriller" value="thriller" 
                  onChange={(event) => {
                    handleCategoryChange(event);
                   createChosenButtons('thriller');
                    }}/> <span className='checkmark'> </span>
                 </label><br/>
                 <label className='container1'>self-help
                  <input  className='category-radio' type="checkbox" name="self-help" value="self-help" 
                    onChange={(event) => {
                      handleCategoryChange(event);
                     createChosenButtons('self-help');
                      }}/> <span className='checkmark'> </span>
              
                 </label><br/>
                  <label className='container1'>manga
                  <input className='category-radio' type="checkbox" name="manga" value="manga" 
                    onChange={(event) => {
                      handleCategoryChange(event);
                     createChosenButtons('manga');
                      }}/> <span className='checkmark'></span>
                  </label><br/>
                  <label className='container1'>science-fiction
                  <input className='category-radio'  type="checkbox" name="science" value="science" 
                    onChange={(event) => {
                      handleCategoryChange(event);
                     createChosenButtons('science-fiction');
                      }}/> <span className='checkmark'></span>
                  </label><br/>
                  <label className='container1'>poetry
                  <input className='category-radio' type="checkbox" name="poetry" value="poetry" 
                    onChange={(event) => {
                      handleCategoryChange(event);
                      createChosenButtons('poetry');
                      }}/><span className='checkmark'></span> 
                  </label><br/>
                  <label className='container1'>fantasy
                  <input className='category-radio' type="checkbox" name="fantasy" value="fantasy" 
                   onChange={(event) => {
                    handleCategoryChange(event);
                    createChosenButtons('fantasy');
                    }}/> <span className='checkmark'></span>
                  </label><br/>

            </form>
            </div>
           
           
            <h5>Pick a mood</h5><hr/>
                      {/* ////////////////////////////////// mood buttons//////////////////////////////////////// */}

            <div className='but-container'>
            
            <button  className={`button-filter ${selectedMood.includes('happy') ? "active" : null}`} onClick={() => {handleMoodClick('happy');createChosenButtons('happy');}} 
            style={{
                  backgroundColor: selectedMood.includes('happy')  ? "black" :'rgb(255, 255, 255)', 
                 
                }}>happy </button>
            <button className={`button-filter ${selectedMood.includes('romantic') ? "active" : null}`} onClick={() => {handleMoodClick('romantic');createChosenButtons('romantic');}}
               style={{
                backgroundColor: selectedMood.includes('romantic' )? "black" :'rgb(255, 255, 255)', 
              }}>romantic</button>
            <button className={`button-filter ${selectedMood.includes('sad') ? "active" : null}`} onClick={() => {handleMoodClick('sad');createChosenButtons('sad');}}
               style={{
                backgroundColor: selectedMood.includes('sad') ? "black" :'rgb(255, 255, 255)', 
              }}>sad</button>
            <button className={`button-filter ${  selectedMood.includes('adventurous') ? "active" : null}`} onClick={() => {handleMoodClick('adventurous');createChosenButtons('adventurous');}}
               style={{
                backgroundColor: selectedMood.includes ('adventurous' )? "black" :'rgb(255, 255, 255)', 
              }}>adventurous </button>
            <button  className={`button-filter ${  selectedMood.includes('inspirational') ? "active" : null}`} onClick={() =>{ handleMoodClick('inspirational');createChosenButtons('inspirational');}}
               style={{
                backgroundColor: selectedMood.includes('inspirational') ? "black" :' #fef9f2', 
              }}> inspirational</button>
            <button  className={`button-filter ${selectedMood.includes('uplifting' )? "active" : null}`} onClick={() =>{ handleMoodClick('uplifting');createChosenButtons('uplifting');}}
               style={{
                backgroundColor: selectedMood.includes('uplifting') ? "black" :' #fef9f2', 
              }}>uplifting</button>
         

          </div>
          <h5>language</h5><hr/>


          {/* ////////////////////////////////// language buttons//////////////////////////////////////// */}
          <div  className='but-container'>
            
          <button
               className={`button-filter ${selectedLanguage.includes('english') ? "active" : null}`}
               onClick={() => {
               handleLanguageClick('english'); 
               createChosenButtons('english');
       
               }}
                style={{
                  backgroundColor: selectedLanguage.includes('english') ? "black" :' #fef9f2', 
                  color: selectedLanguage.includes('english')? "white" : "black"
                }}
          >
            English
          </button>


          <button  className={`button-filter ${selectedLanguage.includes ('Japanese') ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Japanese'); 
               
            
               if(selectedLanguage.includes ('Japanese')){
                createChosenButtons('Japanese');
               }
       
               }}
               style={{
                backgroundColor: selectedLanguage.includes ('Japanese') ? "black" : "#fef9f2",
                color: selectedLanguage.includes ('Japanese') ? "white" : "black",
              }}>Japanese
            </button>


            <button className={`button-filter ${selectedLanguage.includes( 'Arabic') ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Arabic'); 
               createChosenButtons('Arabic');
             
               }}
                style={{
                  backgroundColor: selectedLanguage.includes('Arabic') ? "black" :' #fef9f2', 
                  color:selectedLanguage.includes('Arabic') ? "white" : "black"
                }}>Arabic</button>

            <button  className={`button-filter ${selectedLanguage.includes('Spanish') ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Spanish'); 
               createChosenButtons('Spanish');
             
               }}
                style={{
                  backgroundColor: selectedLanguage.includes('Spanish') ?"black" :' #fef9f2', 
                  color: selectedLanguage.includes ('Spanish') ? "white" : "black"
                }}>Spanish </button>
            <button  className={`button-filter ${selectedLanguage.includes('french') ? "active" : null}`}     onClick={() => {
               handleLanguageClick('french'); 
               createChosenButtons('french');
              
        
               }}
                style={{
                  backgroundColor: selectedLanguage.includes('french') ? "black" :' #fef9f2', 
                  color:selectedLanguage.includes('french') ? "white" : "black"
                }}>French</button>
          </div>

          {/* //////////////////////////////////////////// price slider////////////////////////////////////// */}
          <h5>Price</h5><hr/>
          <div className='price-content'>
            <div>
                <label className='min-label'> <br/> {values[0]}dt</label>
               
            </div>
            <div>
                <label className='max-label'><br/> {values[1]} dt</label>
                <p id='max-value'></p>
            </div>

          </div>
          {/* <div className='range-slider'>
            <div className='range-fill'>  </div>
                <input
                type='range'
                className='min-price'
                value='100'
                min='10'
                max='500'
                step='10'
                />
                <input
                type='range'
                className='max-price'
                value='250'
                min='10'
                max='500'
                step='10'
                />

          </div>
    */}
           <Slider className='slider' 
           value={values} 
           onChange={setValues}
           min={MIN}  
           max={MAX}/>
          
           </div>
            </div>
          
              {/* ////////////////////////////////////////////////////////// part  2 of the products */}
            <div className='part2-books'>
               <div className='chosen'>
                {buttons.length===0
                ?<h3 className='everythings-filter'>All the products</h3>
                :
                 buttons.map((el1, index) => (
                  <button key={index} className='chosen-button'>{el1} <img className='cancel-image' src='./icons/cancel.png' onClick={()=>{setBookToDelete(el1);removeButton(el1)}}/></button>
                    ))
                }
              
               </div>
               <div className="item" >
                     {filteredBooks.map(el=>
                 <BookCard {...el}/>
                )}
   
                 </div>
             
            </div>


        </div>
        <div>
      
        </div>
        </div>
    )
}
export default FilterBooks;