# PDF Generator

This Node.js application generates a PDF invoice using Puppeteer. The app renders an HTML template with basic invoice details and outputs it as a downloadable PDF file.

## Features

- Generates a PDF from an HTML template
- Includes styled invoice content (items, prices, total)
- Utilizes Puppeteer for rendering and PDF generation

## Prerequisites

To run this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fridolinho/pdf-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pdf-generator
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To generate a sample invoice PDF, run the following command:

```bash
node index.js
```

The PDF will be generated and saved as `invoice.pdf` in the project root.

## Project Structure

- `index.js`: Main script to generate the PDF
- `package.json`: Contains project metadata and dependencies

## Dependencies

- `puppeteer`: A Node.js library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol, useful for rendering PDFs.

## Contributing

Feel free to submit issues or contribute to the repository. For bugs, open an issue [here](https://github.com/fridolinho/pdf-generator/issues).

## License

This project is licensed under the ISC License.

---

Created by [Niyonsaba Fridolin](https://github.com/fridolinho).