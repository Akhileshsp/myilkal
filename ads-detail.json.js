/*
 * ============================================================
 *  ADVERTISEMENTS DETAIL DATA  --  Edit this file to manage
 *  the full ad listings shown in the "Featured Advertisements"
 *  section of the website.
 * ============================================================
 *
 *  HOW TO ADD A NEW ADVERTISEMENT:
 *  1. Copy one of the objects below
 *  2. Paste it at the end (before the closing bracket)
 *  3. Update the fields with the new ad details
 *  4. Put the ad image in the "images/" folder
 *  5. Save the file -- that's it!
 *
 *  FIELD GUIDE:
 *  - id            : Unique number for each ad (just increment)
 *  - title         : Headline / business name
 *  - description   : Full detailed description of the service or business
 *  - image         : Image path from images/ folder (e.g. "images/ad-ev.jpg")
 *  - ownerName     : Name of the advertiser / business owner
 *  - ownerPhone    : Phone number to contact
 *  - address       : (optional) Business address
 *  - tag           : (optional) Small label badge like "NEW", "POPULAR"
 *  - active        : true or false -- set false to hide without deleting
 * ============================================================
 */

const ADS_DETAIL = [
  {
    id: 1,
    title: "Ilkal EV Showroom - Grand Opening!",
    description: "Ilkal's first dedicated Electric Vehicle showroom is now open! We offer a wide range of electric scooters and bikes from top brands including Ola, Ather, TVS iQube, Bajaj Chetak, and Hero Vida. Visit us for free test rides, easy EMI options with 0% down payment, government subsidy assistance under FAME II scheme, and free first-year servicing. We also provide charging station installation at your home. Go green, save fuel costs, and ride the future today!",
    image: "images/ad-ev-showroom.jpg",
    ownerName: "Mahesh Patil",
    ownerPhone: "+91 94485 67890",
    address: "Shop No. 12, Main Road, Near Bus Stand, Ilkal, Karnataka",
    tag: "NEW SHOWROOM",
    active: true
  },
  {
    id: 2,
    title: "All Types of Sale Agreements & Gift Deeds",
    description: "We provide professional legal documentation services for all types of property transactions. Our services include: Registered Sale Agreements for plots, houses & flats; Gift Deed preparation and registration; Sale & Purchase agreements with proper legal vetting; Rental / Lease agreements (11-month & long term); Power of Attorney drafting; Property title verification and due diligence; Stamp duty consultation; Sub-registrar office assistance. Over 15 years of experience in property documentation. All work done by certified legal professionals. Quick turnaround - most documents ready within 2-3 working days.",
    image: "images/ad-legal-services.jpg",
    ownerName: "Adv. Basavaraj Kumbar",
    ownerPhone: "+91 98450 12345",
    address: "1st Floor, Ambedkar Circle, Court Road, Ilkal, Karnataka",
    tag: "LEGAL SERVICES",
    active: true
  },
  {
    id: 3,
    title: "Plots for Sale & Purchase - Ilkal & Nearby",
    description: "Looking to buy or sell plots in Ilkal and surrounding areas? We are the leading property dealers with 10+ years of experience. We deal in: DTCP/BDA approved residential plots in prime locations; Commercial plots near highway & main roads; Agricultural land for sale; Farm house plots with bore well facility; Plots available in Ilkal, Hunagund, Bagalkot, Badami & nearby areas. All plots come with clear title, proper documentation, and we assist with complete registration process. We also help sellers list their plots and find genuine buyers. Site visits arranged on request. Bank loan assistance available for eligible plots.",
    image: "images/ad-plots.jpg",
    ownerName: "Shivakumar Hosamani",
    ownerPhone: "+91 87220 34567",
    address: "Vinayak Nagar, Behind Taluk Office, Ilkal, Karnataka",
    tag: "PLOTS",
    active: true
  },
  {
    id: 4,
    title: "Saraswati Vidya Mandir - Admissions Open 2025-26!",
    description: "Admissions are now open for the academic year 2025-26 at Saraswati Vidya Mandir, Ilkal! We offer English medium education from LKG to 10th standard following CBSE pattern. Our school features: Smart classrooms with projectors and digital learning; Experienced and qualified teaching staff; Separate science and computer labs; Library with 5,000+ books; Playground with cricket, football, and volleyball courts; Annual sports day, science fair, and cultural events; Safe school transport covering all areas of Ilkal and nearby villages; Regular parent-teacher meetings; Special coaching for 10th board exams. Limited seats available -- early registration recommended. Fee concession for meritorious students and siblings. Visit the school or call us for admission forms and fee structure.",
    image: "images/ad-school-admissions.jpg",
    ownerName: "Sri Ramesh Kulkarni (Principal)",
    ownerPhone: "+91 98260 11009",
    address: "Vidyanagar, Near PU College, Ilkal, Karnataka",
    tag: "ADMISSIONS OPEN",
    active: true
  }
];