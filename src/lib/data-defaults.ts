import { Plot, Project, Enquiry } from './types';

export const INITIAL_PLOTS: Plot[] = [
  {
    id: 'plot-1',
    slug: 'pearl-haven-corner-villa-plot-korampallam',
    title: 'Pearl Haven - Premium Corner Villa Plot',
    project: 'Pearl Haven Layout',
    location: 'Korampallam',
    address: 'Near District Collectorate Complex, Korampallam, Thoothukudi, Tamil Nadu 628101',
    price: 3200000,
    priceDisplay: '₹32.00 Lakhs',
    pricePerSqFt: 1777,
    pricePerCent: 775000,
    areaSqFt: 1800,
    areaCents: 4.13,
    dimensions: '40 ft x 45 ft',
    facing: 'North-East',
    roadWidth: '40 ft Wide Blacktop Tar Road',
    approval: 'DTCP & RERA Approved',
    approvalNumber: 'DTCP No. 128/2023 | TNRERA/P/1094/2023',
    pattaStatus: 'Individual Clear Patta Ready',
    status: 'Available',
    isFeatured: true,
    description: 'An exclusive corner residential plot in the prestigious Pearl Haven gated community, just 3 minutes from the Thoothukudi District Collectorate. Features direct 40ft blacktop road access, sweet drinking groundwater at 35 feet, underground stormwater drainage, and avenue palm trees.',
    amenities: [
      '40 ft Blacktop Tar Road',
      'Underground Stormwater Drainage',
      'Sweet Groundwater (35 ft)',
      'Solar Street Lighting',
      '24/7 Gated Community Security',
      'Individual Water Connection Point',
      'Avenue Tree Plantation',
      'Children Play Area Reserve'
    ],
    landmarks: [
      { name: 'Thoothukudi District Collectorate', distance: '1.2 km (3 mins)' },
      { name: 'Spic Nagar Hospital & Clinic', distance: '3.5 km (8 mins)' },
      { name: 'Tuticorin New Bus Stand', distance: '4.8 km (10 mins)' },
      { name: 'St. Thomas Matriculation Hr. Sec. School', distance: '1.5 km (4 mins)' },
      { name: 'Tuticorin VOC Port Trust', distance: '12 km (18 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #18',
    coordinates: { lat: 8.7642, lng: 78.1348 },
    createdAt: '2026-03-01'
  },
  {
    id: 'plot-2',
    slug: 'palayam-greenfield-residential-plot-nh138',
    title: 'Palayam Greens - Four-Lane Connected Residential Plot',
    project: 'Palayam Greens Executive Layout',
    location: 'Palayamkottai Road',
    address: 'Opposite Government Polytechnic, Palayamkottai Road (NH 138), Thoothukudi 628008',
    price: 2450000,
    priceDisplay: '₹24.50 Lakhs',
    pricePerSqFt: 1633,
    pricePerCent: 712000,
    areaSqFt: 1500,
    areaCents: 3.44,
    dimensions: '30 ft x 50 ft',
    facing: 'North',
    roadWidth: '33 ft Blacktop Road',
    approval: 'DTCP Approved',
    approvalNumber: 'DTCP Reg No. 84/2024',
    pattaStatus: '100% Verified Clean Mother Deed & Patta',
    status: 'Fast Selling',
    isFeatured: true,
    description: 'Strategically located directly off Palayamkottai 4-lane highway, this rectangular north-facing residential parcel is ideal for immediate villa construction or high-yield land appreciation. Surrounded by established elite residences and top educational institutes.',
    amenities: [
      '33 ft Metal Tar Road',
      'TNEB Power Line Ready',
      'Borewell Sweet Water Tested',
      'Security Cabin at Entrance',
      'Demarcated Stone Pillars with Fencing',
      'Street Name Boards & Signages'
    ],
    landmarks: [
      { name: 'Government Polytechnic College', distance: '0.8 km (2 mins)' },
      { name: 'Tuticorin Old Railway Station', distance: '5.2 km (12 mins)' },
      { name: 'APCM Mahalaxmi College', distance: '2.1 km (5 mins)' },
      { name: 'Tuticorin Airport (Vagaikulam)', distance: '14 km (18 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #07',
    coordinates: { lat: 8.7885, lng: 78.1124 },
    createdAt: '2026-03-05'
  },
  {
    id: 'plot-3',
    slug: 'harbour-view-enclave-east-facing-muthiapuram',
    title: 'Harbour Enclave - East Facing Coastal City Plot',
    project: 'Harbour Enclave Phase 1',
    location: 'Harbour Bypass Road',
    address: 'Near VO Chidambaranar Port Junction, Muthiapuram, Thoothukudi 628005',
    price: 1980000,
    priceDisplay: '₹19.80 Lakhs',
    pricePerSqFt: 1650,
    pricePerCent: 718000,
    areaSqFt: 1200,
    areaCents: 2.75,
    dimensions: '30 ft x 40 ft',
    facing: 'East',
    roadWidth: '30 ft Gated Road',
    approval: 'DTCP & RERA Approved',
    approvalNumber: 'TNRERA/LAYOUT/340/2023',
    pattaStatus: 'Instant Sub-Division Patta Transfer',
    status: 'Available',
    isFeatured: true,
    description: 'An affordable, high-demand east-facing compact plot inside a fully gated community near the booming Harbour Bypass corridor. Designed with modern infrastructure, LED street lamps, and lush avenue greens. Exceptional rental potential for port executives.',
    amenities: [
      'Gated Entrance Arch with Guard Room',
      '30 ft Concrete Paver & Tar Roads',
      'Individual Underground Water Connections',
      'Street Tree Plantation',
      'High Compound Wall Surrounding Layout',
      'CCTV Surveillance Provision'
    ],
    landmarks: [
      { name: 'VOC Port Administrative Building', distance: '4.5 km (8 mins)' },
      { name: 'Thermal Power Plant Hospital', distance: '3.0 km (6 mins)' },
      { name: 'Campbel International School', distance: '2.5 km (5 mins)' },
      { name: 'Harbour Beach Promenade', distance: '5.0 km (10 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #24',
    coordinates: { lat: 8.7421, lng: 78.1492 },
    createdAt: '2026-03-08'
  },
  {
    id: 'plot-4',
    slug: 'millerpuram-central-luxury-plot',
    title: 'Millerpuram Prime - Central City Executive Plot',
    project: 'Millerpuram Royal Enclave',
    location: 'Millerpuram',
    address: 'Near Holy Cross Matriculation School, Millerpuram, Thoothukudi 628002',
    price: 4800000,
    priceDisplay: '₹48.00 Lakhs',
    pricePerSqFt: 2000,
    pricePerCent: 871200,
    areaSqFt: 2400,
    areaCents: 5.51,
    dimensions: '40 ft x 60 ft',
    facing: 'North',
    roadWidth: '40 ft Corporation Tar Road',
    approval: 'DTCP & RERA Approved',
    approvalNumber: 'DTCP No. 39/2022',
    pattaStatus: 'Clear Urban Corporation Patta',
    status: 'Reserved',
    isFeatured: true,
    description: 'Rare opportunity to acquire a full 1 Ground (5.51 Cents) luxury residential plot in the heart of Millerpuram. Prime urban neighborhood with immediate corporation water supply, underground sewage, high-voltage electricity, and walking distance to top hospitals.',
    amenities: [
      '40 ft Corporation Tar Road',
      'Thoothukudi Corporation Water Supply',
      'Underground Drainage (UGD) Connected',
      'High-Speed Fiber Optic Internet Lines',
      'Street LED Lighting',
      'Clear Boundary Wall Demarcation'
    ],
    landmarks: [
      { name: 'Holy Cross Matric School', distance: '0.4 km (1 min)' },
      { name: 'Sundaram Arulraj Hospital', distance: '0.9 km (2 mins)' },
      { name: 'Millerpuram Shopping Hub', distance: '0.6 km (2 mins)' },
      { name: 'Tuticorin Main Bus Stand', distance: '3.1 km (7 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #03',
    coordinates: { lat: 8.8021, lng: 78.1365 },
    createdAt: '2026-03-10'
  },
  {
    id: 'plot-5',
    slug: 'spic-nagar-green-meadows-affordable-plot',
    title: 'Green Meadows - Peaceful Residential Plot',
    project: 'Green Meadows Layout',
    location: 'Spic Nagar',
    address: 'Near Muthiapuram Main Road, Spic Nagar, Thoothukudi 628005',
    price: 1580000,
    priceDisplay: '₹15.80 Lakhs',
    pricePerSqFt: 1316,
    pricePerCent: 574000,
    areaSqFt: 1200,
    areaCents: 2.75,
    dimensions: '30 ft x 40 ft',
    facing: 'South',
    roadWidth: '30 ft Tar Road',
    approval: 'DTCP Approved',
    approvalNumber: 'DTCP Approval No. 91/2023',
    pattaStatus: 'Clear Legal Opinion & Patta',
    status: 'Available',
    isFeatured: false,
    description: 'Value-packed plot situated in a serene green landscape behind Spic Nagar. Ideal for families wanting a calm peaceful living environment with easy commute to VOC Port, industrial centers, and schools.',
    amenities: [
      '30 ft Wide Layout Road',
      'Clean Potable Water Source',
      'Clear Stone Boundary Markers',
      'Electricity Line Available',
      'Ready for Construction'
    ],
    landmarks: [
      { name: 'Spic Higher Secondary School', distance: '1.2 km (3 mins)' },
      { name: 'Muthiapuram Railway Station', distance: '2.0 km (5 mins)' },
      { name: 'Hare Island Coastal Park', distance: '6.5 km (12 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #11',
    coordinates: { lat: 8.7368, lng: 78.1388 },
    createdAt: '2026-03-12'
  },
  {
    id: 'plot-6',
    slug: 'ettayapuram-avenue-high-growth-plot',
    title: 'Ettayapuram Gateway - High Growth Investment Land',
    project: 'Ettayapuram Smart Avenue',
    location: 'Ettayapuram Road',
    address: 'Near New SIPCOT Industrial Zone, Ettayapuram Road, Thoothukudi 628002',
    price: 1420000,
    priceDisplay: '₹14.20 Lakhs',
    pricePerSqFt: 1183,
    pricePerCent: 516000,
    areaSqFt: 1200,
    areaCents: 2.75,
    dimensions: '30 ft x 40 ft',
    facing: 'East',
    roadWidth: '33 ft Blacktop Road',
    approval: 'DTCP Approved',
    approvalNumber: 'DTCP No. 177/2023',
    pattaStatus: 'Verified Mother Deed & Patta',
    status: 'Available',
    isFeatured: false,
    description: 'High-growth corridor plot located close to the upcoming manufacturing clusters and New SIPCOT. Excellent early investment with confirmed capital appreciation trajectory over the next 2-3 years.',
    amenities: [
      '33 ft Blacktop Road',
      'Street Lighting System',
      'Water Drainage Channels',
      'Gated Layout Boundary',
      'Ready Electric Transformer'
    ],
    landmarks: [
      { name: 'New SIPCOT Phase 2', distance: '2.8 km (5 mins)' },
      { name: 'VOC College', distance: '4.2 km (8 mins)' },
      { name: 'Tuticorin Old Bus Stand', distance: '6.0 km (12 mins)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80'
    ],
    layoutPlotNumber: 'Plot #32',
    coordinates: { lat: 8.8251, lng: 78.1215 },
    createdAt: '2026-03-14'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'project-1',
    slug: 'pearl-haven-layout',
    name: 'Pearl Haven Layout',
    tagline: 'Signature Gated Villa Plots Near Thoothukudi Collectorate',
    location: 'Korampallam, Thoothukudi',
    address: 'Opp. Collectorate Administrative Enclave, Korampallam, Thoothukudi 628101',
    totalPlots: 48,
    availablePlots: 14,
    soldPlots: 34,
    priceRange: '₹22.5 L – ₹45.0 L',
    plotSizes: '1200 to 2400 sq.ft (2.75 to 5.5 Cents)',
    approval: 'DTCP & TNRERA Approved',
    approvalNumber: 'DTCP No. 128/2023 | TNRERA/P/1094/2023',
    description: 'Pearl Haven represents the pinnacle of residential plotted development in Thoothukudi. Situated in high-demand Korampallam, this master-planned community combines manicured 40ft blacktop avenues, underground stormwater drains, continuous sweet drinking water, and dedicated green reserves.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      '40 ft & 33 ft Blacktop Tar Roads',
      'Underground Storm Drainage Network',
      'Individual Sweet Water Connections',
      'Solar Street Lighting Grid',
      '24/7 Gated Security with CCTV',
      'Perimeter Security Compound Wall',
      'Avenue Palms & Landscaped Parks',
      'Immediate Bank Loan Approval (SBI, HDFC, Canara)'
    ],
    landmarks: [
      { name: 'District Collectorate Complex', distance: '1.2 km' },
      { name: 'Tuticorin New Bus Stand', distance: '4.8 km' },
      { name: 'St. Thomas School', distance: '1.5 km' },
      { name: 'VOC Port Terminal', distance: '12 km' }
    ],
    layoutPlots: [
      { number: 1, size: '2400 sq.ft', cents: 5.51, facing: 'North', status: 'Sold', price: '₹42.0 L' },
      { number: 2, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Sold', price: '₹31.5 L' },
      { number: 3, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Reserved', price: '₹31.5 L' },
      { number: 4, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Available', price: '₹26.2 L' },
      { number: 5, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Available', price: '₹26.2 L' },
      { number: 6, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹21.0 L' },
      { number: 7, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Available', price: '₹21.0 L' },
      { number: 8, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹26.2 L' },
      { number: 9, size: '1800 sq.ft', cents: 4.13, facing: 'North', status: 'Sold', price: '₹31.5 L' },
      { number: 10, size: '2400 sq.ft', cents: 5.51, facing: 'North-East', status: 'Available', price: '₹43.5 L' },
      { number: 11, size: '1500 sq.ft', cents: 3.44, facing: 'South', status: 'Sold', price: '₹25.8 L' },
      { number: 12, size: '1200 sq.ft', cents: 2.75, facing: 'South', status: 'Available', price: '₹20.8 L' },
      { number: 13, size: '1500 sq.ft', cents: 3.44, facing: 'South', status: 'Available', price: '₹25.8 L' },
      { number: 14, size: '1800 sq.ft', cents: 4.13, facing: 'South', status: 'Sold', price: '₹31.0 L' },
      { number: 15, size: '1500 sq.ft', cents: 3.44, facing: 'East', status: 'Reserved', price: '₹26.2 L' },
      { number: 16, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹21.0 L' },
      { number: 17, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹26.2 L' },
      { number: 18, size: '1800 sq.ft', cents: 4.13, facing: 'North-East', status: 'Available', price: '₹32.0 L' }
    ]
  },
  {
    id: 'project-2',
    slug: 'palayam-greens-executive-layout',
    name: 'Palayam Greens Executive Layout',
    tagline: 'High-Appreciation Plotted Enclave on 4-Lane Highway',
    location: 'Palayamkottai Road, Thoothukudi',
    address: 'Opposite Government Polytechnic, NH 138, Thoothukudi 628008',
    totalPlots: 36,
    availablePlots: 9,
    soldPlots: 27,
    priceRange: '₹19.5 L – ₹38.0 L',
    plotSizes: '1200 to 2200 sq.ft (2.75 to 5.0 Cents)',
    approval: 'DTCP Approved',
    approvalNumber: 'DTCP Reg No. 84/2024',
    description: 'Located directly along the bustling Palayamkottai 4-lane arterial road, Palayam Greens connects you to city conveniences while offering tranquil residential living. Clean documentation, high sweet water table, and ready for immediate construction.',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Direct NH-138 Highway Access',
      '33 ft Blacktop Tar Roads',
      'Electricity Substation Adjacent',
      'Pure Ground Sweet Water',
      'Clear Stone Demarcations',
      'Security Post & Street Lights'
    ],
    landmarks: [
      { name: 'Govt Polytechnic', distance: '0.8 km' },
      { name: 'APCM College', distance: '2.1 km' },
      { name: 'Tuticorin Old Railway Station', distance: '5.2 km' },
      { name: 'Vagaikulam Airport', distance: '14 km' }
    ],
    layoutPlots: [
      { number: 1, size: '2000 sq.ft', cents: 4.59, facing: 'North', status: 'Sold', price: '₹34.0 L' },
      { number: 2, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹25.0 L' },
      { number: 3, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Available', price: '₹25.0 L' },
      { number: 4, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹20.0 L' },
      { number: 5, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Available', price: '₹20.0 L' },
      { number: 6, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹24.5 L' },
      { number: 7, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Available', price: '₹24.5 L' },
      { number: 8, size: '1800 sq.ft', cents: 4.13, facing: 'South', status: 'Sold', price: '₹29.0 L' }
    ]
  },
  {
    id: 'project-3',
    slug: 'harbour-enclave-phase-1',
    name: 'Harbour Enclave Phase 1',
    tagline: 'Modern Plotted Community Near VOC Port Corridor',
    location: 'Harbour Bypass Road, Thoothukudi',
    address: 'Near Muthiapuram Junction, Harbour Bypass, Thoothukudi 628005',
    totalPlots: 40,
    availablePlots: 11,
    soldPlots: 29,
    priceRange: '₹18.0 L – ₹32.0 L',
    plotSizes: '1200 to 1800 sq.ft (2.75 to 4.13 Cents)',
    approval: 'DTCP & RERA Approved',
    approvalNumber: 'TNRERA/LAYOUT/340/2023',
    description: 'A contemporary master-planned plotted layout engineered to cater to professionals, port personnel, and NRI investors seeking secure, appreciation-oriented real estate in coastal Thoothukudi.',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Gated Compound with Security Gate',
      '30 ft Wide Blacktop Roads',
      'Children Play Park & Walking Track',
      'Individual Water Connection',
      'Avenue Plantations',
      'Immediate Title Deed Handover'
    ],
    landmarks: [
      { name: 'VOC Port Administrative Building', distance: '4.5 km' },
      { name: 'Thermal Power Plant Hospital', distance: '3.0 km' },
      { name: 'Harbour Beach Promenade', distance: '5.0 km' }
    ],
    layoutPlots: [
      { number: 21, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹19.5 L' },
      { number: 22, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Sold', price: '₹19.5 L' },
      { number: 23, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Sold', price: '₹24.0 L' },
      { number: 24, size: '1200 sq.ft', cents: 2.75, facing: 'East', status: 'Available', price: '₹19.8 L' },
      { number: 25, size: '1500 sq.ft', cents: 3.44, facing: 'North', status: 'Available', price: '₹24.5 L' }
    ]
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    plotId: 'plot-1',
    plotTitle: 'Pearl Haven - Premium Corner Villa Plot',
    name: 'K. Balasubramanian',
    phone: '+91 98421 55678',
    email: 'bala.tuticorin@gmail.com',
    message: 'Interested in Plot #18 in Pearl Haven. Would like to schedule an on-site visit this Saturday.',
    preferredLocation: 'Korampallam',
    budget: '₹30L - ₹35L',
    status: 'New',
    createdAt: '2026-03-14T10:30:00Z'
  },
  {
    id: 'enq-2',
    plotId: 'plot-2',
    plotTitle: 'Palayam Greens - Four-Lane Connected Residential Plot',
    name: 'S. Rajendran',
    phone: '+91 94432 89012',
    email: 'rajendran.tn@outlook.com',
    message: 'Please share DTCP approval copy and survey layout map for Palayam Greens plot.',
    preferredLocation: 'Palayamkottai Road',
    budget: '₹25L',
    status: 'Contacted',
    createdAt: '2026-03-13T14:15:00Z'
  }
];
