export default SideBar;

function SideBar(){
    return (
        <div style={{
            height: "100%", width: "10%", backgroundColor: "white",
            boxShadow: "2px 0px 7px 0px rgba(0, 0, 0, 0.15)",
            }}>
            <div style={{height: "20%"}}>
                <i class='bx bx-bell'></i>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly",
                height: "80%", width: "100%", alignItems: "center"
                }}>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column", borderRadius: "10px", backgroundColor: "red", aspectRatio: "1/1", width: "60px"}}>
                        <i class='bx bx-home-alt' style={{fontSize: "60px"}}></i>
                    </div>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)", textAlign: "center"}}>Inicio</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1"
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column"}}>
                        <i class='bx bx-calendar' style={{fontSize: "60px"}}></i>
                    </div>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)", textAlign: "center"}}>Calendario</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1"
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column"}}>
                        <i class='bx bx-book-open' style={{fontSize: "60px"}}></i>
                    </div>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)", textAlign: "center"}}>Recetas</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1"
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column"}}>
                        <i class='bx bx-box' style={{fontSize: "60px"}}></i>
                    </div>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)", textAlign: "center"}}>Inventario</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1"
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column"}}>
                        <i class='bx bx-gift' style={{fontSize: "60px"}}></i>
                        <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(0, 0, 0, 0.7)", textAlign: "center"}}>Postres</p>
                    </div>
                </div>
            </div>
        </div>
    )
}