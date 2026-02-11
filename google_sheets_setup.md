# Google Sheets Contact Form Setup Guide

Follow these steps to link your portfolio contact form to a Google Sheet.

## 1. Create the Google Sheet
1.  Go to [Google Sheets](https://docs.google.com/spreadsheets).
2.  Create a new blank spreadsheet.
3.  Name it `Portfolio Contact Responses` (or anything you like).
4.  In the first row (headers), add the following columns exactly:
    *   **A1**: `Date`
    *   **B1**: `Name`
    *   **C1**: `Email`
    *   **D1**: `Message`

## 2. Create the App Script
1.  In your Google Sheet, click on **Extensions** > **Apps Script**.
2.  Rename the project to `Contact Form API`.
3.  Delete any code in `Code.gs` and paste the following script:

```javascript
const sheetName = 'Sheet1';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function(header) {
      if (header === 'Date') {
        return new Date();
      }
      // Matches the 'name' attribute in your HTML form input
      return e.parameter[header.toLowerCase()]; 
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

4.  Click the **Save** icon (floppy disk).

## 3. Run Initial Setup
1.  In the Apps Script editor, ensure the function dropdown (next to "Debug") handles `initialSetup`.
2.  Click **Run**.
3.  It will ask for permissions. Click **Review permissions** > Choose your account > **Advanced** > **Go to Contact Form API (unsafe)** > **Allow**.

## 4. Deploy as Web App
1.  Click **Deploy** (blue button top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  **Description**: `Contact Form v1`.
4.  **Execute as**: `Me`.
5.  **Who has access**: **Anyone** (This is important for the form to work).
6.  Click **Deploy**.
7.  Copy the **Web App URL** provided (it looks like `https://script.google.com/macros/s/.../exec`).

## 5. Update Your Code
Copy that URL and paste it into the `scriptURL` variable in your `src/components/Contact.jsx` file.
