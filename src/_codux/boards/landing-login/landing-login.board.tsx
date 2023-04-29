import { createBoard } from '@wixc3/react-board';
import { LandingLogin } from '../../../components/landing-login/landing-login';

export default createBoard({
    name: 'LandingLogin',
    Board: () => <LandingLogin />,
    environmentProps: {
        canvasWidth: 381,
    },
});
