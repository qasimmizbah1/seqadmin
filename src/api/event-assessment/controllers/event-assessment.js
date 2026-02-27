'use strict';

/**
 * event-assessment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event-assessment.event-assessment", {
  async create(ctx) {
    try {
      const { fullName, companyName, emailAddress, phoneNumber, itNeeds, employees, currentITSystems, preferredDate, preferredTime } = ctx.request.body;

      const emailData = {
        from: "webdev@seqnetworks.com",
        to:   "webdev@seqnetworks.com",
        cc:   "mprofessionalwfh@gmail.com",
        subject: `${fullName}'s Assessment submission is here:`,
        html: `<h2>You got a new submission:</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${emailAddress}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Phone number:</strong> ${phoneNumber}</p>
          <p><strong>Primary IT concern:</strong> ${itNeeds}</p>
          <p><strong>Number Of employees:</strong> ${employees}</p>
          <p><strong>Current IT systems:</strong> ${currentITSystems}</p>
          <p><strong>Preferred Assessment Date:</strong> ${preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>`,
      };

      // Send the email
      await strapi.plugins['email'].services.email.send(emailData);

      const savedMessage = await strapi.entityService.create('api::event-assessment.event-assessment', {
        data: {fullName, companyName, emailAddress, phoneNumber, itNeeds, employees, currentITSystems, preferredDate, preferredTime},
      });
      
      ctx.send(savedMessage);
    } catch (error) {
      strapi.log.error("Error in create controller:", error);
      return ctx.internalServerError("Error details:", error.message);
    }
  },
});
