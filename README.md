# Ilkal.com - House Rental Website

A modern, light-themed static website for listing rental houses and local business advertisements in Ilkal.
Features 3D visuals, animated particles, glassmorphism UI, advertisement banners, and a dedicated advertisements section.

## Quick Start

Just open `index.html` in any web browser. No server or installation needed!

```
# Or serve locally for best results:
python3 -m http.server 8080
# Then open http://localhost:8080
```

## How to Add Images

All images go in the `images/` folder. You can name them anything you like.

**House listing images:**
- `images/house1.jpg`, `images/house1-2.jpg` (multiple photos per house)

**Banner images** (for the carousel at the top):
- `images/banner-ev-showroom.jpg`, `images/banner-legal-services.jpg`, etc.

**Ad detail images** (for the Advertisements section):
- `images/ad-ev-showroom.jpg`, `images/ad-legal-services.jpg`, etc.

## How to Manage Listings

**All listings live in one file: `listings.json.js`**

### Adding a New House

1. Open `listings.json.js` in any text editor (Notepad, VS Code, etc.)
2. Copy an existing listing block (the part between `{ }`)
3. Paste it before the closing `];`
4. Put house photos in the `images/` folder
5. Update the details
6. Save the file

### Example Listing

```js
{
  id: 7,                          // Unique number (increment from last)
  title: "2 BHK Near Market",     // Short description
  images: [
    "images/house7.jpg",          // Put photos in the images/ folder
    "images/house7-2.jpg"
  ],
  rent: 6000,                     // Monthly rent (number only)
  advance: 12000,                 // Advance amount
  preference: "family",           // "family" | "bachelor" | "any"
  nonVegAllowed: true,            // true or false
  address: "12, ABC Colony, Ilkal",
  ownerName: "Owner Name",
  ownerPhone: "+91 98765 43210",
  description: "Optional details about the house",
  bhk: "2 BHK",                   // Optional
  furnishing: "Semi-Furnished"    // Optional: "Furnished" | "Semi-Furnished" | "Unfurnished"
}
```

### Removing a House

Delete the entire `{ ... }` block for that house, or set `available: false` to hide it.

## How to Manage Banner Carousel

**Banner ads live in: `ads.json.js`**

These are the rotating banners at the top of the page. Clicking a banner scrolls to the Advertisements detail section.

### Example Banner

```js
{
  id: 5,                                    // Unique number
  title: "Your Ad Title",                   // Headline on banner
  subtitle: "Short tagline for banner",     // Shown below headline
  image: "images/banner-photo.jpg",         // Background image from images/
  buttonText: "View Details",               // CTA button text
  gradient: "linear-gradient(135deg, rgba(99,102,241,0.85), rgba(168,85,247,0.75))",
  active: true,                             // Set false to hide
  tag: "NEW"                                // Small label badge
}
```

## How to Manage Advertisement Details

**Ad detail listings live in: `ads-detail.json.js`**

These are the full ad cards shown in the "Featured Advertisements" section with description, owner name, phone number, and address.

### Example Ad Detail

```js
{
  id: 5,                                    // Unique number
  title: "Business Name / Ad Title",        // Headline
  description: "Full detailed description of the service or business",
  image: "images/ad-photo.jpg",             // Image from images/ folder
  ownerName: "Business Owner Name",         // Contact person
  ownerPhone: "+91 98765 43210",            // Phone number
  address: "Full business address",         // Optional
  tag: "NEW",                               // Small label badge
  active: true                              // Set false to hide
}
```

### Ad Detail Fields

| Field       | Description                                           |
|-------------|-------------------------------------------------------|
| title       | Headline / business name                              |
| description | Full detailed description                             |
| image       | Image from images/ folder                             |
| ownerName   | Name of the advertiser / business owner               |
| ownerPhone  | Phone number to contact                               |
| address     | Business address (optional)                           |
| tag         | Small label like "NEW", "HOT DEAL", "SPONSORED"      |
| active      | Set `false` to hide an ad without deleting it         |

## File Structure

```
house-rental-website/
├── index.html            # Main page (don't need to edit)
├── styles.css            # Styles (don't need to edit)
├── app.js                # Logic (don't need to edit)
├── listings.json.js      # YOUR HOUSE LISTINGS (edit this!)
├── ads.json.js           # YOUR BANNER ADS (edit this!)
├── ads-detail.json.js    # YOUR AD DETAILS with owner info (edit this!)
├── images/               # Put ALL images here (houses, banners, ads)
└── README.md             # This file
```

## Data Files Summary

| File               | What it controls                                 |
|--------------------|--------------------------------------------------|
| `listings.json.js` | House rental listings (cards with rent, owner)   |
| `ads.json.js`      | Banner carousel at the top (rotating slides)     |
| `ads-detail.json.js` | Full ad details section (description, contact) |

## Hosting (Free Options)

- **GitHub Pages**: Push to GitHub, enable Pages in settings
- **Netlify**: Drag & drop the folder at netlify.com
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: `firebase deploy`

## Features

- Light theme with gradient accents (indigo, purple, pink, sky blue)
- All images loaded from local `images/` folder (no internet required)
- 3D isometric house illustration in hero section
- Animated particle network background
- Floating 3D geometric shapes
- Glassmorphism cards and UI elements
- 3D rotating logo cube animation
- Advertisement banner carousel with auto-slideshow & swipe support
- Dedicated Advertisements section with full details, owner info & call button
- Clicking banners navigates to and highlights the ad in the detail section
- Page order: Banners > Hero > Listings > Ads > About > Contact
- Animated stat counters (500+ tenants, 120+ houses, 50+ localities)
- Scroll-reveal animations on cards and sections
- Scroll-to-top button
- Search & filter by preference, non-veg policy, max rent, keywords
- Image gallery with navigation for each listing
- Click-to-call owner button
- Color-coded badges for tenant preferences
- Fully responsive: mobile (360px+), tablet, laptop, desktop, large screens
- Animated hamburger menu on mobile
- Easy data management via three simple JS files