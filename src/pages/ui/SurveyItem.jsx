<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
import TextInput from './TextInput';

function SurveyItem(props) {

<<<<<<< HEAD
    const { question, onDelete } = props;

    function handleDeleteClick() {
        onDelete(question.id);
    }
=======
    const { question } = props;

>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3

    function renderOptions() {
        return question.options.map((option) => (
            <div key={option}>
                <input type="radio" name="myCheckbox" value="true" required /> {option.text}
            </div>
        ));
    }
<<<<<<< HEAD

=======
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
    switch (question.type) {
        case "shortAnswer":
            return (
                <div>
                    <h2>Q.{question.id}</h2>
                    <p>질문: {question.title}</p>
                    <TextInput />
<<<<<<< HEAD
                    <button onClick={handleDeleteClick}>Delete</button>
=======
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
                </div>
            );
        case "multipleChoice":
            return (
                <div>
                    <h2>Q.{question.id}</h2>
                    <p>질문: {question.title}</p>
                    {renderOptions()}
<<<<<<< HEAD
                    <button onClick={handleDeleteClick}>Delete</button>
=======
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
                </div>
            );
        case "yesOrNo":
            return (
                <div>
                    <h2>Q.{question.id}</h2>
                    <p>질문: {question.title}</p>
                    <form>
                        <input type="radio" name="myCheckbox" value="true" required /> 참
                        <input type="radio" name="myCheckbox" value="false" required /> 거짓
                        <br />
                    </form>
<<<<<<< HEAD
                    <button onClick={handleDeleteClick}>Delete</button>
=======
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
                </div>
            );
    }
}

<<<<<<< HEAD
export default SurveyItem;
=======
export default SurveyItem;
>>>>>>> 52f0e6ac2460d3d383bce55b21c857dc39f27fa3
