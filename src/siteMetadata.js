const siteUrl = 'https://jamesgodwin.me';

const defaultMetadata = {
  title: 'James Godwin | Regulation for Leaders Under Pressure',
  description: 'I help founders and leadership teams make clearer decisions under pressure by regulating state first. Executive diagnostics, workshops, product clarity, and Taoist practice.',
  image: `${siteUrl}/og.webp`,
  twitterImage: `${siteUrl}/twitter.webp`,
  path: '/'
};

const pageMetadata = {
  about: {
    title: 'About James Godwin | Regulation Before Strategy',
    description: 'Thirty years of Tai Chi and breath training in the Cheng Man-Ching lineage meet twenty years of product architecture to help leaders regulate before acting under pressure.',
    path: '/about'
  },
  diagnostic: {
    title: 'Executive State Diagnostic | Tai Chi Breathing for Leaders',
    description: 'A private 45-minute session for founders and senior leaders to track pressure through the breath, work with the dantian, and respond with steadier judgement.',
    path: '/executive-state-diagnostic'
  },
  systems: {
    title: 'Simple Workflow Systems for Service Businesses | James Godwin',
    description: 'Fixed-price workflow audits and small internal systems for service businesses, trades, and field teams. Get the business out of the owner\'s head.',
    path: '/systems'
  },
  workshops: {
    title: 'Stillness Under Pressure Workshops | James Godwin',
    description: 'Practical regulation workshops for leadership, product, design, and engineering teams who need steadier judgement and communication under load.',
    path: '/workshops'
  },
  'workshop-enquiry': {
    title: 'Workshop Enquiry | Stillness Under Pressure',
    description: 'Enquire about a Stillness Under Pressure workshop shaped around the specific pressures your leadership team or organisation is facing.',
    path: '/workshop-enquiry'
  },
  apps: {
    title: 'Apps | James Godwin',
    description: 'Digital tools for regulation, reflection, breath, gratitude, and clearer decision-making, including AI Ching, GratefulFor, Taoist Breath, and Harmonic Echo.',
    path: '/apps'
  },
  books: {
    title: 'Books | James Godwin',
    description: 'Books and visual editions exploring Taoist philosophy, regulation, the I Ching, daily reflection, and decision-making through practical and contemplative lenses.',
    path: '/books'
  },
  'little-panda': {
    title: 'Little Panda Tao Stories | James Godwin',
    description: 'Gentle children\'s picture books inspired by the Tao Te Ching, including Little Panda and the Empty Cup and Little Panda Learns the Tao.',
    image: `${siteUrl}/little-panda-and-empty-cup-book.webp`,
    path: '/little-panda'
  },
  contact: {
    title: 'Contact James Godwin',
    description: 'Contact James Godwin for executive diagnostics, Stillness Under Pressure workshops, product clarity engagements, Tai Chi sessions, or related enquiries.',
    path: '/contact'
  },
  taoism: {
    title: 'Taoism & Tai Chi | James Godwin',
    description: 'Three decades of Tai Chi and Taoist practice translated into practical regulation, steadiness under load, and clearer leadership under pressure.',
    path: '/taoism'
  },
  now: {
    title: 'Now | James Godwin',
    description: 'A current snapshot of what James Godwin is working on, reading, building, and exploring now.',
    path: '/now'
  },
  paintings: {
    title: 'Paintings | James Godwin',
    description: 'A collection of digital paintings created in Procreate as a visual practice of stillness, attention, and creative expression.',
    path: '/paintings'
  },
  philosophy: {
    title: 'Philosophy | The Art of Returning',
    description: 'A philosophy of regulation and wholeness: returning to steadier perception beneath pressure, shaped by Taoist practice and product design.',
    path: '/philosophy'
  },
  uxui: {
    title: 'Product Clarity Under Pressure | James Godwin',
    description: 'UX, interface, and product architecture work for founders and teams who want calmer, more coherent digital systems built from steadier decisions.',
    path: '/uxui'
  },
  sanctuary: {
    title: 'True Essence Sanctuary | James Godwin',
    description: 'A digital sanctuary for founders, leaders, and creators who want a daily structure for regulation, reflection, and returning to steadiness.',
    path: '/sanctuary'
  },
  legal: {
    title: 'Legal | James Godwin',
    description: 'Privacy policy, terms and conditions, refund policy, and disclaimer for the website, digital services, workshops, and True Essence Sanctuary.',
    path: '/legal'
  },
  'thank-you': {
    title: 'Thank You | James Godwin',
    description: 'Thank you for getting in touch. James Godwin will respond personally to your enquiry.',
    path: '/thank-you'
  }
};

const getMetadataForCommand = (commandName) => {
  const page = pageMetadata[commandName] || {};
  const path = page.path || defaultMetadata.path;

  return {
    ...defaultMetadata,
    ...page,
    path,
    url: `${siteUrl}${path === '/' ? '' : path}`
  };
};

module.exports = {
  siteUrl,
  defaultMetadata: {
    ...defaultMetadata,
    url: siteUrl
  },
  pageMetadata,
  getMetadataForCommand
};
