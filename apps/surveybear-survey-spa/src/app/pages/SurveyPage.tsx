import { ISurvey } from '@surveybear/surveybear-lib';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSurveyById from '../../api/getSurveyById';
import React from 'react';
import ReactStars from 'react-stars';
import { render } from 'react-dom';


const SurveyPage = () => {
    const { surveyId } = useParams();
    const [ survey, setSurvey ] = useState<ISurvey>();

    useEffect(() => {
        if(surveyId){
            getSurveyById(surveyId).then(survey => setSurvey(survey));
        } else {
            // Visa att det inte finns nåt id
        }
    })

    return (<>
        <h1>Survey</h1>
        <p>{survey?.recipient.name}</p>
        <p>{survey?.recipient.mobileNumber}</p>
        <div id='stars'></div>


    </>)
}

const ratingChanged = (newRating : any)  => {
  console.log(newRating)
}

render(<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />,

  document.getElementById('stars')
);

export default SurveyPage;
