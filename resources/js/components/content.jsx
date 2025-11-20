export default Content;

function Content(){
    return (
        <div style={{width: "90%", height: "100%", display: "flex", 
        justifyContent: "center", alignItems: "flex-end"
        }}>
            <div style={{width: "93%", height: "95%", backgroundColor: "white", 
                borderRadius: "20px 20px 0px 0px", boxShadow: "rgba(0, 0, 0, 0.3) 1px -1px 5px 5px",
                display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column"
                }}>
                    <div style={{display: "flex", backgroundColor: "red", width: "90%", height: "93%",
                    justifyContent: "center", alignItems: "flex-end"
                    }}>
                        <div style={{width: "100%", height: "15%"}}>
                            <input type="text" />
                            <div></div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div style={{width: "100%", height: "75%"}}>

                    </div>
            </div>
        </div>
    )
}