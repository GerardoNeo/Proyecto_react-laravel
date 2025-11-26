export default InicioContent;
import { useState, useEffect } from "react";

function InicioContent(){
    let [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
        setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    let pedidos = [{
        folio: "0007",
        nombre: "James",
        descripcion: "Cupcake de mantequilla",
        fecha: "Sabado, 05 de abril de 2025",
        hora: "4:31"
        },
        {   
            folio: "0117",
            nombre: "John",
            descripcion: "Cupcake de mora azul",
            fecha: "Sabado, 22 de agosto de 2552",
            hora: "26:31"
        },
        
        {   
            folio: "0117",
            nombre: "John",
            descripcion: "Cupcake de mora azul",
            fecha: "Sabado, 22 de agosto de 2552",
            hora: "26:31"
        }
    ]

    return (
        <div style={{width: "92%", height: "100%", display: "flex", alignItems: "flex-end",
            justifyContent: "center"
        }}>
            <div style={{width: "93%", height: "95%", backgroundColor: "white",
                borderRadius: "10px 10px 0px 0px", 
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                display: "flex", flexDirection: "column", justifyContent: "space-evenly",
                alignItems: "center"}}>
                <div style={{width: "95%", height: "18%", background: "#FEFBDD", 
                    borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", 
                    flexDirection: "column", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px"}}>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "23px", 
                        color: "rgba(0, 0, 0, 1)", fontWeight: "bolder"}}
                    >Hola, Vicky</p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "30%", height: "40%",
                        gap: ".4em"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px",
                            width: "30%", height: "60%", backgroundColor: "rgba(0,0,0,.12)"}}>
                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 1)"}}
                            >{hora.toLocaleDateString()}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px",
                            width: "20%", height: "60%", backgroundColor: "rgba(0,0,0,.12)"}}>
                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 1)"}}
                            >{hora.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "95%", height: "27%", backgroundColor: "white", borderRadius: "10px", justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px", display: "flex", alignItems: "center"}}>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column",
                        width: "99%", height: "80%", overflowY: "auto", gap: "1em"}}>
                        {
                            pedidos.map((pedido, i) => {
                                return (
                                    <div key={i} style={{display: "flex", justifyContent: "space-around", borderRadius: "10px",
                                        width: "98%", height: "100px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px",
                                        flexDirection: "row", alignItems: "center", cursor: "pointer", flexShrink: 0
                                    }}>
                                        <div style={{height: "70%", width: "auto", aspectRatio: "1/1", backgroundColor: "violet",
                                            borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <p>{pedido.folio}</p>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "space-evenly", flexDirection: "column",
                                             width: "90%", height: "90%"}}>
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "13px", color: "rgba(0, 0, 0, 1)",
                                                fontWeight: "bolder"
                                                }}>{pedido.nombre}</p>
                                                <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "13px", color: "rgba(0, 0, 0, 1)",
                                                fontWeight: "bolder"
                                                }}>{pedido.fecha}</p>
                                           </div>
                                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, .5)"
                                                }}>{pedido.descripcion}</p>
                                                <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, .5)"
                                                }}>{pedido.hora} p.m.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{width: "95%", height: "40%", borderRadius: "10px"}}>
                    <div>

                        <p>Calendario</p>
                    </div>
                    <div>

                        <p>Recetas</p>
                    </div>
                    <div>

                        <p>Inventario</p>
                    </div>
                    <div>

                        <p>Postres</p>
                    </div>
                </div>
            </div>
        </div>
    );
}