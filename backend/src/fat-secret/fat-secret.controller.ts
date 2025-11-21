/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get, Query } from '@nestjs/common'
import axios from 'axios'

@Controller('fat-secret')
export class FatSecretController {
  private clientId = process.env.FATSECRET_CLIENT_ID
  private clientSecret = process.env.FATSECRET_CLIENT_SECRET

  private async getAccessToken(): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const resp = await axios.post(
      'https://oauth.fatsecret.com/connect/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'basic',
      }),
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${this.clientId}:${this.clientSecret}`).toString(
              'base64',
            ),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return resp.data.access_token
  }

  @Get('search')
  async searchFood(@Query('q') query: string) {
    const token = await this.getAccessToken()

    const params = new URLSearchParams({
      method: 'foods.search',
      search_expression: query,
      format: 'json',
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const response = await axios.post(
      'https://platform.fatsecret.com/rest/server.api',
      params,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return response.data
  }
}
