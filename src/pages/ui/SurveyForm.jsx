import React from 'react'
import SurveyItem from './SurveyItem';

function SurveyForm(props) {
    const {questions, setQuestions} = props;
    console.log(questions);

    function handleDeleteQuestion(id) {
        const newQuestions = questions.filter((question) => question.id !== id);
        
        console.log(newQuestions);
        setQuestions(newQuestions);
    }

  return (
    <div>
    {questions.map((question, index) => {
        return <SurveyItem key={question.id} question={question} onDelete={handleDeleteQuestion}/>;
    })}
    </div>
  )
}

export default SurveyForm;