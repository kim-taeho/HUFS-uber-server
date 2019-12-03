import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API || "",
    domain: process.env.MAILGUN_DOMAIN || ""
});