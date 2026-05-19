# Launch Checklist

Use this checklist when moving the portfolio live on `moyosore.me`.

## Before Deploy

1. Run `npm run build`.
2. Run `npm run verify:launch`.
3. Confirm `CLAUDE_API_KEY` and/or `OPENAI_API_KEY` are configured in Vercel if you want live AI responses.
4. Confirm Plausible is set up for `moyosore.me` if you want analytics and custom events.

## Vercel

1. Ensure the project root is this repository.
2. Confirm the framework preset is Vite.
3. Confirm the output directory is `dist`.
4. Confirm the production domain is `moyosore.me`.
5. Redeploy and verify there are no build-time environment variable errors.

## DNS

1. Point the apex domain `moyosore.me` to Vercel using the records Vercel provides.
2. Point the preferred subdomain, if any, such as `www`, to Vercel.
3. Wait for DNS propagation and confirm the Vercel dashboard shows the domain as valid.

## Post-Deploy Checks

1. Open `https://moyosore.me` and verify the new monogram favicon appears.
2. Check the hero CTA links, project case study links, and contact links.
3. Confirm `https://moyosore.me/robots.txt` resolves.
4. Confirm `https://moyosore.me/sitemap.xml` resolves.
5. Validate the social preview using a link preview tool or social debugger.
6. Open Plausible and confirm pageviews and custom events are arriving.

## Plausible Events To Check

- `hero_cta_clicked`
- `hero_scroll_clicked`
- `project_live_clicked`
- `project_case_study_requested`
- `case_study_opened`
- `case_study_closed`
- `contact_channel_clicked`
- `insights_question_submitted`
- `insights_suggestion_clicked`
- `insights_answer_returned`
- `insights_request_failed`

## Recommended Final Smoke Test

1. Open the site on desktop and mobile.
2. Open at least one case study.
3. Submit one AI prompt.
4. Click the email link.
5. Confirm the browser tab icon, OG preview, and analytics all match the new brand.
