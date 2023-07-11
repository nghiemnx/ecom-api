import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { filter, find, shuffle } from 'lodash';
import { PRODUCT_TABLE } from './mock';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  _limit: number = 50;
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(query) {
    const { size, word } = query;
    let results = [];
    if (!isNaN(size)) {
      results = shuffle(PRODUCT_TABLE).slice(
        0,
        +size > this._limit ? this._limit : +size,
      );
    }
    if (word) {
      results = filter(PRODUCT_TABLE, (item) => {
        const nameCompare = item.name?.toLowerCase();
        const wordCompare = word.toLowerCase();
        return nameCompare.includes(wordCompare);
      });
    }
    return results;
  }

  findOne(id: string) {
    return find(PRODUCT_TABLE, { id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
