import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORAGE_DIR = path.join(__dirname, '../storage');
const OFFERS_DIR = path.join(STORAGE_DIR, 'offers');
const HISTORY_FILE = path.join(STORAGE_DIR, 'offers_history.json');

export function initStorage() {
  if (!fs.existsSync(STORAGE_DIR)) fs.mkdirSync(STORAGE_DIR, { recursive: true });
  if (!fs.existsSync(OFFERS_DIR)) fs.mkdirSync(OFFERS_DIR, { recursive: true });
  if (!fs.existsSync(HISTORY_FILE)) {
    fs.writeFileSync(HISTORY_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

/**
 * Saves offer data locally and updates monitoring records.
 */
export function saveOfferRecord(offerBundle) {
  initStorage();
  const filename = `offer_${Date.now()}_${(offerBundle.clientName || 'client').replace(/\s+/g, '_')}.json`;
  const filePath = path.join(OFFERS_DIR, filename);
  
  fs.writeFileSync(filePath, JSON.stringify(offerBundle, null, 2), 'utf-8');

  // Update history index for monitoring
  const history = getOffersHistory();
  const record = {
    id: `OFFER-${Date.now().toString().slice(-6)}`,
    clientName: offerBundle.clientName || 'Unknown Client',
    accountId: offerBundle.accountId || 'N/A',
    proposedPackage: offerBundle.proposedPackage || 'Growth Package',
    monthlyPrice: offerBundle.monthlyPrice || '2.500 € / month',
    status: 'PROPOSED', // PROPOSED, ACCEPTED, REJECTED, UNDER_REVIEW
    createdAt: new Date().toISOString().split('T')[0],
    detailFile: filename
  };
  history.unshift(record);
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf-8');

  return { filePath, record };
}

/**
 * Reads historical offers.
 */
export function getOffersHistory() {
  initStorage();
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      const data = fs.readFileSync(HISTORY_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading offers_history.json:', err.message);
  }
  return [];
}

/**
 * Updates an offer's monitoring status.
 */
export function updateOfferStatus(offerId, newStatus) {
  const history = getOffersHistory();
  const item = history.find(h => h.id === offerId || h.clientName.toLowerCase() === offerId.toLowerCase());
  if (item) {
    item.status = newStatus.toUpperCase();
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf-8');
    return item;
  }
  return null;
}

/**
 * Exports offer files to the user's Desktop directory.
 */
export function exportOfferToDesktop(offerBundle, customFolderName) {
  const homeDir = os.homedir();
  const desktopDir = path.join(homeDir, 'Desktop');
  
  const targetFolderName = customFolderName || `Offer_Upgrade_${(offerBundle.clientName || 'Client').replace(/\s+/g, '_')}_${Date.now()}`;
  const exportDir = path.join(desktopDir, 'Offers', targetFolderName);

  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  // 1. Formal Client Offer Upgrade Proposal (PDF/Markdown blueprint)
  fs.writeFileSync(
    path.join(exportDir, '01_Client_Offer_Proposal.md'),
    offerBundle.clientProposal || '# Client Offer Proposal\n\nNo content generated.',
    'utf-8'
  );

  // 2. Client Communication Email
  fs.writeFileSync(
    path.join(exportDir, '02_Manager_Proposal_Email.txt'),
    offerBundle.managerEmail || 'Subject: Account Growth Proposal\n\nNo content generated.',
    'utf-8'
  );

  // 3. Urgent Internal Manager Briefing Report
  fs.writeFileSync(
    path.join(exportDir, '03_Internal_Manager_Briefing.md'),
    offerBundle.internalBriefing || '# Internal Manager Briefing\n\nNo content generated.',
    'utf-8'
  );

  // 4. Presentation Slide Blueprint
  fs.writeFileSync(
    path.join(exportDir, '04_Presentation_Slide_Deck.md'),
    offerBundle.presentationDeck || '# Presentation Deck Blueprint\n\nNo content generated.',
    'utf-8'
  );

  return exportDir;
}
