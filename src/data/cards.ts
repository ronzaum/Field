export interface CardData {
  id: number;
  source: string;
  title: string;
  creator: string;
  city: string;
  year: number;
}

export const cards: CardData[] = [
  { id: 1, source: "ARCHDAILY", title: "TRELLICK TOWER", creator: "Ernő Goldfinger", city: "LONDON", year: 1972 },
  { id: 2, source: "DEZEEN", title: "UNITÉ D'HABITATION", creator: "Le Corbusier", city: "MARSEILLE", year: 1952 },
  { id: 3, source: "RIBA", title: "ROBIN HOOD GARDENS", creator: "Alison & Peter Smithson", city: "LONDON", year: 1972 },
  { id: 4, source: "DOMUS", title: "HABITAT 67", creator: "Moshe Safdie", city: "MONTRÉAL", year: 1967 },
  { id: 5, source: "CCA", title: "BYKER WALL", creator: "Ralph Erskine", city: "NEWCASTLE", year: 1974 },
  { id: 6, source: "GETTY", title: "PARK HILL ESTATE", creator: "Lynn & Smith", city: "SHEFFIELD", year: 1961 },
  { id: 7, source: "WALLPAPER*", title: "NAKAGIN CAPSULE TOWER", creator: "Kisho Kurokawa", city: "TOKYO", year: 1972 },
  { id: 8, source: "ARCHDAILY", title: "MONTE AMIATA HOUSING", creator: "Carlo Aymonino", city: "MILAN", year: 1970 },
  { id: 9, source: "PIN-UP", title: "PRUITT-IGOE", creator: "Minoru Yamasaki", city: "ST. LOUIS", year: 1954 },
];
