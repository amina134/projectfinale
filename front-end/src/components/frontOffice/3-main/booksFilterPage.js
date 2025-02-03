import React, { useState ,useEffect} from 'react';
import NavBar from '../1-header/navBar';
import './booksFilterPage.css';
import Slider from 'react-slider'
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../2-hero/bookCard';
const MIN=2
const MAX=100
function FilterBooks(){
  /////// redux part for bringing the books
    const books =useSelector(state=>state.bookElement)
     const dispatch=useDispatch()
     const[arr,setArr]=useState(books);
     const [values,setValues]=useState([MIN,MAX])
     const [selectedCategory,setSelectedCategory]=useState([])
     const [selectedMood,setSelectedMood]=useState(null)
     const [selectedLanguage,setSelectedLanguage]=useState(null)
     const[buttons,setButtons]=useState([])
     // function to create the array of buttons
     const createChosenButtons = (value) => {
      let test=false
      if(!test) {
        setButtons([...buttons, `${value}` ]);
      }
      else if (buttons.includes(value)){
        test=true
      }
    
    };
  
     console.log('buttons',buttons);

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
    console.log('filtered initiale',filtered);
 filtered=filtered.filter((book)=>selectedCategory.includes(book.genre))
     
   console.log('filtered books genre:',filtered);
  }
   // filter by mood
  if (selectedMood){
     filtered=filtered.filter((book)=>selectedMood.includes(book.mood))
   
  }
     // filter by language
  if (selectedLanguage){
  filtered=filtered.filter((book)=>selectedLanguage.includes(book.language))

  }

  // if ((selectedCategory.length >0)|| (selectedMood)||(selectedLanguage)){
  //   filtered=filtered.filter(((book)=>selectedCategory.includes(book.genre))|| ((book)=>selectedMood.includes(book.mood))||((book)=>selectedLanguage.includes(book.language)))
 
  // }


  // filter by price
  filtered=filtered.filter((book)=>book.price>values[0] && book.price<values[1])




  
  setFilteredBooks(filtered)

  console.log('filtered finaaaaaaal',filtered)

}
/*/*///*/*/*/*/*/*/*// radio filter category //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleCategoryChange=event=>  {
          const {value}=event.target
          console.log('value of genre',{value})
          setSelectedCategory((prev)=>
          prev.includes(value) ? prev.filter((cat)=>cat !== value) :[...prev,value]);

    
        }  
/*/*///*/*/*/*/*/*/*// button mood  filter //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleMoodClick=(value)=>  {
           setSelectedMood(value===selectedMood ? null:value)
         }  
/*/*///*/*/*/*/*/*/*// button Language filter //*//*/*/*/*/*/*/*//*/*/**/ */
        const handleLanguageClick=(value)=>{
          setSelectedLanguage(value===selectedLanguage ? null:value)
        }

         ///////////////
       
    

    return(
        <div>
        <NavBar/>
        <div className='container '>
            {/* //// part of the filter options */}
            <div className='part1'>
                
            <h4 className='filter-by'>Filter By</h4>
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
            
            <button  className={`button-filter ${selectedMood === 'happy' ? "active" : null}`} onClick={() => {handleMoodClick('happy');createChosenButtons('happy')}} 
            style={{
                  backgroundColor: selectedMood === 'happy' ? "black" :' #fef9f2', 
                  color: selectedMood=== 'happy'? "white" : "black"
                }}>happy </button>
            <button className={`button-filter ${selectedMood === 'romantic' ? "active" : null}`} onClick={() => {handleMoodClick('romantic');createChosenButtons('romantic')}}
               style={{
                backgroundColor: selectedMood === 'romantic' ? "black" :' #fef9f2', 
                color: selectedMood=== 'romantic'? "white" : "black"
              }}>romantic</button>
            <button className={`button-filter ${selectedMood === 'sad' ? "active" : null}`} onClick={() => {handleMoodClick('sad');createChosenButtons('sad')}}
               style={{
                backgroundColor: selectedMood === 'sad' ? "black" :' #fef9f2', 
                color: selectedMood=== 'sad'? "white" : "black"
              }}>sad</button>
            <button className={`button-filter ${selectedMood === 'adventurous' ? "active" : null}`} onClick={() => {handleMoodClick('adventurous');createChosenButtons('adventurous')}}
               style={{
                backgroundColor: selectedMood === 'adventurous' ? "black" :' #fef9f2', 
                color: selectedMood=== 'adventurous'? "white" : "black"
              }}>adventurous </button>
            <button  className={`button-filter ${selectedMood === 'inspirational' ? "active" : null}`} onClick={() =>{ handleMoodClick('inspirational');createChosenButtons('inspirational')}}
               style={{
                backgroundColor: selectedMood === 'inspirational' ? "black" :' #fef9f2', 
                color: selectedMood=== 'inspirational'? "white" : "black"
              }}> inspirational</button>
            <button  className={`button-filter ${selectedMood === 'uplifting' ? "active" : null}`} onClick={() =>{ handleMoodClick('uplifting');createChosenButtons('uplifting')}}
               style={{
                backgroundColor: selectedMood === 'uplifting' ? "black" :' #fef9f2', 
                color: selectedMood=== 'uplifting'? "white" : "black"
              }}>uplifting</button>
         

          </div>
          <h5>language</h5><hr/>


          {/* ////////////////////////////////// language buttons//////////////////////////////////////// */}
          <div  className='but-container'>
            
          <button
               className={`button-filter ${selectedLanguage === 'English' ? "active" : ""}`}
               onClick={() => {
               handleLanguageClick('English'); 
               createChosenButtons('English');
               }}
                style={{
                  backgroundColor: selectedLanguage === 'English' ? "black" :' #fef9f2', 
                  color: selectedLanguage === 'English'? "white" : "black"
                }}
          >
            English
          </button>


          <button  className={`button-filter ${selectedLanguage === 'Japanese' ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Japanese'); 
               createChosenButtons('Japanese')
       
               }}
               style={{
                backgroundColor: selectedLanguage === 'japanese' ? "black" : "#fef9f2",
                color: selectedLanguage === 'japanese' ? "white" : "black",
              }}>Japanese
            </button>


            <button className={`button-filter ${selectedLanguage === 'Arabic' ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Arabic'); 
               createChosenButtons('Arabic')
               }}
                style={{
                  backgroundColor: selectedLanguage === 'Arabic' ? "black" :' #fef9f2', 
                  color:selectedLanguage === 'Arabic' ? "white" : "black"
                }}>Arabic</button>

            <button  className={`button-filter ${selectedLanguage === 'Spanish' ? "active" : null}`}     onClick={() => {
               handleLanguageClick('Spanish'); 
               createChosenButtons('Spanish')
               }}
                style={{
                  backgroundColor: selectedLanguage === 'Spanish' ?"black" :' #fef9f2', 
                  color: selectedLanguage === 'Spanish' ? "white" : "black"
                }}>Spanish </button>
            <button  className={`button-filter ${selectedLanguage === 'french' ? "active" : null}`}     onClick={() => {
               handleLanguageClick('french'); 
               createChosenButtons('french');
        
               }}
                style={{
                  backgroundColor: selectedLanguage === 'french' ? "black" :' #fef9f2', 
                  color:selectedLanguage === 'french' ? "white" : "black"
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
            <div className='part2'>
               <div className='chosen'>
                 {/* Render the dynamically created buttons */}
                 {buttons.map((el1, index) => (
               <button key={index}>{el1}</button>
                 ))}
               </div>
               <div className="item" >
                     {filteredBooks.map(el=>
                 <BookCard {...el}/>
                )}
   
                 </div>
             
            </div>


        </div>
        </div>
    )
}
export default FilterBooks;