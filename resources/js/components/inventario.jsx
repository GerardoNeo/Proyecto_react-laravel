export default Inventario;

export function Inventario({cosas, lista}){
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
                                outline: `1px solid ${cosa.borde}`,
                                justifyContent: "center", height: "80px", backgroundColor: cosa.fondo, flexShrink: 0,
                                borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px", 
                                borderTop: "10px solid #f1d99b", flexDirection: "column", cursor: "pointer",
                                }}>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", height: "30%", alignItems: "center"}}>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontWeight: "bold", fontSize: "18px",
                                        color: "rgba(0, 0, 0, 0.7)"}}>{cosa.nombre}</p>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                    </div>
                                </div>
                                <div style={{width: "80%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.2)"
                                    }}>
                                </div>
                                <div style={{display: "flex", width: "80%", height: "30%",
                                    justifyContent: "space-between", alignItems: "center"}}>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                    }}>{cosa.porciones}</p>
                                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 0.35)"
                                    }}>{cosa.gramaje}</p>
                                    </div>
                                </div>
                            )}else{
                                return(
                                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center",
                                        width: "99%", backgroundColor: cosa.fondo, height: "40px", cursor: "pointer",
                                        borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px",
                                        outline: "1px solid" + cosa.borde, flexShrink: 0}}>
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