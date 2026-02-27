module.exports = () => ({ i18n: {
  enabled: true,
  config: {
    // Localization plugin configurations (if any)
  },
},
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
      //  service: "gmail",
        host: "smtp.office365.com",
        port: 587,
        secure: false, // TLS needs secure to be false
        auth: {
          user: "webdev@seqnetworks.com",
          pass: "crhlfzwfvzxvyygr",
        },
      },
      settings: {
        defaultFrom: "webdev@seqnetworks.com",
        defaultReplyTo: "webdev@seqnetworks.com",
      },
    },
  },
});
//techbeepsinfo@gmail.com   jqjj rdjd qspg felz vrpsxvblwtdtqsrk no-reply@seqnetworks.com crhlfzwfvzxvyygr