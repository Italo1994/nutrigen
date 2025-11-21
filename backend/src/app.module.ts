import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { FatSecretController } from './fat-secret/fat-secret.controller'
import { FoodController } from './food/food.controller'
import { NutrientController } from './nutrient/nutrient.controller'
import { RecipeController } from './recipe/recipe.controller'
import { FoodService } from './food/food.service'

@Module({
  imports: [UserModule, AuthModule],
  controllers: [
    AppController,
    FatSecretController,
    FoodController,
    NutrientController,
    RecipeController,
  ],
  providers: [AppService, FoodService],
})
export class AppModule {}
