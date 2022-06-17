import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { StyledBox } from './StyledMainLogo';
import { routes } from '../../../utils/routes';

const MainLogoComponent: React.FC = () => {
  return (
    <Link to={routes.HOME_ROUTE}>
      <StyledBox>
        <svg
          style={{ position: 'absolute', bottom: '10px', left: '0px' }}
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.91254 14.8112C7.80975 14.0646 8.25771 13.0258 8.13432 11.9779L8.15654 11.9953C8.03061 10.7617 8.56858 9.54495 9.62685 8.66974C10.6851 7.79453 12.156 7.34996 13.647 7.45467L13.6247 7.43725C15.429 7.5771 17.1455 6.76586 17.9164 5.40898C18.6873 4.05209 16.6498 3.37242 15.3684 2.31225C14.087 1.25207 13.8369 0.0390659 12.1969 0.676875C10.5569 1.31468 9.57641 2.73486 9.74544 4.22764L9.72439 4.21023C9.85021 5.44347 9.31255 6.65989 8.25482 7.53502C7.19709 8.41015 5.72687 8.855 4.23631 8.75089L4.25735 8.76831C2.27398 8.62114 0.867185 8.97105 0.239323 10.5346C-0.388538 12.0981 0.239331 12.5079 1.88379 13.4946C3.57926 14.3587 5.50957 15.9785 6.91488 14.8112H6.91254Z"
            fill="white"
          />
        </svg>
        <svg
          style={{ position: 'relative', top: '5px' }}
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.91254 14.8112C7.80975 14.0646 8.25771 13.0258 8.13432 11.9779L8.15654 11.9953C8.03061 10.7617 8.56858 9.54495 9.62685 8.66974C10.6851 7.79453 12.156 7.34996 13.647 7.45467L13.6247 7.43725C15.429 7.5771 17.1455 6.76586 17.9164 5.40898C18.6873 4.05209 16.6498 3.37242 15.3684 2.31225C14.087 1.25207 13.8369 0.0390659 12.1969 0.676875C10.5569 1.31468 9.57641 2.73486 9.74544 4.22764L9.72439 4.21023C9.85021 5.44347 9.31255 6.65989 8.25482 7.53502C7.19709 8.41015 5.72687 8.855 4.23631 8.75089L4.25735 8.76831C2.27398 8.62114 0.867185 8.97105 0.239323 10.5346C-0.388538 12.0981 0.239331 12.5079 1.88379 13.4946C3.57926 14.3587 5.50957 15.9785 6.91488 14.8112H6.91254Z"
            fill="white"
          />
        </svg>
      </StyledBox>
      <Box sx={{ display: 'inline-block', position: 'relative' }}>
        <svg
          width="38"
          height="15"
          viewBox="0 0 38 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.50908 14.1241C8.31519 14.1241 10.3095 12.8457 10.3095 10.3337V0.419589H7.60567V2.06874H7.5034C7.13905 1.26973 6.34004 0.291748 4.69729 0.291748C2.54317 0.291748 0.721436 1.96646 0.721436 5.3095C0.721436 8.57584 2.49203 10.0971 4.70368 10.0971C6.26973 10.0971 7.14544 9.31092 7.5034 8.49913H7.61845V10.2953C7.61845 11.644 6.75553 12.1682 5.573 12.1682C4.37129 12.1682 3.76405 11.644 3.54033 11.0496L1.02186 11.3883C1.34786 12.9352 2.86277 14.1241 5.50908 14.1241ZM5.56661 8.05169C4.23067 8.05169 3.50198 6.99061 3.50198 5.29672C3.50198 3.6284 4.21788 2.45865 5.56661 2.45865C6.88976 2.45865 7.63124 3.57726 7.63124 5.29672C7.63124 7.02896 6.87698 8.05169 5.56661 8.05169Z"
            fill="white"
          />
          <path
            d="M14.1575 13.9196C16.1838 13.9196 17.2577 12.8841 17.8138 11.2988L21.6298 0.432373L18.747 0.419589L16.6952 7.62982H16.5929L14.5602 0.419589H11.6966L15.2186 10.519L15.0588 10.9345C14.7008 11.855 14.0169 11.8997 13.0581 11.6057L12.4444 13.6383C12.8344 13.8045 13.4672 13.9196 14.1575 13.9196Z"
            fill="white"
          />
          <path
            d="M23.0233 10.2378H25.7463V4.3443C25.7463 3.25766 26.4366 2.53536 27.3443 2.53536C28.2392 2.53536 28.84 3.14899 28.84 4.11419V10.2378H31.48V4.24203C31.48 3.2257 32.0616 2.53536 33.0524 2.53536C33.9217 2.53536 34.5737 3.07868 34.5737 4.17172V10.2378H37.2903V3.63479C37.2903 1.50624 36.0247 0.291748 34.1966 0.291748C32.7584 0.291748 31.6398 1.02683 31.2371 2.15183H31.1348C30.8216 1.01405 29.818 0.291748 28.4693 0.291748C27.1462 0.291748 26.1426 0.994873 25.7335 2.15183H25.6185V0.419589H23.0233V10.2378Z"
            fill="white"
          />
        </svg>
        <svg
          style={{ position: 'relative', bottom: '4px' }}
          width="18"
          height="8"
          viewBox="0 0 18 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.723633 7.23786H2.53897V3.30888C2.53897 2.58445 2.9992 2.10292 3.60431 2.10292C4.20091 2.10292 4.60147 2.51201 4.60147 3.15547V7.23786H6.36142V3.2407C6.36142 2.56314 6.7492 2.10292 7.40971 2.10292C7.98926 2.10292 8.42392 2.46513 8.42392 3.19383V7.23786H10.235V2.83587C10.235 1.41684 9.39125 0.607178 8.1725 0.607178C7.21369 0.607178 6.46795 1.09723 6.19949 1.84723H6.1313C5.9225 1.08871 5.25346 0.607178 4.35431 0.607178C3.47221 0.607178 2.80318 1.07593 2.53045 1.84723H2.45375V0.692405H0.723633V7.23786Z"
            fill="#4AE290"
          />
          <path
            d="M14.6519 7.3657C16.2712 7.3657 17.3621 6.57735 17.6178 5.36286L15.9388 5.25206C15.7556 5.75064 15.2868 6.01059 14.6817 6.01059C13.7741 6.01059 13.1988 5.40974 13.1988 4.43388V4.42962H17.6562V3.93104C17.6562 1.70661 16.3096 0.607178 14.5795 0.607178C12.6533 0.607178 11.4047 1.97508 11.4047 3.99496C11.4047 6.07025 12.6363 7.3657 14.6519 7.3657ZM13.1988 3.30462C13.2371 2.55888 13.8039 1.96229 14.6093 1.96229C15.3976 1.96229 15.9431 2.52479 15.9474 3.30462H13.1988Z"
            fill="#4AE290"
          />
        </svg>
      </Box>
    </Link>
  );
};

export default MainLogoComponent;
