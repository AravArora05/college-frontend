/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/about',
        destination: '/AboutUs',
      },
      {
        source: '/contactUs',
        destination: '/Contact',
      },
      {
        source: '/TermsOfService',
        destination: '/TermsOfServicePage',
      },
      {
        source: '/PrivacyPolicy',
        destination: '/PrivacyPolicyPage',
      },
      {
        source: '/find-your-spike',
        destination: '/FindYourSpikePage',
      },
      {
        source: '/college-fit-finder',
        destination: '/CollegeFitFinderPage',
      },
      {
        source: '/research-bot',
        destination: '/ResearchBotPage',
      },
      {
        source: '/word-count',
        destination: '/WordCountReducerPage',
      },
      {
        source: '/essay-editor',
        destination: '/EssayEditorPage',
      },
      {
        source: '/essay-brainstorm',
        destination: '/EssayBrainstormPage',
      },
      {
        source: '/ec-description-feedback',
        destination: '/ECFeedbackInfoPage',
      }
    ];
  },
};

export default nextConfig;
