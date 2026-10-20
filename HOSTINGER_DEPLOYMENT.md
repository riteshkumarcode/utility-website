# Hostinger Deployment Guide — West Coast Services

This guide explains how to deploy the **West Coast Services** Next.js web application on **Hostinger**.

We have prepared a self-contained, pre-compiled standalone zip file:
📁 **`westcoastservices-hostinger.zip`** (located directly in your project root folder: `d:\Ashish website\westcoastservices-hostinger.zip`).

---

## Method 1: Upload via Hostinger File Manager (Fastest & Easiest — Recommended)

Because Next.js is pre-compiled into a self-contained standalone bundle, **you do not need to run `npm install` or `npm run build` on Hostinger**.

### Step 1: Upload the Zip File
1. Log into your **Hostinger hPanel** (https://hpanel.hostinger.com).
2. Go to **Websites** → click **Manage** next to your domain.
3. In the sidebar or search bar, open **File Manager** (Files → File Manager).
4. Navigate inside the **`public_html`** directory.
5. Click the **Upload** button (top right) → select **File** → choose:
   `westcoastservices-hostinger.zip`
6. Once uploaded, right-click `westcoastservices-hostinger.zip` and select **Extract**.
7. Extract the files directly into `public_html`.
   *(You should see `server.js`, `package.json`, `.next`, `node_modules`, and `public` inside `public_html`)*.
8. Delete the `.zip` file after extraction to save disk space.

---

### Step 2: Configure Node.js in Hostinger hPanel
1. In hPanel, search for **Node.js** in the search bar (or go to **Advanced** → **Node.js** / **Web Apps**).
2. Click **Create Application** (or **Edit** if already created):
   - **Node.js version**: Select **20.x** (or **22.x**).
   - **Application mode**: `Production`.
   - **Application root**: `public_html` (or leave default `/`).
   - **Application startup file**: `server.js` *(Crucial: enter `server.js`)*.
   - **Application URL**: Select your domain (e.g. `westcoastservices.co.uk`).

---

### Step 3: Add Environment Variables
In the same Node.js configuration screen, under **Environment Variables**, click **Add Variable**:

| Variable Name | Recommended Value | Notes |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Enables production caching |
| `ENQUIRY_TO` | `info@westcoastservices.co.uk, sales@westcoastservices.co.uk` | Inboxes where form submissions are sent |
| `ENQUIRY_FROM` | `West Coast Services <enquiries@westcoastservices.co.uk>` | Verified sender address |
| `RESEND_API_KEY` | `re_your_api_key_here` | Your API key from [resend.com](https://resend.com) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | *(optional)* | Cloudflare Turnstile anti-spam key |
| `TURNSTILE_SECRET_KEY` | *(optional)* | Cloudflare Turnstile secret key |
| `NEXT_PUBLIC_GA_ID` | *(optional)* | Google Analytics GA4 ID |

---

### Step 4: Start the Application
1. Click **Save** / **Create Application**.
2. Click **Start Application** (or **Restart**).
3. Open your domain in your browser — your **West Coast Services** website is now live!

---

## Method 2: Deploying via GitHub on Hostinger

If you prefer connecting your GitHub repository for automated Git deployments:

1. In Hostinger hPanel, go to **Advanced** → **Git**.
2. Fill in:
   - **Repository URL**: `https://github.com/riteshkumarcode/utility-website.git`
   - **Branch**: `main`
   - **Install directory**: `public_html`
3. Click **Create** and then **Deploy**.
4. In hPanel, go to **Advanced** → **Node.js**:
   - Set **Startup file**: `server.js`.
   - Click **NPM Install**.
   - In terminal or via script, run `npm run build`.
   - Click **Restart Application**.

---

## How to Re-generate the Zip File Locally (If You Make Future Changes)

If you make changes to the code in the future and want to generate an updated zip package:

1. Run the build in terminal:
   ```bash
   npm run build
   ```
2. Run the deployment packager in PowerShell:
   ```powershell
   Remove-Item -Recurse -Force hostinger_deploy -ErrorAction SilentlyContinue
   New-Item -ItemType Directory -Path hostinger_deploy -Force
   Copy-Item -Recurse -Force .next\standalone\* hostinger_deploy\
   New-Item -ItemType Directory -Path hostinger_deploy\.next\static -Force
   Copy-Item -Recurse -Force .next\static\* hostinger_deploy\.next\static\
   Copy-Item -Recurse -Force public hostinger_deploy\
   Compress-Archive -Path 'hostinger_deploy\*' -DestinationPath 'westcoastservices-hostinger.zip' -Force
   ```
   This immediately creates a fresh `westcoastservices-hostinger.zip` ready for upload.
