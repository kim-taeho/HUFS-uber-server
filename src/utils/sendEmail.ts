import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API || "",
    domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (subject: string, html: string) => {
    const emailData = {
        from: "xxxxoghxxx.thkim@gamil.com",
        to: "xxxxoghxxx.thkim@gmail.com",
        subject,
        html
    }
    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello ${fullName}, please verify your email`;
    const emailBody = `Verify your email by clicking <a href="http://nuber.com/${key}"></a>`;
    return sendEmail(emailSubject, emailBody);
}