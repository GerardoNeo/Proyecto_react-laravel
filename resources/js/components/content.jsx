export default Content;

function Content(){
    let cosas = [
        {
            nombre: "Manzana",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        },
        {
            nombre: "Pera",
            porciones: "20",
            gramaje: "kg"
        },
        {
            nombre: "Platano",
            porciones: "15",
            gramaje: "kg"
        },
        {
            nombre: "Uva",
            porciones: "30",
            gramaje: "kg"
        }
    ]

    return (
        <div style={{width: "90%", height: "100%", display: "flex", 
        justifyContent: "center", alignItems: "flex-end"
        }}>
            <div style={{width: "93%", height: "95%", backgroundColor: "white", 
                borderRadius: "10px 10px 0px 0px", 
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                display: "flex", justifyContent: "center", alignItems: "flex-end"
                }}>
                    <div style={{display: "flex", width: "90%", height: "93%",
                        justifyContent: "flex-end", alignItems: "center", flexDirection: "column"
                        }}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", 
                            height: "12%"
                            }}>
                            
                            <div style={{display: "flex", alignItems: "center", flexDirection: "row",
                                width: "90%", height: "60%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                                borderRadius: "50px", justifyContent: "space-evenly"
                                }}>
                                <input type="text" placeholder="Buscar..." style={{width: "90%", height: "100%", 
                                    border: "none", padding: "0", margin: "0", borderRadius: "10px 0px 0px 10px",
                                    outline: "none"
                                }}/>
                                <i class="bx bx-search" aria-hidden="true" style={{fontSize: "150%"
                                }}></i>
                            </div>
                            <div style={{width: "8%", height: "60%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                                borderRadius: "30px", display: "flex", flexDirection: "row", justifyContent: "space-evenly",
                                alignItems: "center"
                                }}>
                                <div style={{width: "50%", aspectRatio: "1/1", borderRadius: "50%",
                                    display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"
                                    }}>
                                    <i class='bx bx-list-ul' style={{fontSize: "22px"}}></i>
                                </div>
                                <div style={{width: "50%", aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#ffecbb",
                                    display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"

                                    }}>
                                    <i class='bx bx-grid-alt' style={{fontSize: "22px"}}></i>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 350px)",
                            width: "100%", height: "88%", gridAutoRows: "150px", overflowY: "auto",
                            justifyItems: "center", alignItems: "center"}}>
                            {cosas.map((cosa, i) => (
                                <div key={i} style={{display: "flex", width: "300px", alignItems: "center",
                                    justifyContent: "center", height: "90px", backgroundColor: "white", 
                                    borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px", 
                                    borderTop: "10px solid #f1d99b", flexDirection: "column", cursor: "pointer"
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
                            ))}
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}