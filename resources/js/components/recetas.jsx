export default Recetas;

export function Recetas({cosas, lista}){
    return (
        <div style={{
            display: lista ? "flex" : "grid", 
            flexDirection: lista ? "column" : undefined, 
            width: "100%", height: "84%", gap: "1em", overflowY: "auto", 
            paddingTop: "1em", alignItems: "center", justifyItems: "center",
            gridTemplateColumns: lista ? undefined : "repeat(4, 270px)",
            gridAutoRows: lista ? undefined : "max-content",
            boxShadow: "inset 0px 3px 6px rgba(255, 255, 255, 0.3)",
            marginBottom: "4%", paddingBottom: "1em"
            }}>
            {
                cosas.map((cosa, i) => {
                    if(lista == false){
                        return(
                            <div key={i} style={{display: "flex", width: "250px", alignItems: "center",
                                justifyContent: "center", height: "80px", backgroundColor: "white", 
                                borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px", 
                                borderTop: "10px solid #f1d99b", flexDirection: "column", cursor: "pointer",
                                }}>
                                <div style={{width: "80%", height: "30%", alignItems: "flex-end"}}>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontWeight: "bold", fontSize: "18px",
                                        color: "rgba(0, 0, 0, 0.7)"
                                        }}>{cosa.nombre}</p>
                                </div>
                                <div style={{width: "80%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.2)"
                                    }}>
                                </div>
                                <div style={{display: "flex", width: "80%", height: "30%",
                                    justifyContent: "space-between", alignItems: "center"}}>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                    }}>Porciones</p>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                    }}>{cosa.porciones}</p>
                                    </div>
                                </div>
                            )}else{
                                return(
                                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center",
                                        width: "99%", backgroundColor: "white", height: "40px", cursor: "pointer",
                                        borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px"}}>
                                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontWeight: "bold", fontSize: "18px",
                                            color: "rgba(0, 0, 0, 0.7)", width: "87%"
                                            }}>{cosa.nombre}</p>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "10%"}}>
                                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                                }}>{cosa.porciones}</p>
                                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                                }}>Porciones</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }     
        </div>
    )
}