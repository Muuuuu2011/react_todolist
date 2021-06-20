import React,{useState} from "react"
import { v4 } from "uuid";

const List_Page=(props)=>{

    const [note,setNote] = useState("")
    function noteChange(e){
        setNote(e.target.value)
    }

    const [date,setDate] = useState("")
    function dateChange(e){
        setDate(e.target.value)
    }

    const [time,setTime] = useState("")
    function timeChange(e){
        setTime(e.target.value)
    }

    // console.log(note,date,time)

    function addItem(){
        console.log(note,date,time)
        if(note==="" | date==="" | time ===""){
            alert("請輸入記事內容")
            return
        }else{
            props.add(function(prevDate){
                return [
                    {
                        id:v4(),//加一個獨立ID
                        note,
                        date,
                        time                
                    }
                    ,...prevDate
                ]
            })
        }
    }


    const list_style={
        backgroundColor:"#61bfad",
        width:"600px",
        margin:"auto",
    }

    const p_style={
        fontFamily:"微軟正黑體",
        display:"inline-block",
        fontSize:"25px",
    }

    const input_style={
        fontFamily:"微軟正黑體",
        fontSize:"25px",
        borderRadius:"5px",
        marginBottom:"10px",
        marginLeft:"10px"
    }


    return (
        <div  className="listPage" style={{display:props.display}}>
            <div style={list_style}>
                <h1 >行程表</h1>
                <p style={p_style}>記事  </p>
                <input style={input_style}  type="text" value={note} onChange={noteChange} /><br/>
                <p style={p_style}>日期  </p>
                <input style={input_style}  type="date" value={date} onChange={dateChange}/><br/>
                <p style={p_style}  >時間  </p>
                <input  style={input_style} type="time" value={time} onChange={timeChange}/><br/>
                <button style={input_style}  className="add" onClick={addItem} >新增記事</button>
                <button style={input_style}  onClick={props.changePage}>結束使用</button>
            </div>
            
        </div>
    )

   
}



export default List_Page