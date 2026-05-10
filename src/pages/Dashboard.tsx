import { AlertTriangle, TrendingUp, TrendingDown, Minus, Clock, Truck, Users } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { DAILY_STATS, EXCEPTION_TREND, EXCEPTION_REASONS, TOP_CREW, ALERTS, ACTIVE_ROUTES } from '../lib/mock-data'

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
}

const CARD: React.CSSProperties = {
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

const STATUS_COLOR: Record<string, string> = {
  delivering: 'var(--color-green)',
  completed:  'var(--color-muted-2)',
  in_transit: 'var(--color-accent)',
  exception:  'var(--color-red)',
}

function Delta({ val }: { val: number }) {
  const Icon = val > 0 ? TrendingUp : val < 0 ? TrendingDown : Minus
  const color = val > 0 ? 'var(--color-green)' : val < 0 ? 'var(--color-red)' : 'var(--color-muted)'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'var(--font-mono)', fontSize: '12px', color }}>
      <Icon size={12} />
      {val > 0 ? '+' : ''}{val}
    </span>
  )
}

export function Dashboard() {
  const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1400px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
        <div>
          <p style={LABEL}>Morning Operations Brief</p>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 600, marginTop: '0.375rem', letterSpacing: '-0.02em' }}>
            Bay Area Operations
          </h1>
        </div>
        <span style={{ ...LABEL, fontSize: '11px' }}>{now} · May 2, 2026</span>
      </div>

      {/* Stats — 2×2 grid, fits any window */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>

        {/* FACR */}
        <div className="glass" style={{ ...CARD, minHeight: '160px', justifyContent: 'space-between' }}>
          <p style={LABEL}>First-Attempt Rate</p>
          <div>
            <p style={{ fontSize: '3.75rem', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--color-accent)' }}>
              {DAILY_STATS.facr}%
            </p>
            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Delta val={DAILY_STATS.facrDelta} />
              <p style={{ ...LABEL, marginTop: '2px' }}>vs last 14 days</p>
            </div>
          </div>
        </div>

        {/* Exceptions */}
        <div className="glass" style={{ ...CARD, minHeight: '160px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <p style={LABEL}>Exceptions Today</p>
            <AlertTriangle size={15} style={{ color: 'var(--color-red)' }} />
          </div>
          <div>
            <p style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.04em' }}>
              {DAILY_STATS.exceptions}
            </p>
            <div style={{ marginTop: '0.75rem' }}><Delta val={DAILY_STATS.exceptionsDelta} /></div>
          </div>
        </div>

        {/* Unconfirmed */}
        <div className="glass" style={{ ...CARD, minHeight: '160px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <p style={LABEL}>Unconfirmed Stops</p>
            <Clock size={15} style={{ color: 'var(--color-amber)' }} />
          </div>
          <div>
            <p style={{
              fontSize: '3.5rem', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.04em',
              color: DAILY_STATS.unconfirmedStops > 0 ? 'var(--color-amber)' : 'var(--color-green)',
            }}>
              {DAILY_STATS.unconfirmedStops}
            </p>
            <p style={{ ...LABEL, marginTop: '0.75rem' }}>routes depart 6:45am</p>
          </div>
        </div>

        {/* Active routes */}
        <div className="glass" style={{ ...CARD, minHeight: '160px', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <p style={LABEL}>Active Routes</p>
            <Truck size={15} style={{ color: 'var(--color-muted-2)' }} />
          </div>
          <div>
            <p style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.04em' }}>
              {DAILY_STATS.activeRoutes}
            </p>
            <p style={{ ...LABEL, marginTop: '0.75rem' }}>{DAILY_STATS.activeCrew} crew on road</p>
          </div>
        </div>
      </div>

      {/* Chart + Alerts */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1rem' }}>

        <div className="glass" style={{ padding: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <p style={LABEL}>Exception Trend — 14 Days</p>
            <span style={{ ...LABEL, color: 'var(--color-muted-2)' }}>daily count</span>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={EXCEPTION_TREND} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="excGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fontSize: 9, fontFamily: 'var(--font-mono)', fill: 'var(--color-muted)' }} axisLine={false} tickLine={false} interval={2} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.7)', borderRadius: '10px',
                  fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text)',
                }}
                itemStyle={{ color: 'var(--color-accent)' }}
                labelStyle={{ color: 'var(--color-muted)' }}
              />
              <Area type="monotone" dataKey="count" stroke="var(--color-accent)" strokeWidth={2} fill="url(#excGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={LABEL}>Risk Alerts</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ALERTS.map(alert => (
              <div key={alert.id} style={{
                padding: '1rem 1.125rem',
                borderRadius: '0.875rem',
                background: alert.severity === 'high' ? 'rgba(192,64,45,0.07)' : 'rgba(184,120,48,0.07)',
                border: `1px solid ${alert.severity === 'high' ? 'rgba(192,64,45,0.2)' : 'rgba(184,120,48,0.2)'}`,
              }}>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--color-text)' }}>{alert.message}</p>
                <span style={{ ...LABEL, fontSize: '9px', marginTop: '0.375rem', display: 'block', color: alert.severity === 'high' ? 'var(--color-red)' : 'var(--color-amber)' }}>
                  {alert.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>

        <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={LABEL}>Top Exception Reasons</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {EXCEPTION_REASONS.map(r => (
              <div key={r.reason}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                  <span style={{ fontSize: '13px', color: 'var(--color-text)' }}>{r.reason}</span>
                  <span style={{ ...LABEL, color: 'var(--color-muted-2)' }}>{r.pct}%</span>
                </div>
                <div style={{ height: '3px', borderRadius: '99px', background: 'rgba(0,0,0,0.07)' }}>
                  <div style={{ height: '3px', borderRadius: '99px', width: `${r.pct}%`, background: 'var(--color-accent)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={LABEL}>Crew FACR Ranking</p>
            <Users size={13} style={{ color: 'var(--color-muted)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {TOP_CREW.map((c, i) => (
              <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{ ...LABEL, color: 'var(--color-muted-2)', minWidth: '1rem' }}>{i + 1}</span>
                <span style={{ flex: 1, fontSize: '13px', color: 'var(--color-text)' }}>{c.name}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
                  color: c.facr >= 92 ? 'var(--color-green)' : c.facr >= 88 ? 'var(--color-accent)' : 'var(--color-red)',
                }}>
                  {c.facr}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={LABEL}>Route Status</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ACTIVE_ROUTES.map(r => (
              <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, background: STATUS_COLOR[r.status] }} />
                <span style={{ ...LABEL, color: 'var(--color-muted-2)', minWidth: '4.5rem' }}>{r.id}</span>
                <span style={{ flex: 1, fontSize: '13px', color: 'var(--color-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.crew}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, color: STATUS_COLOR[r.status] }}>
                  {r.completed}/{r.stops}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
