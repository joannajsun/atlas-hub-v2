import { Link, useLocation } from 'wouter'
import {
  LayoutDashboard, Truck, Users, AlertTriangle,
  MapPin, BarChart3, Settings, Radio,
} from 'lucide-react'

const NAV = [
  { to: '/',           icon: LayoutDashboard, label: 'Morning Brief' },
  { to: '/routes',     icon: MapPin,          label: 'Routes'        },
  { to: '/crew',       icon: Users,           label: 'Crew'          },
  { to: '/exceptions', icon: AlertTriangle,   label: 'Exceptions'    },
  { to: '/fleet',      icon: Truck,           label: 'Fleet'         },
  { to: '/analytics',  icon: BarChart3,       label: 'Analytics'     },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside
        className="glass-sidebar"
        style={{
          width: '220px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        {/* Logo */}
        <div style={{
          padding: '1.75rem 1.5rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <Radio size={15} style={{ color: 'var(--color-accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}>
              Atlas Hub
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            marginTop: '0.375rem',
          }}>
            v2.0 / ops
          </p>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '1.25rem 0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV.map(({ to, icon: Icon, label }) => {
            const active = location === to
            return (
              <Link key={to} href={to}>
                <a style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.875rem',
                  fontSize: '14px',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--color-text)' : 'var(--color-muted)',
                  background: active ? 'rgba(255,255,255,0.65)' : 'transparent',
                  boxShadow: active ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}>
                  <Icon size={16} />
                  {label}
                </a>
              </Link>
            )
          })}
        </nav>

        {/* Settings */}
        <div style={{ padding: '0 0.875rem 1.5rem' }}>
          <Link href="/settings">
            <a style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.875rem',
              fontSize: '14px',
              color: 'var(--color-muted)',
              textDecoration: 'none',
            }}>
              <Settings size={16} />
              Settings
            </a>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
