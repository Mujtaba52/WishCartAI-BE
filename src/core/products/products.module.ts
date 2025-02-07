import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AiService } from '../ai/ai.service';

@Module({
  providers: [ProductsService, AiService],
  controllers: [ProductsController],
})
export class ProductsModule {}
