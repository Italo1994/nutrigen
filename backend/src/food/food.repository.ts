import { Injectable } from '@nestjs/common'
import { Food } from './food.dto'

@Injectable()
export class FoodRepository {
  constructor() {}

  dataFood = [
    {
      id: 1,
      name: '',
      category: '',
      calories: 250,
      imageUrl: '',
      nutrients: '',
    },
  ]

  async findAllFoods(): Promise<Food[]> {
    return Promise.resolve(
      this.dataFood.map((item) => {
        return item
      }),
    )
  }
}
