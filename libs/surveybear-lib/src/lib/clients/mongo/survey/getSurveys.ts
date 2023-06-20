import SurveyModel, { ISurvey } from './SurveyModel';

export const getSurveys = async () => {
    const surveys = await SurveyModel.find();
    if (!surveys) {
        throw "404";
    }
  return surveys;
}
