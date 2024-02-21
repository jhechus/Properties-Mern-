export const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "villa" },
  { value: "cottage", label: "cottage" },
  { value: "land", label: "land" },
  { value: "other", label: "other" },
];
export const propertyStatuses = [
  { value: "Rent", label: "Rent" },
  { value: "Sale", label: "Sale" },
];

export const cities = [
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Bangalore" },
  { value: "Mumbai" },
  { value: "Chennai" },
  { value: "Delhi" },
  { value: "Kolkata" },
];

export const parkingTypes = [
  { value: "covered", label: "covered" },
  { value: "open", label: "open" },
  { value: "none", label: "none" },
];

export const furnishingTypes = [
  { value: "furnished", label: "furnished" },
  { value: "semi-furnished", label: "semi-furnished" },
  { value: "unfurnished", label: "unfurnished" },
];

export const facingTypes = [
  { value: "east", label: "east" },
  { value: "west", label: "west" },
  { value: "north", label: "north" },
  { value: "south", label: "south" },
];

export const subscriptionsPlans = [
  {
    name: "Basic",
    price: 0,
    propertiesLimit: 3,
    imagesPerPropertyLimit: 3,
    features: [
      "Free for lifetime",
      "Property Listing",
      "Property Details",
      "3 Images per Property",
      "3 Properties Limit",
      "Property Search",
    ],
  },
  {
    name: "Standard",
    price: 10,
    propertiesLimit: 10,
    imagesPerPropertyLimit: 5,
    features: [
      "Free for lifetime",
      "Property Listing",
      "Property Details",
      "5 Images per Property",
      "10 Properties Limit",
      "Property Search",
      "24/7 support on email",
    ],
  },
  {
    name: "Premium",
    price: 25,
    propertiesLimit: 100,
    imagesPerPropertyLimit: 15,
    features: [
      "Free for lifetime",
      "Property Listing",
      "Property Details",
      "15 Images per Property",
      "100 Properties Limit",
      "Property Search",
      "24/7 support",
    ],
  },
];
