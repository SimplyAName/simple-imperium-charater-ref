import { Route as serviceRoute } from '@/routes/services';
import { Link } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    <div>
        <h1> Hello world, you are home!</h1>
        <nav><ol><li><Link to={serviceRoute.to}></Link></li></ol></nav>
    </div>
}