import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SurveyBearUiProps {}

const StyledSurveyBearUi = styled.div`
  color: pink;
`;

export function SurveyBearUi(props: SurveyBearUiProps) {
  return (
    <StyledSurveyBearUi>
      <h1>Welcome to SurveyBearUi!</h1>
    </StyledSurveyBearUi>
  );
}

export default SurveyBearUi;
