import { BlogRouter } from "../modules/blogs/router/blog-router";
import { CmsAdminRouter } from "../modules/cms-admin/router/cms-router";
import { ContactUsRouter } from "../modules/contact-us/router/contact-us-router";
import { GlossaryRouter } from "../modules/glossary/router/glossary-router";
import { HomePageRouter } from "../modules/home/router/home-router";
import { InfographicRouter } from "../modules/infographics/router/infographics-router";
import { PrivacyPolicyRouter } from "../modules/privacy-policy/router/privacy-policy-router";
import { TalesOfStartupsRouter } from "../modules/tales-of-startups/router/tales-of-startups-router";
import { TermsConditionsRouter } from "../modules/terms-conditions/router/privacy-policy-router";

export const IndexRouter = [
  ...HomePageRouter,
  ...TalesOfStartupsRouter,
  ...CmsAdminRouter,
  ...BlogRouter,
  ...InfographicRouter,
  ...GlossaryRouter,
  ...PrivacyPolicyRouter,
  ...TermsConditionsRouter,
  ...ContactUsRouter
];
