/*
 * ============================================================
 *  LISTINGS DATA FILE  --  Edit this file to manage your houses!
 * ============================================================
 *
 *  HOW TO ADD A NEW HOUSE:
 *  1. Copy one of the objects below
 *  2. Paste it at the end (before the closing bracket)
 *  3. Update the fields with your new house details
 *  4. Save the file -- that's it!
 *
 *  FIELD GUIDE:
 *  - id            : Unique number for each listing (just increment)
 *  - title         : Short name for the house (e.g. "2 BHK Near Bus Stand")
 *  - images        : Array of image paths -- put images in the "images/" folder
 *                    e.g. "images/house1.jpg", "images/house1-room.jpg"
 *  - rent          : Monthly rent in Rupees (number, no commas)
 *  - advance       : Advance/deposit amount in Rupees (number)
 *  - preference    : "family" | "bachelor" | "any"
 *  - nonVegAllowed : true or false
 *  - address       : Full address of the property
 *  - ownerName     : Name of the property owner
 *  - ownerPhone    : Phone number of the owner
 *  - description   : (optional) Extra details about the house
 *  - bhk           : (optional) e.g. "2 BHK", "1 RK"
 *  - furnishing    : (optional) "Furnished" | "Semi-Furnished" | "Unfurnished"
 *  - available     : (optional) true or false (default true)
 * ============================================================
 */

const LISTINGS = [
  {
    id: 1,
    title: "2 BHK Independent House",
    images: [
      "images/house1.jpg",
      "images/house1-2.jpg"
    ],
    rent: 7000,
    advance: 14000,
    preference: "family",
    nonVegAllowed: true,
    address: "42, Gandhi Nagar, Near SBI Bank, Ilkal, Karnataka",
    ownerName: "Rajesh Sharma",
    ownerPhone: "+91 94250 12345",
    description: "Spacious 2 BHK with attached bathroom, kitchen, and balcony. 24/7 water supply. Parking available.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 2,
    title: "1 BHK Flat - Ground Floor",
    images: [
      "images/house2.jpg",
      "images/house2-2.jpg"
    ],
    rent: 4500,
    advance: 9000,
    preference: "bachelor",
    nonVegAllowed: false,
    address: "15, Subhash Chowk, Station Road, Ilkal, Karnataka",
    ownerName: "Sunil Patel",
    ownerPhone: "+91 98260 67890",
    description: "Ground floor flat near bus stand. Ideal for working bachelors. Vegetarian family preferred.",
    bhk: "1 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 3,
    title: "3 BHK Spacious Apartment",
    images: [
      "images/house3.jpg",
      "images/house3-2.jpg"
    ],
    rent: 12000,
    advance: 24000,
    preference: "family",
    nonVegAllowed: true,
    address: "88, Nehru Colony, Near City Market, Ilkal, Karnataka",
    ownerName: "Priya Verma",
    ownerPhone: "+91 78690 11223",
    description: "Premium 3 BHK with modular kitchen, 2 bathrooms, and covered parking. Located in a gated society.",
    bhk: "3 BHK",
    furnishing: "Furnished"
  },
  {
    id: 4,
    title: "1 RK Room with Kitchen",
    images: [
      "images/house4.jpg"
    ],
    rent: 3000,
    advance: 6000,
    preference: "any",
    nonVegAllowed: false,
    address: "7, Jawahar Marg, Old City, Ilkal, Karnataka",
    ownerName: "Kamlesh Jain",
    ownerPhone: "+91 93010 44556",
    description: "Compact room with attached kitchen. Suitable for single working person or student.",
    bhk: "1 RK",
    furnishing: "Unfurnished"
  },
  {
    id: 5,
    title: "2 BHK Flat - First Floor",
    images: [
      "images/house5.jpg",
      "images/house5-2.jpg"
    ],
    rent: 8500,
    advance: 17000,
    preference: "any",
    nonVegAllowed: true,
    address: "23, MG Road, Near Hanuman Mandir, Ilkal, Karnataka",
    ownerName: "Dinesh Rathore",
    ownerPhone: "+91 88710 99887",
    description: "Well-ventilated 2 BHK with large balcony. Family and bachelors both welcome. Non-veg allowed.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 6,
    title: "2 BHK Row House",
    images: [
      "images/house6.jpg",
      "images/house6-2.jpg"
    ],
    rent: 9000,
    advance: 18000,
    preference: "family",
    nonVegAllowed: false,
    address: "56, Shivaji Nagar, Near Government School, Ilkal, Karnataka",
    ownerName: "Meena Gupta",
    ownerPhone: "+91 90090 22334",
    description: "Independent row house with small garden. Peaceful neighbourhood. Only vegetarian families.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 7,
    title: "3 BHK Villa with Garden",
    images: [
      "images/house7.jpg",
      "images/house7-2.jpg"
    ],
    rent: 15000,
    advance: 30000,
    preference: "family",
    nonVegAllowed: true,
    address: "12, Lakshmi Nagar, Behind Taluk Office, Ilkal, Karnataka",
    ownerName: "Venkatesh Kulkarni",
    ownerPhone: "+91 99024 55678",
    description: "Beautiful 3 BHK villa with private garden, car parking, and terrace. Marble flooring throughout.",
    bhk: "3 BHK",
    furnishing: "Furnished"
  },
  {
    id: 8,
    title: "1 BHK Near Hospital",
    images: [
      "images/house8.jpg",
      "images/house8-2.jpg"
    ],
    rent: 5000,
    advance: 10000,
    preference: "any",
    nonVegAllowed: true,
    address: "33, Hospital Road, Near District Hospital, Ilkal, Karnataka",
    ownerName: "Anand Desai",
    ownerPhone: "+91 87650 33221",
    description: "Clean 1 BHK flat close to the district hospital. Suitable for medical staff or small families.",
    bhk: "1 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 9,
    title: "2 BHK Apartment - Top Floor",
    images: [
      "images/house9.jpg",
      "images/house9-2.jpg"
    ],
    rent: 7500,
    advance: 15000,
    preference: "family",
    nonVegAllowed: false,
    address: "9, Vidyanagar, Near PU College, Ilkal, Karnataka",
    ownerName: "Savita Angadi",
    ownerPhone: "+91 94480 67890",
    description: "Top floor 2 BHK with open terrace and city view. Quiet area ideal for families with children.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 10,
    title: "1 BHK Bachelor Friendly",
    images: [
      "images/house10.jpg",
      "images/house10-2.jpg"
    ],
    rent: 3500,
    advance: 7000,
    preference: "bachelor",
    nonVegAllowed: true,
    address: "21, Market Road, Near Vegetable Market, Ilkal, Karnataka",
    ownerName: "Irfan Mulla",
    ownerPhone: "+91 97410 88776",
    description: "Affordable 1 BHK near the main market. Walking distance to bus stop. Non-veg allowed.",
    bhk: "1 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 11,
    title: "2 BHK Near Bus Stand",
    images: [
      "images/house11.jpg"
    ],
    rent: 6000,
    advance: 12000,
    preference: "any",
    nonVegAllowed: true,
    address: "5, Bus Stand Road, Central Ilkal, Karnataka",
    ownerName: "Basavaraj Hiremath",
    ownerPhone: "+91 90080 11223",
    description: "Conveniently located 2 BHK just 2 minutes walk from the main bus stand. All amenities nearby.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 12,
    title: "3 BHK Duplex House",
    images: [
      "images/house12.jpg"
    ],
    rent: 14000,
    advance: 28000,
    preference: "family",
    nonVegAllowed: true,
    address: "78, Ashok Nagar, Behind Post Office, Ilkal, Karnataka",
    ownerName: "Ramesh Hadapad",
    ownerPhone: "+91 81050 44332",
    description: "Spacious duplex with 3 bedrooms, hall, modular kitchen, and dedicated car parking. Gated community.",
    bhk: "3 BHK",
    furnishing: "Furnished"
  },
  {
    id: 13,
    title: "2 BHK with Terrace",
    images: [
      "images/house13.jpg"
    ],
    rent: 8000,
    advance: 16000,
    preference: "family",
    nonVegAllowed: false,
    address: "45, Saraswati Nagar, Near Temple, Ilkal, Karnataka",
    ownerName: "Lakshmi Devi",
    ownerPhone: "+91 99721 55667",
    description: "2 BHK with large terrace access. Vastu-compliant. Pure vegetarian families only.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 14,
    title: "1 BHK Fully Furnished",
    images: [
      "images/house14.jpg"
    ],
    rent: 6500,
    advance: 13000,
    preference: "bachelor",
    nonVegAllowed: false,
    address: "67, College Road, Near Engineering College, Ilkal, Karnataka",
    ownerName: "Prakash Nayak",
    ownerPhone: "+91 88770 99001",
    description: "Fully furnished 1 BHK with bed, wardrobe, fridge, and washing machine. Ideal for students.",
    bhk: "1 BHK",
    furnishing: "Furnished"
  },
  {
    id: 15,
    title: "2 BHK Independent - Ground Floor",
    images: [
      "images/house15.jpg"
    ],
    rent: 7000,
    advance: 14000,
    preference: "any",
    nonVegAllowed: true,
    address: "34, Ambedkar Colony, Near Water Tank, Ilkal, Karnataka",
    ownerName: "Siddappa Kamble",
    ownerPhone: "+91 93530 22110",
    description: "Ground floor independent house with separate entrance. 2 bathrooms, bore well water supply.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 16,
    title: "1 RK Studio Apartment",
    images: [
      "images/house16.jpg"
    ],
    rent: 2500,
    advance: 5000,
    preference: "bachelor",
    nonVegAllowed: true,
    address: "11, Station Road, Near Railway Gate, Ilkal, Karnataka",
    ownerName: "Arun Mugali",
    ownerPhone: "+91 97390 66554",
    description: "Budget-friendly studio room with attached bathroom and small kitchen area. Best for singles.",
    bhk: "1 RK",
    furnishing: "Unfurnished"
  },
  {
    id: 17,
    title: "2 BHK Semi-Furnished Flat",
    images: [
      "images/house17.jpg"
    ],
    rent: 8000,
    advance: 16000,
    preference: "family",
    nonVegAllowed: true,
    address: "29, Ganesh Nagar, Near Playground, Ilkal, Karnataka",
    ownerName: "Mahantesh Biradar",
    ownerPhone: "+91 86600 77889",
    description: "Semi-furnished 2 BHK with fans, lights, and curtains. Children's playground right next door.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 18,
    title: "3 BHK Corner House",
    images: [
      "images/house18.jpg"
    ],
    rent: 11000,
    advance: 22000,
    preference: "family",
    nonVegAllowed: false,
    address: "1, Vinayak Nagar, Main Circle, Ilkal, Karnataka",
    ownerName: "Suresh Patil",
    ownerPhone: "+91 94481 33445",
    description: "Corner plot house with extra natural light and ventilation. 3 bedrooms, 2 halls, pooja room.",
    bhk: "3 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 19,
    title: "1 BHK Near Market",
    images: [
      "images/house19.jpg"
    ],
    rent: 4000,
    advance: 8000,
    preference: "any",
    nonVegAllowed: true,
    address: "52, Cloth Market Area, Main Bazaar, Ilkal, Karnataka",
    ownerName: "Yellappa Sadar",
    ownerPhone: "+91 90081 22334",
    description: "Affordable 1 BHK in the heart of Ilkal's famous cloth market area. Perfect for shopkeepers.",
    bhk: "1 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 20,
    title: "2 BHK with Car Parking",
    images: [
      "images/house20.jpg"
    ],
    rent: 9500,
    advance: 19000,
    preference: "family",
    nonVegAllowed: true,
    address: "16, Nehru Road, Near Petrol Pump, Ilkal, Karnataka",
    ownerName: "Vijay Managuli",
    ownerPhone: "+91 81080 55667",
    description: "Well-maintained 2 BHK with covered car parking and 24/7 water supply. Watchman available.",
    bhk: "2 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 21,
    title: "2 BHK Newly Constructed",
    images: [
      "images/house21.jpg"
    ],
    rent: 10000,
    advance: 20000,
    preference: "family",
    nonVegAllowed: false,
    address: "3, New Extension, Behind Degree College, Ilkal, Karnataka",
    ownerName: "Chandrashekhar Koppad",
    ownerPhone: "+91 99020 88990",
    description: "Brand new construction. Modern 2 BHK with vitrified tiles, granite kitchen, and ISI fittings.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 22,
    title: "1 BHK with Balcony",
    images: [
      "images/house22.jpg"
    ],
    rent: 5500,
    advance: 11000,
    preference: "bachelor",
    nonVegAllowed: true,
    address: "40, Kalaburagi Road, Outskirts, Ilkal, Karnataka",
    ownerName: "Manjunath Hosamani",
    ownerPhone: "+91 94483 11009",
    description: "Airy 1 BHK with spacious balcony overlooking green fields. Peaceful location for working professionals.",
    bhk: "1 BHK",
    furnishing: "Semi-Furnished"
  },
  {
    id: 23,
    title: "2 BHK Near School",
    images: [
      "images/house23.jpg"
    ],
    rent: 6500,
    advance: 13000,
    preference: "family",
    nonVegAllowed: true,
    address: "18, Vidya Nagar, Near Govt High School, Ilkal, Karnataka",
    ownerName: "Shobha Meti",
    ownerPhone: "+91 87650 44556",
    description: "Family-friendly 2 BHK right next to the government school. Safe area with good neighbours.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  },
  {
    id: 24,
    title: "3 BHK Premium Flat",
    images: [
      "images/house24.jpg"
    ],
    rent: 16000,
    advance: 32000,
    preference: "family",
    nonVegAllowed: true,
    address: "100, Ring Road, Near NH Junction, Ilkal, Karnataka",
    ownerName: "Dr. Ashok Kumbar",
    ownerPhone: "+91 98450 99887",
    description: "Premium 3 BHK flat with lift, intercom, CCTV, and backup power. Top-end finishes throughout.",
    bhk: "3 BHK",
    furnishing: "Furnished"
  }
];