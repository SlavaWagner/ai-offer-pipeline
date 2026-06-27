import chalk from 'chalk';

/**
 * Antigravity CLI AI Engine Bridge for ai-offer-pipeline.
 * Generates client upgrade proposals, manager proposal emails, internal manager briefings, and slide decks.
 */
export async function generateOfferBundle(auditData, clientName = 'Valued Client', managerName = 'Your Google Ads Account Manager') {
  console.log(chalk.cyan(`[AI-ENGINE] Synthesizing Client Offer & Upgrade Blueprint via Antigravity CLI Architecture...`));

  const intensity = auditData.recommendedPackageIntensity;
  
  // Calculate recommended package tiers ranging from 1,500 € to 3,500 € per month
  const pricingTier = intensity === 'HIGH_SCALING' ? '2.500 € / month' : '1.500 € / month';
  const premiumTier = '3.500 € / month';

  // 1. Client Offer Upgrade Proposal (Detailed Markdown / PDF Blueprint)
  const clientProposal = `# STRATEGIC ACCOUNT GROWTH & UPGRADE PROPOSAL
**Prepared For:** ${clientName}
**Account ID:** ${auditData.accountId}
**Date:** ${auditData.auditTimestamp}
**Prepared By:** ${managerName} (Google Ads Account Management)

---

## Executive Summary
During our recent comprehensive account diagnostic, we identified significant unexploited growth levers in your Google Ads performance infrastructure. While baseline campaign structures are stable, expanding into advanced testing methodologies will unlock substantial scale in qualified lead acquisition and overall ROI.

---

## 🔍 Unexploited Account Growth Levers
Our audit revealed ${auditData.unexploitedCount} core areas where strategic expansion will directly impact revenue:

${auditData.levers.map((l, idx) => `### ${idx + 1}. ${l.category} [${l.severity} PRIORITY]
- **Current Limitation:** ${l.description}
- **Expected Revenue Impact:** ${l.potentialImpact}
`).join('\n')}

---

## 🚀 Recommended Service Packages & Investment Tiers

### Tier 1: Performance Growth Accelerator — 1.500 € / month
*Ideal for systematic monthly testing and consistent optimization.*
- **Monthly Asset Angle Testing:** Creation and testing of 3 new copywriting positioning frames.
- **Monthly Keyword Expansion:** Ongoing search term harvesting and negative loop updates.
- **Audience Layering:** Systematic testing of 2 new custom intent & in-market audience segments.
- **Bid Strategy Management:** Target CPA adjustment cycles aligned with monthly lead goals.

### Tier 2: Enterprise Performance Scaling — 2.500 € / month (RECOMMENDED)
*Full-scale performance infrastructure expansion for maximum market share.*
- **Mass Asset Angle Testing:** Creation of 6+ creative positioning angles (Pain Point, Social Proof, Outcome frames).
- **Monthly Keyword & Match-Type Sprints:** Bi-weekly expansion and strict search intent cleansing.
- **Advanced Audience Matrix:** Deep segmentation using first-party data and dynamic remarketing layers.
- **Dynamic Target ROAS & Value Bidding:** Implementation of weighted conversion value hierarchies to prioritize high-ticket appointments.
- **Dedicated Strategy Review:** Monthly executive performance call.

### Tier 3: Market Dominance & Omni-Channel Skalierung — 3.500 € / month
*Aggressive scaling package for high-budget industry leaders.*
- All Tier 2 features included with unlimited creative iteration cycles.
- Multi-channel expansion integration (Google Performance Max + Meta Ads creative synchronicity).
- Weekly automated bidding algorithm calibration and offline conversion tracking synchronization.

---

## 📅 Next Steps & Onboarding Timeline
1. **Approval:** Select your desired package tier (Tier 2 Recommended).
2. **Kickoff:** 45-minute strategy alignment call with ${managerName}.
3. **Execution:** Full rollout of new creative angles and audience matrices within 7 business days.
`;

  // 2. Client Proposal Email in Account Manager's Tone
  const managerEmail = `Subject: Strategic Growth Audit & Campaign Upgrade Proposal for ${clientName}

Dear ${clientName} Team,

I hope you are having a productive week! 

Over the past few days, our strategy team conducted a comprehensive performance diagnostic of your Google Ads account (${auditData.accountId}) to identify opportunities for our next growth phase.

While our foundational setup continues to deliver steady results, our audit highlighted several high-leverage growth areas that remain unexploited. Specifically, we identified significant potential in:
- Implementing systematic Mass Asset testing across distinct copy angles
- Bi-weekly keyword expansion and negative loop cleansing
- Establishing dynamic Target ROAS bidding based on actual deal-size hierarchies

To help you capture this additional market share, I have put together a tailored growth proposal. We have structured three flexible implementation tiers ranging from 1.500 €/month for steady acceleration to 2.500 €/month for full enterprise scaling.

I have attached our complete Strategic Growth Proposal (01_Client_Offer_Proposal.md) to this email for your review. 

Let me know when you have 15 minutes open later this week for a brief call to walk through the recommendations!

Best regards,

${managerName}
Senior Performance Marketing Specialist
`;

  // 3. Urgent Internal Manager Briefing Report
  const internalBriefing = `# URGENT INTERNAL MANAGER BRIEFING REPORT
**Target Account:** ${clientName} (${auditData.accountId})
**Priority Level:** HIGH UPGRADE OPPORTUNITY
**Action Required:** Present Offer Upgrade to Client Immediately

---

### 🚨 Why This Client Needs An Immediate Upgrade
The account manager responsible for ${clientName} must immediately introduce this offer upgrade. The current retainers cover standard maintenance, but the account has reached a plateau where advanced testing is urgently required to prevent ad fatigue and competitor erosion.

### 🎯 Core Upgrades To Emphasize In Client Call:
1. **Mass Creative Testing Gap:** The account currently runs static copy. Emphasize that testing 5+ positioning angles will immediately drop CPA by 20-30%.
2. **Conversion Value Weighting:** Explain to the client that uniform lead tracking is causing Google Smart Bidding to bid equally on low-intent downloads and high-intent sales calls.
3. **Upsell Positioning:** Pitch Tier 2 (2.500 €/mo) as the natural evolution of their account maturity. Highlight that the incremental fee will be offset by increased conversion efficiency.

---

### 📋 Pre-Call Preparation Checklist For Account Manager:
- [ ] Review historical CPA metrics over the last 90 days.
- [ ] Prepare 2 visual examples of competitor ad angles.
- [ ] Send the prepared client proposal email (02_Manager_Proposal_Email.txt).
- [ ] Schedule 20-minute alignment slot.
`;

  // 4. Presentation Slide Deck Blueprint
  const presentationDeck = `# PRESENTATION SLIDE DECK BLUEPRINT
**Title:** Scaling ${clientName}'s Google Ads Performance (Growth Roadmap)
**Presenter:** ${managerName}

---

## Slide 1: Executive Summary & Performance Audit
- Overview of current baseline stability.
- Diagnostic findings: 5 major growth levers identified.

## Slide 2: Unexploited Account Growth Levers
- Visual audit matrix highlighting creative gaps, audience layering, and bidding staticity.
- The financial opportunity cost of stagnated testing.

## Slide 3: Strategic Solution Framework
- Transitioning to systematic monthly angle testing.
- Implementing weighted conversion values for high-ticket lead prioritization.

## Slide 4: Growth Package Options & Investment Tiers
- **Tier 1 (1.500 €/mo):** Performance Growth Accelerator.
- **Tier 2 (2.500 €/mo):** Enterprise Performance Scaling *(Recommended)*.
- **Tier 3 (3.500 €/mo):** Market Dominance & Multi-Channel Sync.

## Slide 5: Implementation Timeline & Expected ROI
- Week 1: Onboarding & Asset Matrix creation.
- Week 2: Campaign launch & Bid scaling.
- Q&A / Next Steps.
`;

  return {
    clientName,
    accountId: auditData.accountId,
    proposedPackage: intensity === 'HIGH_SCALING' ? 'Tier 2: Enterprise Performance Scaling' : 'Tier 1: Performance Growth Accelerator',
    monthlyPrice: pricingTier,
    clientProposal,
    managerEmail,
    internalBriefing,
    presentationDeck
  };
}
