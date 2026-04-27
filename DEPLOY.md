# Sort Your Socials — How To Deploy This

## What you need before you start
- A GitHub account (free) — github.com
- A Vercel account (free) — vercel.com (sign up with your GitHub account)
- An Anthropic API key (for the AI plan generation on Day 5)

## Step 1: Get an Anthropic API key

1. Go to console.anthropic.com
2. Sign up or log in
3. Go to Settings → API Keys
4. Click "Create Key"
5. Copy it somewhere safe (you'll need it in Step 4)
6. Add some credit — $5 is MORE than enough for hundreds of plan generations

## Step 2: Upload this project to GitHub

1. Log into github.com
2. Click the "+" icon (top right) → "New repository"
3. Name it: sort-your-socials
4. Leave it as Public (or Private, doesn't matter for Vercel)
5. Click "Create repository"
6. On the next screen, you'll see instructions — use the "upload an existing file" option
7. Drag the entire project folder contents into the upload area
8. Make sure you upload ALL files including the /api and /src folders
9. Click "Commit changes"

## Step 3: Deploy on Vercel

1. Go to vercel.com and sign in with your GitHub account
2. Click "Add New" → "Project"
3. You'll see your GitHub repos — click "Import" next to sort-your-socials
4. Vercel will auto-detect it's a Vite project — leave all settings as default
5. Click "Deploy"
6. Wait about 60 seconds — it'll build and deploy automatically
7. You'll get a URL like: sort-your-socials-abc123.vercel.app

## Step 4: Add your API key

1. In your Vercel project dashboard, go to Settings → Environment Variables
2. Add a new variable:
   - Key: ANTHROPIC_API_KEY
   - Value: (paste your API key from Step 1)
   - Environment: Production (tick all three to be safe)
3. Click "Save"
4. Go to Deployments → click the three dots on your latest deployment → "Redeploy"
   (This makes it pick up the new environment variable)

## Step 5: Add a custom domain (optional but recommended)

1. In Vercel, go to your project Settings → Domains
2. Add: sortyoursocials.nogreysuits.com.au (or whatever you prefer)
3. Vercel will give you DNS instructions
4. Add the DNS record in your domain provider (wherever nogreysuits.com.au is registered)
5. Wait a few minutes for it to propagate
6. Your challenge now lives at your own branded URL!

## How to link each day in your emails

Your daily Mailchimp emails should include these links:

- Day 1: https://YOUR-URL.com?day=1
- Day 2: https://YOUR-URL.com?day=2
- Day 3: https://YOUR-URL.com?day=3
- Day 4: https://YOUR-URL.com?day=4
- Day 5: https://YOUR-URL.com?day=5

Replace YOUR-URL.com with your actual Vercel URL or custom domain.

When someone clicks the Day 3 link, for example, the app opens directly on Day 3.
They can still navigate to any day using the dots at the top.
Their progress saves automatically in their browser.

## Costs

- Vercel hosting: FREE (hobby tier, more than enough)
- GitHub: FREE
- Anthropic API: ~1-3 cents per plan generation
  - 100 participants = roughly $1-3 total
  - Your $5 credit will last ages

## If something goes wrong

- Build fails on Vercel: Check the build logs for errors
- Plan generation doesn't work: Check your API key is set correctly in Environment Variables, and that you redeployed after adding it
- Page is blank: Make sure all files were uploaded to GitHub correctly

## Making changes later

If you want to change any question text, update the wording in src/data.js,
commit to GitHub, and Vercel auto-redeploys. Takes about 30 seconds.
