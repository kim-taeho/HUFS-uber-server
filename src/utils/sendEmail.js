"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mailgun_js_1 = __importDefault(require("mailgun-js"));
var mailGunClient = new mailgun_js_1.default({
    apiKey: process.env.MAILGUN_API || "",
    domain: process.env.MAILGUN_DOMAIN || ""
});
var sendEmail = function (subject, html) {
    var emailData = {
        from: "xxxxoghxxx.thkim@gamil.com",
        to: "xxxxoghxxx.thkim@gmail.com",
        subject: subject,
        html: html
    };
    return mailGunClient.messages().send(emailData);
};
exports.sendVerificationEmail = function (fullName, key) {
    var emailSubject = "Hello " + fullName + ", please verify your email";
    var emailBody = "Verify your email by clicking <a href=\"http://nuber.com/" + key + "\"></a>";
    return sendEmail(emailSubject, emailBody);
};
//# sourceMappingURL=sendEmail.js.map