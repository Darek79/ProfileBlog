/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '420px',
            },
            fontFamily: {
                Lexend: "'Lexend Deca',sans-serif",
                Rozha: "'Rozha One', serif",
            },
            colors: {
                layer1Grey: '#674b47',
                layer1GreyTint: '#ECE9E8',
                layer1GreyTriadic: '#E9E8EC',
                pageWhite: '#FFFAFA',
            },
            spacing: {
                formButton: '0.938rem',
                spacing10: '0.625rem',
                spacing20: '1.25rem',
                spacing30: '1.875rem',
                spacing35: '2.188rem',
                spacing38: '2.375rem',
                spacing40: '2.5rem',
                spacing60: '3.75rem',
                spacing70: '4.375rem',
                spacing100: '6.25rem',
                spacing300: '18.75rem',
                switcherHeight: '3.75rem',
                secondaryHeight: '2.5rem',
                inputSwitcherHeight: '80%',
                inputSwitcherWidth: '99%',
                messageW: '41.25rem',
                messageH: '20.5rem',
                agreementW: '62.5rem',
                agreementH: '44.5rem',
                profileInfoW: '41.25rem',
                profileInfoH: '43.31rem',
            },
            maxWidth: {
                profileInfoW: '41.25rem',
                agreementW: '62.5rem',
            },
            gridTemplateColumns: {
                mobile: '1fr',
                tablet: '1fr',
                desktop: 'auto minmax(10%,600px) minmax(10%,840px) auto',
            },
            lineHeight: {
                title: '3.25rem',
            },
            backgroundImage: {
                gradientBlue: 'radial-gradient(100% 100% at 50% 100%, #4e49d5 0%, #7772ff 100%)',
                gradientTop: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))',
                gradientBottom: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
                gradientOrange:
                    'radial-gradient(100% 100% at 50% 0%, #FF8B55 0%, #FF651D 100%), radial-gradient(100% 100% at 50% 100%, #4E49D5 0%, #7772FF 100%);',
            },
            fontSize: {
                size10: '0.625rem',
                size11: '0.688rem',
                size12: '0.75rem',
                size18: '1.125rem',
                size22: '1.375rem',
                size24: '1.5rem',
                size26: '1.625rem',
                size28: '1.75rem',
                size30: '1.875rem',
                size34: '2.125rem',
                size36: '2.25rem',
                size38: '2.375rem',
                size40: '2.5rem',
                size50: '3.125rem',
                size70: '4.375rem',
                size200: '12.5rem',
            },
            boxShadow: {
                settingsEdit: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)',
                homepageShadow: ' 0 10px 40px 0 rgba(0, 0, 0, 0.2)',
            },
            opacity: {
                'opacity-15': '0.15',
            },
            borderRadius: {
                default: '1rem',
                'b-15': '0.938rem',
            },
            borderWidth: {
                default: '1px',
            },
        },
    },
};
