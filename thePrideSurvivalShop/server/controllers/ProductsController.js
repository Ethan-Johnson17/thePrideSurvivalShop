import { Auth0Provider } from "@bcwdev/auth0provider";
import { productsService } from "../services/ProductsService";
import BaseController from "../utils/BaseController";

export class ProductsController extends BaseController {
  constructor() {
    super('api/products')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.addProduct)
    .put('/:id', this.editProduct)
  }
  async getAll(req, res, next) {
    try {
      const query = req.query
      const products = await productsService.getAll(query)
      return res.send(products);
    } catch (error) {
      next(error)
    }
  }
  
  async getById(req, res, next) {
    try {
      const product = await productsService.getById(req.params.id)
      return res.send(product)
    } catch (error) {
      next(error)
    }
  }

  async addProduct(req, res, next) {
    try {
      req.body.id = req.params.id
      const product = await productsService.addProduct(req.body)
      return res.send(product)
    } catch (error) {
      next(error)
    }
  }

  async editProduct(req, res, next) {
    try {
      const id = req.params.id
      const product = req.body
      product._id = id
      const updatedProduct = await productsService.editProduct(id, product)
      return res.send(updatedProduct)
    } catch (error) {
      next(error)
    }
  }
}