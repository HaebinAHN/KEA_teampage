import React from 'react'
import SurveyItem from './SurveyItem';

function SuryeyForm(props) {
    const {questions} = props;

    console.log(questions);

  return (
    <div>
    {questions.map((question, index) => {
        return <SurveyItem key={question.id} question={question} />;
    })}
    </div>
  )
}

export default SuryeyForm;
