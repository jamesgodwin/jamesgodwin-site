const pagePresentation = {
  diagnostic: {
    pathLabel: 'PRACTICE · ONE-TO-ONE',
    title: 'Executive State Diagnostic',
    lede: 'A private 45-minute introduction to the breath, posture and attention practices that have helped me personally.',
    facts: ['45 minutes', 'One-to-one practice', 'Private video session'],
    primaryAction: { label: 'Request a private session', href: '/contact?about=diagnostic' }
  },
  workshops: {
    pathLabel: 'PRACTICE · WORKSHOPS',
    title: 'Stillness Under Pressure',
    lede: 'Practice-led workshops for teams curious about how pressure affects breath, attention and communication.',
    facts: ['90 minutes', 'Half day', 'Full day', 'Integration series'],
    primaryAction: { label: 'Explore a workshop', href: '/contact?about=workshop' }
  },
  systems: {
    pathLabel: 'WORK',
    title: "Your business shouldn't live in your head.",
    lede: 'Small internal systems that help service businesses keep track of jobs, people and progress.',
    facts: ['R7,500 ZAR audit', 'One week', 'Fixed scope'],
    primaryAction: { label: 'Talk about your workflow', href: '/contact?about=workflow-system' }
  },
  about: {
    pathLabel: 'ABOUT',
    title: 'Designing and building the missing pieces.',
    lede: 'I’m James, a product designer and full-stack developer based in Sedgefield, South Africa.',
    primaryAction: { label: 'See how I work', href: '#how-i-work' }
  },
  uxui: {
    pathLabel: 'WORK',
    title: 'Get your product ready for real use.',
    lede: 'I help founders and small teams resolve UX, accessibility and implementation gaps in fast-built or AI-assisted products.',
    primaryAction: { label: 'Talk about your product', href: '/contact?about=product-clarity' },
    secondaryAction: { label: 'See an example', href: '#work-example' }
  },
  contact: {
    pathLabel: 'START A CONVERSATION',
    title: 'Start a conversation.',
    lede: 'Tell me what is stuck, or what you would like to explore.',
    bodyClassName: 'route-page--contact'
  },
  'workshop-enquiry': {
    pathLabel: 'PRACTICE · WORKSHOPS',
    title: 'Explore a workshop.',
    lede: 'Tell me about your team and what you would like to explore together.',
    facts: ['Personal response', 'Within 24 hours'],
    primaryAction: { label: 'Continue to contact', href: '/contact?about=workshop' }
  },
  'thank-you': {
    pathLabel: 'RECEIVED',
    title: 'Thank you.',
    lede: 'Thank you for getting in touch. I will respond personally within 24 hours.',
    primaryAction: { label: 'Return home', href: '/' }
  }
};

export default pagePresentation;
