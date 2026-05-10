export const DAILY_STATS = {
  facr: 87.4,
  facrDelta: +2.1,
  exceptions: 7,
  exceptionsDelta: -3,
  unconfirmedStops: 12,
  activeRoutes: 18,
  activeRoutesDelta: 0,
  activeCrew: 46,
}

export const EXCEPTION_TREND = [
  { day: 'Apr 19', count: 14 },
  { day: 'Apr 20', count: 11 },
  { day: 'Apr 21', count: 9 },
  { day: 'Apr 22', count: 13 },
  { day: 'Apr 23', count: 8 },
  { day: 'Apr 24', count: 6 },
  { day: 'Apr 25', count: 10 },
  { day: 'Apr 26', count: 7 },
  { day: 'Apr 27', count: 9 },
  { day: 'Apr 28', count: 5 },
  { day: 'Apr 29', count: 8 },
  { day: 'Apr 30', count: 6 },
  { day: 'May 1',  count: 9 },
  { day: 'May 2',  count: 7 },
]

export const EXCEPTION_REASONS = [
  { reason: 'Customer not home', count: 28, pct: 38 },
  { reason: 'Access / elevator', count: 19, pct: 26 },
  { reason: 'Address incorrect', count: 12, pct: 16 },
  { reason: 'Item damage', count: 8,  pct: 11 },
  { reason: 'Vehicle issue', count: 5,  pct: 7  },
  { reason: 'Other', count: 2,  pct: 3  },
]

export const TOP_CREW = [
  { name: 'Marcus W.', facr: 94.2, deliveries: 312, trend: 'up'   },
  { name: 'Sofia R.',  facr: 92.7, deliveries: 287, trend: 'up'   },
  { name: 'James K.',  facr: 91.1, deliveries: 301, trend: 'flat' },
  { name: 'Priya N.',  facr: 88.4, deliveries: 294, trend: 'down' },
  { name: 'Derek O.',  facr: 85.9, deliveries: 278, trend: 'down' },
]

export const ALERTS = [
  { id: 'A-01', type: 'unconfirmed', message: '12 stops unconfirmed — routes depart in 48 min', severity: 'high' },
  { id: 'A-02', type: 'vehicle',     message: 'T-203 flagged for maintenance — Route 7 affected', severity: 'high' },
  { id: 'A-03', type: 'pattern',     message: '432 Oak St has 3 access exceptions in 30 days',  severity: 'medium' },
  { id: 'A-04', type: 'partner',     message: 'Ashley Furniture: address error rate up 4% this week', severity: 'medium' },
]

export const ACTIVE_ROUTES = [
  { id: 'RTE-07', crew: 'Marcus W.',  stops: 22, completed: 14, status: 'delivering',  exceptions: 0 },
  { id: 'RTE-12', crew: 'Sofia R.',   stops: 18, completed: 11, status: 'delivering',  exceptions: 1 },
  { id: 'RTE-03', crew: 'James K.',   stops: 25, completed: 25, status: 'completed',   exceptions: 2 },
  { id: 'RTE-19', crew: 'Priya N.',   stops: 20, completed: 8,  status: 'in_transit',  exceptions: 0 },
  { id: 'RTE-11', crew: 'Derek O.',   stops: 16, completed: 16, status: 'exception',   exceptions: 3 },
]
