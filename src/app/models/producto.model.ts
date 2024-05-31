export interface ProductoModel {
  _id: string;
  name: string;
  description: string;
  category: string[];
  imageUrl: string[];
  precio_venta: number;
  precio_regular: number;
  slug?: string;
  created_at: Date;
  update_at?: Date;
}
