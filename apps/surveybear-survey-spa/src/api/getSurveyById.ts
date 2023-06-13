import { ISurvey } from '@surveybear/surveybear-lib';

const getSurveyById = async (surveyId: string): Promise<ISurvey> => {
    return (await fetch(`/api/survey/${surveyId}`)).json();
}

export default getSurveyById;
