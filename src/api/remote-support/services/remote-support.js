'use strict';

/**
 * remote-support service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::remote-support.remote-support');
