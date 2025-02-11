import { Background, Controls, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
  },
]

const ReactFlowPanel: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '70vh' }}>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowPanel
