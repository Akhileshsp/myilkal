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
      "images/abhi1.jpeg",
      "images/abhi2.jpeg",
      "images/abhi3.jpeg",
      "images/abhi4.jpeg",
      "images/abhi5.jpeg",
      "images/abhi6.jpeg",
      "images/abhi7.jpeg",
      "images/abhi8.jpeg",
    ],
    rent: 7000,
    advance: 14000,
    preference: "family",
    nonVegAllowed: true,
    address: "Ilkal, Karnataka",
    ownerName: "Abhishek Bhattar",
    ownerPhone: "+91 7019466807",
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
    address: "Ilkal, Karnataka",
    ownerName: "ABC Patel",
    ownerPhone: "+91 123456789",
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
    address: "Near City Market, Ilkal, Karnataka",
    ownerName: "ABC Verma",
    ownerPhone: "+91 123456789",
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
    ownerName: "ABC Jain",
    ownerPhone: "+91 123456789",
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
    address: "Near Hanuman Mandir, Ilkal, Karnataka",
    ownerName: "ABC Patil",
    ownerPhone: "+91 123456789",
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
    address: "Near Government School, Ilkal, Karnataka",
    ownerName: "ABC Pattar",
    ownerPhone: "+91 123465789",
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
    address: "Behind Taluk Office, Ilkal, Karnataka",
    ownerName: "ABC Kulkarni",
    ownerPhone: "+91 123456798",
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
    address: "Near District Hospital, Ilkal, Karnataka",
    ownerName: "ABC Vaijapur",
    ownerPhone: "+91 123465789",
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
    address: "Near PU College, Ilkal, Karnataka",
    ownerName: "ABC Angadi",
    ownerPhone: "+91 123456789",
    description: "Top floor 2 BHK with open terrace and city view. Quiet area ideal for families with children.",
    bhk: "2 BHK",
    furnishing: "Unfurnished"
  }
];
