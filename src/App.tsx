import { Engine } from 'reactylon/web';
import { Scene } from 'reactylon';
import Content from './Content';

function App() {

  return (
    <Engine>
      <Scene onSceneReady={scene => scene.createDefaultCameraOrLight(true, undefined, true)}>
        <Content />
      </Scene>
    </Engine>
  )
}

export default App
