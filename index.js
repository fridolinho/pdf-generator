import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const generatePDF = async () => {
  try {
    // Launch Puppeteer browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Basic HTML content for the PDF
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 40px;
            }
            h1 {
              color: #2E86C1;
            }
            p {
              font-size: 18px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            table, th, td {
              border: 1px solid black;
            }
            th, td {
              padding: 10px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <h1>Sample Invoice</h1>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          <h2>Items</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>Product 2</td>
                <td>$20</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>$30</td>
              </tr>
            </tfoot>
          </table>
        </body>
      </html>
    `;

    // Set the content of the page
    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

    // Save the PDF to the specified path
    const pdfPath = path.join(process.cwd(), 'invoice.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '1in', right: '1in', bottom: '1in', left: '1in' },
    });

    console.log(`PDF generated successfully at: ${pdfPath}`);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error.message);
  }
};

generatePDF();
