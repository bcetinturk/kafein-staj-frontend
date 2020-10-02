export interface Order {
  orderId: number;
  orderNo: string;
  totalPrice: number;
  status: string;
  destination: string;
  products: {amount: number, productName: string, productId: number}[];
}
