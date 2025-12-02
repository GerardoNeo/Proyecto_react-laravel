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
        nombre: "James Bones",
        descripcion: "Cupcake de mantequilla",
        fecha: "Sabado, 05 de abril de 2025",
        hora: "4:31"
        },
        {   
            folio: "0117",
            nombre: "John -Sierra 117",
            descripcion: "Cupcake de mora azul",
            fecha: "Sabado, 22 de agosto de 2552",
            hora: "26:31"
        },
        
        {   
            folio: "0058",
            nombre: "Linda",
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
                <div style={{width: "95%", height: "20%", background: "#FEFBDD", 
                    borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", 
                    flexDirection: "column", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px"}}>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "23px", 
                        color: "rgba(0, 0, 0, 1)", fontWeight: "bolder"}}
                        >Hola, Vicky</p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "30%", height: "40%",
                        gap: ".4em"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px",
                            width: "90px", height: "40px", backgroundColor: "rgba(0,0,0,.12)"}}>
                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 1)"}}
                            >{hora.toLocaleDateString()}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px",
                            width: "100px", height: "40px", backgroundColor: "rgba(0,0,0,.12)"}}>
                            <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "12px", color: "rgba(0, 0, 0, 1)"}}
                            >{hora.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "95%", height: "30%", backgroundColor: "transparent", borderRadius: "10px", justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px", display: "flex", alignItems: "center"}}>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column",
                        width: "99%", height: "80%", overflowY: "auto", gap: "1em",
                        paddingTop: "1em", paddingBottom: "1em"}}>
                        {
                            pedidos.map((pedido, i) => {
                                return (
                                    <div key={i} style={{display: "flex", justifyContent: "space-around", borderRadius: "10px",
                                        width: "98%", height: "100px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 1px",
                                        flexDirection: "row", alignItems: "center", cursor: "pointer", flexShrink: 0
                                        }}>
                                        <div style={{height: "70%", width: "auto", aspectRatio: "1/1", backgroundColor: "rgba(234, 221, 255, 1)",
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
                <div style={{width: "95%", height: "40%", borderRadius: "10px",
                    display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                    <a style={{width: "22%", height: "95%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                        borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",
                        flexDirection: "column", textDecorationLine: "none"}} href="/calendario">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(138, 138, 142, 1)"}} width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-range-icon lucide-calendar-range"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/></svg>
                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "40px", color: "rgba(138, 138, 142, 1)"
                            }}>Calendario</p>
                    </a>
                    <a style={{width: "22%", height: "95%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                        borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",
                        flexDirection: "column", textDecorationLine: "none"}} href="/recetas">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(138, 138, 142, 1)"}} width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "40px", color: "rgba(138, 138, 142, 1)"
                            }}>Recetas</p>
                    </a>
                    <a style={{width: "22%", height: "95%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                        borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",
                        flexDirection: "column", textDecorationLine: "none"}} href="/inventario">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(138, 138, 142, 1)"}} width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "40px", color: "rgba(138, 138, 142, 1)"
                            }}>Inventario</p>
                    </a>
                    <a style={{width: "22%", height: "95%", boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 7px 2px",
                        borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",
                        flexDirection: "column", textDecorationLine: "none", cursor: "p"}} href="/postres">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(138, 138, 142, 1)"}} width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cake-icon lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "40px", 
                            color: "rgba(138, 138, 142, 1)"
                            }}>Postres</p>
                    </a>
                </div>
            </div>
        </div>
    );
}