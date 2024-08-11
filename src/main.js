import { createRoot } from 'react-dom/client'
import vkBridge from '@vkontakte/vk-bridge'
import AppConfig from './AppConfig.jsx'

vkBridge.send('VKWebAppInit')

createRoot(document.getElementById('root')).render(<AppConfig />)
