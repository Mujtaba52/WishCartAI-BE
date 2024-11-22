import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetProductsQueryDto } from './dto/get-products.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(getProductsQueryDto: GetProductsQueryDto) {
    const { page = 1, limit = 50, category } = getProductsQueryDto;
    const offset = (page - 1) * limit;
    let categoryFilter = {};

    if (category) {
      categoryFilter = {category};
    }

    return await Product.findAll({
      where : { ...categoryFilter },
      limit,
      offset,
      raw: true,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
