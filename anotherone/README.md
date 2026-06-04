# Vulnerable Snyk Test Project

This is a simple single-file Node.js project designed for testing security scanners like Snyk.

## Included Vulnerabilities

1. **`lodash@4.17.15`**:
   - **Prototype Pollution** (e.g., CVE-2020-8203, CVE-2020-28500)
2. **`minimist@1.2.0`**:
   - **Prototype Pollution** (e.g., CVE-2020-7598, CVE-2021-44906)
3. **`axios@0.19.0`**:
   - **Server-Side Request Forgery (SSRF)** / Header Injection (e.g., CVE-2020-28168)

## Setup

Install the vulnerable dependencies:
```bash
npm install
```

## Running the App

To run the application and observe the Prototype Pollution demonstration:
```bash
npm start
```

## Scanning with Snyk

### 1. Locally via Snyk CLI
If you want to authenticate and run the test locally using your token:

1. **Authenticate the Snyk CLI**:
   ```bash
   npx snyk auth <YOUR_SNYK_TOKEN>
   ```
   *(Alternatively, run `npx snyk auth` to authenticate via the browser).*

2. **Run the vulnerability scan**:
   ```bash
   npx snyk test
   ```

### 2. GitHub Integration (GitHub Actions)
A GitHub workflow has been added at `.github/workflows/snyk.yml` to automatically run vulnerability scans on code pushes and pull requests.

To configure this:
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click on **New repository secret**.
4. Name the secret **`SNYK_TOKEN`** and paste your Snyk API token as the value.
5. Push this codebase to GitHub, and the workflow will trigger automatically.
