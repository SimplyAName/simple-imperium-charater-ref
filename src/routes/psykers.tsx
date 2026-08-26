import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/psykers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Psykers"!</div>
}
