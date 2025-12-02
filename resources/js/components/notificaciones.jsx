import { list } from "postcss";

export default Notifiaciones;

export function Notifiaciones({flag}){
    let notificaciones = [
        {
            nombre: "Levadura",
            estado: "0"
        },
        {
            nombre: "Mantequilla",
            estado: "1"
        },
        {
            nombre: "Leche evaporada",
            estado: "2"
        }
    ]

    return (
        <div style={{display: flag ? "flex" : "none", width: "100%", height: "100dvh", 
            //backdropFilter: "blur(2px)", 
            position: "fixed", left: "8.5%", zIndex: "1", 
            }}>
            <div style={{width: "30%", height: "90%", backgroundColor: "white", borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 10px 5px"}}>
                {
                    notificaciones.map(noti, i => {
                        return (
                            <div key={i}>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
