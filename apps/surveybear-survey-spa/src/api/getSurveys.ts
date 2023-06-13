import { ISurvey } from '@surveybear/surveybear-lib';

const getSurveys = async (): Promise<ISurvey[]> => {
    return (await fetch(`/api/survey`)).json();
}

export default getSurveys;