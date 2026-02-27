import type { Schema, Attribute } from '@strapi/strapi';

export interface CompanyCompany extends Schema.Component {
  collectionName: 'components_company_companies';
  info: {
    displayName: 'Company';
  };
  attributes: {};
}

export interface FooterContentFooterContent extends Schema.Component {
  collectionName: 'components_footer_content_footer_contents';
  info: {
    displayName: 'footerContent';
  };
  attributes: {
    footerLogo: Attribute.Media;
    footerText: Attribute.Text;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    headerLogo: Attribute.Media;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'company.company': CompanyCompany;
      'footer-content.footer-content': FooterContentFooterContent;
      'header.header': HeaderHeader;
      'services.services': ServicesServices;
    }
  }
}
