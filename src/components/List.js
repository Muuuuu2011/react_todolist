const List =({id,note,date,time,deteleData})=>{


    function deteleItem(){
        deteleData(function(prev){
            return prev.filter(list=>list.id !== id)
        })
    }


    const box={
        backgroundColor:"#61bfad",
        width:"600px",
        margin:"auto",
        position:"relative"
    }

    const p_style={
        fontFamily:"微軟正黑體",
        color:"#ffffff",
        fontSize:"30px",
        wordWrap:"break-word"
        
    }
    const date_time={
        color:"#ffffff",
        fontSize:"25px",
        position:"relative",
        top:"30px",
        margin:"0"
    }

    const remove_botton_style={
        position:"relative",
        left:"260px",
        fontSize:"20px",
        borderRadius:"5px",
    }


    return<div className="list" style={box}>
        <p style={p_style}>{note}</p>
        <p style={date_time}>{date}{"  "}{time}</p>
        <button  style={remove_botton_style} className="remove" onClick={deteleItem}>刪除</button>
    </div>
}

export default List