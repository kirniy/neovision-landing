---
description: How to deploy the NeoVision landing page to Vercel
---

1. Ensure you have the [Vercel CLI](https://vercel.com/download) installed:
   ```bash
   npm i -g vercel
   ```

2. Login to your Vercel account:
   ```bash
   vercel login
   ```

3. Run the deployment command from the project root:
   ```bash
   vercel --prod
   ```

4. Follow the interactive prompts (use defaults for most cases).

5. Once deployed, you will receive a production URL. Update the references in `index.html` (og:url, twitter:url) if you use a custom domain.
