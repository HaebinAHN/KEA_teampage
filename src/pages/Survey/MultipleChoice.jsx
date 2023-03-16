import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
function MultipleChoice(props) {
    const [options, setOptions] = useState([]);

    function addOption() {
        setOptions([...options, { text: '' }]);
    }

    function handleChangeOptionText(index, event) {
        const newOptions = [...options];
        newOptions[index].text = event.target.value;
        setOptions(newOptions);
    }

    function renderOptions() {
        return options.map((option, index) => (
            <div key={index}>
                <label>
                    Option {index + 1}:{' '}
                    <input
                        type="text"
                        value={option.text}
                        onChange={(event) => handleChangeOptionText(index, event)}
                    />
                </label>
            </div>
        ));
    }

    return (
        <div>
            <br/>
            <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                질문: <TextField placeholder="내용을 입력하세요" fullWidth />
            </Grid>
            <br />
            <div>
                <button onClick={addOption}>Add Option</button>
            </div>
            {renderOptions()}
        </div>
    );
}
export default MultipleChoice;