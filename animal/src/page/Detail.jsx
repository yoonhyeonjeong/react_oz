import React from "react";
import {useParams} from "react-router-dom";
import {data} from "../assets/data/data";
const Detail = () => {
    const params = useParams();
    console.log(params);
    const animalData = data.find(el => el.id === Number(params.id));
    console.log(animalData);
    return (
        <section className="detail">
            <img src={animalData.img} />
            <h2>{animalData.name}</h2>
            <p>{animalData.description}</p>
        </section>
    );
};

export default Detail;
