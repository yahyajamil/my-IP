import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <span className="info">Info</span>
            <img className="rounded" src={props.data.flag.img} alt="Brazil" />
            <h3>{props.data.country}</h3>
            <h6>{props.data.city}</h6>
            <p>isp: {props.data.connection.isp}</p>
            <div className="footer">
                <p>IP: {props.data.ip}</p>
                <p>Latitude: {props.data.latitude}</p>
                <p>Longitude: {props.data.longitude}</p>
            </div>
        </div>
    )
}