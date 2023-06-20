import { ISurvey } from '@surveybear/surveybear-lib';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSurveyById from '../../api/getSurveyById';
import ReactStars from 'react-stars'



const SurveyPage = () => {
    const { surveyId } = useParams();
    const [ survey, setSurvey ] = useState<ISurvey>();
    const ratingChanged = (newRating : any)  => {
      console.log(newRating)
    }

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
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={'#ffd700'} />
    </>)
}

export default SurveyPage;
