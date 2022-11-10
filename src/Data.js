const data = [
  {
    id: "product-1",
    slug: "/animi-dolor-pariatur",
    title: "Animi Dolor Pariatur",
    url: "https://helendo.jamstacktemplates.dev/images/products/animi-dolor-pariatur/",
    price: "10",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "500",
    category: "accessory",
    tag: "accessories",
  },
  {
    id: "product-2",
    slug: "/art-deco-home",
    title: "Art Deco Home",
    url: "https://helendo.jamstacktemplates.dev/images/products/art-deco-home/",
    price: "30",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "501",
    category: "decoration",
    tag: "deco",
  },
  {
    id: "product-3",
    slug: "/artificial-potted-plant",
    title: "Artificial potted plant",
    url: "https://helendo.jamstacktemplates.dev/images/products/artificial-potted-plant/",
    price: "40",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "502",
    category: "decoration",
    tag: "deco",
  },
  {
    id: "product-4",
    slug: "/dark-green-jug",
    title: "Dark Green Jug",
    url: "https://helendo.jamstacktemplates.dev/images/products/dark-green-jug/",
    price: "19",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "518",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-6",
    slug: "/drinking-glasses",
    title: "Drinking Glasses",
    url: "https://helendo.jamstacktemplates.dev/images/products/drinking-glasses/",
    price: "21",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "515",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-7",
    slug: "/helen-chair",
    title: "Helen Chair",
    url: "https://helendo.jamstacktemplates.dev/images/products/helen-chair/",
    price: "92",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "512",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-8",
    slug: "/high-quality-glass-bottle",
    title: "High Quality Glass Bottle",
    url: "https://helendo.jamstacktemplates.dev/images/products/high-quality-glass-bottle/",
    price: "35",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "503",
    category: "accessory",
    tag: "glass",
  },
  {
    id: "product-9",
    slug: "/living-room-bedroom-lights",
    title: "Living Room & Bedroom Lights",
    url: "https://helendo.jamstacktemplates.dev/images/products/living-room-bedroom-lights/",
    price: "45",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "504",
    category: "accessory",
    tag: "accessories",
  },
  {
    id: "product-10",
    slug: "/nancy-chair",
    title: "Nancy Chair",
    url: "https://helendo.jamstacktemplates.dev/images/products/nancy-chair/",
    price: "90",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "505",
    category: "furniture",
    tag: "chair",
  },
  {
    id: "product-12",
    slug: "/simple-chair",
    title: "Simple Chair",
    url: "https://helendo.jamstacktemplates.dev/images/products/simple-chair/",
    price: "40",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "516",
    category: "furniture",
    tag: "chair",
  },
  {
    id: "product-13",
    slug: "/smooth-disk",
    title: "Smooth Disk",
    url: "https://helendo.jamstacktemplates.dev/images/products/smooth-disk/",
    price: "46",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "507",
    category: "accessory",
    tag: "accessories",
  },
  {
    id: "product-14",
    slug: "/table-black",
    title: "Table Black",
    url: "https://helendo.jamstacktemplates.dev/images/products/table-black/",
    price: "67",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "517",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-15",
    slug: "/table-wood-pine",
    title: "Table Wood Pine",
    url: "https://helendo.jamstacktemplates.dev/images/products/table-wood-pine/",
    price: "50",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "508",
    category: "furniture",
    tag: "table",
  },
  {
    id: "product-16",
    slug: "/teapot-with-black-tea",
    title: "Teapot with black tea",
    url: "https://helendo.jamstacktemplates.dev/images/products/teapot-with-black-tea/",
    price: "25",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "509",
    category: "accessory",
    tag: "accessories",
  },
  {
    id: "product-17",
    slug: "/unique-decoration",
    title: "Unique Decoration",
    url: "https://helendo.jamstacktemplates.dev/images/products/unique-decoration/",
    price: "15",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "510",
    category: "decoration",
    tag: "deco",
  },
  {
    id: "product-18",
    slug: "/vase-of-flowers",
    title: "Vase Of Flowers",
    url: "https://helendo.jamstacktemplates.dev/images/products/vase-of-flowers/",
    price: "77",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "513",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-19",
    slug: "/wood-eggs",
    title: "Wood Eggs",
    url: "https://helendo.jamstacktemplates.dev/images/products/wood-eggs/",
    price: "19",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "514",
    category: "decoration",
    tag: "table",
  },
  {
    id: "product-20",
    slug: "/wooden-box",
    title: "Wooden Box",
    url: "https://helendo.jamstacktemplates.dev/images/products/wooden-box/",
    price: "27",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "511",
    category: "accessory",
    tag: "accessories",
  },
  {
    id: "product-21",
    slug: "/wooden-cups",
    title: "Wooden Cups",
    url: "https://helendo.jamstacktemplates.dev/images/products/wooden-cups/",
    price: "29",
    desc: "At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.",
    sku: "516",
    category: "decoration",
    tag: "table",
  },
];

export default data;
