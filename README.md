```markdown
# QR Code Generator

This Node.js project generates QR codes for URLs provided by users. When the generated QR code is scanned, it opens the specified URL. The project utilizes the 'qrcode' library to create QR code images.

## Features

- **Generate QR Codes:** Accepts a URL from the user and generates a QR code image for that URL.

## Requirements

- [Node.js](https://nodejs.org/) installed on your machine.
- npm package manager (comes with Node.js installation).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Firdous19/QR-CODE_GENERATOR.git
   ```

2. Navigate to the project directory:

   ```bash
   cd OR-CODE_GENERATOR
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Enter a URL in the terminal.

3. Hit enter a qr image will be generated in the qr_image.png file.

## Project Structure

- `index.js`: Main application file.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [qrcode](https://www.npmjs.com/package/qrcode): QR code generator for Node.js.
- [inquirer](https://www.npmjs.com/package/inquirer): inquirer for Node.js.
- [fs](Node core module): Handling File operations for Node.js.

