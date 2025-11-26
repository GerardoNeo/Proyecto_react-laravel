export default Content;
import { Component, useState } from "react";

export function Content({ component: Componente }){
    let [lista, setActivo] = useState(false);

    let recetas = [
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
                                borderRadius: "50px", justifyContent: "space-evenly", padding: "2px"
                                }}>
                                <input type="text" placeholder="Buscar..." style={{width: "93%", height: "100%", 
                                    border: "none", padding: "0", margin: "0", borderRadius: "10px 0px 0px 10px",
                                    outline: "none"
                                }}/>
                                <i class="bx bx-search" aria-hidden="true" style={{fontSize: "150%"
                                }}></i>
                            </div>
                            <div style={{width: "8%", height: "60%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                                borderRadius: "30px", display: "flex", flexDirection: "row", justifyContent: "space-evenly",
                                alignItems: "center", padding: "2px"
                                }}>
                                <div style={{width: "50%", aspectRatio: "1/1", borderRadius: "50%", backgroundColor: lista ? "#ffecbb" : "white",
                                    display: "flex", justifyContent: "center", alignItems: "center", transition: ".5s",
                                    }} onClick={() => setActivo(true)}>
                                    <i class='bx bx-list-ul' style={{fontSize: "22px", cursor: "pointer"}}></i>
                                </div>
                                <div style={{width: "50%", aspectRatio: "1/1", borderRadius: "50%", backgroundColor: lista ? "white" : "#ffecbb",
                                    display: "flex", justifyContent: "center", alignItems: "center", transition: ".5s"

                                    }} onClick={() => setActivo(false)}>
                                    <i class='bx bx-grid-alt' style={{fontSize: "22px", cursor: "pointer"}}></i>
                                </div>
                            </div>
                        </div>
                        <Componente cosas={recetas} lista={lista}/>
                    </div>
            </div>
        </div>
    )
}