import { Route, Switch } from 'wouter'
import { Analytics } from '@vercel/analytics/react'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-full" style={{ color: 'var(--color-muted)' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{title} — coming soon</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/"           component={Dashboard} />
          <Route path="/routes">    {() => <Placeholder title="Routes" />}    </Route>
          <Route path="/crew">      {() => <Placeholder title="Crew" />}      </Route>
          <Route path="/exceptions">{() => <Placeholder title="Exceptions" />}</Route>
          <Route path="/fleet">     {() => <Placeholder title="Fleet" />}     </Route>
          <Route path="/analytics"> {() => <Placeholder title="Analytics" />} </Route>
        </Switch>
      </Layout>
      <Analytics />
    </>
  )
}
