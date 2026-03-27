import { useState } from "react";
function HandleCheckboxes() {

    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleCheckboxChange = (e) => {
        const skill = e.target.value;
        if (e.target.checked) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        }
    }

    return (
        <div>

            <h2>Select Your Skills: </h2>
                    <input type="checkbox" onChange={handleCheckboxChange} id="php" value="PHP" />
                    <label htmlFor="php">PHP</label>
            <br /> <br />

            <input type="checkbox" onChange={handleCheckboxChange} id="javascript" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label>
            <br /> <br />

            <input type="checkbox" onChange={handleCheckboxChange}  id="python" value="Python" />
            <label htmlFor="python">Python</label>
            <br /> <br />

            <input type="checkbox" onChange={handleCheckboxChange} id="java" value="Java" />
            <label htmlFor="java">Java</label>
            <br /> <br />

            <h1>Selected Skills: {selectedSkills.toString()}</h1>

        </div>
    )
}

export default HandleCheckboxes;