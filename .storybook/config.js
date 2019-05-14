import { configure, addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-router';
import AppDecorator from './AppDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/common/theme/elements.scss';
import '../src/common/theme/fonts.scss';
import '../src/common/theme/root.scss';
import '../src/common/theme/text.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addParameters({
    viewport: {
        viewports: {
            small: {
                name: 'small',
                styles: {
                    width: '375px',
                    height: '550px',
                },
            },
            medium: {
                name: 'medium',
                styles: {
                    width: '768px',
                    height: '950px',
                },
            },
            large: {
                name: 'large',
                styles: {
                    width: '1440px',
                    height: '900px',
                },
            },
        },
    },
});
addDecorator(withKnobs);
addDecorator(AppDecorator);
addDecorator(StoryRouter());
configure(loadStories, module);
