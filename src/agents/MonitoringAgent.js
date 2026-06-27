import chalk from 'chalk';
import { getOffersHistory, updateOfferStatus } from '../storage.js';

export default class MonitoringAgent {
  constructor() {
    this.name = 'Offer Monitoring Agent';
  }

  async run(actionOrId, newStatus) {
    console.log(chalk.bold.blue(`\n[${this.name}] Accessing historical offer monitoring registry...`));
    
    if (actionOrId && newStatus) {
      const updated = updateOfferStatus(actionOrId, newStatus);
      if (updated) {
        console.log(chalk.green(`✓ Updated Offer ID ${updated.id} (${updated.clientName}) status to: ${updated.status}`));
      } else {
        console.log(chalk.red(`❌ Offer with ID or Client Name '${actionOrId}' not found.`));
      }
      return;
    }

    const history = getOffersHistory();
    
    console.log(chalk.bold.yellow('\n================ HISTORICAL OFFER MONITORING REGISTRY ================'));
    if (history.length === 0) {
      console.log(chalk.gray('No historical offers recorded yet. Run "ai-offer-pipeline run" to generate your first offer.'));
    } else {
      console.log(chalk.cyan(`Total Proposals Monitored: ${history.length}\n`));
      history.forEach((item, index) => {
        let statusColor = chalk.yellow;
        if (item.status === 'ACCEPTED') statusColor = chalk.green;
        if (item.status === 'REJECTED') statusColor = chalk.red;

        console.log(`${chalk.bold.white(`${index + 1}. [${item.id}] ${item.clientName}`)} (${item.createdAt})`);
        console.log(`   Proposed Package: ${item.proposedPackage} @ ${chalk.green(item.monthlyPrice)}`);
        console.log(`   Current Status:   ${statusColor(item.status)}`);
        console.log(chalk.gray(`   Record File:      ${item.detailFile}\n`));
      });
    }
    console.log(chalk.bold.yellow('======================================================================\n'));
  }
}
