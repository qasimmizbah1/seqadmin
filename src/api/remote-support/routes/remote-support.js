'use strict';

/**
 * remote-support router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::remote-support.remote-support');
