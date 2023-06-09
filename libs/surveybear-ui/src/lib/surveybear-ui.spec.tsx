import { render } from '@testing-library/react';

import SurveyBearUi from './surveybear-ui';

describe('SurveyBearUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SurveyBearUi />);
    expect(baseElement).toBeTruthy();
  });
});
