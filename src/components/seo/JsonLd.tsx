import React from 'react';
import { COMPANY_INFO, LEADERSHIP_TEAM, ASSOCIATE_COMPANIES, PRODUCTS_CATALOG, FAQS } from '@/data/companyData';

export default function JsonLd() {
  const siteUrl = 'https://ekchakra.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: COMPANY_INFO.name,
    alternateName: ['EKCHAKRA Group', 'Ekchakra International', 'PAA Solar Group'],
    description: COMPANY_INFO.sanskritMeaning,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 62, Institutional Area',
      addressLocality: 'Noida',
      addressRegion: 'NCR / Uttar Pradesh',
      postalCode: '201309',
      addressCountry: 'IN',
    },
    award: COMPANY_INFO.isoStandard,
    founder: {
      '@type': 'Person',
      name: 'Board of Directors, Ekchakra Group',
    },
    employee: LEADERSHIP_TEAM.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        '@type': 'Organization',
        name: member.division,
      },
    })),
    subOrganization: ASSOCIATE_COMPANIES.map((sub) => ({
      '@type': 'Organization',
      name: sub.name,
      description: sub.description,
      knowsAbout: sub.services,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ekchakra Global Export Catalog',
      itemListElement: PRODUCTS_CATALOG.map((prod, idx) => ({
        '@type': 'OfferCatalog',
        name: prod.name,
        position: idx + 1,
        itemListElement: {
          '@type': 'Product',
          name: prod.name,
          description: prod.shortDesc,
          category: prod.category,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
          },
        },
      })),
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EKCHAKRA International Pvt LTD',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
