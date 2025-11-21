import { Injectable } from '@nestjs/common'
import { Food } from './food.dto'
import { FoodRepository } from './food.repository'

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  async findAll(): Promise<Food[]> {
    return Promise.resolve(this.foodRepository.findAllFoods())
  }
}
