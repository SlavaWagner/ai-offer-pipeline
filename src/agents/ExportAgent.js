import chalk from 'chalk';
import { exportOfferToDesktop, saveOfferRecord } from '../storage.js';

export default class ExportAgent {
  constructor() {
    this.name = 'Export & Persistent Storage Agent';
  }

  async run(offerBundle) {
    console.log(chalk.bold.blue(`\n[${this.name}] Saving persistent offer record and deploying to Desktop...`));
    
    const { filePath, record } = saveOfferRecord(offerBundle);
    const desktopFolderPath = exportOfferToDesktop(offerBundle);

    console.log(chalk.green(`✓ Persistent record saved: ${filePath}`));
    console.log(chalk.green(`✓ Offer Monitoring Index updated (Offer ID: ${record.id})`));
    console.log(chalk.bold.green(`🚀 Offer Bundle successfully deployed to Desktop:`));
    console.log(chalk.underline.cyan(`   ${desktopFolderPath}`));

    return { filePath, desktopFolderPath, record };
  }
}
