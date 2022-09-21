import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProductsService {
  async getAll(query = {}) {
    const products = await dbContext.Product.find(query)
    return products;
  }

  async getById(id) {
    const product = await dbContext.Product.findById(id);
    if (!product) {
      throw new BadRequest('Cannot find that product')
    }
    return product
  }

  async addProduct(body) {
    const product = await dbContext.Product.create(body);
    return product;
  }

  async editProduct(prodId, body) {
    await this.getById(prodId)
    const updatedProduct = await dbContext.Product.findByIdAndUpdate(prodId, body, { new: true })
    return updatedProduct;
  }
}

export const productsService = new ProductsService()