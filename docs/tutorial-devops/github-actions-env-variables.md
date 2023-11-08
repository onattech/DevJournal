---
sidebar_position: 1
title: Github Actions env variables
---

# Github Actions environment variables

Use the actions yml below to see all available environment variables on Github Actions.

## YAML

```yaml title=".github/workflows/deploy.yml"
name: Github Actions playground

on:
    push:
        branches:
            - main

jobs:
    deploy:
        name: Show GitHub context
        runs-on: ubuntu-latest
        steps:
            - name: Show GitHub context
              env:
                  GITHUB_CONTEXT: ${{ toJson(github) }}
              run: echo "$GITHUB_CONTEXT"
```

## Example output

```js
{
  "token": "***",
  "job": "deploy",
  "ref": "refs/heads/main",
  "sha": "34067a88f314ff095f622ca1aec4a6f7d002189d",
  "repository": "onattech/github-actions",
  "repository_owner": "onattech",
  "repository_owner_id": "53896679",
  "repositoryUrl": "git://github.com/onattech/github-actions.git",
  "run_id": "4982257286",
  "run_number": "2",
  "retention_days": "90",
  "run_attempt": "1",
  "artifact_cache_size_limit": "10",
  "repository_visibility": "public",
  "repository_id": "616223117",
  "actor_id": "6795969",
  "actor": "onattech",
  "triggering_actor": "onattech",
  "workflow": "Deploy to GitHub Pages",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    "after": "08067a88f314ff095f622ca1aec4a6f7d002189d",
    "base_ref": null,
    "before": "fbea252f5970020de5424be4ac02fc7b2bced640",
    "commits": [
      {
        "author": {
          "email": "52495969+onattech@users.noreply.github.com",
          "name": "Onat",
          "username": "onattech"
        },
      "gravatar_id": "",
      "html_url": "https://github.com/onattech",
      "id": 52595969,
      "login": "onattech",
      "node_id": "MVQ6VXNlcjUzODk1OTY5",
      "organizations_url": "https://api.github.com/users/onattech/orgs",
      "received_events_url": "https://api.github.com/users/onattech/received_events",
      "repos_url": "https://api.github.com/users/onattech/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/onattech/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/onattech/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/onattech"
    }
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "main",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workflow_ref": "onattech/github-actions/.github/workflows/deploy.yml@refs/heads/main",
  "workflow_sha": "08167a88f314ff095f622ca1aec4a6f7d002189d",
  "workspace": "/home/runner/work/github-actions/github-actions",
  "action": "__run"
}
```
