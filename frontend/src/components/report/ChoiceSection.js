import React, { useState } from "react";
import WebsiteList from "../website/WebsiteList";

function ChoiceSection({ data }) {


    console.log(data)


    return (
        <div>
            <label for="cars">Choose a Website:</label>
            <select >
                <optgroup label="{data.name}">
                    <option value="volvo">{data.id}</option>
                    <option value="saab">jpg</option>
                </optgroup>

            </select>
        </div>
    )
}
export default ChoiceSection;