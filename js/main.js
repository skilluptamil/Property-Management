/**
 * PROPVANTAGE - MAIN JAVASCRIPT
 * Handles Theme Toggling (Dark/Light), Direction (LTR/RTL),
 * Interactive Validations, Live Blog Filtering & Search,
 * Dynamic Service & Blog Content Rendering, Heading-Click Interactions,
 * Countdown Timer, Pricing Switcher, and UI Animations.
 */


/* ==========================================================================
   GLOBAL DATA STORE: SERVICES & BLOGS
   ========================================================================== */

const PROPVANTAGE_SERVICES = {
  'tenant-screening': {
    id: 'tenant-screening',
    title: 'Comprehensive Tenant Screening & Verification',
    shortTitle: 'Tenant Screening',
    badge: 'Quality Placement',
    badgeIcon: 'fa-solid fa-user-shield',
    lead: 'Protect your property and secure reliable rental cashflow with our rigorous 5-point tenant screening process. We eliminate risky applicants before keys are handed over.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional property manager conducting comprehensive tenant background screening',
    overviewTitle: 'Why Professional Screening is Vital',
    overviewDesc1: 'Placing the wrong tenant can cost thousands in lost rent, legal fees, and property damage. Our exhaustive screening system utilizes national databases, employer direct inquiries, and credit bureau verification to guarantee high-integrity occupants.',
    overviewDesc2: 'Every candidate is assessed objectively according to strict Fair Housing guidelines and customized landlord criteria (e.g. minimum 650 credit score, 3x monthly income ratio, and zero prior evictions).',
    stats: [
      { number: '99.4', suffix: '%', label: 'On-Time Rent Record', colorClass: 'text-primary-custom' },
      { number: '0.3', suffix: '%', label: 'Historical Eviction Rate', colorClass: 'text-gold' },
      { number: '24', suffix: ' hrs', label: 'Average Screening Turnaround', colorClass: 'text-success' },
      { number: '100', suffix: '%', label: 'Fair Housing Compliant', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-fingerprint',
        title: '1. Criminal & Identity Background',
        desc: 'Nationwide criminal record checks, terrorist watchlists, sex offender registries, and identity verification to ensure community safety.'
      },
      {
        icon: 'fa-solid fa-clock-rotate-left',
        title: '2. Rental History Audits',
        desc: 'Direct phone interviews with past 2 landlords to verify on-time payment habits, property condition upkeep, and neighbor relations.'
      },
      {
        icon: 'fa-solid fa-money-check-dollar',
        title: '3. Income & Employment Check',
        desc: 'Direct employer HR confirmation, recent paystub audits, bank statement verifications, and 3x rent-to-income ratio calculations.'
      },
      {
        icon: 'fa-solid fa-users-viewfinder',
        title: '4. Professional Reference Checks',
        desc: 'Validation of professional references and personal integrity checks to identify any potential character red flags.'
      },
      {
        icon: 'fa-solid fa-chart-line',
        title: '5. Risk & Credit Assessment',
        desc: 'Full credit report analysis including debt-to-income, public court judgments, collections, and bankruptcy history.'
      },
      {
        icon: 'fa-solid fa-shield-halved text-primary-custom',
        title: 'Eviction Protection Guarantee',
        desc: 'In the rare event a screened tenant requires eviction, PropVantage covers up to $5,000 in legal expenses and re-leasing fees.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Digital Application', desc: 'Applicant submits secure digital form with paystubs, government ID, and authorization release.' },
      { step: '2', title: 'Automated Checks', desc: 'Instant pull of credit scores, national criminal databases, and eviction filings.' },
      { step: '3', title: 'Manual Verification', desc: 'Our screening officers speak with current employers and previous landlords directly.' },
      { step: '4', title: 'Owner Summary Report', desc: 'You receive a clear, anonymized summary score with our professional recommendation.' }
    ],
    faqs: [
      {
        q: 'Who pays for the tenant screening fee?',
        a: 'The prospective tenant pays the standard screening application fee directly through our secure portal, costing the property owner $0.'
      },
      {
        q: 'What if a prospective tenant has bad credit but a high income?',
        a: 'We review the full credit history context (medical vs consumer debt) and may require a qualified co-signer or additional security deposit according to state regulations.'
      },
      {
        q: 'How long does the entire screening process take?',
        a: 'Most screenings are completed within 24 to 48 hours once the applicant submits all supporting documentation and employer contacts respond.'
      }
    ]
  },

  'rent-collection': {
    id: 'rent-collection',
    title: 'Automated Rent Collection & Guaranteed Direct Deposits',
    shortTitle: 'Rent Collection',
    badge: 'Cashflow Automation',
    badgeIcon: 'fa-solid fa-money-bill-transfer',
    lead: 'Eliminate late payments and manual rent chasing. Our automated payment engine deposits rental proceeds directly into your account on or before the 5th of each month.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Digital rent collection and automated accounting dashboard',
    overviewTitle: 'Why Automated Rent Collection Maximizes ROI',
    overviewDesc1: 'Manual rent collection leads to unpredictable cashflow, awkward tenant confrontations, and administrative headaches. PropVantage provides automated online payment options for tenants with recurring ACH, credit card, and mobile wallet payments.',
    overviewDesc2: 'We enforce lease payment policies with automated grace period reminders, automated late fee assessments, and next-day direct deposits directly into your chosen bank account.',
    stats: [
      { number: '99.8', suffix: '%', label: 'On-Time Rent Collection', colorClass: 'text-primary-custom' },
      { number: '48', suffix: ' hrs', label: 'Max Direct Payout Window', colorClass: 'text-success' },
      { number: '100', suffix: '%', label: 'Digital ACH & Card Support', colorClass: 'text-gold' },
      { number: '0', suffix: ' Hassle', label: 'Manual Landlord Chasing', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-credit-card',
        title: '1. Multi-Channel Payment Portal',
        desc: 'Tenants can set up automated recurring payments via ACH bank transfer, debit/credit cards, and digital wallet integrations.'
      },
      {
        icon: 'fa-solid fa-calendar-check',
        title: '2. Guaranteed Rent Payout Dates',
        desc: 'Receive your rental proceeds directly into your bank account on or before the 5th of every month, complete with itemized receipts.'
      },
      {
        icon: 'fa-solid fa-bell',
        title: '3. Automated Payment Reminders',
        desc: 'Automated SMS and email reminders sent 3 days before due dates ensure tenants never forget rent payments.'
      },
      {
        icon: 'fa-solid fa-gavel',
        title: '4. Strict Late Fee Enforcement',
        desc: 'Our system automatically calculates and applies state-compliant late fees the moment the grace period expires.'
      },
      {
        icon: 'fa-solid fa-vault',
        title: '5. Security Deposit Escrow',
        desc: 'Compliant statutory handling and escrow account holding for tenant security deposits in accordance with state laws.'
      },
      {
        icon: 'fa-solid fa-shield-halved text-primary-custom',
        title: 'Rent Payment Guarantee',
        desc: 'Upgrade to our rent guarantee package to ensure your rent is paid even if the tenant experiences an unexpected delay.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Tenant Onboarding', desc: 'Tenant links their bank account or payment card in the secure PropVantage Resident Portal.' },
      { step: '2', title: 'Auto-Debit Schedule', desc: 'Monthly rent is scheduled and automatically processed on the 1st of each month.' },
      { step: '3', title: 'Instant Verification', desc: 'Real-time payment verification updates both the owner portal and tenant accounting ledgers.' },
      { step: '4', title: 'Direct Deposit', desc: 'Net rental proceeds are deposited directly into the landlord checking account within 24-48 hours.' }
    ],
    faqs: [
      {
        q: 'What happens if a tenant payment fails or bounces?',
        a: 'Our system immediately notifies the tenant and landlord, applies standard returned-item fees, and triggers automated re-attempt workflows.'
      },
      {
        q: 'Can tenants split rent between roommates?',
        a: 'Yes, our resident portal allows multiple roommates to pay their exact split of the monthly rent independently.'
      },
      {
        q: 'How do landlords view monthly payment histories?',
        a: 'Landlords have 24/7 access to the PropVantage Owner Dashboard to download monthly cashflow statements and ledgers.'
      }
    ]
  },

  'property-maintenance': {
    id: 'property-maintenance',
    title: '24/7 Rapid Emergency Maintenance & Property Repairs',
    shortTitle: 'Property Maintenance',
    badge: 'Asset Preservation',
    badgeIcon: 'fa-solid fa-screwdriver-wrench',
    lead: 'Preserve property value and keep tenants happy with round-the-clock emergency maintenance dispatch, vetted local contractors, and zero-markup pricing.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Licensed maintenance technician performing property HVAC and electrical repairs',
    overviewTitle: 'Why Proactive Maintenance Saves Money',
    overviewDesc1: 'Unattended maintenance is the #1 reason tenants break leases and property assets depreciate. PropVantage operates a dedicated 24/7 maintenance dispatch hub that resolves repair requests quickly, cost-effectively, and with zero hassle to the owner.',
    overviewDesc2: 'We have pre-negotiated volume discounts with licensed, bonded, and insured plumbers, electricians, HVAC specialists, and general contractors—passing 100% of the savings directly to you with zero markup fees.',
    stats: [
      { number: '2', suffix: ' hrs', label: 'Average Emergency Dispatch', colorClass: 'text-primary-custom' },
      { number: '100', suffix: '%', label: 'Licensed & Insured Vendors', colorClass: 'text-gold' },
      { number: '0', suffix: '%', label: 'Markup on Vendor Invoices', colorClass: 'text-success' },
      { number: '24', suffix: '/7', label: 'Round-the-Clock Coverage', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-headset',
        title: '1. 24/7 Emergency Dispatch',
        desc: 'Live operators handle burst pipes, heating outages, electrical faults, and lockouts at any hour of day or night.'
      },
      {
        icon: 'fa-solid fa-user-check',
        title: '2. Pre-Vetted Contractor Network',
        desc: 'Every contractor in our network is thoroughly vetted for state licenses, general liability insurance, and quality track records.'
      },
      {
        icon: 'fa-solid fa-sliders',
        title: '3. Pre-Approved Spending Thresholds',
        desc: 'You set the repair spending limit (e.g. $300). Anything below is resolved instantly; anything above requires your approval.'
      },
      {
        icon: 'fa-solid fa-camera',
        title: '4. Photo & Video Proof of Work',
        desc: 'All work orders require timestamped before-and-after photos and itemized parts receipts uploaded to your portal.'
      },
      {
        icon: 'fa-solid fa-fan',
        title: '5. Preventative Seasonal Audits',
        desc: 'Bi-annual HVAC servicing, gutter cleaning, roof inspections, and plumbing winterization prevent catastrophic failures.'
      },
      {
        icon: 'fa-solid fa-tag text-primary-custom',
        title: 'Zero Contractor Markups',
        desc: 'Unlike competitors who tack on 15-20% management fees onto contractor invoices, you pay the exact vendor bill.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Work Order Submission', desc: 'Tenant submits ticket with photo/video descriptions via mobile resident app.' },
      { step: '2', title: 'Triage & Approval', desc: 'Our coordinator assesses urgency and verifies whether expense falls within pre-approved limits.' },
      { step: '3', title: 'Contractor Dispatch', desc: 'Preferred licensed vendor is assigned with an agreed appointment slot within hours.' },
      { step: '4', title: 'Inspection & Sign-Off', desc: 'Tenant confirms completion, photo logs are verified, and invoice is archived in owner ledger.' }
    ],
    faqs: [
      {
        q: 'Do you markup contractor repair invoices?',
        a: 'No. PropVantage maintains a strict zero-markup policy on all contractor labor and replacement materials.'
      },
      {
        q: 'What is the default landlord pre-approval spending limit?',
        a: 'Our standard limit is $250 - $400 per repair, but you can customize this threshold to any amount in your owner portal.'
      },
      {
        q: 'Can I use my own preferred handyman or contractor?',
        a: 'Yes! You can designate your preferred licensed contractors, and our dispatch desk will contact them first for any service calls.'
      }
    ]
  },

  'lease-management': {
    id: 'lease-management',
    title: 'Digital Lease Management & Legal Agreement Drafting',
    shortTitle: 'Lease Management',
    badge: 'Legal Protection',
    badgeIcon: 'fa-solid fa-file-contract',
    lead: 'Custom attorney-vetted lease agreements, digital e-signatures, security deposit administration, and automated renewal tracking tailored to your state’s laws.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Digital real estate lease signing and agreement handover',
    overviewTitle: 'Why Ironclad Lease Management Protects Landlords',
    overviewDesc1: 'A generic internet lease template exposes property owners to massive legal liabilities and loopholes. PropVantage uses state-specific lease agreements drafted and reviewed by experienced real estate attorneys.',
    overviewDesc2: 'From digital e-signatures and security deposit escrow compliance to structured renewal negotiations 90 days prior to lease end, we protect your interests at every step.',
    stats: [
      { number: '100', suffix: '%', label: 'State-Specific Legal Compliance', colorClass: 'text-primary-custom' },
      { number: '94', suffix: '%', label: 'On-Time Renewal Rate', colorClass: 'text-success' },
      { number: '100', suffix: '%', label: 'Digital E-Signatures', colorClass: 'text-gold' },
      { number: '0', suffix: ' Paper', label: '100% Cloud Document Storage', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-signature',
        title: '1. Digital E-Signatures',
        desc: 'Legally binding digital signing via encrypted online portal allows tenants to execute leases quickly from any device.'
      },
      {
        icon: 'fa-solid fa-scale-balanced',
        title: '2. State-Specific Custom Clauses',
        desc: 'Includes essential protections for pet policies, subletting restrictions, smoking prohibitions, and maintenance liabilities.'
      },
      {
        icon: 'fa-solid fa-repeat',
        title: '3. 90-Day Renewal Predictor',
        desc: 'Proactive renewal outreach 90 and 60 days before expiration locks in high-value tenants and avoids vacant intervals.'
      },
      {
        icon: 'fa-solid fa-chart-line',
        title: '4. Dynamic Market Rent Adjustments',
        desc: 'We analyze localized rent comparables to ensure renewed leases reflect top market pricing without triggering turnover.'
      },
      {
        icon: 'fa-solid fa-folder-open',
        title: '5. Cloud Lease Document Archive',
        desc: 'Every lease addendum, inspection sheet, and tenant notice is permanently stored in your encrypted owner portal.'
      },
      {
        icon: 'fa-solid fa-shield-check text-primary-custom',
        title: 'Statutory Disclosures Included',
        desc: 'Automatic inclusion of mandated lead-based paint disclosures, bedbug history, mold guides, and local occupancy regulations.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Custom Lease Generation', desc: 'Our team generates state-compliant lease with landlord-specific addendums and terms.' },
      { step: '2', title: 'Digital E-Signature', desc: 'Tenant reviews and electronically signs with identity verification timestamps.' },
      { step: '3', title: 'Escrow Confirmation', desc: 'Security deposit and first month rent are verified before keys are released.' },
      { step: '4', title: 'Automated Renewal Tracking', desc: 'System automatically initiates the renewal review 90 days before lease expiration.' }
    ],
    faqs: [
      {
        q: 'Are digital lease signatures legally enforceable in court?',
        a: 'Yes, our e-signatures fully comply with the ESIGN Act and UETA regulations and are 100% legally binding.'
      },
      {
        q: 'What addendums are included in your standard leases?',
        a: 'We include pet policies, crime-free housing addendums, mold prevention guidelines, maintenance responsibility checklists, and HOA rule acknowledgements.'
      },
      {
        q: 'How are lease renewal prices determined?',
        a: 'We generate an automated comparative market rent report and recommend the optimal renewal rate to balance rent growth with zero vacancy risk.'
      }
    ]
  },

  'legal-compliance': {
    id: 'legal-compliance',
    title: 'Real Estate Legal Compliance & Eviction Protection',
    shortTitle: 'Legal Compliance',
    badge: 'Risk Mitigation',
    badgeIcon: 'fa-solid fa-scale-balanced',
    lead: 'Safeguard your real estate investments with proactive Fair Housing compliance, local rental licensing, habitability standard audits, and comprehensive eviction legal coverage.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Real estate legal compliance documents and court representation balance',
    overviewTitle: 'Why Legal Compliance is Essential for Property Owners',
    overviewDesc1: 'Rental regulations, Fair Housing mandates, and tenant protection laws change constantly. A single unintentional compliance error can result in severe municipal penalties, legal suits, or delayed evictions.',
    overviewDesc2: 'PropVantage maintains strict adherence to federal, state, and city regulations. We handle local rental licensing, mandatory disclosures, habitability inspections, and full legal representation if tenant eviction becomes necessary.',
    stats: [
      { number: '100', suffix: '%', label: 'Fair Housing Compliant', colorClass: 'text-primary-custom' },
      { number: '5000', prefix: '$', suffix: '', label: 'Eviction Legal Cost Coverage', colorClass: 'text-gold' },
      { number: '0', suffix: ' Violations', label: 'Regulatory Penalty Record', colorClass: 'text-success' },
      { number: '100', suffix: '%', label: 'Municipal Code Audits', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-balance-scale',
        title: '1. Fair Housing Act Adherence',
        desc: 'Standardized marketing, applicant screening, and leasing practices eliminate any risk of discrimination claims.'
      },
      {
        icon: 'fa-solid fa-file-shield',
        title: '2. Mandatory Environmental Disclosures',
        desc: 'Strict compliance with EPA lead-based paint disclosures, radon, mold, and municipal habitability certificates.'
      },
      {
        icon: 'fa-solid fa-landmark',
        title: '3. City Rental Licensing & Registration',
        desc: 'We manage municipal rental registrations, safety certificates of occupancy, and local housing authority filings.'
      },
      {
        icon: 'fa-solid fa-handshake-angle',
        title: '4. Tenant Dispute Mediation',
        desc: 'Experienced property managers mediate disputes early, avoiding costly court hearings and preserving lease stability.'
      },
      {
        icon: 'fa-solid fa-file-invoice',
        title: '5. Formal Notice Servicing',
        desc: 'Compliant delivery of 3-day, 14-day, and 30-day pay-or-quit notices according to strict statutory timing rules.'
      },
      {
        icon: 'fa-solid fa-gavel text-primary-custom',
        title: 'Full Eviction Legal Protection',
        desc: 'If a tenant must be removed, our legal team manages all court filings, sheriff scheduling, and covers up to $5,000 in expenses.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Property Legal Audit', desc: 'We inspect the property to verify code compliance, smoke/CO detector placement, and municipal permits.' },
      { step: '2', title: 'Standardized Leasing', desc: 'All tenant interactions follow strict non-discriminatory guidelines and documented scoring rubrics.' },
      { step: '3', title: 'Early Dispute Intervention', desc: 'Any lease infractions trigger immediate written warnings and formal cure notices.' },
      { step: '4', title: 'Legal Action & Court Filing', desc: 'If necessary, our retained real estate attorneys file eviction paperwork and secure possession smoothly.' }
    ],
    faqs: [
      {
        q: 'What is included in the $5,000 Eviction Protection Guarantee?',
        a: 'The guarantee covers attorney fees, court filing costs, process server charges, and sheriff lockout fees for screened tenants placed by PropVantage.'
      },
      {
        q: 'How do you ensure Fair Housing compliance across listings?',
        a: 'All our property advertising copy and showing scripts are audited against federal, state, and local Fair Housing protected classes.'
      },
      {
        q: 'What happens if city rental codes change during a lease?',
        a: 'Our legal team constantly monitors regulatory shifts and proactively schedules any required property updates on your behalf.'
      }
    ]
  },

  'property-marketing': {
    id: 'property-marketing',
    title: 'Syndicated Property Marketing & High-Exposure Leasing',
    shortTitle: 'Property Marketing',
    badge: 'Maximum Exposure',
    badgeIcon: 'fa-solid fa-bullhorn',
    lead: 'Fill vacancies in record time with professional HDR photography, 3D immersive virtual walkthroughs, targeted social ad campaigns, and syndication across 40+ rental portals.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-end real estate photography and syndicated digital rental marketing',
    overviewTitle: 'Why Professional Marketing Slashes Vacancy Downtime',
    overviewDesc1: 'Every day your rental sits vacant is lost money that can never be recovered. PropVantage utilizes an aggressive multi-channel marketing engine that showcases your property in its best light to thousands of active, qualified renters.',
    overviewDesc2: 'Our listings feature wide-angle architectural photography, virtual walkthroughs, detailed floor plans, and optimized descriptions syndicated across Zillow, Realtor.com, Trulia, Apartments.com, and paid social campaigns.',
    stats: [
      { number: '14', suffix: ' Days', label: 'Average Days to Placement', colorClass: 'text-primary-custom' },
      { number: '40', suffix: '+ Portals', label: 'Syndicated Rental Sites', colorClass: 'text-gold' },
      { number: '3.5', suffix: 'x', label: 'More Qualified Inquiries', colorClass: 'text-success' },
      { number: '100', suffix: '%', label: 'High-Definition Media', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-camera-retro',
        title: '1. Professional HDR Photography',
        desc: 'High-resolution wide-angle imagery showcasing natural lighting, spacious layouts, and premium property finishes.'
      },
      {
        icon: 'fa-solid fa-vr-cardboard',
        title: '2. 3D Virtual Tours & Floor Plans',
        desc: 'Interactive 360-degree virtual walkthroughs attract out-of-state relocations and high-income remote professionals.'
      },
      {
        icon: 'fa-solid fa-network-wired',
        title: '3. 40+ Channel Portal Syndication',
        desc: 'Instant broadcast across Zillow, Trulia, Realtor.com, HotPads, Apartments.com, and local MLS rental networks.'
      },
      {
        icon: 'fa-solid fa-share-nodes',
        title: '4. Targeted Social Media Ads',
        desc: 'Hyper-local Meta and Google search ads targeted to renters actively searching within your specific neighborhood.'
      },
      {
        icon: 'fa-solid fa-calendar-days',
        title: '5. Self-Guided & Escorted Showings',
        desc: 'Flexible 7-day showing availability with licensed leasing agents and secure digital smart-lock self tours.'
      },
      {
        icon: 'fa-solid fa-chart-pie text-primary-custom',
        title: 'Real-Time Lead Tracking',
        desc: 'Weekly performance reports showing views, inquiries, scheduled tours, and applicant pipeline status.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Media Production', desc: 'Professional photographer captures HDR images, video walkthrough, and precise floor plans.' },
      { step: '2', title: 'Omnichannel Launch', desc: 'Listing is launched and syndicated across 40+ premier rental websites simultaneously.' },
      { step: '3', title: 'Showing Management', desc: 'Automated booking engine schedules verified applicants for private and self-guided tours.' },
      { step: '4', title: 'Applicant Conversion', desc: 'Interested prospects submit applications directly through our mobile-optimized portal.' }
    ],
    faqs: [
      {
        q: 'Which rental websites will my property be listed on?',
        a: 'Your listing is syndicated to Zillow, Realtor.com, Trulia, Apartments.com, Rent.com, HotPads, Dwellsy, and over 30+ regional portals.'
      },
      {
        q: 'How do you determine the optimal asking rent price?',
        a: 'We generate an algorithmic comparative market report factoring in recent local rentals, square footage, amenities, and current seasonal demand.'
      },
      {
        q: 'How are property showings handled safely?',
        a: 'All showing candidates must submit photo ID verification prior to scheduling an escorted tour with a licensed PropVantage agent.'
      }
    ]
  },

  'financial-reporting': {
    id: 'financial-reporting',
    title: 'Transparent Financial Reporting & Tax Accounting Packages',
    shortTitle: 'Financial Reporting',
    badge: 'Owner Visibility',
    badgeIcon: 'fa-solid fa-chart-pie',
    lead: 'Gain total clarity over your rental cashflow with 24/7 online owner portal access, itemized monthly income statements, digital receipt archives, and tax-ready annual 1099 packages.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Detailed landlord financial reports, cashflow balance sheets, and tax packages',
    overviewTitle: 'Why Real-Time Accounting Makes Landlording Stress-Free',
    overviewDesc1: 'Managing receipts in shoe boxes and scrambling during tax season is a thing of the past. PropVantage provides institutional-grade financial accounting and transparent reporting for individual property owners and large portfolio managers.',
    overviewDesc2: 'Every dollar of rent collected, maintenance expenditure, and utility reimbursement is tracked in real time and accessible through your private owner portal 24/7/365.',
    stats: [
      { number: '24', suffix: '/7', label: 'Real-Time Portal Access', colorClass: 'text-primary-custom' },
      { number: '100', suffix: '%', label: 'Digital Invoices & Receipts', colorClass: 'text-gold' },
      { number: '1', suffix: '-Click', label: 'Tax Package Export', colorClass: 'text-success' },
      { number: '0', suffix: ' Errors', label: 'Audited Financial Tracking', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-file-lines',
        title: '1. Monthly Cashflow Statements',
        desc: 'Clean, itemized income and expense ledgers delivered on the 10th of every month detailing all portfolio transactions.'
      },
      {
        icon: 'fa-solid fa-receipt',
        title: '2. Complete Digital Receipt Archive',
        desc: 'Every contractor bill, maintenance invoice, and municipal fee receipt is permanently scanned and linked to ledger line items.'
      },
      {
        icon: 'fa-solid fa-calculator',
        title: '3. Year-End 1099 Tax Packages',
        desc: 'Comprehensive Schedule-E tax summaries and 1099 statements delivered in January for seamless CPA tax filing.'
      },
      {
        icon: 'fa-solid fa-coins',
        title: '4. Capital Reserve Tracking',
        desc: 'Real-time monitoring of maintenance reserve balances with automated notifications when reserve limits require top-up.'
      },
      {
        icon: 'fa-solid fa-file-export',
        title: '5. QuickBooks & Excel Data Export',
        desc: 'Export your complete financial records into CSV, Excel, and QuickBooks formats with one click.'
      },
      {
        icon: 'fa-solid fa-chart-line text-primary-custom',
        title: 'Multi-Unit Portfolio Analytics',
        desc: 'Compare gross rental yields, net operating income (NOI), and expense ratios across all your properties in one dashboard.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Automated Tracking', desc: 'Rent payments and approved vendor invoices are automatically logged in your dedicated ledger.' },
      { step: '2', title: 'Monthly Reconciliation', desc: 'Our certified accounting controllers audit and reconcile all property accounts by the 8th of each month.' },
      { step: '3', title: 'Statement Delivery', desc: 'Monthly cashflow reports and net payouts are dispatched to your portal and email.' },
      { step: '4', title: 'Annual Tax Package', desc: 'Complete 1099 and Schedule-E audit documents are generated every January for your accountant.' }
    ],
    faqs: [
      {
        q: 'How do I access my monthly financial reports?',
        a: 'You can log into the PropVantage Owner Portal from your desktop, tablet, or smartphone at any time to view and download statements.'
      },
      {
        q: 'Can my CPA or accountant access my portal directly?',
        a: 'Yes, you can create a read-only accountant profile with access strictly to tax documents and financial ledgers.'
      },
      {
        q: 'Are your financial reports compatible with QuickBooks?',
        a: 'Yes, all ledger transactions can be downloaded as standard CSV, Excel, or IIF files for direct import into QuickBooks.'
      }
    ]
  },

  'tenant-support': {
    id: 'tenant-support',
    title: '24/7 Dedicated Tenant Support & Resident Relations',
    shortTitle: 'Tenant Support',
    badge: 'Resident Retention',
    badgeIcon: 'fa-solid fa-headset',
    lead: 'High-retention tenant support desk providing 24/7 bilingual communication, streamlined online resident portals, swift dispute handling, and prompt maintenance response.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dedicated bilingual tenant support and resident relations desk',
    overviewTitle: 'Why Exceptional Tenant Relations Boost Owner Profits',
    overviewDesc1: 'Happy tenants pay on time, take pride in their home, and renew leases year after year. PropVantage acts as a professional, courteous buffer between landlords and tenants, ensuring inquiries are resolved with speed and professionalism.',
    overviewDesc2: 'Our resident desk provides 24/7 bilingual assistance via phone, email, and live mobile portal messaging, keeping tenant satisfaction high and turnover costs low.',
    stats: [
      { number: '98', suffix: '%', label: 'Tenant Satisfaction Score', colorClass: 'text-primary-custom' },
      { number: '15', suffix: ' min', label: 'Average First Response Time', colorClass: 'text-success' },
      { number: '88', suffix: '%', label: 'Multi-Year Lease Retention', colorClass: 'text-gold' },
      { number: '24', suffix: '/7', label: 'Bilingual Support Desk', colorClass: 'text-primary-custom' }
    ],
    pillars: [
      {
        icon: 'fa-solid fa-language',
        title: '1. 24/7 Bilingual Helpdesk',
        desc: 'English and Spanish support available 24/7 to answer tenant inquiries, rent payment questions, and maintenance emergencies.'
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        title: '2. Resident Mobile Portal',
        desc: 'Intuitive app where tenants can view leases, pay rent, submit repair tickets, and receive building announcements.'
      },
      {
        icon: 'fa-solid fa-handshake',
        title: '3. Move-In & Orientation Protocol',
        desc: 'Comprehensive move-in walkthroughs, welcome guides, utility setup assistance, and clear property rules briefing.'
      },
      {
        icon: 'fa-solid fa-comments',
        title: '4. Rapid Dispute Resolution',
        desc: 'Diplomatic mediation of neighbor noise complaints, parking disputes, and HOA compliance matters before escalation.'
      },
      {
        icon: 'fa-solid fa-heart-circle-check',
        title: '5. Proactive Resident Check-Ins',
        desc: 'Scheduled check-ins at 30 days post move-in and mid-lease to ensure everything is running smoothly and build loyalty.'
      },
      {
        icon: 'fa-solid fa-gift text-primary-custom',
        title: 'On-Time Rent Reward Perks',
        desc: 'Tenants who maintain perfect on-time payment records receive reward credits and credit score reporting benefits.',
        highlight: true
      }
    ],
    process: [
      { step: '1', title: 'Seamless Onboarding', desc: 'Tenant receives login credentials, welcome handbook, and emergency protocol instructions.' },
      { step: '2', title: 'Multi-Channel Support', desc: 'Inquiries submitted via portal, phone, or email are triaged and assigned within 15 minutes.' },
      { step: '3', title: 'Prompt Action & Resolution', desc: 'Dedicated property coordinator resolves the issue and logs communication in the owner portal.' },
      { step: '4', title: 'Quarterly Feedback Survey', desc: 'Ongoing feedback metrics allow us to maintain 98%+ resident satisfaction ratings.' }
    ],
    faqs: [
      {
        q: 'How do tenants reach support outside of business hours?',
        a: 'Our emergency phone line and mobile portal chat are staffed 24/7/365 by trained property coordinators.'
      },
      {
        q: 'Does positive rent payment get reported to credit bureaus?',
        a: 'Yes, we offer complimentary on-time rent reporting to major credit bureaus, motivating tenants to prioritize their rent.'
      },
      {
        q: 'How does high tenant satisfaction benefit landlords financially?',
        a: 'Satisfied tenants renew leases, which saves owners $2,500 to $4,500 in turnover repaint, cleaning, and vacancy costs per unit.'
      }
    ]
  }
};

const PROPVANTAGE_BLOGS = {
  'increase-rental-income': {
    id: 'increase-rental-income',
    title: '10 Ways to Increase Your Rental Property Income in 2026',
    category: 'Rental Tips',
    categoryBadgeClass: 'badge-primary',
    author: 'Marcus Vance',
    authorRole: 'Senior Real Estate Analyst',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    date: 'October 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Modern high-end rental property interior featuring premium luxury upgrades',
    lead: 'Maximizing rental income goes far beyond simply hiking monthly rent prices once a year. Modern landlords and property investors must adopt strategic, value-enhancing upgrades that attract higher-paying, reliable tenants while reducing costly turnover vacancies.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Add In-Unit Laundry Facilities</h2>
      <p>Data across national rental markets consistently proves that in-unit washer and dryer combinations are the #1 most requested feature by renters. Adding a stackable unit or dedicated laundry closet can easily support a $75 to $150 rent premium per month while increasing lease renewal rates.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Permit Pets with Monthly Pet Rent</h2>
      <p>Over 68% of renters own a pet. By allowing well-screened pets with a non-refundable pet deposit ($300) and an ongoing monthly pet fee ($35 - $60 per pet), you unlock a massive applicant pool and add pure recurring profit with minimal risk when paired with good tenant screening.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "Landlords who treat rental management as an active hospitality service regularly experience 15% higher returns than those relying strictly on base market rent."
        </p>
        <small class="fw-bold text-primary-custom">— Marcus Vance, Senior Real Estate Analyst</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Modernize Kitchen Fixtures and Hardware</h2>
      <p>You don't need a complete $25,000 remodel. Upgrading cabinet pulls to matte black or brushed gold, replacing old laminate with quartz counters, and installing an under-mount sink creates an immediate luxury perception that commands higher rents.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">4. Offer Dedicated Storage or Assigned Parking</h2>
      <p>If your property has an unused garage bay, shed, or basement space, offer dedicated secure storage lockers for $50 to $100 per month. In urban settings, reserved off-street parking can fetch $150+ monthly.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">5. Install Smart Home Keyless Entry and Thermostats</h2>
      <p>Smart locks (keyless pin codes) and smart thermostats appeal heavily to tech-savvy professionals. They also streamline tenant move-ins and eliminate lock-change locksmith fees between tenancies.</p>

      <div class="p-4 my-4 rounded-3 border border-light-custom" style="background-color: var(--section-bg);">
        <h4 class="fw-bold mb-3"><i class="fa-solid fa-list-check text-primary-custom me-2"></i> Quick ROI Checklist</h4>
        <ul class="list-unstyled mb-0">
          <li class="py-1"><i class="fa-solid fa-check text-success me-2"></i> In-unit washer/dryer install (~$1,200 cost -> $1,200 annual return)</li>
          <li class="py-1"><i class="fa-solid fa-check text-success me-2"></i> Fresh neutral paint and upgraded LED recessed lighting</li>
          <li class="py-1"><i class="fa-solid fa-check text-success me-2"></i> High-speed WiFi package included for $40/mo markup</li>
          <li class="py-1"><i class="fa-solid fa-check text-success me-2"></i> Professional move-in deep clean and welcome package</li>
        </ul>
      </div>
    `,
    tags: ['#RentalIncome', '#LandlordTips', '#RealEstateROI'],
    related: ['find-reliable-tenants', 'reduce-maintenance-costs']
  },

  'find-reliable-tenants': {
    id: 'find-reliable-tenants',
    title: 'How to Find and Retain Reliable Long-Term Tenants',
    category: 'Tenant Management',
    categoryBadgeClass: 'badge-primary',
    author: 'Sarah Jenkins',
    authorRole: 'Head of Tenant Placement',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    date: 'October 08, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Satisfied reliable tenant signing lease and receiving apartment keys',
    lead: 'Finding reliable, respectful tenants who pay on time and care for your property is the cornerstone of profitable property investment. Discover the multi-step verification process and relationship strategies that foster multi-year occupancies.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Establish Clear, Objective Screening Criteria</h2>
      <p>Before reviewing applications, define standardized criteria: minimum 650 credit score, verified monthly income of at least 3x the rent, stable employment history of 12+ months, and zero prior eviction filings. Applying these consistently ensures Fair Housing compliance.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Conduct Meaningful Landlord Reference Calls</h2>
      <p>Always speak with the previous TWO landlords, not just the current one. A current landlord might give a glowing reference simply to encourage a troublesome tenant to move out, whereas past landlords provide unfiltered truth about payment habits and property care.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "A vacant property costs 1 month of rent. A bad tenant costs 6 months of rent, legal fees, and repair bills. Never rush the vetting process."
        </p>
        <small class="fw-bold text-primary-custom">— Sarah Jenkins, Placement Coordinator</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Verify Employment Directly with HR Departments</h2>
      <p>Paystubs can be fabricated using online software. Always verify employment by contacting the applicant’s HR department or requesting official bank deposit statements spanning the last 90 days.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">4. Build Long-Term Tenant Loyalty</h2>
      <p>Once great tenants are placed, retain them by answering repair requests promptly, respecting their privacy, sending a welcome gift at move-in, and keeping annual rent adjustments fair and reasonable.</p>
    `,
    tags: ['#TenantScreening', '#LandlordGuide', '#TenantRetention'],
    related: ['increase-rental-income', 'lease-renewals-guide']
  },

  'lease-renewals-guide': {
    id: 'lease-renewals-guide',
    title: "A Landlord's Guide to Lease Renewals and Rent Adjustments",
    category: 'Legal & Compliance',
    categoryBadgeClass: 'badge-gold',
    author: 'Arthur Vance',
    authorRole: 'CEO & Managing Partner',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
    date: 'October 01, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Landlord and tenant discussing lease renewal extension in modern meeting room',
    lead: 'Lease renewals are the single most effective way to eliminate costly vacancy turnover and maintain continuous cashflow. Learn the exact timeline, negotiation tactics, and market rate data needed to retain great tenants while adjusting rents fairly.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. The 90-Day Renewal Window</h2>
      <p>Initiate lease renewal discussions 90 days prior to expiration. This gives both you and the tenant ample time to review terms, conduct a rental price analysis, and prevents last-minute scrambles if a vacancy occurs.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Back Rent Increases with Hyperlocal Comps</h2>
      <p>When proposing a rent adjustment (e.g. 3-5%), provide a brief summary of neighborhood comparables. Demonstrating that your rate remains competitive with surrounding units makes the increase easy for tenants to understand and accept.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "It costs an average of $3,500 to turn over an apartment. Offering a modest renewal incentive to a quality tenant is almost always more profitable than testing the open market."
        </p>
        <small class="fw-bold text-primary-custom">— Arthur Vance, Managing Partner</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Offer Value-Add Renewal Perks</h2>
      <p>Sweeten the renewal by pairing a rent increase with a low-cost property perk—such as professional carpet cleaning, fresh accent wall paint, or installing a smart video doorbell.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">4. Execute Legally Compliant Extension Addendums</h2>
      <p>Always use formal, attorney-reviewed lease renewal addendums that specify the new end date, monthly rent amount, and re-affirm all original lease conditions.</p>
    `,
    tags: ['#LeaseRenewals', '#RealEstateLaw', '#Cashflow'],
    related: ['increase-rental-income', 'rental-expenses-tax-deductions']
  },

  'reduce-maintenance-costs': {
    id: 'reduce-maintenance-costs',
    title: 'How to Reduce Property Maintenance Costs Without Sacrificing Quality',
    category: 'Maintenance',
    categoryBadgeClass: 'badge-primary',
    author: 'Robert Sterling',
    authorRole: 'Senior Maintenance Director',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    date: 'September 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Preventative HVAC and plumbing maintenance inspection',
    lead: 'Maintenance is often a landlord’s largest unpredictable expense. Discover proactive maintenance protocols, pre-vetted contractor partnerships, and seasonal audits that cut operating expenses by up to 30%.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Shift from Reactive to Preventative Maintenance</h2>
      <p>Replacing an air filter costs $15. Replacing a seized HVAC compressor costs $4,500. Regularly servicing heating, ventilation, and plumbing systems prevents small issues from ballooning into catastrophic emergency expenses.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Install Water Leak Sensors and Auto-Shutoffs</h2>
      <p>Water damage represents over 40% of all real estate insurance claims. Installing smart moisture sensors under sinks, water heaters, and washing machines alerts you instantly to leaks before rot or drywall damage occurs.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "A $50 preventative plumbing checkup twice a year will save an average of $3,200 in emergency plumbing calls over a 5-year ownership period."
        </p>
        <small class="fw-bold text-primary-custom">— Robert Sterling, Maintenance Specialist</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Standardize Fixtures Across Your Portfolio</h2>
      <p>Use identical paint colors, light bulbs, faucets, and door hardware across all your rental properties. This allows you to buy in bulk at wholesale contractor discounts and makes repairs instant.</p>
    `,
    tags: ['#MaintenanceTips', '#PropertyCare', '#CostReduction'],
    related: ['seasonal-maintenance-checklist', 'increase-rental-income']
  },

  'rental-expenses-tax-deductions': {
    id: 'rental-expenses-tax-deductions',
    title: 'Understanding Rental Property Expenses: What Can You Deduct?',
    category: 'Investment',
    categoryBadgeClass: 'badge-gold',
    author: 'Emily Watson, CPA',
    authorRole: 'Chief Financial Controller',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
    date: 'September 21, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Calculating landlord rental property tax deductions and financial statements',
    lead: 'Navigating IRS rental property tax deductions is essential for maximizing your net real estate yield. Learn the differences between repairs vs capital improvements, depreciation schedules, and tax-deductible property management fees.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Deducting Property Management & Professional Fees</h2>
      <p>100% of property management fees, leasing commissions, legal costs, CPA fees, and tenant background check software costs are fully deductible as operating expenses against rental income.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Repairs vs. Capital Improvements (CapEx)</h2>
      <p>Repairs (fixing a leaking pipe, patching drywall) can be deducted in full during the tax year they occur. Capital improvements (replacing the entire roof, installing new HVAC) must be depreciated over their useful asset lifespan.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "Accurate record-keeping and itemized digital receipts are the difference between paying thousands in excess taxes and maximizing your legal net cashflow."
        </p>
        <small class="fw-bold text-primary-custom">— Emily Watson, CPA</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Residential Building Depreciation (27.5 Years)</h2>
      <p>The IRS allows landlords to deduct the cost basis of the residential rental building (excluding land value) over a 27.5-year depreciation schedule, providing substantial paper write-offs against positive rental income.</p>
    `,
    tags: ['#TaxDeductions', '#RealEstateAccounting', '#CPAAdvice'],
    related: ['increase-rental-income', 'lease-renewals-guide']
  },

  'technology-in-property-management': {
    id: 'technology-in-property-management',
    title: 'How Technology and AI Are Changing Property Management in 2026',
    category: 'Investment',
    categoryBadgeClass: 'badge-primary',
    author: 'Julian Morales',
    authorRole: 'Senior Portfolio Technologist',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
    date: 'September 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Smart home property technology, digital access controls, and IoT automation',
    lead: 'From AI-powered applicant verification to IoT leak detectors and automated ACH payouts, technology is revolutionizing how residential and commercial properties are operated.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Smart Access & Self-Guided Showings</h2>
      <p>Smart keyless electronic deadbolts allow prospective verified tenants to view properties at their convenience via temporary access codes, accelerating tenant placement by 40%.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Predictive Maintenance and IoT Monitoring</h2>
      <p>Connected sensors track HVAC temperatures, humidity, and water flow in real time. Anomalies trigger automated alerts before catastrophic flooding or heating breakdowns occur.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "PropTech isn't a luxury—it is the modern standard for reducing operating overhead and delivering top-tier resident experiences."
        </p>
        <small class="fw-bold text-primary-custom">— Julian Morales, PropTech Director</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Algorithmic Rent Pricing</h2>
      <p>Dynamic pricing algorithms analyze real-time market inventory, seasonality, and comparable leases to price units for maximum yield without prolonged vacancies.</p>
    `,
    tags: ['#PropTech', '#SmartBuildings', '#Automation'],
    related: ['reduce-maintenance-costs', 'increase-rental-income']
  },

  'when-to-increase-rent': {
    id: 'when-to-increase-rent',
    title: 'When and How Much Should You Increase Your Rental Price?',
    category: 'Rental Tips',
    categoryBadgeClass: 'badge-primary',
    author: 'Arthur Vance',
    authorRole: 'CEO & Managing Partner',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
    date: 'September 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Real estate rental market analytics chart on modern laptop screen',
    lead: 'Increasing rent is a delicate balance between keeping up with inflation and property expenses while avoiding sudden vacancy. Learn the data points and timing rules for setting competitive, fair rent increases.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Calculate Operating Expense Increases</h2>
      <p>Factor in increases in local property taxes, insurance premiums, HOA dues, and contractor labor rates over the past 12 months before deciding on your target percentage.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Comply with Statutory Notice Periods</h2>
      <p>Most jurisdictions require a minimum 30 to 60-day formal written notice prior to lease expiration before a rate increase can take effect. Check local rent stabilization guidelines.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "Consistent, modest annual increases of 3-4% are readily accepted by good tenants, whereas waiting 3 years and hitting them with a 15% jump often leads to move-outs."
        </p>
        <small class="fw-bold text-primary-custom">— Arthur Vance, Managing Partner</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Professional, Transparent Communication</h2>
      <p>Draft a courteous notice that highlights recent property improvements and confirms that the new rate remains at or below current market comparables.</p>
    `,
    tags: ['#RentPricing', '#LandlordStrategy', '#PropertyYield'],
    related: ['lease-renewals-guide', 'increase-rental-income']
  },

  'seasonal-maintenance-checklist': {
    id: 'seasonal-maintenance-checklist',
    title: 'Essential Seasonal Property Maintenance Checklist for Landlords',
    category: 'Maintenance',
    categoryBadgeClass: 'badge-gold',
    author: 'Robert Sterling',
    authorRole: 'Senior Maintenance Director',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    date: 'September 02, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Exterior seasonal home inspection and preventative roof maintenance',
    lead: 'Seasonal weather changes can wreak havoc on roofing, pipes, foundations, and heating systems if neglected. Follow our comprehensive quarterly maintenance checklist to protect your assets year-round.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Spring & Summer Protocols</h2>
      <p>Test all AC units before summer heat waves, inspect roof shingles and flashings for winter storm damage, clear downspouts, and inspect irrigation sprinkler valves.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Fall & Winter Preparation</h2>
      <p>Service heating furnaces, replace HVAC filters, insulate exterior hose bibs and exposed crawlspace pipes, test smoke/CO alarms, and inspect window weatherstripping.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "An hour of seasonal exterior inspection prevents thousands of dollars in emergency frozen pipe bursts and roof leak repairs."
        </p>
        <small class="fw-bold text-primary-custom">— Robert Sterling, Maintenance Director</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Tenant Winter Safety Reminders</h2>
      <p>Send friendly reminders to tenants regarding keeping thermostats set to at least 65°F during freezing spells and leaving cabinet doors open during severe cold snaps.</p>
    `,
    tags: ['#Checklist', '#PropertyMaintenance', '#Winterization'],
    related: ['reduce-maintenance-costs', 'find-reliable-tenants']
  },

  'tenant-satisfaction-retention': {
    id: 'tenant-satisfaction-retention',
    title: 'How to Improve Tenant Satisfaction and Boost Lease Retention',
    category: 'Tenant Management',
    categoryBadgeClass: 'badge-primary',
    author: 'Sophia Lin',
    authorRole: 'Head of Property Operations',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
    date: 'August 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Property management team collaborating with happy residents',
    lead: 'Satisfied tenants stay longer, pay promptly, and take better care of rental properties. Discover proven resident relations practices that turn renters into long-term community members.',
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3">1. Speed of Maintenance Response</h2>
      <p>Responding to repair requests within hours—even if just to confirm an appointment time—builds immense trust and proves that you value the tenant’s comfort.</p>

      <h2 class="h3 fw-bold mt-4 mb-3">2. Modern Digital Conveniences</h2>
      <p>Give residents modern tools: digital rent payments, automatic payment receipts, mobile maintenance ticket tracking, and self-service lease access.</p>

      <div class="p-4 my-4 rounded-3 border-start border-4 border-primary" style="background-color: var(--light-blue);">
        <p class="fs-5 fst-italic text-dark-custom mb-2">
          "When tenants feel heard and respected, they treat your property like their own home."
        </p>
        <small class="fw-bold text-primary-custom">— Sophia Lin, Head of Operations</small>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3">3. Respect for Tenant Privacy</h2>
      <p>Always provide at least 24 to 48 hours notice prior to any routine property visits, and keep scheduled inspections brief, respectful, and well-coordinated.</p>
    `,
    tags: ['#TenantSatisfaction', '#ResidentRelations', '#Retention'],
    related: ['find-reliable-tenants', 'lease-renewals-guide']
  }
};

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (LIGHT / DARK)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('propvantage_theme') || 'light';

  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('propvantage_theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);

  const icons = document.querySelectorAll('.theme-toggle-btn i');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      icon.setAttribute('title', 'Switch to Light Mode');
    } else {
      icon.className = 'fa-solid fa-moon';
      icon.setAttribute('title', 'Switch to Dark Mode');
    }
  });
}

/* --------------------------------------------------------------------------
   2. DIRECTION SWITCHER (LTR / RTL)
   -------------------------------------------------------------------------- */
function initDirection() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const savedDir = localStorage.getItem('propvantage_dir') || 'ltr';

  applyDirection(savedDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      applyDirection(newDir);
      localStorage.setItem('propvantage_dir', newDir);
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const rtlBadges = document.querySelectorAll('.rtl-toggle-btn .rtl-label');
  rtlBadges.forEach(badge => {
    badge.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

/* --------------------------------------------------------------------------
   3. NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   4. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   5. ANIMATED STAT COUNTERS
   -------------------------------------------------------------------------- */
function initCounters(container = document) {
  const counters = container.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observerOptions = {
    threshold: 0.2
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-target'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const isDecimal = target % 1 !== 0;
        const duration = 1600;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = prefix + (isDecimal ? target.toFixed(1) : Math.floor(target)) + suffix;
            clearInterval(timer);
          } else {
            counter.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
          }
        }, stepTime);

        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(c => counterObserver.observe(c));
}

/* --------------------------------------------------------------------------
   6. BLOG FILTERING & SEARCH
   -------------------------------------------------------------------------- */
function initBlogFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-grid-item');
  const searchInput = document.getElementById('blogSearchInput');
  const emptyState = document.getElementById('blogEmptyState');

  if (!blogCards.length) return;

  let currentCategory = 'all';
  let currentSearch = '';

  const filterArticles = () => {
    let visibleCount = 0;

    blogCards.forEach(card => {
      const category = card.getAttribute('data-category')?.toLowerCase() || '';
      const title = card.querySelector('.blog-title')?.textContent?.toLowerCase() || '';
      const excerpt = card.querySelector('.blog-excerpt')?.textContent?.toLowerCase() || '';

      const matchesCat = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = !currentSearch || title.includes(currentSearch) || excerpt.includes(currentSearch);

      if (matchesCat && matchesSearch) {
        card.style.display = 'block';
        card.classList.add('fade-in-up');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary-custom'));
      filterBtns.forEach(b => b.classList.add('btn-outline-custom'));
      this.classList.add('active', 'btn-primary-custom');
      this.classList.remove('btn-outline-custom');

      currentCategory = this.getAttribute('data-filter')?.toLowerCase() || 'all';
      filterArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearch = this.value.trim().toLowerCase();
      filterArticles();
    });
  }
}

/* --------------------------------------------------------------------------
   7. CONTACT FORM VALIDATION
   -------------------------------------------------------------------------- */
function initContactFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const phoneInput = document.getElementById('contactPhone');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const formFeedback = document.getElementById('contactFormFeedback');

  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s+\-()]{7,20}$/;

  const validateField = (input, isValid, errorMsg) => {
    const errorElem = input.nextElementSibling;
    if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      if (errorElem && errorElem.classList.contains('invalid-feedback')) {
        errorElem.textContent = '';
      }
      return true;
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      if (errorElem && errorElem.classList.contains('invalid-feedback')) {
        errorElem.textContent = errorMsg;
      }
      return false;
    }
  };

  nameInput?.addEventListener('input', () => {
    validateField(nameInput, nameRegex.test(nameInput.value.trim()), 'Please enter a valid name (letters & spaces only, min 3 chars).');
  });

  emailInput?.addEventListener('input', () => {
    validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
  });

  phoneInput?.addEventListener('input', () => {
    validateField(phoneInput, phoneRegex.test(phoneInput.value.trim()), 'Please enter a valid phone number (min 7 digits).');
  });

  messageInput?.addEventListener('input', () => {
    validateField(messageInput, messageInput.value.trim().length >= 10, 'Message must be at least 10 characters long.');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameRegex.test(nameInput?.value.trim() || ''), 'Please enter a valid name (letters and spaces only).');
    const isEmailValid = validateField(emailInput, emailRegex.test(emailInput?.value.trim() || ''), 'Please provide a valid email.');
    const isPhoneValid = validateField(phoneInput, phoneRegex.test(phoneInput?.value.trim() || ''), 'Please enter a valid phone number.');
    const isSubjectValid = validateField(subjectInput, subjectInput?.value.trim() !== '', 'Please select a subject.');
    const isMessageValid = validateField(messageInput, (messageInput?.value.trim().length || 0) >= 10, 'Message must be at least 10 characters.');

    if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
      if (formFeedback) {
        formFeedback.innerHTML = `
          <div class="alert alert-success d-flex align-items-center gap-2 fade-in-up mt-3" role="alert">
            <i class="fa-solid fa-circle-check fs-5"></i>
            <div>
              <strong>Thank you, ${nameInput.value.trim()}!</strong> Your inquiry has been received. One of our property managers will contact you within 24 hours.
            </div>
          </div>
        `;
      }
      form.reset();
      form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
    } else {
      if (formFeedback) {
        formFeedback.innerHTML = `
          <div class="alert alert-danger d-flex align-items-center gap-2 fade-in-up mt-3" role="alert">
            <i class="fa-solid fa-circle-exclamation fs-5"></i>
            <div>Please correct the errors in the form fields before submitting.</div>
          </div>
        `;
      }
    }
  });
}

/* --------------------------------------------------------------------------
   8. AUTH VALIDATION & PASSWORD TOGGLES
   -------------------------------------------------------------------------- */
function initPasswordToggles() {
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const icon = this.querySelector('i');

      if (!input) return;

      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-regular fa-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'fa-regular fa-eye';
      }
    });
  });
}

function initAuthValidation() {
  // Default authorized accounts
  const DEFAULT_USERS = [
    { email: 'owner@propvantage.com', password: 'DemoPassword123', name: 'Property Owner' },
    { email: 'admin@propvantage.com', password: 'DemoPassword123', name: 'Administrator' },
    { email: 'admin@propvantage.com', password: 'admin123', name: 'Administrator' },
    { email: 'admin@propvantage.com', password: 'Admin@123', name: 'Administrator' },
    { email: 'admin', password: 'admin', name: 'Administrator' },
    { email: 'admin', password: 'admin123', name: 'Administrator' },
    { email: 'demo@propvantage.com', password: 'DemoPassword123', name: 'Demo User' }
  ];

  // Helper to get all registered users
  function getRegisteredUsers() {
    try {
      return JSON.parse(localStorage.getItem('propvantage_users')) || [];
    } catch (err) {
      return [];
    }
  }

  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const alertBox = document.getElementById('loginAlert');

    // Check if redirected immediately after registration
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('registered') === 'true') {
      const registeredEmail = urlParams.get('email') || localStorage.getItem('propvantage_latest_registered_email') || '';
      if (emailInput && registeredEmail) {
        emailInput.value = decodeURIComponent(registeredEmail);
      }
      if (passInput) {
        passInput.value = '';
      }
      if (alertBox) {
        alertBox.className = 'alert alert-success fade-in-up mb-4';
        alertBox.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i> <strong>Account created successfully!</strong> Please enter your password to sign in.';
        alertBox.style.display = 'block';
      }
      if (passInput) {
        setTimeout(() => passInput.focus(), 300);
      }
    }

    // Remove error highlight on typing
    if (emailInput) {
      emailInput.addEventListener('input', () => {
        emailInput.classList.remove('is-invalid');
        if (alertBox && alertBox.classList.contains('alert-danger')) {
          alertBox.style.display = 'none';
        }
      });
    }
    if (passInput) {
      passInput.addEventListener('input', () => {
        passInput.classList.remove('is-invalid');
        if (alertBox && alertBox.classList.contains('alert-danger')) {
          alertBox.style.display = 'none';
        }
      });
    }

    // Forgot Password Button Handler
    const forgotBtn = document.getElementById('forgotPasswordBtn');
    if (forgotBtn) {
      forgotBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const targetEmail = emailVal || 'your registered email';
        if (alertBox) {
          alertBox.className = 'alert alert-info fade-in-up mb-4';
          alertBox.innerHTML = `<i class="fa-solid fa-circle-info me-2"></i> Password reset instructions have been sent to <strong>${targetEmail}</strong>.`;
          alertBox.style.display = 'block';
        }
      });
    }

    // Demo Fill Buttons Handler
    const demoFillBtns = document.querySelectorAll('.demo-fill-btn');
    demoFillBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const demoEmail = this.getAttribute('data-email');
        const demoPass = this.getAttribute('data-pass');
        if (emailInput && demoEmail) emailInput.value = demoEmail;
        if (passInput && demoPass) passInput.value = demoPass;
        if (emailInput) emailInput.classList.remove('is-invalid');
        if (passInput) passInput.classList.remove('is-invalid');
        if (alertBox) alertBox.style.display = 'none';

        demoFillBtns.forEach(b => b.classList.remove('btn-primary-custom', 'active'));
        this.classList.add('btn-primary-custom', 'active');
        this.classList.remove('btn-outline-custom');
      });
    });

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailVal = emailInput ? emailInput.value.trim() : '';
      const passVal = passInput ? passInput.value : '';

      // Reset previous validation state
      if (emailInput) emailInput.classList.remove('is-invalid');
      if (passInput) passInput.classList.remove('is-invalid');

      if (!emailVal || !passVal) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Please enter both email address and password.';
          alertBox.style.display = 'block';
        }
        if (!emailVal && emailInput) emailInput.classList.add('is-invalid');
        if (!passVal && passInput) passInput.classList.add('is-invalid');
        return;
      }

      // Find user from default accounts or registered storage
      const allUsers = [...DEFAULT_USERS, ...getRegisteredUsers()];
      const matchedUser = allUsers.find(
        (u) => u.email.toLowerCase() === emailVal.toLowerCase() && u.password === passVal
      );

      if (!matchedUser) {
        // Wrong credentials - Show error and block login
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-circle-exclamation me-2"></i> <strong>Invalid credentials!</strong> The email or password entered does not match our records.';
          alertBox.style.display = 'block';
        }
        if (emailInput) emailInput.classList.add('is-invalid');
        if (passInput) passInput.classList.add('is-invalid');
        return;
      }

      // Valid Credentials - Show Success & Redirect
      if (alertBox) {
        alertBox.className = 'alert alert-success fade-in-up mb-4';
        alertBox.innerHTML = `<i class="fa-solid fa-circle-check me-2"></i> <strong>Login successful!</strong> Welcome back, ${matchedUser.name || 'Owner'}! Redirecting...`;
        alertBox.style.display = 'block';
      }

      const submitBtn = loginForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Authenticating...';
      }

      try {
        sessionStorage.setItem('propvantage_session', JSON.stringify({
          email: matchedUser.email,
          name: matchedUser.name || 'Owner',
          isLoggedIn: true
        }));
      } catch (err) {}

      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 900);
    });
  }

  // Register Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName');
      const email = document.getElementById('regEmail');
      const phone = document.getElementById('regPhone');
      const pass = document.getElementById('regPassword');
      const confirmPass = document.getElementById('regConfirmPassword');
      const alertBox = document.getElementById('registerAlert');

      if (!name || !email || !phone || !pass || !confirmPass) return;

      const nameVal = name.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const passVal = pass.value;
      const confirmVal = confirmPass.value;

      if (!nameVal || !emailVal || !phoneVal || !passVal || !confirmVal) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Please fill in all required fields.';
          alertBox.style.display = 'block';
        }
        return;
      }

      if (passVal !== confirmVal) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Passwords do not match!';
          alertBox.style.display = 'block';
        }
        return;
      }

      if (passVal.length < 6) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> Password must be at least 6 characters.';
          alertBox.style.display = 'block';
        }
        return;
      }

      // Save user into localStorage
      const users = getRegisteredUsers();
      const userExists = users.some(u => u.email.toLowerCase() === emailVal.toLowerCase());
      if (userExists) {
        if (alertBox) {
          alertBox.className = 'alert alert-danger fade-in-up mb-4';
          alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation me-2"></i> An account with this email already exists.';
          alertBox.style.display = 'block';
        }
        return;
      }

      users.push({
        name: nameVal,
        email: emailVal.toLowerCase(),
        phone: phoneVal,
        password: passVal
      });

      try {
        localStorage.setItem('propvantage_users', JSON.stringify(users));
        localStorage.setItem('propvantage_latest_registered_email', emailVal.toLowerCase());
      } catch (err) {}

      // Success alert and redirect to Login page
      if (alertBox) {
        alertBox.className = 'alert alert-success fade-in-up mb-4';
        alertBox.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i> <strong>Account created successfully!</strong> Redirecting to Login...';
        alertBox.style.display = 'block';
      }

      const submitBtn = registerForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Redirecting to Login...';
      }

      setTimeout(() => {
        window.location.href = `login.html?registered=true&email=${encodeURIComponent(emailVal.toLowerCase())}`;
      }, 1000);
    });
  }
}

/* --------------------------------------------------------------------------
   9. COMING SOON COUNTDOWN TIMER
   -------------------------------------------------------------------------- */
function initComingSoonCountdown() {
  const daysEl = document.getElementById('timerDays');
  const hoursEl = document.getElementById('timerHours');
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* --------------------------------------------------------------------------
   10. PRICING MONTHLY / ANNUAL TOGGLE
   -------------------------------------------------------------------------- */
function initPricingToggle() {
  const toggle = document.getElementById('billingCycleToggle');
  const priceAmounts = document.querySelectorAll('.price-amount[data-monthly]');
  const pricePeriods = document.querySelectorAll('.price-period');

  if (!toggle || !priceAmounts.length) return;

  toggle.addEventListener('change', function() {
    const isAnnual = this.checked;
    priceAmounts.forEach(el => {
      const monthly = el.getAttribute('data-monthly');
      const annual = el.getAttribute('data-annual');
      el.textContent = isAnnual ? annual : monthly;
    });

    pricePeriods.forEach(el => {
      el.textContent = isAnnual ? '/ month, billed yearly' : '/ month';
    });
  });
}

/* --------------------------------------------------------------------------
   11. DYNAMIC SERVICE DETAILS PAGE RENDERER
   -------------------------------------------------------------------------- */
function initServiceDetailsPage() {
  const serviceDetailContainer = document.getElementById('serviceDetailRoot');
  if (!serviceDetailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  let requestedService = urlParams.get('service') || 'tenant-screening';

  if (!PROPVANTAGE_SERVICES[requestedService]) {
    requestedService = 'tenant-screening';
  }

  renderServiceDetails(requestedService);

  // Handle popstate for back/forward browser buttons
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const serviceKey = params.get('service') || 'tenant-screening';
    if (PROPVANTAGE_SERVICES[serviceKey]) {
      renderServiceDetails(serviceKey, false);
    }
  });
}

function renderServiceDetails(serviceKey, updateHistory = true) {
  const service = PROPVANTAGE_SERVICES[serviceKey];
  if (!service) return;

  if (updateHistory && window.history && window.history.pushState) {
    const newUrl = `${window.location.pathname}?service=${serviceKey}`;
    window.history.pushState({ service: serviceKey }, '', newUrl);
  }

  // Update Page Title
  document.title = `${service.title} - PropVantage Property Management`;

  // 1. Hero Elements
  const heroBadge = document.getElementById('serviceHeroBadge');
  const heroTitle = document.getElementById('serviceHeroTitle');
  const heroDesc = document.getElementById('serviceHeroDesc');
  const heroImg = document.getElementById('serviceHeroImg');

  if (heroBadge) {
    heroBadge.innerHTML = `<i class="${service.badgeIcon || 'fa-solid fa-shield'} me-2"></i> ${service.badge}`;
  }
  if (heroTitle) heroTitle.textContent = service.title;
  if (heroDesc) heroDesc.textContent = service.lead;
  if (heroImg) {
    heroImg.src = service.image;
    heroImg.alt = service.imageAlt || service.title;
  }

  // 2. Overview Elements
  const overviewTitle = document.getElementById('serviceOverviewTitle');
  const overviewDesc1 = document.getElementById('serviceOverviewDesc1');
  const overviewDesc2 = document.getElementById('serviceOverviewDesc2');

  if (overviewTitle) overviewTitle.textContent = service.overviewTitle;
  if (overviewDesc1) overviewDesc1.textContent = service.overviewDesc1;
  if (overviewDesc2) overviewDesc2.textContent = service.overviewDesc2;

  // 3. Stats Grid
  const statsRow = document.getElementById('serviceStatsRow');
  if (statsRow && service.stats) {
    statsRow.innerHTML = service.stats.map(s => `
      <div class="col-6">
        <div class="stat-counter-card p-3">
          <div class="stat-number ${s.colorClass || 'text-primary-custom'}" data-target="${s.number}" data-prefix="${s.prefix || ''}" data-suffix="${s.suffix || ''}">0</div>
          <p class="stat-label">${s.label}</p>
        </div>
      </div>
    `).join('');
    initCounters(statsRow);
  }

  // 4. Core Pillars / Benefits
  const pillarsRow = document.getElementById('servicePillarsRow');
  if (pillarsRow && service.pillars) {
    pillarsRow.innerHTML = service.pillars.map(p => `
      <div class="col-md-6 col-lg-4">
        <div class="custom-card h-100 ${p.highlight ? 'border-primary' : ''}" style="${p.highlight ? 'background: var(--light-blue);' : ''}">
          <div class="service-icon-box mb-3" style="${p.highlight ? 'background: var(--card-bg);' : ''}">
            <i class="${p.icon}"></i>
          </div>
          <h4>${p.title}</h4>
          <p class="text-secondary-custom mb-0">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 5. Process Workflow Steps
  const processRow = document.getElementById('serviceProcessRow');
  if (processRow && service.process) {
    processRow.innerHTML = service.process.map(step => `
      <div class="col-md-3">
        <div class="custom-card text-center h-100">
          <div class="step-number-badge">${step.step}</div>
          <h5>${step.title}</h5>
          <p class="small text-secondary-custom mb-0">${step.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 6. FAQs Accordion
  const faqAccordion = document.getElementById('serviceFaqAccordion');
  if (faqAccordion && service.faqs) {
    faqAccordion.innerHTML = service.faqs.map((faq, idx) => `
      <div class="accordion-item">
        <h2 class="accordion-header" id="faqHeading${idx}">
          <button class="accordion-button ${idx === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faqCollapse${idx}">
            ${faq.q}
          </button>
        </h2>
        <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#serviceFaqAccordion" aria-labelledby="faqHeading${idx}">
          <div class="accordion-body">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 7. Update Active State in Sidebar
  const sidebarLinks = document.querySelectorAll('.service-sidebar-link');
  sidebarLinks.forEach(link => {
    const linkKey = link.getAttribute('data-service-key');
    if (linkKey === serviceKey) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Attach click events to sidebar service items
  sidebarLinks.forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const targetKey = link.getAttribute('data-service-key');
      if (targetKey && PROPVANTAGE_SERVICES[targetKey]) {
        renderServiceDetails(targetKey, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  });
}

/* --------------------------------------------------------------------------
   12. DYNAMIC BLOG DETAILS PAGE RENDERER
   -------------------------------------------------------------------------- */
function initBlogDetailsPage() {
  const blogDetailContainer = document.getElementById('blogDetailRoot');
  if (!blogDetailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  let requestedBlog = urlParams.get('id') || 'increase-rental-income';

  if (!PROPVANTAGE_BLOGS[requestedBlog]) {
    requestedBlog = 'increase-rental-income';
  }

  renderBlogDetails(requestedBlog);

  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id') || 'increase-rental-income';
    if (PROPVANTAGE_BLOGS[blogId]) {
      renderBlogDetails(blogId, false);
    }
  });
}

function renderBlogDetails(blogId, updateHistory = true) {
  const blog = PROPVANTAGE_BLOGS[blogId];
  if (!blog) return;

  if (updateHistory && window.history && window.history.pushState) {
    const newUrl = `${window.location.pathname}?id=${blogId}`;
    window.history.pushState({ id: blogId }, '', newUrl);
  }

  // Update Page Title
  document.title = `${blog.title} - PropVantage Insights`;

  // Hero Info
  const heroBadge = document.getElementById('blogHeroCategory');
  const heroTitle = document.getElementById('blogHeroTitle');
  const authorName = document.getElementById('blogAuthorName');
  const authorAvatar = document.getElementById('blogAuthorAvatar');
  const postDate = document.getElementById('blogDate');
  const readTime = document.getElementById('blogReadTime');
  const featuredImg = document.getElementById('blogFeaturedImg');
  const articleLead = document.getElementById('blogArticleLead');
  const articleBody = document.getElementById('blogArticleBody');
  const tagsWrap = document.getElementById('blogTagsWrap');

  if (heroBadge) heroBadge.textContent = blog.category;
  if (heroTitle) heroTitle.textContent = blog.title;
  if (authorName) authorName.textContent = blog.author;
  if (authorAvatar) {
    authorAvatar.src = blog.authorAvatar;
    authorAvatar.alt = blog.author;
  }
  if (postDate) postDate.innerHTML = `<i class="fa-regular fa-calendar me-1"></i> ${blog.date}`;
  if (readTime) readTime.innerHTML = `<i class="fa-regular fa-clock me-1"></i> ${blog.readTime}`;
  if (featuredImg) {
    featuredImg.src = blog.image;
    featuredImg.alt = blog.imageAlt || blog.title;
  }
  if (articleLead) articleLead.textContent = blog.lead;
  if (articleBody) articleBody.innerHTML = blog.contentHtml;

  if (tagsWrap && blog.tags) {
    tagsWrap.innerHTML = blog.tags.map(t => `<span class="badge badge-status badge-primary">${t}</span>`).join(' ');
  }

  // Render Related Posts
  const relatedGrid = document.getElementById('blogRelatedGrid');
  if (relatedGrid && blog.related) {
    relatedGrid.innerHTML = blog.related.map(relId => {
      const relBlog = PROPVANTAGE_BLOGS[relId];
      if (!relBlog) return '';
      return `
        <div class="col-md-6">
          <div class="blog-card h-100">
            <div class="blog-img-wrap" style="height: 190px;">
              <img src="${relBlog.image}" alt="${relBlog.title}">
              <span class="blog-category-badge">${relBlog.category}</span>
            </div>
            <div class="blog-card-body p-3">
              <h5 class="blog-title mb-2">
                <a href="blog-details.html?id=${relBlog.id}" class="blog-switch-link" data-blog-id="${relBlog.id}">${relBlog.title}</a>
              </h5>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-secondary-custom">${relBlog.readTime} • ${relBlog.date}</small>
                <a href="blog-details.html?id=${relBlog.id}" class="text-primary-custom fw-bold small blog-switch-link" data-blog-id="${relBlog.id}">Read <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Sidebar Recent Posts
  const recentList = document.getElementById('blogRecentList');
  if (recentList) {
    const otherBlogs = Object.values(PROPVANTAGE_BLOGS).filter(b => b.id !== blogId).slice(0, 4);
    recentList.innerHTML = otherBlogs.map(b => `
      <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-light-custom">
        <img src="${b.image}" alt="${b.title}" style="width: 65px; height: 65px; border-radius: var(--radius-sm); object-fit: cover;">
        <div>
          <h6 class="mb-1">
            <a href="blog-details.html?id=${b.id}" class="text-dark-custom blog-switch-link" data-blog-id="${b.id}">${b.title}</a>
          </h6>
          <small class="text-secondary-custom">${b.date}</small>
        </div>
      </div>
    `).join('');
  }

  // Attach seamless click handlers to all switch links on the page
  const switchLinks = document.querySelectorAll('.blog-switch-link');
  switchLinks.forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-blog-id');
      if (targetId && PROPVANTAGE_BLOGS[targetId]) {
        renderBlogDetails(targetId, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  });
}

/* --------------------------------------------------------------------------
   13. HEADING & CARD CLICK NAVIGATION ENHANCER
   -------------------------------------------------------------------------- */
function initHeadingClickNavigation() {
  // Service Cards on index, services, and home-2
  const serviceCards = document.querySelectorAll('.service-card[data-service-key], .custom-card[data-service-key]');
  serviceCards.forEach(card => {
    const serviceKey = card.getAttribute('data-service-key');
    if (serviceKey) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // If clicking a direct anchor tag inside, let it propagate naturally
        if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
        window.location.href = `service-details.html?service=${serviceKey}`;
      });
    }
  });

  // Blog Cards on index, blog, and home-2
  const blogCards = document.querySelectorAll('.blog-card[data-blog-id], .blog-grid-item[data-blog-id]');
  blogCards.forEach(card => {
    const blogId = card.getAttribute('data-blog-id');
    if (blogId) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
        window.location.href = `blog-details.html?id=${blogId}`;
      });
    }
  });
}

function initDashboardGreeting() {
  const greetingEl = document.getElementById('dashboardGreeting');
  if (!greetingEl) return;
  try {
    const session = JSON.parse(sessionStorage.getItem('propvantage_session'));
    if (session && session.name) {
      greetingEl.textContent = `Welcome back, ${session.name}`;
    }
  } catch (err) {}
}

/* --------------------------------------------------------------------------
   14. MASTER INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initNavbarScroll();
  initBackToTop();
  initCounters();
  initBlogFilterAndSearch();
  initContactFormValidation();
  initPasswordToggles();
  initAuthValidation();
  initDashboardGreeting();
  initComingSoonCountdown();
  initPricingToggle();
  initServiceDetailsPage();
  initBlogDetailsPage();
  initHeadingClickNavigation();
});

