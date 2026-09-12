// init-data.js
// Seeds the localStorage database if it's empty or needs an update

const defaultCategories = [
  { id: 'food', name: 'Food, Bakery, and Restaurant Boxes', icon: 'utensils', desc: 'Best choices for sweet shops, cloud kitchens, bakeries, and food brands' },
  { id: 'apparel', name: 'Apparel and Fashion Packaging', icon: 'shirt', desc: 'Perfect fit for garment manufacturers, boutique brands, and textile exporters' },
  { id: 'industrial', name: 'Heavy-Duty Industrial and Bulk Shipping', icon: 'factory', desc: 'Maximum strength for warehouse storage, logistics, and heavy freight' },
  { id: 'retail', name: 'Retail, Gift, and FMCG Packaging', icon: 'gift', desc: 'High-quality printed boxes designed to fit your needs' },
  { id: 'specialty', name: 'Specialty Consumer Product Boxes', icon: 'sparkles', desc: 'Custom-fit packaging for everyday retail items' }
];

const defaultProducts = [
  // Food
  { id: 'p1', catId: 'food', name: 'Paper Sweet Boxes', chips: ['Custom Print', 'Food-Safe', 'All Sizes'], icon: 'package' },
  { id: 'p2', catId: 'food', name: 'Cookies Boxes & Biscuit Paper Boxes', chips: ['Custom Print', 'Food-Safe', 'Window Cut'], icon: 'package' },
  { id: 'p3', catId: 'food', name: 'Cake Packaging Boxes', chips: ['Custom Print', 'Grease-Proof', 'All Sizes'], icon: 'package' },
  { id: 'p4', catId: 'food', name: 'Printed Pizza Boxes & Corrugated Pizza Packaging', chips: ['Corrugated', 'Ventilated', 'Printed'], icon: 'package' },
  { id: 'p5', catId: 'food', name: 'Biryani Packaging Boxes', chips: ['Leak-Proof', 'Food-Safe', 'Bulk Orders'], icon: 'package' },
  { id: 'p6', catId: 'food', name: 'Cardboard Food Packing Boxes', chips: ['Custom Size', 'Food-Grade', 'Printed'], icon: 'package' },
  
  // Apparel
  { id: 'p7', catId: 'apparel', name: 'Garment Packaging Boxes', chips: ['Custom Print', 'Kraft / White', 'Exporters'], icon: 'package' },
  { id: 'p8', catId: 'apparel', name: 'Shirt & Saree Packaging Boxes', chips: ['Flat Pack', 'Custom Print', 'Duplex Board'], icon: 'package' },
  { id: 'p9', catId: 'apparel', name: 'Printed Corrugated Shoe Boxes', chips: ['5-PLY', 'Full Colour', 'Stacking Strong'], icon: 'package' },
  { id: 'p10', catId: 'apparel', name: 'Jewelry Packaging Boxes', chips: ['Premium Board', 'Custom Size', 'Rigid / Folding'], icon: 'package' },
  
  // Industrial
  { id: 'p11', catId: 'industrial', name: 'Heavy Duty Industrial Corrugated Boxes', chips: ['3, 5, 7 PLY', 'Export Quality', 'Heavy Loads'], icon: 'package' },
  { id: 'p12', catId: 'industrial', name: 'Printed Corrugated Boxes', chips: ['Custom Logo', 'Kraft & White', 'All Sizes'], icon: 'package' },
  { id: 'p13', catId: 'industrial', name: 'Corrugated Rolls (For wrapping & custom cushioning)', chips: ['2-PLY', 'Cushioning', 'Bulk Supply'], icon: 'package' },
  
  // Retail
  { id: 'p14', catId: 'retail', name: 'Custom Printed Cardboard Boxes', chips: ['Cosmetics', 'FMCG', 'Full Print'], icon: 'package' },
  { id: 'p15', catId: 'retail', name: 'Gift Packaging Boxes', chips: ['Rigid Board', 'Magnetic Closure', 'Luxury Finish'], icon: 'package' },
  { id: 'p16', catId: 'retail', name: 'Printed Folding Carton Boxes', chips: ['Custom Size', 'Brand Colors', 'Retail Ready'], icon: 'package' },
  { id: 'p17', catId: 'retail', name: 'Duplex Paper Boxes', chips: ['Lightweight', 'Affordable', 'Custom Print'], icon: 'package' },
  
  // Specialty
  { id: 'p18', catId: 'specialty', name: 'Spice Packaging Boxes', chips: ['Food-Safe', 'Moisture Resistant', 'Custom Print'], icon: 'package' },
  { id: 'p19', catId: 'specialty', name: 'Agarbatti Packing Boxes', chips: ['Custom Size', 'Scent Preserving', 'Printed'], icon: 'package' },
  { id: 'p20', catId: 'specialty', name: 'Kids Toy Packaging Boxes', chips: ['Vibrant Print', 'Window Cut', 'Durable'], icon: 'package' }
];

const defaultContact = {
  wa: '919088819228',
  waDisplay: 'Call: 033 6826 3598 / WA: +91 90888 19228',
  email: 'business@alhamdpackaging.com',
  addr1: 'P-30/B Narkel Danga Main Road',
  addr2: 'Kolkata, West Bengal, 700011',
  country: 'India',
  hoursWeek: '10:00 AM - 7:00 PM',
  hoursWeekend: 'Closed'
};

function initData() {
  const version = 'v2'; // Bump this version when making changes to force client updates
  if (localStorage.getItem('alhamd_data_version') !== version) {
    localStorage.setItem('alhamd_categories', JSON.stringify(defaultCategories));
    localStorage.setItem('alhamd_products', JSON.stringify(defaultProducts));
    localStorage.setItem('alhamd_contactInfo', JSON.stringify(defaultContact));
    localStorage.setItem('alhamd_data_version', version);
  }
}

// Run immediately
initData();
