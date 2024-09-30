import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    name: "website_url",
    message: "Type the website url",
  },
];

inquirer.prompt(questions).then((answers) => {
  const websiteName = answers.website_url;

  var qr_svg = qr.image(websiteName);
  qr_svg.pipe(fs.createWriteStream("qr-image.png"));

  fs.writeFile("qr-image-url.txt", websiteName, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
