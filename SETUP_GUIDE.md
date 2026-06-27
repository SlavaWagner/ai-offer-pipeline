# SETUP GUIDE: ai-offer-pipeline

This guide provides instructions for setting up and running the `ai-offer-pipeline` AI agent within the Antigravity CLI environment.

*Created with the help of the Google Antigravity CLI.*

---

## 1. Prerequisites
- **Node.js** (v18 or higher)
- **Google Antigravity CLI Environment**
- **Google Ads API Credentials** (MCC Developer Token, Client ID, Client Secret, Refresh Token, Customer ID)

---

## 2. Interactive Google Ads API Setup
Launch the interactive configuration wizard in your terminal:
```bash
ai-offer-pipeline setup
```
Provide the requested credentials:
- **Google Ads Customer ID**: Your 10-digit customer account ID (e.g., `123-456-7890`)
- **Developer Token**: API Center Developer Token from your MCC account
- **Client ID & Client Secret**: OAuth 2.0 Desktop credentials from Google Cloud Console
- **Refresh Token**: Valid OAuth 2.0 Refresh Token
- **Manager Login Customer ID**: (Optional) Top-level MCC ID if managing client accounts

All credentials are saved locally in `config.json`.

---

## 3. Running the Offer Pipeline & Monitoring
- **Launch Full Pipeline**:
  ```bash
  ai-offer-pipeline run
  ```
  Generates client proposals, emails, internal briefings, and slide decks deployed to `Desktop/Offers/Offer_Upgrade_<Client>_<Timestamp>`.

- **Launch Offer Monitoring Dashboard**:
  ```bash
  ai-offer-pipeline monitoring
  # or
  ai-offer-pipeline --monitoring
  ```
  Displays historical proposal logs and tracks proposal conversion statuses.
