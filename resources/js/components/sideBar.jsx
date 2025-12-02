export default SideBar;
import React, { useState } from 'react';

function SideBar({page, click, setClick}){

    return (
        <div style={{
            height: "100%", width: "8%", backgroundColor: "white",
            boxShadow: "2px 0px 7px 0px rgba(0, 0, 0, 0.15)",
            }}>
            <div style={{height: "25%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60px", cursor: "pointer"}}
                    onClick={() => setClick(!click)}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)", 
                        backgroundColor: click ? "#f1d99b" : "transparent", borderRadius: "50%"}} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly",
                height: "75%", width: "100%", alignItems: "center"
                }}>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", 
                    alignItems: "center", flexDirection: "column"
                    }}>
                    <a style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", 
                        backgroundColor: page === 1 ? "#f1d99b" : "transparent",
                        flexDirection: "column", borderRadius: "10px", aspectRatio: "1/1", width: "60px"}}
                        href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)"}} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    </a>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(195, 167, 128, 0.9)", textAlign: "center"}}>Inicio</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", 
                    alignItems: "center", flexDirection: "column"
                    }}>
                    <a style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        backgroundColor: page === 2 ? "#f1d99b" : "transparent",
                        flexDirection: "column", borderRadius: "10px", aspectRatio: "1/1", width: "60px"}}
                        href="/calendario">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)"}} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    </a>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(195, 167, 128, 0.9)", textAlign: "center"}}>Calendario</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", 
                    alignItems: "center", flexDirection: "column"
                    }}>
                    <a style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", 
                        backgroundColor: page === 3 ? "#f1d99b" : "transparent",
                        flexDirection: "column", borderRadius: "10px", aspectRatio: "1/1", width: "60px"}}
                        href="/recetas">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)"}} width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
                    </a>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(195, 167, 128, 0.9)", textAlign: "center"}}>Recetas</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", 
                    alignItems: "center", flexDirection: "column"
                    }}>
                    <a style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        backgroundColor: page === 4 ? "#f1d99b" : "transparent",
                        flexDirection: "column", borderRadius: "10px", aspectRatio: "1/1", width: "60px"}}
                        href="/inventario">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)"}} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-archive-icon lucide-archive"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
                    </a>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(195, 167, 128, 0.9)", textAlign: "center"}}>Inventario</p>
                </div>
                <div style={{width: "70%", height: "auto", aspectRatio: "1/1", display: "flex", justifyContent: "center", 
                    alignItems: "center", flexDirection: "column"
                    }}>
                    <a style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        backgroundColor: page === 5 ? "#f1d99b" : "transparent",
                        flexDirection: "column", borderRadius: "10px", aspectRatio: "1/1", width: "60px"}}
                        href="/postres">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: "rgba(195, 167, 128, 0.9)"}} width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift-icon lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
                    </a>
                    <p style={{margin: "0", fontFamily: "Poppins, serif", fontSize: "16px",
                        color: "rgba(195, 167, 128, 0.9)", textAlign: "center"}}>Postres</p>
                </div>
            </div>
        </div>
    )
}