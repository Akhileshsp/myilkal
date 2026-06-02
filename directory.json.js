/*
 * ============================================================
 *  BUSINESS DIRECTORY DATA  --  Edit this file to manage
 *  local business listings shown in the Directory section.
 * ============================================================
 *
 *  HOW TO ADD A NEW BUSINESS:
 *  1. Copy one of the objects below
 *  2. Paste it at the end (before the closing bracket)
 *  3. Update the fields with the business details
 *  4. Optionally put a photo in the "images/" folder
 *  5. Save the file -- that's it!
 *
 *  FIELD GUIDE:
 *  - id          : Unique number (just increment)
 *  - name        : Business / person name
 *  - category    : One of: "doctor", "electrician", "plumber", "grocery",
 *                  "restaurant", "hardware", "tailor", "auto", "mobile",
 *                  "salon", "school", "lawyer", "pharmacy", "other"
 *  - specialty   : What they do (e.g. "General Physician", "AC Repair")
 *  - phone       : Contact phone number
 *  - whatsapp    : (optional) WhatsApp number if different from phone
 *  - address     : Full address
 *  - timings     : (optional) Working hours
 *  - image       : (optional) Photo from images/ folder
 *  - featured    : true for premium / highlighted listing
 *  - active      : true or false -- set false to hide without deleting
 * ============================================================
 */

const DIRECTORY = [
  {
    id: 1,
    name: "Dr. Mahesh Patil",
    category: "doctor",
    specialty: "General Physician & Family Medicine",
    phone: "+91 94485 67801",
    address: "Main Road, Near Bus Stand, Ilkal, Karnataka",
    timings: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM",
    image: "images/dir-doctor1.jpg",
    featured: true,
    active: true
  },
  {
    id: 2,
    name: "Dr. Savita Kulkarni",
    category: "doctor",
    specialty: "Gynecologist & Obstetrician",
    phone: "+91 98450 23456",
    address: "Hospital Road, Near District Hospital, Ilkal, Karnataka",
    timings: "10:00 AM - 2:00 PM, 4:00 PM - 8:00 PM",
    image: "images/dir-doctor2.jpg",
    featured: false,
    active: true
  },
  {
    id: 3,
    name: "Dr. Ravi Hiremath",
    category: "doctor",
    specialty: "Dentist - Teeth Cleaning, Filling & Extraction",
    phone: "+91 87220 99001",
    address: "Ambedkar Circle, Court Road, Ilkal, Karnataka",
    timings: "9:30 AM - 1:30 PM, 5:30 PM - 8:30 PM",
    featured: false,
    active: true
  },
  {
    id: 4,
    name: "Sai Electricals - Raju",
    category: "electrician",
    specialty: "House Wiring, Fan/Motor Repair, MCB/Switch Work",
    phone: "+91 99020 78901",
    address: "Shivaji Nagar, Near Govt School, Ilkal, Karnataka",
    timings: "8:00 AM - 8:00 PM",
    image: "images/dir-electrician.jpg",
    featured: true,
    active: true
  },
  {
    id: 5,
    name: "Maruthi Electrical Works",
    category: "electrician",
    specialty: "AC Repair, Inverter Installation, Solar Panel Setup",
    phone: "+91 94480 11223",
    address: "Market Road, Near Vegetable Market, Ilkal, Karnataka",
    timings: "9:00 AM - 7:00 PM",
    featured: false,
    active: true
  },
  {
    id: 6,
    name: "Vinayak Plumbing Services",
    category: "plumber",
    specialty: "Pipe Fitting, Leakage Repair, Bathroom Fittings",
    phone: "+91 97410 33445",
    address: "Gandhi Nagar, Ilkal, Karnataka",
    timings: "7:00 AM - 7:00 PM (Emergency 24/7)",
    image: "images/dir-plumber.jpg",
    featured: true,
    active: true
  },
  {
    id: 7,
    name: "Basavaraj Plumbing & Bore Well",
    category: "plumber",
    specialty: "Bore Well Repair, Motor Installation, Tank Fitting",
    phone: "+91 81050 66778",
    address: "Nehru Colony, Near City Market, Ilkal, Karnataka",
    timings: "8:00 AM - 6:00 PM",
    featured: false,
    active: true
  },
  {
    id: 8,
    name: "Sri Lakshmi Kirana Store",
    category: "grocery",
    specialty: "Groceries, Provisions, Spices & Daily Essentials",
    phone: "+91 90080 22334",
    address: "Main Bazaar, Cloth Market Area, Ilkal, Karnataka",
    timings: "7:00 AM - 10:00 PM",
    image: "images/dir-grocery.jpg",
    featured: true,
    active: true
  },
  {
    id: 9,
    name: "Balaji Supermarket",
    category: "grocery",
    specialty: "Branded Groceries, Snacks, Cold Drinks, Household Items",
    phone: "+91 86600 55443",
    address: "MG Road, Near Hanuman Mandir, Ilkal, Karnataka",
    timings: "8:00 AM - 10:30 PM",
    featured: false,
    active: true
  },
  {
    id: 10,
    name: "Hotel Basava Residency",
    category: "restaurant",
    specialty: "North Karnataka Thali, Jolada Rotti, Biryani",
    phone: "+91 94481 44556",
    address: "Bus Stand Road, Central Ilkal, Karnataka",
    timings: "6:30 AM - 10:30 PM",
    image: "images/dir-restaurant.jpg",
    featured: true,
    active: true
  },
  {
    id: 11,
    name: "Udupi Sri Krishna Hotel",
    category: "restaurant",
    specialty: "South Indian Breakfast, Dosa, Idli, Meals",
    phone: "+91 87650 22110",
    address: "Station Road, Near Old Bus Stand, Ilkal, Karnataka",
    timings: "6:00 AM - 9:30 PM",
    featured: false,
    active: true
  },
  {
    id: 12,
    name: "Ilkal Hardware & Paints",
    category: "hardware",
    specialty: "Cement, TMT Bars, Plumbing, Electrical, Asian Paints Dealer",
    phone: "+91 99721 88990",
    address: "NH-50, Near Petrol Pump, Ilkal, Karnataka",
    timings: "8:00 AM - 8:00 PM",
    image: "images/dir-hardware.jpg",
    featured: true,
    active: true
  },
  {
    id: 13,
    name: "Shankar Tailoring & Readymade",
    category: "tailor",
    specialty: "Gents Tailoring, Alterations, Safari Suit, Kurta Pajama",
    phone: "+91 93530 77665",
    address: "Ambedkar Colony, Near Water Tank, Ilkal, Karnataka",
    timings: "10:00 AM - 8:00 PM (Closed Sunday)",
    image: "images/dir-tailor.jpg",
    featured: false,
    active: true
  },
  {
    id: 14,
    name: "Kaveri Ladies Tailoring",
    category: "tailor",
    specialty: "Ladies Blouse, Churidar, Dress Material Stitching",
    phone: "+91 88770 44332",
    address: "Saraswati Nagar, Near Temple, Ilkal, Karnataka",
    timings: "10:00 AM - 7:00 PM",
    featured: false,
    active: true
  },
  {
    id: 15,
    name: "Ilkal Auto Stand - Raju",
    category: "auto",
    specialty: "Auto Rickshaw, City & Outstation Rides, Airport Drop",
    phone: "+91 90081 33221",
    address: "Main Bus Stand, Ilkal, Karnataka",
    timings: "6:00 AM - 11:00 PM",
    image: "images/dir-auto.jpg",
    featured: true,
    active: true
  },
  {
    id: 16,
    name: "Vinod Taxi Service",
    category: "auto",
    specialty: "Car Rental, Taxi for Weddings, Outstation Trips",
    phone: "+91 97390 88776",
    address: "Nehru Road, Near Petrol Pump, Ilkal, Karnataka",
    timings: "24/7 Available",
    featured: false,
    active: true
  },
  {
    id: 17,
    name: "Sri Mobile World",
    category: "mobile",
    specialty: "Mobile Sales, Repair, Accessories, SIM Cards, Recharge",
    phone: "+91 94250 55667",
    address: "Main Road, Near SBI Bank, Ilkal, Karnataka",
    timings: "9:30 AM - 9:30 PM",
    image: "images/dir-mobile.jpg",
    featured: true,
    active: true
  },
  {
    id: 18,
    name: "Royal Men's Salon",
    category: "salon",
    specialty: "Haircut, Shaving, Facial, Hair Color, Head Massage",
    phone: "+91 81050 99887",
    address: "Market Road, Ilkal, Karnataka",
    timings: "9:00 AM - 9:00 PM (Closed Tuesday)",
    image: "images/dir-salon.jpg",
    featured: false,
    active: true
  },
  {
    id: 19,
    name: "Saraswati Vidya Mandir School",
    category: "school",
    specialty: "English Medium, LKG to 10th, CBSE Pattern",
    phone: "+91 98260 11009",
    address: "Vidyanagar, Near PU College, Ilkal, Karnataka",
    timings: "8:00 AM - 4:00 PM",
    image: "images/dir-school.jpg",
    featured: true,
    active: true
  },
  {
    id: 20,
    name: "Adv. Basavaraj Kumbar",
    category: "lawyer",
    specialty: "Property Law, Civil Cases, Family Court, Documentation",
    phone: "+91 98450 12345",
    address: "1st Floor, Ambedkar Circle, Court Road, Ilkal, Karnataka",
    timings: "10:00 AM - 5:00 PM (Mon-Sat)",
    image: "images/dir-lawyer.jpg",
    featured: true,
    active: true
  },
  {
    id: 21,
    name: "Nandini Medical Store",
    category: "pharmacy",
    specialty: "Medicines, First Aid, Baby Care, Health Supplements",
    phone: "+91 87650 77889",
    address: "Hospital Road, Near District Hospital, Ilkal, Karnataka",
    timings: "8:00 AM - 11:00 PM",
    image: "images/dir-pharmacy.jpg",
    featured: true,
    active: true
  },
  {
    id: 22,
    name: "Shree Computers & Xerox",
    category: "other",
    specialty: "Xerox, Printout, Lamination, Passport Photo, Online Forms",
    phone: "+91 93010 55443",
    address: "Court Road, Near Taluk Office, Ilkal, Karnataka",
    timings: "9:00 AM - 8:00 PM",
    featured: false,
    active: true
  },
  {
    id: 23,
    name: "Siddheshwar Flower & Pooja Items",
    category: "other",
    specialty: "Fresh Flowers, Garlands, Pooja Samagri, Camphor, Agarbatti",
    phone: "+91 99020 66554",
    address: "Temple Road, Near Basaveshwar Temple, Ilkal, Karnataka",
    timings: "5:30 AM - 9:00 PM",
    featured: false,
    active: true
  },
  {
    id: 24,
    name: "Raghavendra Gas Agency",
    category: "other",
    specialty: "HP Gas, New Connection, Cylinder Refill, Home Delivery",
    phone: "+91 94483 22110",
    address: "Ring Road, NH Junction, Ilkal, Karnataka",
    timings: "9:00 AM - 6:00 PM",
    featured: false,
    active: true
  }
];