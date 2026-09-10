# Physiotherapy Practice Website

A responsive Next.js website for a personal physiotherapy practice. It includes home, about, services, referral, resources and contact pages, with five service detail pages.

## Build and preview in VS Code

1. Install [Node.js LTS](https://nodejs.org/) if it is not already installed.
2. Open this folder in VS Code.
3. Open the integrated terminal and run `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000` in your browser.
6. Replace the placeholders in `components/site-data.ts` before sharing the site publicly.

## Add your real contact form

The form is intentionally presented as a visual preview until you connect a secure form provider. Add a provider endpoint to `.env.local`:

```text
NEXT_PUBLIC_CONTACT_FORM_ACTION=https://your-secure-form-provider.example/your-form-id
```

Do not collect confidential clinical information through an ordinary form. Use a suitable secure referral process for hospitals and clinics.

## Deploy to Vercel

1. Create a GitHub repository and push this project to it.
2. Sign in to [Vercel](https://vercel.com), choose **Add New > Project**, then import the GitHub repository.
3. Vercel should recognise the project as Next.js. Leave the default build settings in place.
4. Add `NEXT_PUBLIC_CONTACT_FORM_ACTION` in **Project Settings > Environment Variables** once a secure form service is ready.
5. Select **Deploy**. Vercel will give you a preview URL to test on mobile and desktop.
6. When the content is final, connect your custom domain in Vercel and add the DNS records it provides.

## Before public launch

- Add your real name, credentials, professional registration, contact information and service area.
- Replace the image placeholders with professional images for which you have permission.
- Add only genuine, consented patient reviews.
- Add a Privacy Notice and secure referral workflow.
- Test every contact method, form, mobile menu and booking link.
