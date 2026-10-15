# Hostinger Node.js Web App Deployment Guide

This guide explains how to deploy the Veltro Next.js application on **Hostinger Web App Node.js server** using your GitHub repository:
`https://github.com/riteshkumarcode/utility-website.git`

---

## 1. Project Architecture for Hostinger

Hostinger's Node.js application manager requires an explicit Node.js startup file that listens to the host-assigned port. This repository includes:

- **`server.js`**: Custom production server that reads `process.env.PORT` (or default 3000) and binds to `0.0.0.0`.
- **`package.json`**: `"scripts": { "build": "next build", "start": "node server.js" }`.
- **`public/`**: All images, icons, and static assets.

---

## 2. Option A: Hostinger Cloud / Shared Web Hosting (hPanel Node.js Selector)

If you are using Hostinger Cloud or Web Hosting with the **Node.js Web App** feature in hPanel:

### Step 1: Connect GitHub Repository
1. Log into your **Hostinger hPanel**.
2. Go to **Websites** → select your domain → **Manage**.
3. In the search bar or under **Advanced**, click **Git**.
4. Fill in the repository details:
   - **Repository URL**: `https://github.com/riteshkumarcode/utility-website.git`
   - **Branch**: `main`
   - **Install in**: `public_html` (or your chosen subdirectory)
5. Click **Create**.
6. Click **Deploy** to pull the latest code.

### Step 2: Configure the Node.js Web App
1. In hPanel, navigate to **Advanced** → **Node.js** (or **Web Apps** → **Node.js**).
2. Click **Create Application** (or Edit existing):
   - **Node.js version**: Select **20.x** (or 22.x).
   - **Application mode**: `Production`.
   - **Application root**: `public_html` (where your repo is installed).
   - **Application startup file**: `server.js` *(Crucial: do not leave blank)*.
3. Under **Environment variables**, click **Add Variable**:
   - `NODE_ENV`: `production`
   - `PORT`: (Leave blank if Hostinger auto-assigns, or set to Hostinger's assigned port)
   - `RESEND_API_KEY`: `re_your_api_key_here`
   - `RESEND_FROM_EMAIL`: `Veltro <quotes@veltro.co.uk>`
   - `RESEND_TO_EMAIL`: `enquiries@veltro.co.uk`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: (optional)
   - `TURNSTILE_SECRET_KEY`: (optional)
   - `NEXT_PUBLIC_GA_ID`: (optional)
4. Click **Save** / **Create**.

### Step 3: Install Dependencies & Build
In the Node.js panel:
1. Click **NPM Install** (or access terminal via SSH and run `npm install`).
2. Run the build script:
   - Either click **Run Script** → `build`
   - Or in SSH terminal inside `public_html`:
     ```bash
     npm run build
     ```
3. Once the build finishes (`✓ Compiled successfully`), click **Restart Application**.

Your site will now be live on your Hostinger domain!

---

## 3. Option B: Hostinger VPS (Ubuntu / Debian with PM2 & NGINX)

If you are using a Hostinger VPS:

### Step 1: Connect via SSH
```bash
ssh root@your_hostinger_vps_ip
```

### Step 2: Install Node.js 20 & PM2 (if not already installed)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git
sudo npm install -g pm2
```

### Step 3: Clone Repository
```bash
cd /var/www
git clone https://github.com/riteshkumarcode/utility-website.git veltro
cd veltro
```

### Step 4: Configure Environment & Build
1. Create `.env`:
   ```bash
   cp .env.example .env
   nano .env
   ```
   Add your Resend API keys and domain details.
2. Install and build:
   ```bash
   npm install
   npm run build
   ```

### Step 5: Start with PM2
```bash
pm2 start server.js --name "veltro"
pm2 save
pm2 startup
```

### Step 6: Configure NGINX Reverse Proxy
In `/etc/nginx/sites-available/veltro`:
```nginx
server {
    server_name veltro.co.uk www.veltro.co.uk;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Enable site and restart NGINX:
```bash
sudo ln -s /etc/nginx/sites-available/veltro /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx
sudo certbot --nginx -d veltro.co.uk -d www.veltro.co.uk
```

---

## 4. Automatic Deployments from GitHub

Whenever you push changes to `main` on GitHub:
- On **hPanel**: Go to **Git** → click **Deploy**. Then in the Node.js tab, click **Restart**.
- On **VPS**: Set up a GitHub Action or run:
  ```bash
  cd /var/www/veltro && git pull && npm run build && pm2 restart veltro
  ```
