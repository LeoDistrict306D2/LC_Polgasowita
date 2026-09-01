# Installation Guide

## WSL Installation Issue Workaround

If you encounter a UNC path error during `npm install` in WSL, use one of these solutions:

### Option 1: Use WSL Terminal Directly

Instead of accessing through Windows, open a native WSL terminal:

```bash
# In WSL terminal
cd /home/akind/dev/leo-website
rm -rf node_modules package-lock.json
npm install
```

### Option 2: Use Mounted Drive Path

If accessing from Windows, use the mounted drive format:

```bash
# Use /mnt/c/ path instead of Windows path
cd /mnt/c/Users/akind/projects/leo-website
npm install
```

### Option 3: Disable Windows/WSL Interop (Temporary)

```bash
# Create or edit /etc/wsl.conf
sudo nano /etc/wsl.conf

# Add these lines:
[interop]
enabled = false
appendWindowsPath = false

# Restart WSL
wsl.exe --shutdown
# Then reopen WSL terminal
```

### Option 4: Use Yarn Instead

```bash
# Install yarn if not present
npm install -g yarn

# Use yarn instead of npm
yarn install
yarn dev
```

## Standard Installation

Once the path issue is resolved:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Verify Installation

After successful installation, you should be able to run:

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## Troubleshooting

- **Port already in use**: Change port in `vite.config.js` or kill the process using port 5173
- **Module not found**: Clear cache with `npm cache clean --force` and reinstall
- **Build errors**: Ensure Node.js version is 16+ with `node --version`
