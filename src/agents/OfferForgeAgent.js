import chalk from 'chalk';
import { generateOfferBundle } from '../aiEngine.js';

export default class OfferForgeAgent {
  constructor() {
    this.name = 'Offer Forge Agent';
  }

  async run(auditData, clientName, managerName) {
    console.log(chalk.bold.blue(`\n[${this.name}] Synthesizing client proposal, manager email, internal briefing, and slide deck...`));
    const offerBundle = await generateOfferBundle(auditData, clientName, managerName);

    console.log(chalk.green(`✓ Client Upgrade Proposal forged (Pricing Tier: ${offerBundle.monthlyPrice}).`));
    console.log(chalk.green(`✓ Account Manager Proposal Email generated.`));
    console.log(chalk.green(`✓ Urgent Internal Manager Briefing Report compiled.`));
    console.log(chalk.green(`✓ Presentation Slide Deck Blueprint forged.`));

    return offerBundle;
  }
}
