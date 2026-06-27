#!/usr/bin/env node

import { Command } from 'commander';
import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { getConfig, saveConfig } from '../src/config.js';
import { initStorage } from '../src/storage.js';
import AuditScannerAgent from '../src/agents/AuditScannerAgent.js';
import OfferForgeAgent from '../src/agents/OfferForgeAgent.js';
import MonitoringAgent from '../src/agents/MonitoringAgent.js';
import ExportAgent from '../src/agents/ExportAgent.js';

initStorage();

function getAsciiLogo() {
  const greenCube = chalk.hex('#1dd900');
  const cyanCube = chalk.hex('#06b6d4');
  const blueCube = chalk.hex('#4064d7');
  
  return [
    '',
    greenCube("             +---+ ") + cyanCube("     +---+ ") + blueCube("     +---+ "),
    greenCube("            /   /| ") + cyanCube("    /   /| ") + blueCube("    /   /| "),
    greenCube("           +---+ | ") + cyanCube("  +---+ | ") + blueCube("  +---+ | "),
    greenCube("           |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    greenCube("           +---+   ") + cyanCube("  +---+   ") + blueCube("  +---+   "),
    blueCube("     +---+ ") + greenCube("     +---+ ") + blueCube("     +---+ "),
    blueCube("    /   /| ") + greenCube("    /   /| ") + blueCube("    /   /| "),
    blueCube("   +---+ | ") + greenCube("  +---+ | ") + blueCube("  +---+ | "),
    blueCube("   |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    blueCube("   +---+   ") + greenCube("  +---+   ") + blueCube("  +---+   "),
    cyanCube("     +---+ ") + blueCube("     +---+ ") + greenCube("     +---+ "),
    cyanCube("    /   /| ") + blueCube("    /   /| ") + greenCube("    /   /| "),
    cyanCube("   +---+ | ") + blueCube("  +---+ | ") + greenCube("  +---+ | "),
    cyanCube("   |   |/  ") + blueCube("  |   |/  ") + greenCube("  |   |/  "),
    cyanCube("   +---+   ") + blueCube("  +---+   ") + greenCube("  +---+   "),
    '',
    chalk.bold.green('=== ai-offer-pipeline - Autonomous AI Offer & Upgrade Forge ==='),
    chalk.cyan('Optimized for Google Ads Growth Lever Audits & Retainer Upgrades'),
    chalk.gray('Created with the help of the Google Antigravity CLI'),
    ''
  ].join('\n');
}

const program = new Command();

program
  .name('ai-offer-pipeline')
  .description('Autonomous AI Agent for Google Ads Growth Audits & Client Offer Generation')
  .version('1.0.0')
  .option('-m, --monitoring', 'Launch historical offer monitoring dashboard');

program.addHelpText('before', getAsciiLogo());

async function runInteractiveDashboard() {
  console.clear();
  console.log(getAsciiLogo());
  console.log(chalk.bold.yellow('================ DASHBOARD & AVAILABLE COMMANDS ================'));
  console.log(chalk.cyan(' 1. run / analyze      - ') + chalk.white('Launch full Offer Forge pipeline (Audit -> Proposal -> Export)'));
  console.log(chalk.cyan(' 2. monitoring         - ') + chalk.white('Monitor historical proposed offers & status tracking'));
  console.log(chalk.cyan(' 3. audit              - ') + chalk.white('Scan account for unexploited growth levers'));
  console.log(chalk.cyan(' 4. setup              - ') + chalk.white('Configure Google Ads API credentials & AI settings'));
  console.log(chalk.cyan(' 5. status             - ') + chalk.white('Display system configuration status'));
  console.log(chalk.cyan(' 6. help / dashboard    - ') + chalk.white('Open this interactive dashboard screen'));
  console.log(chalk.yellow('=================================================================\n'));

  const action = await select({
    message: 'Please select a command to execute:',
    choices: [
      { name: '🚀 Launch Full Offer Pipeline (run)', value: 'run' },
      { name: '📈 Offer Monitoring Dashboard (monitoring)', value: 'monitoring' },
      { name: '🔍 Audit Account Growth Levers (audit)', value: 'audit' },
      { name: '⚙️ Configure Google Ads API (setup)', value: 'setup' },
      { name: '📊 View System Status (status)', value: 'status' },
      { name: '❌ Exit', value: 'exit' }
    ]
  });

  if (action === 'run') {
    await executePipeline();
  } else if (action === 'monitoring') {
    const monitor = new MonitoringAgent();
    await monitor.run();
  } else if (action === 'audit') {
    const scanner = new AuditScannerAgent();
    await scanner.run();
  } else if (action === 'setup') {
    await executeSetup();
  } else if (action === 'status') {
    await showStatus();
  } else {
    console.log(chalk.gray('Goodbye!'));
  }
}

async function executeSetup() {
  console.log(chalk.bold.cyan('\n=== Google Ads API & Antigravity Setup ===\n'));
  const current = getConfig();

  const customerId = await input({ message: 'Google Ads Customer ID (e.g. 123-456-7890):', default: current.customerId });
  const developerToken = await input({ message: 'Google Ads Developer Token:', default: current.developerToken });
  const clientId = await input({ message: 'Google Ads Client ID:', default: current.clientId });
  const clientSecret = await input({ message: 'Google Ads Client Secret:', default: current.clientSecret });
  const refreshToken = await input({ message: 'Google Ads Refresh Token (or OAuth2):', default: current.refreshToken });
  const loginCustomerId = await input({ message: 'Manager Login Customer ID (Optional):', default: current.loginCustomerId || '' });

  const updated = saveConfig({
    customerId,
    developerToken,
    clientId,
    clientSecret,
    refreshToken,
    loginCustomerId
  });

  console.log(chalk.bold.green('\n✓ Configuration successfully saved to config.json!'));
}

async function executePipeline() {
  console.log(chalk.bold.magenta('\n=== LAUNCHING FULL AI OFFER FORGE PIPELINE ===\n'));
  const config = getConfig();
  const clientName = await input({ message: 'Enter Existing Client / Account Name:', default: 'Acme Growth Corp' });
  const managerName = await input({ message: 'Enter Account Manager / Consultant Name:', default: 'Senior Ads Manager' });

  const scanner = new AuditScannerAgent();
  const auditData = await scanner.run(config.customerId);

  const offerForge = new OfferForgeAgent();
  const offerBundle = await offerForge.run(auditData, clientName, managerName);

  const exporter = new ExportAgent();
  await exporter.run(offerBundle);

  console.log(chalk.bold.yellow('\n🎉 AI OFFER PIPELINE COMPLETED SUCCESSFULLY!'));
}

async function showStatus() {
  const config = getConfig();

  console.log(chalk.bold.cyan('\n=== SYSTEM STATUS & CONFIGURATION ===\n'));
  console.log(chalk.white(`Google Ads Customer ID: ${config.customerId || 'Not configured'}`));
  console.log(chalk.white(`Developer Token status: ${config.developerToken ? 'Configured ✓' : 'Missing ❌'}`));
  console.log(chalk.white(`AI Engine Mode: ${config.aiEngine || 'antigravity'}`));
  console.log(chalk.white(`Desktop Export Target: ${config.exportPath || 'Desktop/Offers'}`));
  console.log('');
}

program
  .command('dashboard')
  .alias('help-menu')
  .description('Displays the interactive CLI start window and command dashboard')
  .action(runInteractiveDashboard);

program
  .command('setup')
  .description('Configures Google Ads API credentials and Antigravity CLI options')
  .action(executeSetup);

program
  .command('run')
  .alias('analyze')
  .description('Launches the full autonomous offer generation pipeline')
  .action(executePipeline);

program
  .command('audit')
  .description('Scans Google Ads account for unexploited growth levers')
  .action(async () => {
    const scanner = new AuditScannerAgent();
    await scanner.run();
  });

program
  .command('monitoring')
  .description('Monitors historical proposed offers and client status registry')
  .option('-u, --update <clientOrId>', 'Client Name or Offer ID to update')
  .option('-s, --status <newStatus>', 'New status (ACCEPTED, REJECTED, PROPOSED, UNDER_REVIEW)')
  .action(async (options) => {
    const monitor = new MonitoringAgent();
    await monitor.run(options.update, options.status);
  });

program
  .command('status')
  .description('Displays current system configuration status')
  .action(showStatus);

program.action(async () => {
  const options = program.opts();
  if (options.monitoring) {
    const monitor = new MonitoringAgent();
    await monitor.run();
  } else {
    runInteractiveDashboard();
  }
});

program.parse(process.argv);
