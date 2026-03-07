import { expect } from '@playwright/test'


export default class HomeService {
    constructor(request) {
        this.request = request
        this.endpoint = '/_next/data/NCHcaCGASaELiCs82IKpb/index.json'
    }

    async getHomeData() {
        return await this.request.get(this.endpoint)
    }

    async getPlasmicData() {
        const response = await this.getHomeData()
        const data = await response.json()
        return data.pageProps.plasmicData.entryCompMetas[0]
    }

    async assertDisplayName() {
        const response = await this.getPlasmicData()
        await expect(response.displayName).toEqual('Homepage')
    }
}