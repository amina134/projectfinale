import FilterBooks from "../../../frontOffice/3-main/booksFilterPage"
import HeaderUser from "../headerUser/headerUser"




const UserFilterBooks=({user})=>{
    return(
        <div>
          <HeaderUser user={user}/>
          <FilterBooks/>

        </div>
    )
}
export default UserFilterBooks;