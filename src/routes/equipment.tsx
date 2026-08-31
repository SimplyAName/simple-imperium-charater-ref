import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/equipment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/equipment"!</div>
}
