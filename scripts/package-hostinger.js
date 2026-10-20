const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const standaloneDir = path.join(rootDir, ".next", "standalone");
const deployDir = path.join(rootDir, "hostinger_deploy");
const zipFile = path.join(rootDir, "westcoastservices-hostinger.zip");

console.log("==> Preparing Hostinger deployment package...");

if (!fs.existsSync(standaloneDir)) {
  console.error("Error: .next/standalone not found. Please run 'npm run build' first.");
  process.exit(1);
}

// 1. Clean deployDir
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir, { recursive: true });

// 2. Copy standalone files
console.log("==> Copying standalone server and node_modules...");
fs.cpSync(standaloneDir, deployDir, { recursive: true });

// 3. Copy .next/static into hostinger_deploy/.next/static
const staticSrc = path.join(rootDir, ".next", "static");
const staticDest = path.join(deployDir, ".next", "static");
if (fs.existsSync(staticSrc)) {
  console.log("==> Copying .next/static client bundles...");
  fs.mkdirSync(staticDest, { recursive: true });
  fs.cpSync(staticSrc, staticDest, { recursive: true });
}

// 4. Copy public folder
const publicSrc = path.join(rootDir, "public");
const publicDest = path.join(deployDir, "public");
if (fs.existsSync(publicSrc)) {
  console.log("==> Copying public assets...");
  fs.cpSync(publicSrc, publicDest, { recursive: true });
}

// 5. Copy .env.example
const envSrc = path.join(rootDir, ".env.example");
const envDest = path.join(deployDir, ".env.example");
if (fs.existsSync(envSrc)) {
  fs.copyFileSync(envSrc, envDest);
}

// 6. Compress into zip archive using PowerShell
console.log("==> Compressing into westcoastservices-hostinger.zip...");
try {
  if (fs.existsSync(zipFile)) {
    fs.unlinkSync(zipFile);
  }
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${deployDir}\\*' -DestinationPath '${zipFile}' -Force"`,
    { stdio: "inherit" }
  );
  const stats = fs.statSync(zipFile);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n SUCCESS! Hostinger deployment archive ready:`);
  console.log(`  File: ${zipFile}`);
  console.log(`  Size: ${sizeMB} MB`);
} catch (err) {
  console.error("Compression error:", err);
  process.exit(1);
}
