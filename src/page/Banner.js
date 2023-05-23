import React from "react";
import './banner.scss'
import {Data1} from '../page/cards'

function Banner() {
    return (
        <div className="container-banner">
            <div className="card-banner">
                {Data1.map((c) => {
                    return(
                        <div className="cards-banner" key={c.id}>
                            <div className="date-banner">
                               <span> {c.date} </span> 
                            </div>
                            <div className="line-banner">
                            <button className={c.cls}>{c.name}</button>
                            <div className="icon-banner" style={{content:`url(${c.icon})` }}></div>
                            <p>{c.text}</p>
                            </div>
                            <div className="paragraf-banner">
                                <p>{c.describe}</p>
                            </div>
                            <div className="button-banner">
                                <button className="btn-banner">Download</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Banner;