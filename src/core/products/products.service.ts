import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetProductsQueryDto } from './dto/get-products.dto';
import Sequelize, { FindOptions, Options } from 'sequelize';
import { ProductImages } from 'src/common/entities/productImages.entity';
import { ProductCategory } from 'src/common/entities/productCategory.entity';
import { Category } from '../category/entities/category.entity';

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
      categoryFilter = {name :category};
    }

    const result = await Product.findAndCountAll({
      attributes: [
        'id', 
        'name', 
        'description', 
        'thumbnailUrl', 
        'price', 
        'createdAt', 
        'updatedAt', 
        'deletedAt'
      ],
      include: [{
        model: ProductCategory,
        as: 'productCategory',
        attributes: [],
        include : [{
          model: Category,
          as : 'category',
          attributes : [['name', 'name']],
          where : { ...categoryFilter }
        }]
      }],
      limit,
      offset,
      raw: true,
      distinct: true
    });

    return {
      products: result.rows, 
      totalRecords: result.count,
      currentPage: page,
      totalPages: Math.ceil(result.count / limit),
    };
    }

  async findOne(option: FindOptions) {
    option.include = {
      model: ProductImages,
      as: 'productImages',
      attributes: ['imageUrl'],
    }
    const product = (await Product.findOne(option)).toJSON();
    const { productImages, ...rest } = product;
    return {...rest, images: productImages.map((_)=>_.imageUrl) }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
