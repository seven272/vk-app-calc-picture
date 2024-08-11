import { createHashRouter } from '@vkontakte/vk-mini-apps-router';


const routers = [
  {
    path: '/',
    panel: 'calc_panel',
    view: 'main_view'
  },
  {
    path: '/info',
    panel: 'info_panel',
    view: 'main_view'
  },
  {
    path: '/collection',
    panel: 'collection_panel',
    view: 'main_view'
  },
]

const router = createHashRouter(routers);

export default router