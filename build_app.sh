#!/bin/bash

echo "[*] Starting ./build_app.sh script..."

echo "[*] Pulling changes from GitHub..."
git pull

echo "[*] Building React app in client/"
cd client/
npm run build
cd ../

echo "[*] Done"