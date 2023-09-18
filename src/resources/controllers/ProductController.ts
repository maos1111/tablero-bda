class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class ProductController {
  private static instance: ProductController;
  private products: Product[] = [];

  private constructor() {}

  public static getInstance(): ProductController {
    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }
    return ProductController.instance;
  }

  //   public createProduct(id: number, name: string, price: number): Product {
  //     const newProduct = new Product(id, name, price);
  //     this.products.push(newProduct);
  //     return newProduct;
  //   }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  //   public updateProduct(
  //     id: number,
  //     newName: string,
  //     newPrice: number
  //   ): Product | undefined {
  //     const productIndex = this.products.findIndex(
  //       (product) => product.id === id
  //     );
  //     if (productIndex !== -1) {
  //       this.products[productIndex].name = newName;
  //       this.products[productIndex].price = newPrice;
  //       return this.products[productIndex];
  //     }
  //     return undefined;
  //   }

  //   public deleteProduct(id: number): boolean {
  //     const initialLength = this.products.length;
  //     this.products = this.products.filter((product) => product.id !== id);
  //     return this.products.length !== initialLength;
  //   }
}
