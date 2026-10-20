const siteUrl = 'https://jamesgodwin.me';

const defaultMetadata = {
  title: 'James Godwin | Product Design and Full-Stack Development',
  description: 'I help founders finish fast-built and AI-assisted products, closing UX, accessibility and implementation gaps across design, front-end, back-end and deployment.',
  image: `${siteUrl}/og-case-shelf.png`,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'James Godwin. You have a build. Let’s get it over the line. Product design and full-stack development.',
  path: '/'
};

const pageMetadata = {
  about: {
    title: 'About James Godwin | Product Designer and Full-Stack Developer',
    description: 'Product designer and full-stack developer helping founders connect UX, accessibility and implementation. Based in Sedgefield, South Africa.',
    path: '/about'
  },
  diagnostic: {
    title: 'Executive State Diagnostic | James Godwin',
    description: 'A private 45-minute introduction to James Godwin\'s personal Tai Chi and Qigong practice, working with breath, posture, attention and the dantian.',
    path: '/executive-state-diagnostic'
  },
  systems: {
    title: 'Simple Workflow Systems for Service Businesses | James Godwin',
    description: 'Fixed-price workflow audits and internal apps for service businesses and field teams. Bring jobs, records and handovers into one place.',
    path: '/systems'
  },
  workshops: {
    title: 'Stillness Under Pressure Workshops | James Godwin',
    description: 'Practice-led workshops using breath, posture and attention to help teams notice how pressure affects communication and shared decisions.',
    path: '/workshops'
  },
  'workshop-enquiry': {
    noindex: true,
    title: 'Workshop Enquiry | Stillness Under Pressure',
    description: 'Enquire about a Stillness Under Pressure workshop shaped around the specific pressures your leadership team or organisation is facing.',
    path: '/workshop-enquiry'
  },
  apps: {
    title: 'Apps | James Godwin',
    description: 'Apps designed and built by James Godwin, from TapScribe for local recording and transcription to AI Ching, True Essence and GratefulFor.',
    path: '/apps'
  },
  books: {
    title: 'Books | James Godwin',
    description: 'Stories, poetry and visual editions exploring Taoist philosophy, the I Ching and everyday reflection.',
    path: '/books'
  },
  'little-panda': {
    title: 'Little Panda Tao Stories | James Godwin',
    description: 'Gentle children\'s picture books inspired by the Tao Te Ching, including Little Panda and the Empty Cup and Little Panda Learns the Tao.',
    image: `${siteUrl}/little-panda-and-empty-cup-book.webp`,
    imageWidth: 584,
    imageHeight: 724,
    imageAlt: 'Little Panda and the Empty Cup book cover',
    path: '/little-panda'
  },
  contact: {
    title: 'Contact James Godwin',
    description: 'Talk to James about a product, workflow, workshop or personal practice enquiry. Contact him directly by email or WhatsApp.',
    path: '/contact'
  },
  taoism: {
    title: 'Taoism & Tai Chi | James Godwin',
    description: 'James Godwin’s experience of Tai Chi and Taoist practice, the Cheng Man-Ching lineage, and working with breath, posture and attention.',
    path: '/taoism'
  },
  now: {
    title: 'Now | James Godwin',
    description: 'What James Godwin is working on now, from client apps and Plumbline with IIIMPACT to TapScribe, TypeScoop, writing and Tai Chi.',
    path: '/now'
  },
  paintings: {
    title: 'Paintings | James Godwin',
    description: 'A collection of digital paintings created in Procreate as a visual practice of stillness, attention, and creative expression.',
    path: '/paintings'
  },
  philosophy: {
    title: 'Philosophy | Products, Practice and Attention',
    description: 'Reflections on attention, useful technology and how Tai Chi shapes James Godwin\'s judgement across products, workflows and daily life.',
    path: '/philosophy'
  },
  uxui: {
    title: 'Product Clarity | James Godwin',
    description: 'Product design and full-stack development for stalled, AI-assisted products. Help with UX, accessibility, data, authentication and deployment.',
    path: '/uxui'
  },
  sanctuary: {
    title: 'True Essence Sanctuary | James Godwin',
    description: 'True Essence offers a quiet space for daily practice, reflection and exploring your own experience.',
    path: '/sanctuary'
  },
  legal: {
    title: 'Legal | James Godwin',
    description: 'Privacy, terms, refunds and image credits for James Godwin’s website and services arranged directly with him.',
    path: '/legal'
  },
  'thank-you': {
    noindex: true,
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

const sectionMetadata=Object.fromEntries(Object.entries({
 work:{title:'Work | Product Design and Development | James Godwin',description:'Stories of helping people turn stalled products and scattered workflows into working apps, across design, development and deployment.',path:'/work'},
 crewScores:{title:'Daily scores. Clear totals. | A client story | James Godwin',description:'Ben had started an app with AI and needed help connecting daily scores, useful totals and deployment. A story of getting the pieces working together.',path:'/work/crew-scores'},
 qualityControl:{title:'Proof of a job done. | A client story | James Godwin',description:'How Ben’s roofing team brought paper checks and site photos into editable procedure templates and a shared quality-control record.',path:'/work/quality-control'},
 tapscribe:{title:'Private conversations. Fewer steps. | TapScribe | James Godwin',description:'How a coach’s disconnected local recording and transcription workflow became TapScribe, a native Mac app.',path:'/work/tapscribe'},
 plumbline:{title:'One design system. Across the tools. | Plumbline with IIIMPACT | James Godwin',description:'Design systems rooted in client code, with AI Ching as a test case. Plumbline with IIIMPACT; design-tool projections and developer plugins in progress.',path:'/work/plumbline'},
 essays:{title:'Essays | James Godwin',description:'Essays on building software, working with AI, design systems and the things I keep coming back to.',path:'/essays'},
 notes:{title:'Notes | James Godwin',description:'Short pieces from product work, working with AI, accessibility and Tai Chi practice, adapted from my LinkedIn posts.',path:'/notes'}
}).map(([key,value])=>[key,{...defaultMetadata,...value,url:siteUrl+value.path}]));

export default {
  siteUrl,
  defaultMetadata: {
    ...defaultMetadata,
    url: siteUrl
  },
  pageMetadata,
  sectionMetadata,
  getMetadataForCommand
};
