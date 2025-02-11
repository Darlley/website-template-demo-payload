import { Background, Controls, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
  },
]

export default async function ReactFlowPanel() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  console.log(posts)

  return (
    <div style={{ display: 'flex', height: '70vh' }}>
      <div style={{ flex: 1 }}>
        <ReactFlow nodes={nodes}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <h2>Posts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', color: 'red' }}>
          {(posts.totalPages > 1 && posts.page) && posts?.docs.map((post) => (
            <div key={post?.id}>{post?.title}</div>
          ))}
        </div>
      </div>
    </div>
  )
}