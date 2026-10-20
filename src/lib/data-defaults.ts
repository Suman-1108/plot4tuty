import { Plot, Project, Enquiry, SubscriptionPlan, Seller, HouseModel } from './types';

export const INITIAL_PLOTS: Plot[] = [
  {
    "id": "plot-ap-07",
    "slug": "ap-rajan-garden-plot-07-compact-villa",
    "title": "AP Rajan Garden – Compact 1.48 Cent Plot (Plot #07)",
    "project": "AP Rajan Garden",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Plot #07, 36-ft Road, AP Rajan Garden, Tharuvaikulam, Thoothukudi 628105",
    "price": 410000,
    "priceDisplay": "₹4.10 Lakhs",
    "pricePerSqFt": 635,
    "pricePerCent": 275000,
    "areaSqFt": 645,
    "areaCents": 1.48,
    "dimensions": "21.5 ft x 30 ft",
    "facing": "East",
    "roadWidth": "36 ft Blacktop Tar Road",
    "approval": "Panchayat Approved",
    "approvalNumber": "Panchayat Approval No. 145/36/TKD",
    "pattaStatus": "Clear Legal Patta & Mother Deed",
    "status": "Available",
    "isFeatured": true,
    "phase": "Phase 1 (1-145)",
    "houseConstructionAvailable": true,
    "layoutPlotNumber": "Plot #07",
    "description": "Affordable east-facing residential plot in AP Rajan Garden, just a short walk to Tharuvaikulam beach. Excellent 36-ft blacktop road frontage with sweet groundwater, electricity connection, and available house construction packages.",
    "amenities": [
      "36 ft Blacktop Road",
      "Walking Distance to Beach",
      "Sweet Groundwater",
      "TNEB Electricity Ready",
      "Individual Water Line",
      "Up to 90% Loan Available"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "3 mins walk"
      },
      {
        "name": "ECR Main Road",
        "distance": "1 min"
      },
      {
        "name": "Thalamuthunagar Bus Stop",
        "distance": "2 mins"
      }
    ],
    "images": [
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/ap-rajan/brochure-front.jpg",
      "/images/hero-aerial-golden.jpg"
    ],
    "coordinates": {
      "lat": 8.8782,
      "lng": 78.1634
    },
    "createdAt": "2026-03-01"
  },
  {
    "id": "plot-ap-30",
    "slug": "ap-rajan-garden-plot-30-prime-residential",
    "title": "AP Rajan Garden – Prime 2.64 Cent Villa Plot (Plot #30)",
    "project": "AP Rajan Garden",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Plot #30, Main Avenue, AP Rajan Garden, Tharuvaikulam, Thoothukudi 628105",
    "price": 725000,
    "priceDisplay": "₹7.25 Lakhs",
    "pricePerSqFt": 631,
    "pricePerCent": 275000,
    "areaSqFt": 1148,
    "areaCents": 2.64,
    "dimensions": "30 ft x 38.3 ft",
    "facing": "South",
    "roadWidth": "36 ft Blacktop Tar Road",
    "approval": "Panchayat Approved",
    "approvalNumber": "Panchayat Approval No. 145/36/TKD",
    "pattaStatus": "Clear Legal Title & Immediate Registration",
    "status": "Available",
    "isFeatured": true,
    "phase": "Phase 1 (1-145)",
    "houseConstructionAvailable": true,
    "layoutPlotNumber": "Plot #30",
    "description": "Perfect rectangular 2.64 cent residential plot ideal for custom 2 BHK or 3 BHK individual house construction. Offers 36-ft wide blacktop road, 24-hour bus connectivity on ECR, and sweet drinking water.",
    "amenities": [
      "36 ft Blacktop Road",
      "Walk to Beach (400m)",
      "Sweet Groundwater",
      "24-Hour Bus Service",
      "Gated Community Boundary",
      "Individual Water Tank Option"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "400 meters"
      },
      {
        "name": "Thalamuthunagar Junction",
        "distance": "800 meters"
      },
      {
        "name": "Old Bus Stand Thoothukudi",
        "distance": "15 mins"
      }
    ],
    "images": [
      "/images/ap-rajan/brochure-front.jpg",
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/bento-parcels-aerial.jpg"
    ],
    "coordinates": {
      "lat": 8.8785,
      "lng": 78.1638
    },
    "createdAt": "2026-03-02"
  },
  {
    "id": "plot-ap-76",
    "slug": "ap-rajan-garden-plot-76-grand-corner-villa",
    "title": "AP Rajan Garden – Grand 4.95 Cent Corner Plot (Plot #76)",
    "project": "AP Rajan Garden",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Plot #76, Corner Avenue, AP Rajan Garden, Tharuvaikulam, Thoothukudi 628105",
    "price": 1360000,
    "priceDisplay": "₹13.60 Lakhs",
    "pricePerSqFt": 631,
    "pricePerCent": 275000,
    "areaSqFt": 2156,
    "areaCents": 4.95,
    "dimensions": "44 ft x 49 ft",
    "facing": "South-East",
    "roadWidth": "36 ft Blacktop Tar Road",
    "approval": "Panchayat Approved",
    "approvalNumber": "Panchayat Approval No. 145/36/TKD",
    "pattaStatus": "Direct Registration Ready Patta",
    "status": "Available",
    "isFeatured": true,
    "phase": "Phase 1 (1-145)",
    "houseConstructionAvailable": true,
    "layoutPlotNumber": "Plot #76",
    "description": "Large south-east corner villa plot in AP Rajan Garden measuring nearly 5 cents (2,156 sq.ft). Dual road access, high natural breeze from the nearby beach, suitable for luxury duplex villa with garden and parking.",
    "amenities": [
      "Corner Dual 36 ft Road",
      "Beach Breeze & Sea Access",
      "Sweet Groundwater",
      "Electricity Line Ready",
      "Private Water Tank Construction",
      "Up to 90% Loan Available"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "3 mins"
      },
      {
        "name": "53-Acre Tourism Belt",
        "distance": "3 mins"
      },
      {
        "name": "VOC Port",
        "distance": "20 mins"
      }
    ],
    "images": [
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/hero-aerial-golden.jpg",
      "/images/ap-rajan/brochure-front.jpg"
    ],
    "coordinates": {
      "lat": 8.8791,
      "lng": 78.1642
    },
    "createdAt": "2026-03-03"
  },
  {
    "id": "plot-ap-p2-09",
    "slug": "ap-rajan-garden-phase2-plot-09-estate-parcel",
    "title": "AP Rajan Garden Phase 2 – 6.45 Cent Estate Plot (Plot #09)",
    "project": "AP Rajan Garden",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Phase 2, Plot #09, AP Rajan Garden, Tharuvaikulam, Thoothukudi 628105",
    "price": 1775000,
    "priceDisplay": "₹17.75 Lakhs",
    "pricePerSqFt": 632,
    "pricePerCent": 275000,
    "areaSqFt": 2810,
    "areaCents": 6.45,
    "dimensions": "45 ft x 62.4 ft",
    "facing": "North-East",
    "roadWidth": "36 ft Blacktop Tar Road",
    "approval": "Panchayat Approved",
    "approvalNumber": "Panchayat Approval No. 145/36/TKD",
    "pattaStatus": "Clear Patta & Mother Deed",
    "status": "Available",
    "isFeatured": true,
    "phase": "Phase 2 (1-36)",
    "houseConstructionAvailable": true,
    "layoutPlotNumber": "Phase 2 - Plot #09",
    "description": "Prime North-East facing estate parcel in Phase 2 of AP Rajan Garden. Vast 6.45 cents area allows expansive lawn, multiple car parks, and custom coastal luxury villa construction.",
    "amenities": [
      "North-East Facing Vastu Plot",
      "36 ft Blacktop Road",
      "Beach Walking Distance",
      "Sweet Groundwater",
      "Individual Water Connection",
      "Loan Up to 90%"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "400m"
      },
      {
        "name": "Thalamuthunagar Main Road",
        "distance": "600m"
      },
      {
        "name": "Tuticorin Railway Station",
        "distance": "16 mins"
      }
    ],
    "images": [
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/ap-rajan/brochure-front.jpg"
    ],
    "coordinates": {
      "lat": 8.8795,
      "lng": 78.1645
    },
    "createdAt": "2026-03-04"
  },
  {
    "id": "plot-ap-59",
    "slug": "ap-rajan-garden-plot-59-budget-beachside-parcel",
    "title": "AP Rajan Garden – Beachside Compact Plot (Plot #59)",
    "project": "AP Rajan Garden",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Plot #59, West Avenue, AP Rajan Garden, Tharuvaikulam, Thoothukudi 628105",
    "price": 410000,
    "priceDisplay": "₹4.10 Lakhs",
    "pricePerSqFt": 635,
    "pricePerCent": 275000,
    "areaSqFt": 646,
    "areaCents": 1.48,
    "dimensions": "21.5 ft x 30 ft",
    "facing": "West",
    "roadWidth": "36 ft Blacktop Tar Road",
    "approval": "Panchayat Approved",
    "approvalNumber": "Panchayat Approval No. 145/36/TKD",
    "pattaStatus": "Clear Single Owner Patta",
    "status": "Available",
    "isFeatured": true,
    "phase": "Phase 1 (1-145)",
    "houseConstructionAvailable": true,
    "layoutPlotNumber": "Plot #59",
    "description": "Ultra-budget residential plot of 1.48 Cents starting at just ₹4.10 Lakhs. High capital appreciation near the upcoming 53-acre tourism belt. Ready for house construction support with up to 90% loan.",
    "amenities": [
      "36 ft Road Frontage",
      "Walking Distance to Beach",
      "Sweet Groundwater",
      "TNEB Ready",
      "24-Hour Bus Connectivity"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "3 mins walk"
      },
      {
        "name": "ECR Highway",
        "distance": "1 min"
      }
    ],
    "images": [
      "/images/ap-rajan/brochure-front.jpg",
      "/images/ap-rajan/layout-masterplan-table.jpg"
    ],
    "coordinates": {
      "lat": 8.8788,
      "lng": 78.1636
    },
    "createdAt": "2026-03-05"
  },
  {
    "id": "plot-1",
    "slug": "pearl-haven-corner-villa-plot-korampallam",
    "title": "Pearl Haven - Premium Corner Villa Plot",
    "project": "Pearl Haven Layout",
    "location": "Korampallam",
    "address": "Near District Collectorate Complex, Korampallam, Thoothukudi, Tamil Nadu 628101",
    "price": 3200000,
    "priceDisplay": "₹32.00 Lakhs",
    "pricePerSqFt": 1777,
    "pricePerCent": 775000,
    "areaSqFt": 1800,
    "areaCents": 4.13,
    "dimensions": "40 ft x 45 ft",
    "facing": "North-East",
    "roadWidth": "40 ft Wide Blacktop Tar Road",
    "approval": "DTCP & RERA Approved",
    "approvalNumber": "DTCP No. 128/2023 | TNRERA/P/1094/2023",
    "pattaStatus": "Individual Clear Patta Ready",
    "status": "Available",
    "isFeatured": true,
    "description": "An exclusive corner residential plot in the prestigious Pearl Haven gated community, just 3 minutes from the Thoothukudi District Collectorate. Features direct 40ft blacktop road access, sweet drinking groundwater at 35 feet, underground stormwater drainage, and avenue palm trees.",
    "amenities": [
      "40 ft Blacktop Tar Road",
      "Underground Stormwater Drainage",
      "Sweet Groundwater (35 ft)",
      "Solar Street Lighting",
      "24/7 Gated Community Security",
      "Individual Water Connection Point",
      "Avenue Tree Plantation",
      "Children Play Area Reserve"
    ],
    "landmarks": [
      {
        "name": "Thoothukudi District Collectorate",
        "distance": "1.2 km (3 mins)"
      },
      {
        "name": "Spic Nagar Hospital & Clinic",
        "distance": "3.5 km (8 mins)"
      },
      {
        "name": "Tuticorin New Bus Stand",
        "distance": "4.8 km (10 mins)"
      },
      {
        "name": "St. Thomas Matriculation Hr. Sec. School",
        "distance": "1.5 km (4 mins)"
      },
      {
        "name": "Tuticorin VOC Port Trust",
        "distance": "12 km (18 mins)"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "/images/harbour-enclave.jpg",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    "layoutPlotNumber": "Plot #18",
    "coordinates": {
      "lat": 8.7642,
      "lng": 78.1348
    },
    "createdAt": "2026-03-01"
  },
  {
    "id": "plot-2",
    "slug": "palayam-greenfield-residential-plot-nh138",
    "title": "Palayam Greens - Four-Lane Connected Residential Plot",
    "project": "Palayam Greens Executive Layout",
    "location": "Palayamkottai Road",
    "address": "Opposite Government Polytechnic, Palayamkottai Road (NH 138), Thoothukudi 628008",
    "price": 2450000,
    "priceDisplay": "₹24.50 Lakhs",
    "pricePerSqFt": 1633,
    "pricePerCent": 712000,
    "areaSqFt": 1500,
    "areaCents": 3.44,
    "dimensions": "30 ft x 50 ft",
    "facing": "North",
    "roadWidth": "33 ft Blacktop Road",
    "approval": "DTCP Approved",
    "approvalNumber": "DTCP Reg No. 84/2024",
    "pattaStatus": "100% Verified Clean Mother Deed & Patta",
    "status": "Fast Selling",
    "isFeatured": true,
    "description": "Strategically located directly off Palayamkottai 4-lane highway, this rectangular north-facing residential parcel is ideal for immediate villa construction or high-yield land appreciation. Surrounded by established elite residences and top educational institutes.",
    "amenities": [
      "33 ft Metal Tar Road",
      "TNEB Power Line Ready",
      "Borewell Sweet Water Tested",
      "Security Cabin at Entrance",
      "Demarcated Stone Pillars with Fencing",
      "Street Name Boards & Signages"
    ],
    "landmarks": [
      {
        "name": "Government Polytechnic College",
        "distance": "0.8 km (2 mins)"
      },
      {
        "name": "Tuticorin Old Railway Station",
        "distance": "5.2 km (12 mins)"
      },
      {
        "name": "APCM Mahalaxmi College",
        "distance": "2.1 km (5 mins)"
      },
      {
        "name": "Tuticorin Airport (Vagaikulam)",
        "distance": "14 km (18 mins)"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    "layoutPlotNumber": "Plot #07",
    "coordinates": {
      "lat": 8.7885,
      "lng": 78.1124
    },
    "createdAt": "2026-03-05"
  },
  {
    "id": "plot-3",
    "slug": "harbour-view-enclave-east-facing-muthiapuram",
    "title": "Harbour Enclave - East Facing Coastal City Plot",
    "project": "Harbour Enclave Phase 1",
    "location": "Harbour Bypass Road",
    "address": "Near VO Chidambaranar Port Junction, Muthiapuram, Thoothukudi 628005",
    "price": 1980000,
    "priceDisplay": "₹19.80 Lakhs",
    "pricePerSqFt": 1650,
    "pricePerCent": 718000,
    "areaSqFt": 1200,
    "areaCents": 2.75,
    "dimensions": "30 ft x 40 ft",
    "facing": "East",
    "roadWidth": "30 ft Gated Road",
    "approval": "DTCP & RERA Approved",
    "approvalNumber": "TNRERA/LAYOUT/340/2023",
    "pattaStatus": "Instant Sub-Division Patta Transfer",
    "status": "Available",
    "isFeatured": true,
    "description": "An affordable, high-demand east-facing compact plot inside a fully gated community near the booming Harbour Bypass corridor. Designed with modern infrastructure, LED street lamps, and lush avenue greens. Exceptional rental potential for port executives.",
    "amenities": [
      "Gated Entrance Arch with Guard Room",
      "30 ft Concrete Paver & Tar Roads",
      "Individual Underground Water Connections",
      "Street Tree Plantation",
      "High Compound Wall Surrounding Layout",
      "CCTV Surveillance Provision"
    ],
    "landmarks": [
      {
        "name": "VOC Port Administrative Building",
        "distance": "4.5 km (8 mins)"
      },
      {
        "name": "Thermal Power Plant Hospital",
        "distance": "3.0 km (6 mins)"
      },
      {
        "name": "Campbel International School",
        "distance": "2.5 km (5 mins)"
      },
      {
        "name": "Harbour Beach Promenade",
        "distance": "5.0 km (10 mins)"
      }
    ],
    "images": [
      "/images/harbour-enclave.jpg",
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80"
    ],
    "layoutPlotNumber": "Plot #24",
    "coordinates": {
      "lat": 8.7421,
      "lng": 78.1492
    },
    "createdAt": "2026-03-08"
  },
  {
    "id": "plot-4",
    "slug": "millerpuram-central-luxury-plot",
    "title": "Millerpuram Prime - Central City Executive Plot",
    "project": "Millerpuram Royal Enclave",
    "location": "Millerpuram",
    "address": "Near Holy Cross Matriculation School, Millerpuram, Thoothukudi 628002",
    "price": 4800000,
    "priceDisplay": "₹48.00 Lakhs",
    "pricePerSqFt": 2000,
    "pricePerCent": 871200,
    "areaSqFt": 2400,
    "areaCents": 5.51,
    "dimensions": "40 ft x 60 ft",
    "facing": "North",
    "roadWidth": "40 ft Corporation Tar Road",
    "approval": "DTCP & RERA Approved",
    "approvalNumber": "DTCP No. 39/2022",
    "pattaStatus": "Clear Urban Corporation Patta",
    "status": "Reserved",
    "isFeatured": true,
    "description": "Rare opportunity to acquire a full 1 Ground (5.51 Cents) luxury residential plot in the heart of Millerpuram. Prime urban neighborhood with immediate corporation water supply, underground sewage, high-voltage electricity, and walking distance to top hospitals.",
    "amenities": [
      "40 ft Corporation Tar Road",
      "Thoothukudi Corporation Water Supply",
      "Underground Drainage (UGD) Connected",
      "High-Speed Fiber Optic Internet Lines",
      "Street LED Lighting",
      "Clear Boundary Wall Demarcation"
    ],
    "landmarks": [
      {
        "name": "Holy Cross Matric School",
        "distance": "0.4 km (1 min)"
      },
      {
        "name": "Sundaram Arulraj Hospital",
        "distance": "0.9 km (2 mins)"
      },
      {
        "name": "Millerpuram Shopping Hub",
        "distance": "0.6 km (2 mins)"
      },
      {
        "name": "Tuticorin Main Bus Stand",
        "distance": "3.1 km (7 mins)"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "/images/harbour-enclave.jpg"
    ],
    "layoutPlotNumber": "Plot #03",
    "coordinates": {
      "lat": 8.8021,
      "lng": 78.1365
    },
    "createdAt": "2026-03-10"
  },
  {
    "id": "plot-5",
    "slug": "spic-nagar-green-meadows-affordable-plot",
    "title": "Green Meadows - Peaceful Residential Plot",
    "project": "Green Meadows Layout",
    "location": "Spic Nagar",
    "address": "Near Muthiapuram Main Road, Spic Nagar, Thoothukudi 628005",
    "price": 1580000,
    "priceDisplay": "₹15.80 Lakhs",
    "pricePerSqFt": 1316,
    "pricePerCent": 574000,
    "areaSqFt": 1200,
    "areaCents": 2.75,
    "dimensions": "30 ft x 40 ft",
    "facing": "South",
    "roadWidth": "30 ft Tar Road",
    "approval": "DTCP Approved",
    "approvalNumber": "DTCP Approval No. 91/2023",
    "pattaStatus": "Clear Legal Opinion & Patta",
    "status": "Available",
    "isFeatured": false,
    "description": "Value-packed plot situated in a serene green landscape behind Spic Nagar. Ideal for families wanting a calm peaceful living environment with easy commute to VOC Port, industrial centers, and schools.",
    "amenities": [
      "30 ft Wide Layout Road",
      "Clean Potable Water Source",
      "Clear Stone Boundary Markers",
      "Electricity Line Available",
      "Ready for Construction"
    ],
    "landmarks": [
      {
        "name": "Spic Higher Secondary School",
        "distance": "1.2 km (3 mins)"
      },
      {
        "name": "Muthiapuram Railway Station",
        "distance": "2.0 km (5 mins)"
      },
      {
        "name": "Hare Island Coastal Park",
        "distance": "6.5 km (12 mins)"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80"
    ],
    "layoutPlotNumber": "Plot #11",
    "coordinates": {
      "lat": 8.7368,
      "lng": 78.1388
    },
    "createdAt": "2026-03-12"
  },
  {
    "id": "plot-6",
    "slug": "ettayapuram-avenue-high-growth-plot",
    "title": "Ettayapuram Gateway - High Growth Investment Land",
    "project": "Ettayapuram Smart Avenue",
    "location": "Ettayapuram Road",
    "address": "Near New SIPCOT Industrial Zone, Ettayapuram Road, Thoothukudi 628002",
    "price": 1420000,
    "priceDisplay": "₹14.20 Lakhs",
    "pricePerSqFt": 1183,
    "pricePerCent": 516000,
    "areaSqFt": 1200,
    "areaCents": 2.75,
    "dimensions": "30 ft x 40 ft",
    "facing": "East",
    "roadWidth": "33 ft Blacktop Road",
    "approval": "DTCP Approved",
    "approvalNumber": "DTCP No. 177/2023",
    "pattaStatus": "Verified Mother Deed & Patta",
    "status": "Available",
    "isFeatured": false,
    "description": "High-growth corridor plot located close to the upcoming manufacturing clusters and New SIPCOT. Excellent early investment with confirmed capital appreciation trajectory over the next 2-3 years.",
    "amenities": [
      "33 ft Blacktop Road",
      "Street Lighting System",
      "Water Drainage Channels",
      "Gated Layout Boundary",
      "Ready Electric Transformer"
    ],
    "landmarks": [
      {
        "name": "New SIPCOT Phase 2",
        "distance": "2.8 km (5 mins)"
      },
      {
        "name": "VOC College",
        "distance": "4.2 km (8 mins)"
      },
      {
        "name": "Tuticorin Old Bus Stand",
        "distance": "6.0 km (12 mins)"
      }
    ],
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80"
    ],
    "layoutPlotNumber": "Plot #32",
    "coordinates": {
      "lat": 8.8251,
      "lng": 78.1215
    },
    "createdAt": "2026-03-14"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    "id": "project-ap-rajan",
    "slug": "ap-rajan-garden-tharuvaikulam",
    "name": "AP Rajan Garden – Premium Plots & House Construction",
    "tagline": "Your Plot. Your Home. Your Future! Walking Distance to Beach",
    "location": "Tharuvaikulam, Thoothukudi",
    "address": "Thalamuthunagar Main Road Junction, ECR (Thoothukudi-Rameswaram Road), Tharuvaikulam, Thoothukudi, Tamil Nadu 628105",
    "totalPlots": 181,
    "availablePlots": 113,
    "soldPlots": 46,
    "priceRange": "₹3.5 L – ₹18.5 L (Plots) | ₹19.5 L – ₹45.0 L (Plot + House)",
    "plotSizes": "542 to 2966 sq.ft (1.3 to 6.8 Cents)",
    "approval": "Panchayat & Government Approved",
    "approvalNumber": "Panchayat Approved Layout 145+36 | Clear Mother Deed & Patta",
    "description": "AP Rajan Garden is a landmark 181-plot coastal residential development in Tharuvaikulam, Thoothukudi, just a few minutes’ walk to the beach. Directly positioned off the East Coast Road (ECR Thoothukudi-Rameswaram) and Thalamuthunagar Main Road with 36-ft wide blacktop roads, 24-hour bus service, sweet potable groundwater, individual water tank construction, and comprehensive plot + house construction packages with up to 90% bank loan financing.",
    "image": "/images/ap-rajan/layout-masterplan-table.jpg",
    "gallery": [
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/ap-rajan/brochure-front.jpg",
      "/images/hero-aerial-golden.jpg",
      "/images/bento-parcels-aerial.jpg"
    ],
    "brochureImages": [
      "/images/ap-rajan/layout-masterplan-table.jpg",
      "/images/ap-rajan/brochure-front.jpg"
    ],
    "amenities": [
      "36-ft Wide Tar Road (36 அடி அகலமான தார் சாலை)",
      "Walking Distance to the Beach (கடற்கரை மிக அருகில்)",
      "24-Hour Bus Service (24 மணி நேர பேருந்து வசதி)",
      "Thoothukudi-Rameswaram ECR Highway Junction",
      "Electricity Line Ready (மின்சார வசதி)",
      "Sweet Potable Groundwater (நல்ல நிலத்தடி நீர்)",
      "Water Line Available Along Layout Roads",
      "Individual Plot Water Tank Construction",
      "Public Park & Green Reserve (பொது பூங்கா)",
      "Fertile Solid Ground (வளமான பூமி)",
      "Gated Community with 24-Hour Security",
      "Up to 90% Bank Loan Financing Available",
      "Customized House Plans & Construction Support"
    ],
    "landmarks": [
      {
        "name": "Tharuvaikulam Beach",
        "distance": "3 mins walk (400m)"
      },
      {
        "name": "ECR Thoothukudi-Rameswaram Highway",
        "distance": "1 min (200m)"
      },
      {
        "name": "Thalamuthunagar Bus Junction",
        "distance": "2 mins (800m)"
      },
      {
        "name": "Reported 53-Acre Tourism Development Area",
        "distance": "3 mins (1.2 km)"
      },
      {
        "name": "St. Michael Church & Local Temples",
        "distance": "2 mins (700m)"
      },
      {
        "name": "Coastal Resorts & Seafood Restaurants",
        "distance": "4 mins (1.5 km)"
      },
      {
        "name": "Thoothukudi Old Bus Stand & Town",
        "distance": "15 mins (8.5 km)"
      },
      {
        "name": "Tuticorin Railway Station",
        "distance": "16 mins (9.2 km)"
      },
      {
        "name": "VOC Port / Tuticorin Harbour",
        "distance": "20 mins (13 km)"
      },
      {
        "name": "Tuticorin Airport (Vagaikulam)",
        "distance": "25 mins (19 km)"
      }
    ],
    "layoutPlots": [
      {
        "number": 1,
        "size": "2029 sq.ft",
        "cents": 4.66,
        "sqft": 2029,
        "phase": "Phase 1",
        "facing": "North-East",
        "status": "Available",
        "price": "₹12.81 Lakhs"
      },
      {
        "number": 2,
        "size": "1580 sq.ft",
        "cents": 3.63,
        "sqft": 1580,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹9.98 Lakhs"
      },
      {
        "number": 3,
        "size": "1575 sq.ft",
        "cents": 3.61,
        "sqft": 1575,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Reserved",
        "price": "₹9.94 Lakhs"
      },
      {
        "number": 4,
        "size": "1499 sq.ft",
        "cents": 3.44,
        "sqft": 1499,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹9.46 Lakhs"
      },
      {
        "number": 5,
        "size": "1423 sq.ft",
        "cents": 3.27,
        "sqft": 1423,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.98 Lakhs"
      },
      {
        "number": 6,
        "size": "1347 sq.ft",
        "cents": 3.09,
        "sqft": 1347,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.51 Lakhs"
      },
      {
        "number": 7,
        "size": "645 sq.ft",
        "cents": 1.48,
        "sqft": 645,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.07 Lakhs"
      },
      {
        "number": 8,
        "size": "626 sq.ft",
        "cents": 1.44,
        "sqft": 626,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹3.95 Lakhs"
      },
      {
        "number": 9,
        "size": "631 sq.ft",
        "cents": 1.5,
        "sqft": 631,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹4.12 Lakhs"
      },
      {
        "number": 10,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 11,
        "size": "645 sq.ft",
        "cents": 1.48,
        "sqft": 645,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.07 Lakhs"
      },
      {
        "number": 12,
        "size": "642 sq.ft",
        "cents": 1.47,
        "sqft": 642,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.05 Lakhs"
      },
      {
        "number": 13,
        "size": "636 sq.ft",
        "cents": 1.46,
        "sqft": 636,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Reserved",
        "price": "₹4.01 Lakhs"
      },
      {
        "number": 14,
        "size": "637 sq.ft",
        "cents": 1.46,
        "sqft": 637,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.02 Lakhs"
      },
      {
        "number": 15,
        "size": "542 sq.ft",
        "cents": 1.47,
        "sqft": 542,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.06 Lakhs"
      },
      {
        "number": 16,
        "size": "574 sq.ft",
        "cents": 1.32,
        "sqft": 574,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹3.62 Lakhs"
      },
      {
        "number": 17,
        "size": "751 sq.ft",
        "cents": 1.72,
        "sqft": 751,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹4.74 Lakhs"
      },
      {
        "number": 18,
        "size": "1628 sq.ft",
        "cents": 3.74,
        "sqft": 1628,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹10.28 Lakhs"
      },
      {
        "number": 19,
        "size": "1136 sq.ft",
        "cents": 2.61,
        "sqft": 1136,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹7.17 Lakhs"
      },
      {
        "number": 20,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 21,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 22,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 23,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 24,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 25,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Reserved",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 26,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 27,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 28,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 29,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 30,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Reserved",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 31,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 32,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 33,
        "size": "1598 sq.ft",
        "cents": 3.67,
        "sqft": 1598,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹10.09 Lakhs"
      },
      {
        "number": 34,
        "size": "1653 sq.ft",
        "cents": 3.8,
        "sqft": 1653,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹10.44 Lakhs"
      },
      {
        "number": 35,
        "size": "1641 sq.ft",
        "cents": 3.77,
        "sqft": 1641,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Reserved",
        "price": "₹10.36 Lakhs"
      },
      {
        "number": 36,
        "size": "1275 sq.ft",
        "cents": 2.93,
        "sqft": 1275,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.05 Lakhs"
      },
      {
        "number": 37,
        "size": "1312 sq.ft",
        "cents": 3.01,
        "sqft": 1312,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹8.28 Lakhs"
      },
      {
        "number": 38,
        "size": "1653 sq.ft",
        "cents": 3.8,
        "sqft": 1653,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.44 Lakhs"
      },
      {
        "number": 39,
        "size": "1598 sq.ft",
        "cents": 3.67,
        "sqft": 1598,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.09 Lakhs"
      },
      {
        "number": 40,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 41,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 42,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 43,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 44,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 45,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 46,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 47,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 48,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 49,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 50,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 51,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 52,
        "size": "1148 sq.ft",
        "cents": 2.64,
        "sqft": 1148,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.25 Lakhs"
      },
      {
        "number": 53,
        "size": "1136 sq.ft",
        "cents": 2.61,
        "sqft": 1136,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹7.17 Lakhs"
      },
      {
        "number": 54,
        "size": "1628 sq.ft",
        "cents": 3.74,
        "sqft": 1628,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹10.28 Lakhs"
      },
      {
        "number": 55,
        "size": "1318 sq.ft",
        "cents": 3.03,
        "sqft": 1318,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Reserved",
        "price": "₹8.32 Lakhs"
      },
      {
        "number": 56,
        "size": "1146 sq.ft",
        "cents": 2.63,
        "sqft": 1146,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹7.23 Lakhs"
      },
      {
        "number": 57,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Reserved",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 58,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 59,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 60,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 61,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 62,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 63,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 64,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Reserved",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 65,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 66,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 67,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 68,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 69,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 70,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 71,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Reserved",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 72,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 73,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 74,
        "size": "646 sq.ft",
        "cents": 1.48,
        "sqft": 646,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹4.08 Lakhs"
      },
      {
        "number": 75,
        "size": "1132 sq.ft",
        "cents": 2.6,
        "sqft": 1132,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹7.15 Lakhs"
      },
      {
        "number": 76,
        "size": "2156 sq.ft",
        "cents": 4.95,
        "sqft": 2156,
        "phase": "Phase 1",
        "facing": "South-East",
        "status": "Available",
        "price": "₹13.61 Lakhs"
      },
      {
        "number": 77,
        "size": "1356 sq.ft",
        "cents": 3.11,
        "sqft": 1356,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹8.56 Lakhs"
      },
      {
        "number": 78,
        "size": "1627 sq.ft",
        "cents": 3.74,
        "sqft": 1627,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹10.27 Lakhs"
      },
      {
        "number": 79,
        "size": "1071 sq.ft",
        "cents": 2.46,
        "sqft": 1071,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹6.76 Lakhs"
      },
      {
        "number": 80,
        "size": "1356 sq.ft",
        "cents": 3.11,
        "sqft": 1356,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹8.56 Lakhs"
      },
      {
        "number": 81,
        "size": "1356 sq.ft",
        "cents": 3.11,
        "sqft": 1356,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Reserved",
        "price": "₹8.56 Lakhs"
      },
      {
        "number": 82,
        "size": "2156 sq.ft",
        "cents": 4.95,
        "sqft": 2156,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹13.61 Lakhs"
      },
      {
        "number": 83,
        "size": "1515 sq.ft",
        "cents": 3.48,
        "sqft": 1515,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹9.56 Lakhs"
      },
      {
        "number": 84,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 85,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 86,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 87,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 88,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Reserved",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 89,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 90,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 91,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 92,
        "size": "1722 sq.ft",
        "cents": 3.95,
        "sqft": 1722,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹10.87 Lakhs"
      },
      {
        "number": 93,
        "size": "1532 sq.ft",
        "cents": 3.52,
        "sqft": 1532,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹9.67 Lakhs"
      },
      {
        "number": 94,
        "size": "1291 sq.ft",
        "cents": 2.96,
        "sqft": 1291,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹8.15 Lakhs"
      },
      {
        "number": 95,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 96,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 97,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 98,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 99,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Reserved",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 100,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 101,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 102,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 103,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Reserved",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 104,
        "size": "1277 sq.ft",
        "cents": 2.93,
        "sqft": 1277,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹8.06 Lakhs"
      },
      {
        "number": 105,
        "size": "1423 sq.ft",
        "cents": 3.27,
        "sqft": 1423,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹8.98 Lakhs"
      },
      {
        "number": 106,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 107,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 108,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Reserved",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 109,
        "size": "1535 sq.ft",
        "cents": 3.52,
        "sqft": 1535,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹9.69 Lakhs"
      },
      {
        "number": 110,
        "size": "1230 sq.ft",
        "cents": 2.82,
        "sqft": 1230,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹7.77 Lakhs"
      },
      {
        "number": 111,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 112,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Available",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 113,
        "size": "1308 sq.ft",
        "cents": 3,
        "sqft": 1308,
        "phase": "Phase 1",
        "facing": "North",
        "status": "Sold",
        "price": "₹8.26 Lakhs"
      },
      {
        "number": 114,
        "size": "1422 sq.ft",
        "cents": 3.26,
        "sqft": 1422,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹8.98 Lakhs"
      },
      {
        "number": 115,
        "size": "1277 sq.ft",
        "cents": 2.93,
        "sqft": 1277,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹8.06 Lakhs"
      },
      {
        "number": 116,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Reserved",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 117,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 118,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 119,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 120,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 121,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Reserved",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 122,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 123,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 124,
        "size": "1453 sq.ft",
        "cents": 3.34,
        "sqft": 1453,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹9.17 Lakhs"
      },
      {
        "number": 125,
        "size": "1291 sq.ft",
        "cents": 2.96,
        "sqft": 1291,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Available",
        "price": "₹8.15 Lakhs"
      },
      {
        "number": 126,
        "size": "1923 sq.ft",
        "cents": 4.41,
        "sqft": 1923,
        "phase": "Phase 1",
        "facing": "East",
        "status": "Sold",
        "price": "₹12.14 Lakhs"
      },
      {
        "number": 127,
        "size": "1358 sq.ft",
        "cents": 3.12,
        "sqft": 1358,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹8.57 Lakhs"
      },
      {
        "number": 128,
        "size": "1291 sq.ft",
        "cents": 2.96,
        "sqft": 1291,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹8.15 Lakhs"
      },
      {
        "number": 129,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 130,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Reserved",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 131,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 132,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 133,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 134,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 135,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 136,
        "size": "1528 sq.ft",
        "cents": 3.51,
        "sqft": 1528,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.65 Lakhs"
      },
      {
        "number": 137,
        "size": "1345 sq.ft",
        "cents": 3.09,
        "sqft": 1345,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹8.49 Lakhs"
      },
      {
        "number": 138,
        "size": "1497 sq.ft",
        "cents": 3.44,
        "sqft": 1497,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Reserved",
        "price": "₹9.45 Lakhs"
      },
      {
        "number": 139,
        "size": "1376 sq.ft",
        "cents": 3.16,
        "sqft": 1376,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Sold",
        "price": "₹8.68 Lakhs"
      },
      {
        "number": 140,
        "size": "1376 sq.ft",
        "cents": 3.16,
        "sqft": 1376,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹8.68 Lakhs"
      },
      {
        "number": 141,
        "size": "1482 sq.ft",
        "cents": 3.4,
        "sqft": 1482,
        "phase": "Phase 1",
        "facing": "West",
        "status": "Available",
        "price": "₹9.35 Lakhs"
      },
      {
        "number": 142,
        "size": "642 sq.ft",
        "cents": 1.47,
        "sqft": 642,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹4.05 Lakhs"
      },
      {
        "number": 143,
        "size": "642 sq.ft",
        "cents": 1.47,
        "sqft": 642,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹4.05 Lakhs"
      },
      {
        "number": 144,
        "size": "642 sq.ft",
        "cents": 1.47,
        "sqft": 642,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Sold",
        "price": "₹4.05 Lakhs"
      },
      {
        "number": 145,
        "size": "642 sq.ft",
        "cents": 1.47,
        "sqft": 642,
        "phase": "Phase 1",
        "facing": "South",
        "status": "Available",
        "price": "₹4.05 Lakhs"
      },
      {
        "number": 146,
        "size": "1075 sq.ft",
        "cents": 2.47,
        "sqft": 1075,
        "phase": "Phase 2",
        "facing": "East",
        "status": "Available",
        "price": "₹6.78 Lakhs"
      },
      {
        "number": 147,
        "size": "1113 sq.ft",
        "cents": 2.56,
        "sqft": 1113,
        "phase": "Phase 2",
        "facing": "East",
        "status": "Available",
        "price": "₹7.03 Lakhs"
      },
      {
        "number": 148,
        "size": "1374 sq.ft",
        "cents": 3.15,
        "sqft": 1374,
        "phase": "Phase 2",
        "facing": "East",
        "status": "Sold",
        "price": "₹8.67 Lakhs"
      },
      {
        "number": 149,
        "size": "1634 sq.ft",
        "cents": 3.75,
        "sqft": 1634,
        "phase": "Phase 2",
        "facing": "East",
        "status": "Available",
        "price": "₹10.32 Lakhs"
      },
      {
        "number": 150,
        "size": "1889 sq.ft",
        "cents": 4.34,
        "sqft": 1889,
        "phase": "Phase 2",
        "facing": "East",
        "status": "Available",
        "price": "₹11.93 Lakhs"
      },
      {
        "number": 151,
        "size": "2103 sq.ft",
        "cents": 4.83,
        "sqft": 2103,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Reserved",
        "price": "₹13.27 Lakhs"
      },
      {
        "number": 152,
        "size": "2112 sq.ft",
        "cents": 4.85,
        "sqft": 2112,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Available",
        "price": "₹13.33 Lakhs"
      },
      {
        "number": 153,
        "size": "2099 sq.ft",
        "cents": 4.82,
        "sqft": 2099,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Sold",
        "price": "₹13.25 Lakhs"
      },
      {
        "number": 154,
        "size": "2810 sq.ft",
        "cents": 6.45,
        "sqft": 2810,
        "phase": "Phase 2",
        "facing": "North-East",
        "status": "Available",
        "price": "₹17.74 Lakhs"
      },
      {
        "number": 155,
        "size": "2110 sq.ft",
        "cents": 4.84,
        "sqft": 2110,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Available",
        "price": "₹13.32 Lakhs"
      },
      {
        "number": 156,
        "size": "2110 sq.ft",
        "cents": 4.84,
        "sqft": 2110,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Available",
        "price": "₹13.32 Lakhs"
      },
      {
        "number": 157,
        "size": "2109 sq.ft",
        "cents": 4.84,
        "sqft": 2109,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Sold",
        "price": "₹13.32 Lakhs"
      },
      {
        "number": 158,
        "size": "2109 sq.ft",
        "cents": 4.84,
        "sqft": 2109,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Available",
        "price": "₹13.31 Lakhs"
      },
      {
        "number": 159,
        "size": "2109 sq.ft",
        "cents": 4.84,
        "sqft": 2109,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Reserved",
        "price": "₹13.31 Lakhs"
      },
      {
        "number": 160,
        "size": "2108 sq.ft",
        "cents": 4.84,
        "sqft": 2108,
        "phase": "Phase 2",
        "facing": "North",
        "status": "Available",
        "price": "₹13.31 Lakhs"
      },
      {
        "number": 161,
        "size": "2966 sq.ft",
        "cents": 6.81,
        "sqft": 2966,
        "phase": "Phase 2",
        "facing": "North-East",
        "status": "Available",
        "price": "₹18.73 Lakhs"
      },
      {
        "number": 162,
        "size": "2671 sq.ft",
        "cents": 6.13,
        "sqft": 2671,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Available",
        "price": "₹16.86 Lakhs"
      },
      {
        "number": 163,
        "size": "2113 sq.ft",
        "cents": 4.85,
        "sqft": 2113,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Sold",
        "price": "₹13.34 Lakhs"
      },
      {
        "number": 164,
        "size": "2113 sq.ft",
        "cents": 4.85,
        "sqft": 2113,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Available",
        "price": "₹13.34 Lakhs"
      },
      {
        "number": 165,
        "size": "2113 sq.ft",
        "cents": 4.85,
        "sqft": 2113,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Available",
        "price": "₹13.34 Lakhs"
      },
      {
        "number": 166,
        "size": "2113 sq.ft",
        "cents": 4.85,
        "sqft": 2113,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Available",
        "price": "₹13.34 Lakhs"
      },
      {
        "number": 167,
        "size": "2114 sq.ft",
        "cents": 4.85,
        "sqft": 2114,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Sold",
        "price": "₹13.34 Lakhs"
      },
      {
        "number": 168,
        "size": "2359 sq.ft",
        "cents": 5.41,
        "sqft": 2359,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Available",
        "price": "₹14.89 Lakhs"
      },
      {
        "number": 169,
        "size": "2102 sq.ft",
        "cents": 4.83,
        "sqft": 2102,
        "phase": "Phase 2",
        "facing": "South",
        "status": "Reserved",
        "price": "₹13.27 Lakhs"
      },
      {
        "number": 170,
        "size": "2115 sq.ft",
        "cents": 4.85,
        "sqft": 2115,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.35 Lakhs"
      },
      {
        "number": 171,
        "size": "2115 sq.ft",
        "cents": 4.86,
        "sqft": 2115,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.35 Lakhs"
      },
      {
        "number": 172,
        "size": "2115 sq.ft",
        "cents": 4.86,
        "sqft": 2115,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Sold",
        "price": "₹13.35 Lakhs"
      },
      {
        "number": 173,
        "size": "2115 sq.ft",
        "cents": 4.86,
        "sqft": 2115,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 174,
        "size": "2116 sq.ft",
        "cents": 4.86,
        "sqft": 2116,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 175,
        "size": "2116 sq.ft",
        "cents": 4.86,
        "sqft": 2116,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 176,
        "size": "2116 sq.ft",
        "cents": 4.86,
        "sqft": 2116,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Reserved",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 177,
        "size": "2116 sq.ft",
        "cents": 4.86,
        "sqft": 2116,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 178,
        "size": "2117 sq.ft",
        "cents": 4.86,
        "sqft": 2117,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Sold",
        "price": "₹13.36 Lakhs"
      },
      {
        "number": 179,
        "size": "2100 sq.ft",
        "cents": 4.82,
        "sqft": 2100,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹13.26 Lakhs"
      },
      {
        "number": 180,
        "size": "1382 sq.ft",
        "cents": 3.17,
        "sqft": 1382,
        "phase": "Phase 2",
        "facing": "West",
        "status": "Available",
        "price": "₹8.73 Lakhs"
      },
      {
        "number": 181,
        "size": "2574 sq.ft",
        "cents": 5.91,
        "sqft": 2574,
        "phase": "Phase 2",
        "facing": "North-West",
        "status": "Available",
        "price": "₹16.25 Lakhs"
      }
    ]
  },
  {
    "id": "project-1",
    "slug": "pearl-haven-layout",
    "name": "Pearl Haven Layout",
    "tagline": "Signature Gated Villa Plots Near Thoothukudi Collectorate",
    "location": "Korampallam, Thoothukudi",
    "address": "Opp. Collectorate Administrative Enclave, Korampallam, Thoothukudi 628101",
    "totalPlots": 48,
    "availablePlots": 14,
    "soldPlots": 34,
    "priceRange": "₹22.5 L – ₹45.0 L",
    "plotSizes": "1200 to 2400 sq.ft (2.75 to 5.5 Cents)",
    "approval": "DTCP & TNRERA Approved",
    "approvalNumber": "DTCP No. 128/2023 | TNRERA/P/1094/2023",
    "description": "Pearl Haven represents the pinnacle of residential plotted development in Thoothukudi. Situated in high-demand Korampallam, this master-planned community combines manicured 40ft blacktop avenues, underground stormwater drains, continuous sweet drinking water, and dedicated green reserves.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "/images/harbour-enclave.jpg",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    "amenities": [
      "40 ft & 33 ft Blacktop Tar Roads",
      "Underground Storm Drainage Network",
      "Individual Sweet Water Connections",
      "Solar Street Lighting Grid",
      "24/7 Gated Security with CCTV",
      "Perimeter Security Compound Wall",
      "Avenue Palms & Landscaped Parks",
      "Immediate Bank Loan Approval (SBI, HDFC, Canara)"
    ],
    "landmarks": [
      {
        "name": "District Collectorate Complex",
        "distance": "1.2 km"
      },
      {
        "name": "Tuticorin New Bus Stand",
        "distance": "4.8 km"
      },
      {
        "name": "St. Thomas School",
        "distance": "1.5 km"
      },
      {
        "name": "VOC Port Terminal",
        "distance": "12 km"
      }
    ],
    "layoutPlots": [
      {
        "number": 1,
        "size": "2400 sq.ft",
        "cents": 5.51,
        "facing": "North",
        "status": "Sold",
        "price": "₹42.0 L"
      },
      {
        "number": 2,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "North",
        "status": "Sold",
        "price": "₹31.5 L"
      },
      {
        "number": 3,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "North",
        "status": "Reserved",
        "price": "₹31.5 L"
      },
      {
        "number": 4,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "East",
        "status": "Available",
        "price": "₹26.2 L"
      },
      {
        "number": 5,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "East",
        "status": "Available",
        "price": "₹26.2 L"
      },
      {
        "number": 6,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Sold",
        "price": "₹21.0 L"
      },
      {
        "number": 7,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Available",
        "price": "₹21.0 L"
      },
      {
        "number": 8,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Sold",
        "price": "₹26.2 L"
      },
      {
        "number": 9,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "North",
        "status": "Sold",
        "price": "₹31.5 L"
      },
      {
        "number": 10,
        "size": "2400 sq.ft",
        "cents": 5.51,
        "facing": "North-East",
        "status": "Available",
        "price": "₹43.5 L"
      },
      {
        "number": 11,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "South",
        "status": "Sold",
        "price": "₹25.8 L"
      },
      {
        "number": 12,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "South",
        "status": "Available",
        "price": "₹20.8 L"
      },
      {
        "number": 13,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "South",
        "status": "Available",
        "price": "₹25.8 L"
      },
      {
        "number": 14,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "South",
        "status": "Sold",
        "price": "₹31.0 L"
      },
      {
        "number": 15,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "East",
        "status": "Reserved",
        "price": "₹26.2 L"
      },
      {
        "number": 16,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Sold",
        "price": "₹21.0 L"
      },
      {
        "number": 17,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Sold",
        "price": "₹26.2 L"
      },
      {
        "number": 18,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "North-East",
        "status": "Available",
        "price": "₹32.0 L"
      }
    ]
  },
  {
    "id": "project-2",
    "slug": "palayam-greens-executive-layout",
    "name": "Palayam Greens Executive Layout",
    "tagline": "High-Appreciation Plotted Enclave on 4-Lane Highway",
    "location": "Palayamkottai Road, Thoothukudi",
    "address": "Opposite Government Polytechnic, NH 138, Thoothukudi 628008",
    "totalPlots": 36,
    "availablePlots": 9,
    "soldPlots": 27,
    "priceRange": "₹19.5 L – ₹38.0 L",
    "plotSizes": "1200 to 2200 sq.ft (2.75 to 5.0 Cents)",
    "approval": "DTCP Approved",
    "approvalNumber": "DTCP Reg No. 84/2024",
    "description": "Located directly along the bustling Palayamkottai 4-lane arterial road, Palayam Greens connects you to city conveniences while offering tranquil residential living. Clean documentation, high sweet water table, and ready for immediate construction.",
    "image": "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    "amenities": [
      "Direct NH-138 Highway Access",
      "33 ft Blacktop Tar Roads",
      "Electricity Substation Adjacent",
      "Pure Ground Sweet Water",
      "Clear Stone Demarcations",
      "Security Post & Street Lights"
    ],
    "landmarks": [
      {
        "name": "Govt Polytechnic",
        "distance": "0.8 km"
      },
      {
        "name": "APCM College",
        "distance": "2.1 km"
      },
      {
        "name": "Tuticorin Old Railway Station",
        "distance": "5.2 km"
      },
      {
        "name": "Vagaikulam Airport",
        "distance": "14 km"
      }
    ],
    "layoutPlots": [
      {
        "number": 1,
        "size": "2000 sq.ft",
        "cents": 4.59,
        "facing": "North",
        "status": "Sold",
        "price": "₹34.0 L"
      },
      {
        "number": 2,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Sold",
        "price": "₹25.0 L"
      },
      {
        "number": 3,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Available",
        "price": "₹25.0 L"
      },
      {
        "number": 4,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Sold",
        "price": "₹20.0 L"
      },
      {
        "number": 5,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Available",
        "price": "₹20.0 L"
      },
      {
        "number": 6,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Sold",
        "price": "₹24.5 L"
      },
      {
        "number": 7,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Available",
        "price": "₹24.5 L"
      },
      {
        "number": 8,
        "size": "1800 sq.ft",
        "cents": 4.13,
        "facing": "South",
        "status": "Sold",
        "price": "₹29.0 L"
      }
    ]
  },
  {
    "id": "project-3",
    "slug": "harbour-enclave-phase-1",
    "name": "Harbour Enclave Phase 1",
    "tagline": "Modern Plotted Community Near VOC Port Corridor",
    "location": "Harbour Bypass Road, Thoothukudi",
    "address": "Near Muthiapuram Junction, Harbour Bypass, Thoothukudi 628005",
    "totalPlots": 40,
    "availablePlots": 11,
    "soldPlots": 29,
    "priceRange": "₹18.0 L – ₹32.0 L",
    "plotSizes": "1200 to 1800 sq.ft (2.75 to 4.13 Cents)",
    "approval": "DTCP & RERA Approved",
    "approvalNumber": "TNRERA/LAYOUT/340/2023",
    "description": "A contemporary master-planned plotted layout engineered to cater to professionals, port personnel, and NRI investors seeking secure, appreciation-oriented real estate in coastal Thoothukudi.",
    "image": "/images/harbour-enclave.jpg",
    "gallery": [
      "/images/harbour-enclave.jpg",
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80"
    ],
    "amenities": [
      "Gated Compound with Security Gate",
      "30 ft Wide Blacktop Roads",
      "Children Play Park & Walking Track",
      "Individual Water Connection",
      "Avenue Plantations",
      "Immediate Title Deed Handover"
    ],
    "landmarks": [
      {
        "name": "VOC Port Administrative Building",
        "distance": "4.5 km"
      },
      {
        "name": "Thermal Power Plant Hospital",
        "distance": "3.0 km"
      },
      {
        "name": "Harbour Beach Promenade",
        "distance": "5.0 km"
      }
    ],
    "layoutPlots": [
      {
        "number": 21,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Sold",
        "price": "₹19.5 L"
      },
      {
        "number": 22,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Sold",
        "price": "₹19.5 L"
      },
      {
        "number": 23,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Sold",
        "price": "₹24.0 L"
      },
      {
        "number": 24,
        "size": "1200 sq.ft",
        "cents": 2.75,
        "facing": "East",
        "status": "Available",
        "price": "₹19.8 L"
      },
      {
        "number": 25,
        "size": "1500 sq.ft",
        "cents": 3.44,
        "facing": "North",
        "status": "Available",
        "price": "₹24.5 L"
      }
    ]
  }
];

export const HOUSE_MODELS: HouseModel[] = [
  {
    "id": "house-basic",
    "title": "Coastal Starter Villa",
    "type": "Basic",
    "bhk": "2 BHK Independent Home",
    "builtupSqFt": 750,
    "minPlotCents": 1.48,
    "estimatedCost": "₹16.5 Lakhs (Construction)",
    "turnaroundMonths": 4,
    "highlights": [
      "Engineered for 1.48 to 2.5 cent plots",
      "Spacious living hall & modular kitchen",
      "2 Bedrooms with 2 attached bathrooms",
      "RCC roof structure with rainwater harvesting",
      "Borewell water pump & individual septic tank",
      "10-Year structural quality warranty"
    ],
    "image": "/images/hero-aerial-golden.jpg"
  },
  {
    "id": "house-premium",
    "title": "Executive Coastal Residence",
    "type": "Premium",
    "bhk": "3 BHK Contemporary Villa",
    "builtupSqFt": 1250,
    "minPlotCents": 2.64,
    "estimatedCost": "₹26.5 Lakhs (Construction)",
    "turnaroundMonths": 6,
    "highlights": [
      "Ideal for 2.64 to 3.75 cent plots",
      "Large master bedroom with balcony view",
      "Covered portico car parking space",
      "Vastu-compliant architecture & pooja room",
      "Premium vitrified tile flooring & teakwood main door",
      "Solar water heater conduit pre-installed"
    ],
    "image": "/images/bento-parcels-aerial.jpg"
  },
  {
    "id": "house-luxury",
    "title": "Signature Beachside Duplex",
    "type": "Luxury",
    "bhk": "4 BHK Duplex Villa",
    "builtupSqFt": 1850,
    "minPlotCents": 4.5,
    "estimatedCost": "₹39.5 Lakhs (Construction)",
    "turnaroundMonths": 8,
    "highlights": [
      "Tailored for 4.5 to 6.8 cent large parcels",
      "Double-height ceiling living lounge & terrace garden",
      "Spacious sea-breeze viewing sit-out & pergola",
      "Granite kitchen countertops & Jaguar bathroom fittings",
      "Smart video door phone & automated security lights",
      "Dedicated domestic helper quarters"
    ],
    "image": "/images/ap-rajan/layout-masterplan-table.jpg"
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    "id": "plan-starter",
    "tier": "Starter",
    "name": "Starter Agent",
    "price": 999,
    "listingLimit": 5,
    "priceMonthly": 999,
    "priceYearly": 9999,
    "tagline": "Best for individual brokers starting in Thoothukudi",
    "plotListingLimit": 5,
    "leadAlerts": "Standard (Email)",
    "commissionRate": "Direct Seller Commission",
    "features": [
      "List up to 5 verified plots",
      "Standard lead delivery via Email",
      "Access to AP Rajan Garden layout maps",
      "Standard seller directory listing",
      "Basic CRM to track client calls"
    ],
    "includedTools": [
      "Plot Listing Manager",
      "Lead Inbox",
      "PDF Brochure Viewer"
    ]
  },
  {
    "id": "plan-pro",
    "tier": "Pro",
    "name": "Pro Channel Partner",
    "price": 2499,
    "listingLimit": 25,
    "priceMonthly": 2499,
    "priceYearly": 24999,
    "popular": true,
    "badge": "MOST POPULAR",
    "tagline": "For active real estate consultants & property firms",
    "plotListingLimit": 25,
    "leadAlerts": "Instant WhatsApp & SMS",
    "commissionRate": "Special Partner Commission + Bonus",
    "features": [
      "List up to 25 plots with priority ranking",
      "Instant WhatsApp & SMS buyer lead alerts",
      "Verified Channel Partner badge",
      "Direct client site visit booking with free cab pick-up",
      "Up to 90% bank loan processing desk assistance",
      "Personalized brochures with your contact details"
    ],
    "includedTools": [
      "Instant WhatsApp Alerts",
      "Site Visit Dispatcher",
      "Loan Pre-Check Tool",
      "Custom Flyer Generator"
    ]
  },
  {
    "id": "plan-elite",
    "tier": "Elite",
    "name": "Elite Developer / Agency",
    "price": 5999,
    "listingLimit": 100,
    "priceMonthly": 5999,
    "priceYearly": 59999,
    "badge": "ENTERPRISE",
    "tagline": "For real estate agencies and project promoters",
    "plotListingLimit": 100,
    "leadAlerts": "Priority Lead Dispatch",
    "commissionRate": "Direct Developer SLA + Highest Margins",
    "features": [
      "Unlimited plot listings & project showcases",
      "Priority lead routing before regular distribution",
      "Dedicated relationship manager & VIP phone desk",
      "Featured placement on homepage banner & newsletters",
      "Full white-label marketing kit & branded rate cards",
      "Direct online plot reservation & token payment gateway"
    ],
    "includedTools": [
      "Automated Lead Distribution",
      "VIP Support Desk",
      "Online Token Booking",
      "Dedicated Project Page"
    ]
  }
];

export const INITIAL_SELLERS: Seller[] = [
  {
    "id": "seller-1",
    "name": "R. Senthil Kumar",
    "agencyName": "Rajan Real Estate & Promoters",
    "phone": "+91 97877 09718",
    "email": "senthil@rajanpromoters.com",
    "location": "Thalamuthunagar, Thoothukudi",
    "licenseNumber": "TN-TUTY-REA-084",
    "subscriptionTier": "Elite",
    "subscriptionStatus": "Active",
    "subscriptionExpiry": "2027-04-15",
    "verified": true,
    "listingsCount": 42,
    "leadsReceived": 184,
    "dealsClosed": 31,
    "totalSalesValue": "₹2.48 Crore",
    "registeredDate": "2025-01-10"
  },
  {
    "id": "seller-2",
    "name": "M. Antony Raj",
    "agencyName": "Pearl Coast Realty Services",
    "phone": "+91 98421 55678",
    "email": "antony@pearlcoastrealty.in",
    "location": "Palayamkottai Road, Thoothukudi",
    "licenseNumber": "TN-TUTY-REA-112",
    "subscriptionTier": "Pro",
    "subscriptionStatus": "Active",
    "subscriptionExpiry": "2026-12-31",
    "verified": true,
    "listingsCount": 18,
    "leadsReceived": 92,
    "dealsClosed": 14,
    "totalSalesValue": "₹1.15 Crore",
    "registeredDate": "2025-06-20"
  },
  {
    "id": "seller-3",
    "name": "K. Balasubramanian",
    "agencyName": "ECR Corridor Land Bank",
    "phone": "+91 94432 18902",
    "email": "bala@ecrlands.com",
    "location": "Tharuvaikulam, Thoothukudi",
    "licenseNumber": "TN-TUTY-REA-140",
    "subscriptionTier": "Pro",
    "subscriptionStatus": "Active",
    "subscriptionExpiry": "2026-11-15",
    "verified": true,
    "listingsCount": 12,
    "leadsReceived": 64,
    "dealsClosed": 9,
    "totalSalesValue": "₹78 Lakhs",
    "registeredDate": "2025-08-04"
  },
  {
    "id": "seller-4",
    "name": "S. Muthu Krishnan",
    "agencyName": "Thoothukudi Smart Lands",
    "phone": "+91 93601 24578",
    "email": "muthu@tutysmartlands.com",
    "location": "Old Bus Stand, Thoothukudi",
    "licenseNumber": "TN-TUTY-REA-195",
    "subscriptionTier": "Starter",
    "subscriptionStatus": "Pending",
    "subscriptionExpiry": "2026-05-01",
    "verified": false,
    "listingsCount": 4,
    "leadsReceived": 15,
    "dealsClosed": 2,
    "totalSalesValue": "₹18 Lakhs",
    "registeredDate": "2026-02-12"
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    plotId: 'plot-ap-30',
    plotTitle: 'AP Rajan Garden – Plot #30 (2.64 Cents)',
    plotNumber: 'Plot #30',
    name: 'S. Ganesan',
    phone: '+91 94431 82910',
    email: 'ganesan.tuticorin@gmail.com',
    message: 'Interested in booking Plot #30 in AP Rajan Garden. Looking for 3 BHK construction package and 90% bank loan.',
    preferredLocation: 'Tharuvaikulam, Thoothukudi',
    budget: '₹25 L - ₹35 L (Plot + House)',
    interestedInHouse: true,
    needLoanAssistance: true,
    status: 'Site Visit',
    createdAt: '2026-03-18T10:30:00.000Z'
  },
  {
    id: 'enq-2',
    plotId: 'plot-ap-07',
    plotTitle: 'AP Rajan Garden – Compact 1.48 Cent Plot (Plot #07)',
    plotNumber: 'Plot #07',
    name: 'P. Mariappan',
    phone: '+91 98422 11984',
    email: 'mari.thoothukudi@yahoo.com',
    message: 'Seeking immediate purchase for small 1.5 cent plot near beach for investment.',
    preferredLocation: 'Tharuvaikulam, Thoothukudi',
    budget: 'Under ₹5 Lakhs',
    interestedInHouse: false,
    needLoanAssistance: true,
    status: 'New',
    createdAt: '2026-03-19T14:15:00.000Z'
  },
  {
    id: 'enq-3',
    plotId: 'plot-ap-76',
    plotTitle: 'AP Rajan Garden – Corner Plot #76 (4.95 Cents)',
    plotNumber: 'Plot #76',
    name: 'Dr. K. Joseph Raj',
    phone: '+91 97890 44521',
    email: 'joseph.raj.hospital@gmail.com',
    message: 'Want to construct holiday villa near beach. Please arrange site visit this Sunday.',
    preferredLocation: 'Tharuvaikulam, Thoothukudi',
    budget: '₹40 L - ₹50 L',
    interestedInHouse: true,
    needLoanAssistance: false,
    status: 'Contacted',
    createdAt: '2026-03-20T09:00:00.000Z'
  }
];
