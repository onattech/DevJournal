---
sidebar_position: 1
title: Deployment to Cloudflare
---

# Deployment to Cloudflare with Github Actions

Follow this [tutorial](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) for setting up cloudflare pages deployment with Github Actions. Use the action below instead.

### Action

```yaml title="./.github/workflows/pages-deployment.yml"
name: Deploy to Cloudflare Pages

on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        permissions:
            contents: read
            deployments: write
        name: Deploy to Cloudflare Pages
        steps:
            - uses: actions/checkout@v3
            - uses: pnpm/action-setup@v2.2.4
              with:
                  version: 7

            - name: 📦 Cache pnpm and node_modules
              uses: actions/cache@v3
              with:
                  path: |
                      ~/.pnpm-store
                      node_modules
                  key: pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
                  restore-keys: pnpm-

            - name: 🗜️ Install dependencies
              run: pnpm install --no-frozen-lockfile
            - name: 🏗 Build website
              run: pnpm run build

            - name: ️🏷 Add commit hash to <html> tag
              run: |
                  COMMIT_HASH=$(echo ${{ github.sha }} | cut -c 1-7)
                  sed -i 's/<html /<html data-commit-hash="'"$COMMIT_HASH"'" /' ./build/index.html

            - name: Publish
              uses: cloudflare/pages-action@1
              with:
                  apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
                  accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
                  projectName: #YOUR_CLOUDFLARE_PROJECT_NAME
                  directory: build
                  gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```
