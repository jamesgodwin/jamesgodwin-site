const pagePresentation = {
  diagnostic: {
    pathLabel: 'IN ME',
    title: 'Executive State Diagnostic',
    lede: 'A private 45-minute introduction to the breath, posture and attention practices that have helped me personally.',
    facts: ['45 minutes', 'One-to-one practice', 'Private video session'],
    primaryAction: { label: 'Request a private session', href: '/contact?about=diagnostic' }
  },
  workshops: {
    pathLabel: 'IN A TEAM',
    title: 'Stillness Under Pressure',
    lede: 'Practice-led workshops for teams curious about how pressure affects breath, attention and communication.',
    facts: ['90 minutes', 'Half day', 'Full day', 'Integration series'],
    primaryAction: { label: 'Explore a workshop', href: '/contact?about=workshop' }
  },
  systems: {
    pathLabel: 'IN THE WORK',
    title: "Your business shouldn't live in your head.",
    lede: 'Small internal systems for service businesses where the owner is still the glue.',
    facts: ['R7,500 ZAR audit', 'One week', 'Fixed scope'],
    primaryAction: { label: 'Start a conversation', href: '/contact?about=workflow-system' }
  },
  about: {
    pathLabel: 'ONLY EXPLORING',
    title: 'Seeing what is getting in the way.',
    lede: 'I work across products, workflows and human attention, helping people notice what is stuck and make the next useful change.',
    primaryAction: { label: 'See how I work', href: '#how-i-work' }
  },
  uxui: {
    pathLabel: 'IN THE WORK',
    title: 'Get your product working cleanly.',
    lede: 'I help founders and small product teams close UX, accessibility and implementation gaps when fast-built or AI-assisted products stall.',
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
    pathLabel: 'IN A TEAM',
    title: 'Explore a workshop.',
    lede: 'This route continues to the shared contact page for workshop enquiries.',
    facts: ['Personal response', 'Within 24 hours'],
    primaryAction: { label: 'Continue to contact', href: '/contact?about=workshop' }
  },
  'thank-you': {
    pathLabel: 'RECEIVED',
    title: 'Thank you.',
    lede: 'Your message has arrived. James will respond personally within 24 hours.',
    primaryAction: { label: 'Return to the circles', href: '/' }
  }
};

export default pagePresentation;
