'use strict';

/**
 * managed-it-and-infrastructure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::managed-it-and-infrastructure.managed-it-and-infrastructure');
