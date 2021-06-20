import List from "./List"

const List_Page_2 =({listData,deleteData,display})=>{
    return(<div className="listPage" style={{display:display}}>

        {
            listData.map((list)=>{
                const {id,note,date,time}=list
                return(<List key={id} id={id} note={note} date={date} time={time} deteleData={deleteData}/>
            )})
        }

    </div>
)}

export default List_Page_2