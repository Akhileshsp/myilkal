/*
 * ============================================================
 *  BANNER ADS DATA  --  Edit this file to manage banner carousel!
 * ============================================================
 *
 *  These ads appear in the rotating banner carousel at the top of the page.
 *  Clicking a banner scrolls to the Advertisements detail section.
 *
 *  HOW TO ADD A NEW BANNER:
 *  1. Copy one of the objects below
 *  2. Paste it at the end (before the closing bracket)
 *  3. Update the fields with your new ad details
 *  4. Put the banner image in the "images/" folder
 *  5. Save the file -- that's it!
 *
 *  FIELD GUIDE:
 *  - id          : Unique number for each ad (just increment)
 *  - title       : Headline text shown on the banner
 *  - subtitle    : Secondary text / offer details
 *  - image       : Banner background image from images/ folder
 *  - buttonText  : Text on the CTA button (optional, leave empty to hide)
 *  - gradient    : CSS gradient overlay for readability (optional)
 *  - active      : true or false -- set false to hide without deleting
 *  - tag         : (optional) Small label like "NEW", "HOT DEAL", "SPONSORED"
 * ============================================================
 */

const ADS = [
  {
    id: 1,
    title: "Ilkal EV Showroom - Grand Opening!",
    subtitle: "Explore the latest Electric Scooters & Bikes. Test ride available. EMI starts at Rs. 1,999/month.",
    image: "images/banner-ev-showroom.jpg",
    buttonText: "View Details",
    gradient: "linear-gradient(135deg, rgba(238,242,255,0.92), rgba(224,231,255,0.88))",
    active: true,
    tag: "NEW SHOWROOM"
  },
  {
    id: 2,
    title: "All Types of Sale Agreements & Gift Deeds",
    subtitle: "Registered Sale Agreements, Gift Deeds, Rental Agreements & Power of Attorney. Quick & Affordable.",
    image: "images/banner-legal-services.jpg",
    buttonText: "View Details",
    gradient: "linear-gradient(135deg, rgba(250,240,255,0.92), rgba(253,232,243,0.88))",
    active: true,
    tag: "LEGAL SERVICES"
  },
  {
    id: 3,
    title: "Plots for Sale & Purchase - Ilkal & Nearby",
    subtitle: "Residential & commercial plots available. DTCP approved layouts. Clear titles. Instant registration.",
    image: "images/banner-plots.jpg",
    buttonText: "View Details",
    gradient: "linear-gradient(135deg, rgba(236,254,255,0.92), rgba(224,247,250,0.88))",
    active: true,
    tag: "PLOTS"
  },
  {
    id: 4,
    title: "Saraswati Vidya Mandir - Admissions Open 2025-26!",
    subtitle: "English Medium, CBSE Pattern, LKG to 10th. Limited seats. Smart classrooms, sports, and transport facility.",
    image: "images/banner-school-admissions.jpg",
    buttonText: "View Details",
    gradient: "linear-gradient(135deg, rgba(236,253,245,0.92), rgba(224,247,250,0.88))",
    active: true,
    tag: "ADMISSIONS OPEN"
  }
];