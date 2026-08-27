import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "app", "data", "products.json");

interface ProductItem {
  id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  condition: string;
  conditionLabelAr: string;
  conditionLabelEn: string;
  price: string;
  location: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  createdAt: string;
}

const defaultProducts: ProductItem[] = [
  {
    id: "sample-ac-1",
    titleAr: "مكيف سبليت جري 24 ألف وحدة - بحالة ممتازة",
    titleEn: "Gree Split AC 24,000 BTU - Excellent Condition",
    category: "split",
    condition: "excellent",
    conditionLabelAr: "ممتاز / شبه جديد",
    conditionLabelEn: "Excellent / Like New",
    price: "750 ريال",
    location: "القطيف - المجيدية",
    descriptionAr: "مكيف سبليت جري 2 طن برودة ممتازة، كمبروسر كبير، شامل الفك والتركيب والتوصيل.",
    descriptionEn: "Gree 2 Ton split air conditioner, powerful cooling, big compressor. Includes removal and delivery.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-ac-2",
    titleAr: "مكيف شباك أل جي 18 ألف وحدة حار/بارد",
    titleEn: "LG Window AC 18,000 BTU Hot/Cold",
    category: "window",
    condition: "good",
    conditionLabelAr: "جيد جداً",
    conditionLabelEn: "Very Good",
    price: "450 ريال",
    location: "الدمام - حي الشاطئ",
    descriptionAr: "مكيف شباك LG سعة 1.5 طن يعمل بكفاءة عالية، صوت هادئ، تبريد سريع ومضمون.",
    descriptionEn: "LG Window AC 1.5 Ton, smooth operation, quiet sound, fast cooling performance.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-ac-3",
    titleAr: "مكيفات سكراب وخردة نحاس كميات كبيرة",
    titleEn: "Scrap Air Conditioners & Heavy Copper Bulk",
    category: "scrap",
    condition: "scrap",
    conditionLabelAr: "سكراب / للتفكيك",
    conditionLabelEn: "Scrap / For Parts",
    price: "حسب الوزن والكمية",
    location: "الخبر - الثقبة",
    descriptionAr: "نشتري كميات مكيفات عطلانة ومحروقة وسكراب ألومنيوم ونحاس من المجمعات والشركات بأعلى سعر.",
    descriptionEn: "Bulk scrap AC units, copper wiring, and aluminum condensers bought directly with instant cash payout.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    createdAt: new Date().toISOString(),
  },
];

function readProductsFromFile(): ProductItem[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
      fs.writeFileSync(dataFilePath, JSON.stringify(defaultProducts, null, 2), "utf8");
      return defaultProducts;
    }
    const rawData = fs.readFileSync(dataFilePath, "utf8");
    if (!rawData.trim()) {
      return defaultProducts;
    }
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading products JSON:", error);
    return defaultProducts;
  }
}

function writeProductsToFile(products: ProductItem[]): boolean {
  try {
    fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing products JSON:", error);
    return false;
  }
}

export async function GET() {
  const products = readProductsFromFile();
  return NextResponse.json({ success: true, products });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      titleAr,
      titleEn,
      category,
      condition,
      conditionLabelAr,
      conditionLabelEn,
      price,
      location,
      descriptionAr,
      descriptionEn,
      image,
    } = body;

    if (!titleAr && !titleEn) {
      return NextResponse.json(
        { success: false, error: "Product title is required" },
        { status: 400 }
      );
    }

    const currentProducts = readProductsFromFile();

    const newProduct: ProductItem = {
      id: `product-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      titleAr: titleAr || titleEn || "مكيف مستعمل",
      titleEn: titleEn || titleAr || "Used AC Unit",
      category: category || "split",
      condition: condition || "good",
      conditionLabelAr: conditionLabelAr || "مستعمل - ممتاز",
      conditionLabelEn: conditionLabelEn || "Used - Good",
      price: price || "اتصل لمعرفة السعر",
      location: location || "القطيف - الدمام - الخبر",
      descriptionAr: descriptionAr || "",
      descriptionEn: descriptionEn || "",
      image: image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      createdAt: new Date().toISOString(),
    };

    const updatedProducts = [newProduct, ...currentProducts];
    writeProductsToFile(updatedProducts);

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to post product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Product ID is required" },
        { status: 400 }
      );
    }

    const currentProducts = readProductsFromFile();
    const updatedProducts = currentProducts.filter((p) => p.id !== id);

    writeProductsToFile(updatedProducts);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
