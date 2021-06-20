import React from "react"


const Home_Page=(props)=>{

    const home_body={
        backgroundColor:"#61bfad",
        width:"600px",
        margin:"auto",
    }

    const h1_style={
        fontFamily:"微軟正黑體",
        color:"#ffffff",
        fontSize:"50px",
    }

    const h3_style={
        fontFamily:"微軟正黑體",
        color:"#ffffff",
        fontSize:"30px"
    }

    const button_style={
        borderRadius:"5px",
        fontSize:"20px",
        letterSpacing:"5px",
        marginBottom:"10px"
    }

    return(
        <div className="homePage" style={{display:props.display}}>
            <div style={home_body}>
                <h1 style={h1_style}>MYNOTE行事曆</h1>
                <div>
                    <h3 style={h3_style}>歡迎使用</h3>
                    <button style={button_style} onClick={props.changePage}>開始使用</button>
                </div>
            </div>
        </div>
    )

   
}

export default Home_Page