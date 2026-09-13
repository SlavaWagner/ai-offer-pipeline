# ai-offer-pipeline 🚀
> Autonomous AI Offer Forge & Google Ads Growth Lever Auditing Agent

`ai-offer-pipeline` is an autonomous AI agent developed for the Antigravity CLI. It audits existing Google Ads accounts to detect unexploited growth levers (e.g., missing mass creative angle testing, stagnated monthly keyword expansions, unlayered audience matrices, and static bid targets), generates high-converting retainer upgrade proposals priced between 1.500 € and 3.500 € per month, compiles manager proposal emails, prepares urgent internal manager briefing reports, and provides historical proposal tracking (`--monitoring`).

*Created with the help of the Google Antigravity CLI.*

> [!IMPORTANT]
> **Prerequisite for AI Processing:**
> Please start Google Antigravity beforehand using the command **`agy`** in your console!
> Interactive chat sessions, asset generation workflows, and AI processing run exclusively **INSIDE the Antigravity CLI**. In a standard terminal shell outside Antigravity, no AI processing takes place, and static execution outputs are intercepted with a guidance notice.

---

## 🌟 Key Features

1. **Integrated Google Ads API Setup**: Interactive CLI setup wizard for Developer Token, Client ID, Client Secret, Refresh Token, Customer ID, and Manager Login ID.
2. **Antigravity CLI Architecture**: Content synthesis and growth audit evaluation run directly through the Antigravity CLI infrastructure without third-party API key requirements.
3. **Interactive Terminal Dashboard**: Native terminal start window and command dashboard (no browser required).
4. **Unexploited Lever Audit Scanner**: Scans account performance data to identify creative gaps, audience layering deficits, and bid staticity.
5. **Dynamic Retainer Tier Pricing**: Formulates scalable service packages ranging from **1.500 € / month** (Growth Accelerator) to **3.500 € / month** (Enterprise Market Dominance).
6. **Multi-Asset Desktop Deployment**: Automatically exports 4 comprehensive documents to `Desktop/Offers`:
   - `01_Client_Offer_Proposal.md` (Formal upgrade proposal blueprint)
   - `02_Manager_Proposal_Email.txt` (Ready-to-send email adopting the account manager's tone)
   - `03_Internal_Manager_Briefing.md` (Urgent internal briefing report for the Google Ads manager)
   - `04_Presentation_Slide_Deck.md` (Client slide presentation blueprint)
7. **Historical Offer Monitoring**: Built-in offer registry and status tracking engine accessed via the `--monitoring` command.

---

## 🔍 Operational Methodology & Agent Architecture

The `ai-offer-pipeline` agent follows a structured four-stage workflow designed for agency growth and performance management teams:

```
[Account Data] ➔ [1. Growth Audit] ➔ [2. Offer Synthesis & Pricing] ➔ [3. Desktop Export] ➔ [4. Offer Monitoring]
```

### 1. Account Growth Lever Audit
The agent inspects account campaign structures for 5 primary unexploited growth levers:
- **Mass Asset & Creative Angle Testing**: Identifies whether the account relies on static ad copy rather than testing multiple positioning frames (Pain Point, Social Proof, Outcome frames).
- **Monthly Keyword Expansion Cycles**: Detects search intent stagnation and overdue search term report cleansing.
- **Audience Layering Matrices**: Scans for unexploited in-market, custom intent, and remarketing audience layers.
- **Target CPA / ROAS Scaling Tests**: Evaluates whether bid targets are statically locked or dynamically tested against high-value auctions.
- **Conversion Value Hierarchies**: Audits whether leads carry uniform values instead of weighted profit-margin values.

### 2. Proposal Synthesis & Retainer Pricing (1.500 € - 3.500 € / month)
Based on audit severity, the agent structures tiered upgrade proposals:
- **Tier 1 (1.500 €/mo):** Performance Growth Accelerator (Standard monthly asset & keyword testing).
- **Tier 2 (2.500 €/mo):** Enterprise Performance Scaling (Mass creative angle testing & value bidding).
- **Tier 3 (3.500 €/mo):** Market Dominance (Omni-channel synchronization & aggressive algorithm calibration).

### 3. Manager Email & Internal Briefing Generation
To ensure seamless execution, the agent drafts a client proposal email in the account manager's natural tone alongside an **Urgent Internal Manager Briefing** detailing the exact upsell positioning and pre-call checklists.

### 4. Historical Offer Monitoring (`--monitoring`)
The built-in monitoring registry tracks proposed offers over time across client accounts. Account managers can view historical proposals, track statuses (`PROPOSED`, `ACCEPTED`, `REJECTED`, `UNDER_REVIEW`), and update records directly from the CLI.

---

## 🔑 Google Ads API Authentication & Prerequisites Guide

### Prerequisites
1. **Google Ads Manager Account (MCC)**: Required to issue a Developer Token.
2. **Developer Token**: Located in your MCC account under *Tools & Settings ➔ API Center*.
3. **Google Cloud Project**: A GCP project with the **Google Ads API** enabled.
4. **OAuth 2.0 Client Credentials**: A Desktop Application OAuth 2.0 Client ID and Client Secret created in Google Cloud Console.
5. **OAuth 2.0 Refresh Token**: Valid refresh token authorizing access.

### Setup Process
Run the interactive setup wizard in your terminal:
```bash
ai-offer-pipeline setup
```
Enter your credentials when prompted:
```
? Google Ads Customer ID (e.g. 123-456-7890): 123-456-7890
? Google Ads Developer Token: your_developer_token
? Google Ads Client ID: your_client_id.apps.googleusercontent.com
? Google Ads Client Secret: your_client_secret
? Google Ads Refresh Token (or OAuth2): your_refresh_token
? Manager Login Customer ID (Optional): 987-654-3210
```
Credentials are securely stored in `config.json`.

---

## 🛠 CLI & Agent Command Reference

Alle Befehle werden innerhalb der Google Antigravity CLI (`agy`) ausgeführt:

| Befehl | Kurzbeschreibung |
| :--- | :--- |
| `ai-offer-pipeline run`<br>*(Alias: `analyze`)* | Startet die komplette Offer Forge Pipeline: Account-Audit nach Wachstumslücken, ROI-Kalkulation, Generierung von 3 Retainer-Paketen (1.500 € – 3.500 €/Monat) und Export von 4 Dokumenten auf den Desktop. |
| `ai-offer-pipeline audit` | Führt einen isolierten Audit-Scan auf ungenutzte Hebel im Google Ads Account durch (Creative-Gaps, Audience-Schichten, Bidding-Stagnation). |
| `ai-offer-pipeline monitoring` | Startet das Angebots-Monitoring oder aktualisiert den Status bestehender Angebote (`ACCEPTED`, `REJECTED`, `PROPOSED`, `UNDER_REVIEW`). |
| `ai-offer-pipeline dashboard`<br>*(Alias: `help-menu`)* | Öffnet das interaktive Terminal-Dashboard zur menügeführten Steuerung sämtlicher Aktionen. |
| `ai-offer-pipeline status` | Zeigt die aktuelle Konfiguration, Customer ID und den Export-Zielpfad an. |
| `ai-offer-pipeline setup` | Interaktiver Einrichtungsassistent für Google Ads API Credentials (Customer ID, Developer Token, OAuth Client ID/Secret, Refresh Token). |

### Beteiligte KI-Agenten

*   **`AuditScannerAgent`**: Durchleuchtet Google Ads Accounts auf 5 primäre Wachstumslücken (fehlende Creative Angle Tests, Keyword-Stagnation, ungeschichtete Zielgruppen, statische Gebote, ungewichtete Conversions).
*   **`OfferForgeAgent`**: Erstellt betriebswirtschaftliche ROI-Kalkulationen, formuliert 3 Retainer-Upgrade-Stufen (1.500 € bis 3.500 €/Monat), verfasst die Kunden-Pitch-Email und das interne Manager-Briefing.
*   **`ExportAgent`**: Exportiert alle 4 fertigen Angebotsunterlagen (`01_Client_Offer_Proposal.md`, `02_Manager_Proposal_Email.txt`, `03_Internal_Manager_Briefing.md`, `04_Presentation_Slide_Deck.md`) in den Desktop-Ordner `Desktop/Offers/`.
*   **`MonitoringAgent`**: Verwaltet die persistente Angebotshistorie und aktualisiert den Deal-Status über den gesamten Sales-Cycle.

#### Anwendungsbeispiele:

```bash
# 1. Vollständige Offer-Forge-Pipeline ausführen:
ai-offer-pipeline run

# 2. Reinen Wachstums-Audit durchführen:
ai-offer-pipeline audit

# 3. Angebotshistorie einsehen:
ai-offer-pipeline monitoring

# 4. Angebotsstatus für einen Kunden aktualisieren:
ai-offer-pipeline monitoring -u "Acme Corp" -s ACCEPTED
```
