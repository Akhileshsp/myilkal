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
    title: "Shree Raghavendra EV Showroom - Grand Opening!",
    description: "Hunugnd's first dedicated Electric Vehicle showroom is now open! We offer a wide range of electric scooters and bikes from Zelio. Visit us for free test rides, easy EMI options with 0% down payment. Go green, save fuel costs, and ride the future today!",
    image: "images/ad-ev-showroom.jpg",
    ownerName: "Akshay Pattar",
    ownerPhone: "+91 9113565288",
    address: "Ilkal road, Mahant Nagar, Hungund",
    tag: "NEW SHOWROOM",
    active: true
  },
  {
    id: 2,
    title: "All Types of Sale Agreements & Gift Deeds",
    description: "We provide professional legal documentation services for all types of property transactions. Our services include: Registered Sale Agreements for plots, houses & flats; Gift Deed preparation and registration; Sale & Purchase agreements with proper legal vetting; Rental / Lease agreements (11-month & long term); Stamp duty consultation; Sub-registrar office assistance. All work done by certified legal professionals.",
    image: "images/ad-legal-services.jpg",
    ownerName: "Suresh Hunnalli",
    ownerPhone: "+91 6360031004",
    address: "Hunnalli Xerox Center, opp Mini VidhanSoudha Hungund",
    tag: "LEGAL SERVICES",
    active: true
  },
  {
    id: 3,
    title: "All Types of Sale Agreements & Gift Deeds",
    description: "We provide professional legal documentation services for all types of property transactions. Our services include: Registered Sale Agreements for plots, houses & flats; Gift Deed preparation and registration; Sale & Purchase agreements with proper legal vetting; Rental / Lease agreements (11-month & long term); Stamp duty consultation; Sub-registrar office assistance. All work done by certified legal professionals.",
    image: "images/ad-legal-services.jpg",
    ownerName: "Prashant Revadi",
    ownerPhone: "+91 7353724037",
    address: "Ganavi Xerox Center, opp Mini VidhanSoudha Hungund",
    tag: "LEGAL SERVICES",
    active: true
  }
];
