/**
 * Google Apps Script backend for Seifeldin & Basmala RSVP
 * الخطوات:
 * 1) افتح script.google.com وأنشئ مشروع جديد.
 * 2) انسخ هذا الكود.
 * 3) غيّر OWNER_EMAIL إلى إيميلك.
 * 4) Deploy > New deployment > Web app.
 * 5) Execute as: Me / Who has access: Anyone.
 * 6) انسخ Web App URL وضعه داخل index.html مكان RSVP_ENDPOINT.
 */

const OWNER_EMAIL = 'PUT_YOUR_EMAIL_HERE';
const SHEET_NAME = 'RSVP Responses';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Timestamp', 'Name', 'Phone', 'Attendance', 'Guests', 'Message', 'Event']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function doPost(e) {
  const p = e.parameter || {};
  const row = [
    new Date(),
    p.name || '',
    p.phone || '',
    p.attendance || '',
    p.guests || '',
    p.message || '',
    p.event || 'Seifeldin & Basmala Engagement'
  ];
  const sh = getSheet_();
  sh.appendRow(row);

  const subject = 'New RSVP — Seifeldin & Basmala';
  const body =
    'New confirmation received:\n\n' +
    'Name: ' + row[1] + '\n' +
    'Phone: ' + row[2] + '\n' +
    'Attendance: ' + row[3] + '\n' +
    'Guests: ' + row[4] + '\n' +
    'Message: ' + row[5] + '\n\n' +
    'Open the Google Sheet to see the updated list.';

  if (OWNER_EMAIL && OWNER_EMAIL.indexOf('@') > -1) {
    MailApp.sendEmail(OWNER_EMAIL, subject, body);
  }

  return HtmlService.createHtmlOutput('<html><body>OK</body></html>');
}

function doGet(e) {
  const sh = getSheet_();
  const values = sh.getDataRange().getValues();
  return ContentService
    .createTextOutput(JSON.stringify({responses: values.slice(1)}))
    .setMimeType(ContentService.MimeType.JSON);
}
