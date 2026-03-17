export interface Reference {
  id: string;
  source: string;
  title: string;
  creator: string;
  location: string;
  year: number;
  index: string;
}

export interface FeedItem {
  id: string;
  source: string;
  title: string;
  timeAgo: string;
  index: string;
}

export interface City {
  name: string;
  lat: number;
  lng: number;
  references: { title: string; source: string; year: number }[];
}

export const searchReferences: Reference[] = [
  { id: '1', source: 'ARCHDAILY', title: 'TRELLICK TOWER', creator: 'Ernő Goldfinger', location: 'LONDON', year: 1972, index: '001/' },
  { id: '2', source: 'DEZEEN', title: "UNITÉ D'HABITATION", creator: 'Le Corbusier', location: 'MARSEILLE', year: 1952, index: '002/' },
  { id: '3', source: 'RIBA', title: 'ROBIN HOOD GARDENS', creator: 'Alison & Peter Smithson', location: 'LONDON', year: 1972, index: '003/' },
  { id: '4', source: 'DOMUS', title: 'HABITAT 67', creator: 'Moshe Safdie', location: 'MONTRÉAL', year: 1967, index: '004/' },
  { id: '5', source: 'CCA', title: 'BYKER WALL', creator: 'Ralph Erskine', location: 'NEWCASTLE', year: 1974, index: '005/' },
  { id: '6', source: 'GETTY', title: 'PARK HILL ESTATE', creator: 'Lynn & Smith', location: 'SHEFFIELD', year: 1961, index: '006/' },
  { id: '7', source: 'WALLPAPER*', title: 'NAKAGIN CAPSULE TOWER', creator: 'Kisho Kurokawa', location: 'TOKYO', year: 1972, index: '007/' },
  { id: '8', source: 'ARCHDAILY', title: 'MONTE AMIATA HOUSING', creator: 'Carlo Aymonino', location: 'MILAN', year: 1970, index: '008/' },
  { id: '9', source: 'PIN-UP', title: 'PRUITT-IGOE', creator: 'Minoru Yamasaki', location: 'ST. LOUIS', year: 1954, index: '009/' },
];

export const feedItems: FeedItem[] = [
  { id: 'f1', source: 'DEZEEN', title: 'WANG SHU · HANGZHOU CULTURAL CENTRE', timeAgo: '2h ago', index: '001/' },
  { id: 'f2', source: 'ARCHDAILY', title: 'RURAL SCHOOL · OAXACA', timeAgo: '5h ago', index: '002/' },
  { id: 'f3', source: 'INSTAGRAM', title: 'NEUE NATIONALGALERIE RESTORATION', timeAgo: '6h ago', index: '003/' },
  { id: 'f4', source: 'RIBA', title: 'ALVAR AALTO DRAWINGS ARCHIVE', timeAgo: '8h ago', index: '004/' },
  { id: 'f5', source: 'DOMUS', title: 'STUDIO MUMBAI NEW PROJECT', timeAgo: '11h ago', index: '005/' },
  { id: 'f6', source: 'CCA', title: 'SUPERSTUDIO UNREALISED WORKS', timeAgo: '13h ago', index: '006/' },
  { id: 'f7', source: 'GETTY', title: 'PAUL RUDOLPH ARCHIVE', timeAgo: '16h ago', index: '007/' },
  { id: 'f8', source: 'X/TWITTER', title: 'OMA PROJECT DOCUMENTATION', timeAgo: '18h ago', index: '008/' },
];

/* Cities with real lat/lng for Leaflet map — CartoDB dark_matter tiles */
export const cities: City[] = [
  { name: 'london', lat: 51.5074, lng: -0.1278, references: [
    { title: 'TRELLICK TOWER', source: 'ARCHDAILY', year: 1972 },
    { title: 'ROBIN HOOD GARDENS', source: 'RIBA', year: 1972 },
  ]},
  { name: 'paris', lat: 48.8566, lng: 2.3522, references: [] },
  { name: 'berlin', lat: 52.5200, lng: 13.4050, references: [] },
  { name: 'milan', lat: 45.4642, lng: 9.1900, references: [
    { title: 'MONTE AMIATA HOUSING', source: 'ARCHDAILY', year: 1970 },
  ]},
  { name: 'tokyo', lat: 35.6762, lng: 139.6503, references: [] },
  { name: 'barcelona', lat: 41.3874, lng: 2.1686, references: [] },
  { name: 'stockholm', lat: 59.3293, lng: 18.0686, references: [] },
  { name: 'amsterdam', lat: 52.3676, lng: 4.9041, references: [] },
];

export const filterChips = [
  'ALL PERIODS', 'EUROPE', 'RESIDENTIAL', 'BRUTALIST', 'METABOLISM', 'ARCHDAILY', 'RIBA', 'CONCRETE'
];
