import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {
  StyledAccordion,
  StyledContainer,
  StyledDetailsTypography,
  StyledHeading,
  StyledTypography,
  StyledWraper,
} from './StyledFAQSection';
import { StyledSpan } from '../mission-section/StyledMissionSection';

const FAQSectionComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledHeading>
          FAQ<StyledSpan>.</StyledSpan>
        </StyledHeading>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>How can I book a workout class?</StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>
              Can I pay by cash for my membership?
            </StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>
              What age do I need to be to join?
            </StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>Are there any lockers?</StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>How do I cancel my membership?</StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypography>
              Is there water available at the gym?
            </StyledTypography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledDetailsTypography>
              Booking a workout classe is simple for our members. Simply log
              into your Gymme account on our website and click &quot; book class
              &quot; button . You can book 3 days in advance at 9pm. You can
              cancel your class online by logging back in and click &quot;
              cancel booking &quot;.
            </StyledDetailsTypography>
          </AccordionDetails>
        </StyledAccordion>
      </StyledContainer>
    </StyledWraper>
  );
};

export default FAQSectionComponent;
