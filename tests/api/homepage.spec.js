import test from '@playwright/test'
import HomeService from '../../services/HomeService'


test('Test Plasmic Data', async ({ request }) => {
    const homeService = new HomeService(request)
    const plasmicData = await homeService.getPlasmicData()
    console.log(plasmicData)

    await homeService.assertDisplayName()
})