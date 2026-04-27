/**
 * SGNG & Associates (I) — Google Sheet Form Handler
 *
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets → create a new sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste this entire file, click Save
 * 4. Click Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Authorise when prompted
 * 6. Copy the Web App URL
 * 7. Paste it into src/config/formsConfig.js as APPS_SCRIPT_URL
 *
 * The script auto-creates two sheets: "Contact" and "Applications"
 */

const CONTACT_SHEET   = 'Contact';
const APPLY_SHEET     = 'Applications';

// ─── Header rows (written once if sheet is new) ───────────────────────────

const CONTACT_HEADERS = [
  'Timestamp', 'Full Name', 'Email', 'Phone', 'Service', 'Message'
];

const APPLY_HEADERS = [
  'Timestamp', 'Full Name', 'Email', 'Phone', 'Position',
  'Experience', 'Cover Letter', 'Resume Note'
];

// ─── Utility ──────────────────────────────────────────────────────────────

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
         .setFontWeight('bold')
         .setBackground('#8B4513')
         .setFontColor('#FFD700');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function buildResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── POST handler ─────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const body  = JSON.parse(e.postData.contents);
    const type  = body.formType || 'contact';
    const now   = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    if (type === 'apply') {
      const sheet = getOrCreateSheet(APPLY_SHEET, APPLY_HEADERS);
      sheet.appendRow([
        now,
        body.fullName    || '',
        body.email       || '',
        body.phone       || '',
        body.position    || '',
        body.experience  || '',
        body.coverLetter || '',
        'Resume submitted via form (not stored here)'
      ]);
    } else {
      const sheet = getOrCreateSheet(CONTACT_SHEET, CONTACT_HEADERS);
      sheet.appendRow([
        now,
        body.fullName || '',
        body.email    || '',
        body.phone    || '',
        body.service  || '',
        body.message  || ''
      ]);
    }

    return buildResponse({ success: true });

  } catch (err) {
    return buildResponse({ success: false, error: err.message });
  }
}

// ─── GET handler (health check) ───────────────────────────────────────────

function doGet() {
  return ContentService
    .createTextOutput('SGNG Form Handler is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}
