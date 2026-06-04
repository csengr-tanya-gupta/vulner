# Secured Snyk Test Project

This is a simple single-file Node.js project that was previously configured with vulnerable dependencies for testing with Snyk, and has now been updated to use secure versions.

## Current Dependency Versions

1. **`lodash@^4.18.1`** (Secured against Prototype Pollution, patched in >=4.17.21)
2. **`minimist@^1.2.8`** (Secured against Prototype Pollution, patched in >=1.2.6)
3. **`axios@^1.17.0`** (Secured against SSRF / Header Injection, patched in >=0.21.1 / >=1.6.0)

## Setup

Install the updated dependencies:
```bash
npm install
```

## Running the App

To run the application and verify that the Prototype Pollution protection is working:
```bash
npm start
```

## Scanning with Snyk

### 1. Locally via Snyk CLI
To run a security scan locally (which should now show 0 vulnerabilities):

1. **Authenticate the Snyk CLI**:
   ```bash
   npx snyk auth <YOUR_SNYK_TOKEN>
   ```

2. **Run the vulnerability scan**:
   ```bash
   npx snyk test
   ```

### 2. GitHub Integration (GitHub Actions)
The GitHub workflow at `.github/workflows/snyk.yml` will automatically run vulnerability scans on code pushes and pull requests to ensure no new vulnerabilities are introduced.
