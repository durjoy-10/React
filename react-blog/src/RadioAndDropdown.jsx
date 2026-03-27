import { useState } from "react";

function RadioAndDropdown() {

    const [gender, setGender] = useState("");
    const [city, setCity] = useState("Barishal");

    return (
        <div>

            <h4>Select Gender:</h4>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Other
            </label>
            <h1>Selected Gender: {gender }</h1>

            <br /><br /><br />

            <h4>Select City: </h4>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="Barishal">Barishal</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Khulna">Khulna</option>
            </select>
            <h1>Selected City: {city }</h1>

        </div>
    )

}

export default RadioAndDropdown;