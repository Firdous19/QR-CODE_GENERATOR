import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        { message: "Type in your URL", name: "url" }
    ])
    .then((answers) => {
        const url = answers.url;
        const qr_svg = qr.image(url, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        const log = `${Date.now()} : URL - ${url}\n`;
        fs.appendFile('log.txt', log, (err) => {
            if (err) {
                console.log("Error occurred");
            }
            console.log("URL saved succesfully");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {

        }
    });