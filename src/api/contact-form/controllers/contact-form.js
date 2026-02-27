"use strict";

/**
 * contact-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact-form.contact-form", {
  async create(ctx) {
    try {
      const { name, email, phone, message, subject } = ctx.request.body;

      if (!name || !email || !message) {
        ctx.response.status = 400; // Bad Request
        ctx.send({ error: "Name, email, and message are required." });
        return;
      }

      const emailData = {
        from: "webdev@seqnetworks.com",
        to: "mprofessionalwfh@gmail.com",
        // to:   "info@seqnetworks.com",
        // cc:   "mprofessionalwfh@gmail.com",
        subject: subject || "No subject provided",
        html: `<h2>User Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${message}</p>`,
      };

      // Send the email
      await strapi.plugins["email"].services.email.send(emailData);

      // Save the message to Strapi database
      const savedMessage = await strapi.entityService.create(
        "api::contact-form.contact-form",
        {
          data: {
            name,
            email,
            phone,
            message,
            subject,
          },
        }
      );

      ctx.send(savedMessage);
    } catch (error) {
      strapi.log.error(error);
      return ctx.internalServerError(
        "An error occurred while processing the request."
      );
    }
  },

  //For testing----

  async testSendEmail(ctx) {
    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    try {
      // Test email sending logic
      await strapi.plugins["email"].services.email.send({
        to: "mprofessionalwfh@gmail.com", // Update this to your recipient
        from: "webdev@seqnetworks.com",
        subject: "No Reply Email",
        text: "This is a test email from Strapi",
      });
      if (!isEmailValid("webdev@seqnetworks.com")) {
        return ctx.badRequest("Invalid email format");
      }
      ctx.send({ message: "Test email sent successfully" });
    } catch (error) {
      // Log the error to see what's actually causing the failure
      strapi.log.error(error);

      // Send a more descriptive error response
      return ctx.internalServerError(
        "An error occurred while sending the test email.",
        {
          error: error.message, // Include the error message in the response
        }
      );
    }
  },
});
