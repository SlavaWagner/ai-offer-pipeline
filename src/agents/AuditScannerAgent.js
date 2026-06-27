import chalk from 'chalk';
import { auditAccountGrowthLevers } from '../googleAdsAudit.js';

export default class AuditScannerAgent {
  constructor() {
    this.name = 'Audit Scanner Agent';
  }

  async run(accountId) {
    console.log(chalk.bold.blue(`\n[${this.name}] Auditing Google Ads account for unexploited growth levers...`));
    const auditData = await auditAccountGrowthLevers(accountId);

    console.log(chalk.green(`✓ Scanned ${auditData.totalLeversScanned} strategic areas across account ID: ${auditData.accountId}`));
    console.log(chalk.bold.yellow(`★ Found ${auditData.unexploitedCount} unexploited growth levers requiring immediate upgrade.`));
    
    auditData.levers.forEach(l => {
      console.log(chalk.cyan(`  - [${l.severity}] ${l.category}: ${l.description.slice(0, 75)}...`));
    });

    return auditData;
  }
}
