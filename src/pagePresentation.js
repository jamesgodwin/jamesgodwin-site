const pagePresentation = {
  diagnostic: {
    pathLabel: 'IN ME',
    title: 'Executive State Diagnostic',
    lede: 'A private 45-minute session for noticing how pressure changes breath, attention, and judgement.',
    facts: ['45 minutes', '$350 USD', 'Private video session'],
    primaryAction: { label: 'Request a private session', href: '/contact?about=diagnostic' }
  },
  workshops: {
    pathLabel: 'IN A TEAM',
    title: 'Stillness Under Pressure',
    lede: 'Practical regulation workshops for teams that need steadier judgement and communication when stakes are high.',
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
    title: 'Regulation before strategy.',
    lede: 'Thirty years of Tai Chi and breath training meet twenty years of digital product architecture.',
    primaryAction: { label: 'See how I work', href: '#how-i-work' }
  },
  contact: {
    pathLabel: 'START A CONVERSATION',
    title: 'Tell me where the pressure is showing up.',
    lede: 'If the work feels relevant, reach out directly. James responds personally.'
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
