import { App } from 'vue';
import { SmileOutlined  } from '@ant-design/icons-vue';

export default (app: App) => {
    app.component(SmileOutlined.displayName, SmileOutlined)
    return app
}