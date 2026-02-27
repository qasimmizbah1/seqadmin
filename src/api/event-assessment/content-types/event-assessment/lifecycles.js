module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      const emailData = {
        from: "webdev@seqnetworks.com",
        to: "webdev@seqnetworks.com",
        cc: "mprofessionalwfh@gmail.com",
        subject: `${result.fullName || 'Anonymous'}'s Assessment submission is here:`,
        html: `<h2>You got a new submission:</h2>
          <p><strong>Name:</strong> ${result.fullName || 'N/A'}</p>
          <p><strong>Email:</strong> ${result.emailAddress || 'N/A'}</p>
          <p><strong>Company:</strong> ${result.companyName || 'N/A'}</p>
          <p><strong>Phone number:</strong> ${result.phoneNumber || 'N/A'}</p>
          <p><strong>Primary IT concern:</strong> ${result.itNeeds || 'N/A'}</p>
          <p><strong>Number Of employees:</strong> ${result.employees || 'N/A'}</p>
          <p><strong>Current IT systems:</strong> ${result.currentITSystems || 'N/A'}</p>
          <p><strong>Preferred Assessment Date:</strong> ${result.preferredDate || 'N/A'}</p>
          <p><strong>Preferred Time:</strong> ${result.preferredTime || 'N/A'}</p>`,
      };
  
      try {
        // Send email
        await strapi.plugins['email'].services.email.send(emailData);
      } catch (emailError) {
        strapi.log.error("Error sending email in afterCreate:", emailError);
      }
    },
  };
  