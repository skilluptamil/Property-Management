/**
 * PROPVANTAGE - REAL-TIME PROPERTY MANAGEMENT SAAS DASHBOARD ENGINE
 * Complete state management, unified database, view routing,
 * dynamic interactive cards, live search, modals, and exportable reports.
 */

/* ==========================================================================
   1. UNIFIED SAAS DATA STORE (LOCALSTORAGE + DEFAULTS)
   ========================================================================== */

const DEFAULT_DASHBOARD_DB = {
  properties: [
    {
      id: 'prop-1',
      name: 'Grand Horizon Apartments',
      type: 'Multi-Family Residential',
      address: '742 Evergreen Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90024',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      totalUnits: 12,
      occupiedUnits: 12,
      vacantUnits: 0,
      monthlyRent: 34200,
      occupancyRate: 100,
      capRate: 8.8,
      status: 'Optimized',
      yearBuilt: 2021,
      amenities: ['Rooftop Deck', 'Underground Parking', 'Smart Access', 'Fitness Center'],
      units: [
        { unit: '101', tenant: 'James Wilson', email: 'j.wilson@gmail.com', rent: 2800, leaseEnd: '2027-04-30', status: 'Occupied' },
        { unit: '102', tenant: 'Jonathan Myers', email: 'j.myers@outlook.com', rent: 2800, leaseEnd: '2026-11-30', status: 'Occupied' },
        { unit: '201', tenant: 'Emily Watson', email: 'emily.w@icloud.com', rent: 2850, leaseEnd: '2027-01-15', status: 'Occupied' },
        { unit: '204', tenant: 'David Chen', email: 'dchen@techcorp.com', rent: 2850, leaseEnd: '2027-03-31', status: 'Occupied' },
        { unit: '301', tenant: 'Rebecca Taylor', email: 'rtaylor@design.io', rent: 2900, leaseEnd: '2026-12-31', status: 'Occupied' },
        { unit: '402', tenant: 'Sarah Jenkins', email: 'sarah.j@propvantage.com', rent: 2850, leaseEnd: '2027-05-31', status: 'Occupied' }
      ]
    },
    {
      id: 'prop-2',
      name: 'Sunset Palms Waterfront',
      type: 'Luxury Villas',
      address: '1240 Oceanfront Way',
      city: 'Miami',
      state: 'FL',
      zip: '33139',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      totalUnits: 4,
      occupiedUnits: 4,
      vacantUnits: 0,
      monthlyRent: 16800,
      occupancyRate: 100,
      capRate: 9.4,
      status: 'Optimized',
      yearBuilt: 2023,
      amenities: ['Private Boat Slip', 'Infinity Pool', 'Smart Home Tech', 'Concierge Service'],
      units: [
        { unit: '101', tenant: 'Carlos Mendez', email: 'carlos@mendezlaw.com', rent: 4200, leaseEnd: '2027-06-30', status: 'Occupied' },
        { unit: '102', tenant: 'Sophia Christensen', email: 'sophia.c@luxuryre.com', rent: 4100, leaseEnd: '2026-12-31', status: 'Occupied' },
        { unit: '108', tenant: 'Marcus Vance', email: 'marcus.v@venturecapital.com', rent: 4200, leaseEnd: '2027-02-28', status: 'Occupied' },
        { unit: '110', tenant: 'Olivia Bennett', email: 'olivia.b@medcenter.org', rent: 4300, leaseEnd: '2027-08-31', status: 'Occupied' }
      ]
    },
    {
      id: 'prop-3',
      name: 'Pinecrest Heights Townhomes',
      type: 'Townhome Community',
      address: '580 Alpine Ridge Rd',
      city: 'Denver',
      state: 'CO',
      zip: '80202',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      totalUnits: 16,
      occupiedUnits: 15,
      vacantUnits: 1,
      monthlyRent: 33600,
      occupancyRate: 94,
      capRate: 7.9,
      status: '1 Vacancy',
      yearBuilt: 2020,
      amenities: ['Attached Garage', 'Mountain Views', 'Private Patio', 'EV Chargers'],
      units: [
        { unit: '1A', tenant: 'Lucas Gray', email: 'lucas.gray@denverhealth.org', rent: 2100, leaseEnd: '2027-05-15', status: 'Occupied' },
        { unit: '2B', tenant: 'Elena Rostova', email: 'elena.r@architects.com', rent: 2100, leaseEnd: '2026-10-31', status: 'Occupied' },
        { unit: '3C', tenant: 'Vacant (Leasing In Progress)', email: '-', rent: 2100, leaseEnd: '-', status: 'Vacant' },
        { unit: '4D', tenant: 'Nathan Scott', email: 'n.scott@rockymtn.com', rent: 2200, leaseEnd: '2027-03-31', status: 'Occupied' }
      ]
    },
    {
      id: 'prop-4',
      name: 'Apex Manhattan Lofts',
      type: 'Commercial & Luxury Lofts',
      address: '350 West Broadway',
      city: 'New York',
      state: 'NY',
      zip: '10013',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      totalUnits: 10,
      occupiedUnits: 10,
      vacantUnits: 0,
      monthlyRent: 56000,
      occupancyRate: 100,
      capRate: 10.2,
      status: 'Optimized',
      yearBuilt: 2022,
      amenities: ['24/7 Doorman', 'Private Elevator', 'Keycard Access', 'Skyline Lounge'],
      units: [
        { unit: '300', tenant: 'Dr. Robert Vance', email: 'rvance@nyucare.org', rent: 5400, leaseEnd: '2026-12-15', status: 'Occupied' },
        { unit: '400', tenant: 'Claire Dupont', email: 'cdupont@parisfinance.com', rent: 5600, leaseEnd: '2027-04-30', status: 'Occupied' },
        { unit: '500', tenant: 'TechVentures Inc (HQ)', email: 'accounts@techventures.io', rent: 5600, leaseEnd: '2027-09-30', status: 'Occupied' }
      ]
    },
    {
      id: 'prop-5',
      name: 'Marina Bay Condominiums',
      type: 'Waterfront Condos',
      address: '920 Colorado River Ln',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      totalUnits: 6,
      occupiedUnits: 5,
      vacantUnits: 1,
      monthlyRent: 24600,
      occupancyRate: 83,
      capRate: 8.5,
      status: '1 Turnaround',
      yearBuilt: 2021,
      amenities: ['Kayak Launch', 'Resort Pool', 'Clubhouse', 'Covered Parking'],
      units: [
        { unit: '501', tenant: 'Austin Tech Labs', email: 'billing@austintech.com', rent: 4100, leaseEnd: '2027-01-31', status: 'Occupied' },
        { unit: '512', tenant: 'David K. Miller', email: 'dmiller@millerconsulting.com', rent: 4100, leaseEnd: '2026-11-15', status: 'Occupied' },
        { unit: '514', tenant: 'Vacant (Unit Make-Ready)', email: '-', rent: 4100, leaseEnd: '-', status: 'Vacant' }
      ]
    }
  ],

  payments: [
    {
      id: 'pay-1',
      invoiceNo: 'INV-2026-1001',
      tenantName: 'Sarah Jenkins',
      propertyName: 'Grand Horizon Apartments',
      unit: '#402',
      amount: 2850,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 01, 2026',
      paymentMethod: 'ACH Bank Transfer',
      status: 'Paid',
      notes: 'Automated recurring bank payout cleared'
    },
    {
      id: 'pay-2',
      invoiceNo: 'INV-2026-1002',
      tenantName: 'Marcus Vance',
      propertyName: 'Sunset Palms Waterfront',
      unit: '#108',
      amount: 4200,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 01, 2026',
      paymentMethod: 'Credit Card',
      status: 'Paid',
      notes: 'Processed with autopay confirmation #CC-94821'
    },
    {
      id: 'pay-3',
      invoiceNo: 'INV-2026-1003',
      tenantName: 'TechVentures Inc (HQ)',
      propertyName: 'Apex Manhattan Lofts',
      unit: '#500',
      amount: 5600,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 01, 2026',
      paymentMethod: 'FedWire Transfer',
      status: 'Paid',
      notes: 'Quarterly corporate deposit received'
    },
    {
      id: 'pay-4',
      invoiceNo: 'INV-2026-1004',
      tenantName: 'Elena Rostova',
      propertyName: 'Pinecrest Heights Townhomes',
      unit: '#2B',
      amount: 2100,
      dueDate: 'Oct 05, 2026',
      paidDate: 'Pending',
      paymentMethod: 'ACH Electronic',
      status: 'Pending',
      notes: 'ACH 3-day clearing window active'
    },
    {
      id: 'pay-5',
      invoiceNo: 'INV-2026-1005',
      tenantName: 'Carlos Mendez',
      propertyName: 'Sunset Palms Waterfront',
      unit: '#101',
      amount: 4200,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 02, 2026',
      paymentMethod: 'ACH Bank Transfer',
      status: 'Paid',
      notes: 'Cleared through portal'
    },
    {
      id: 'pay-6',
      invoiceNo: 'INV-2026-1006',
      tenantName: 'David K. Miller',
      propertyName: 'Marina Bay Condominiums',
      unit: '#512',
      amount: 4100,
      dueDate: 'Sep 25, 2026',
      paidDate: 'Pending',
      paymentMethod: 'Bank Direct',
      status: 'Overdue',
      notes: 'Late fee warning notice issued'
    },
    {
      id: 'pay-7',
      invoiceNo: 'INV-2026-1007',
      tenantName: 'Dr. Robert Vance',
      propertyName: 'Apex Manhattan Lofts',
      unit: '#300',
      amount: 5400,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 01, 2026',
      paymentMethod: 'ACH Bank Transfer',
      status: 'Paid',
      notes: 'Standard monthly rent'
    },
    {
      id: 'pay-8',
      invoiceNo: 'INV-2026-1008',
      tenantName: 'Lucas Gray',
      propertyName: 'Pinecrest Heights Townhomes',
      unit: '#1A',
      amount: 2100,
      dueDate: 'Oct 01, 2026',
      paidDate: 'Oct 01, 2026',
      paymentMethod: 'Debit Card',
      status: 'Paid',
      notes: 'Receipt generated #REC-88492'
    }
  ],

  maintenance: [
    {
      id: 'maint-1',
      ticketNo: 'TKT-1082',
      propertyName: 'Sunset Palms Waterfront',
      unit: 'Villa #108',
      issue: 'HVAC Air Filter Replacement & Compressor Check',
      tenant: 'Marcus Vance',
      priority: 'Medium',
      status: 'Dispatched',
      technician: 'CoolAir HVAC Pros (Mike S.)',
      createdDate: 'Oct 07, 2026',
      updatedDate: 'Oct 08, 2026 09:15 AM',
      notes: 'Technician dispatched for on-site diagnosis and seasonal coil cleaning.'
    },
    {
      id: 'maint-2',
      ticketNo: 'TKT-1081',
      propertyName: 'Pinecrest Heights Townhomes',
      unit: 'Unit #1A',
      issue: 'Water Heater Pressure Relief Valve Drip',
      tenant: 'Lucas Gray',
      priority: 'High',
      status: 'In Progress',
      technician: 'Apex Plumbing Services (Dave R.)',
      createdDate: 'Oct 07, 2026',
      updatedDate: 'Oct 08, 2026 08:30 AM',
      notes: 'Replacement valve installed. Performing pressure stress test.'
    },
    {
      id: 'maint-3',
      ticketNo: 'TKT-1080',
      propertyName: 'Grand Horizon Apartments',
      unit: 'Unit #204',
      issue: 'Kitchen Faucet Washer Seal Repair',
      tenant: 'David Chen',
      priority: 'Low',
      status: 'Completed',
      technician: 'In-House Maintenance (Leo T.)',
      createdDate: 'Oct 06, 2026',
      updatedDate: 'Oct 06, 2026 03:45 PM',
      notes: 'New cartridge and aerator installed. Tenant signed off.'
    },
    {
      id: 'maint-4',
      ticketNo: 'TKT-1079',
      propertyName: 'Marina Bay Condominiums',
      unit: 'Condo #512',
      issue: 'Balcony Sliding Door Roller Latch Adjustment',
      tenant: 'David K. Miller',
      priority: 'Low',
      status: 'Completed',
      technician: 'In-House Maintenance (Sam K.)',
      createdDate: 'Oct 04, 2026',
      updatedDate: 'Oct 04, 2026 11:30 AM',
      notes: 'Roller assembly lubricated and latch aligned perfectly.'
    },
    {
      id: 'maint-5',
      ticketNo: 'TKT-1083',
      propertyName: 'Apex Manhattan Lofts',
      unit: 'Loft #400',
      issue: 'Smart Intercom App Access Sync Issue',
      tenant: 'Claire Dupont',
      priority: 'Medium',
      status: 'New',
      technician: 'Unassigned (Automated Ticket)',
      createdDate: 'Oct 08, 2026',
      updatedDate: 'Oct 08, 2026 10:05 AM',
      notes: 'Tenant requests mobile key credentials reset for assistant.'
    }
  ],

  leases: [
    {
      id: 'lease-1',
      tenantName: 'Jonathan Myers',
      propertyName: 'Grand Horizon Apartments',
      unit: 'Unit #102',
      currentRent: 2800,
      proposedRent: 2925,
      increasePct: 4.5,
      leaseStart: 'Dec 01, 2025',
      leaseExpiry: 'Nov 30, 2026',
      daysRemaining: 53,
      status: 'Accepted & Signed'
    },
    {
      id: 'lease-2',
      tenantName: 'Elena Rostova',
      propertyName: 'Pinecrest Heights Townhomes',
      unit: 'Unit #2B',
      currentRent: 2100,
      proposedRent: 2195,
      increasePct: 4.5,
      leaseStart: 'Nov 01, 2025',
      leaseExpiry: 'Oct 31, 2026',
      daysRemaining: 23,
      status: 'Offer Dispatched'
    },
    {
      id: 'lease-3',
      tenantName: 'David K. Miller',
      propertyName: 'Marina Bay Condominiums',
      unit: 'Condo #512',
      currentRent: 4100,
      proposedRent: 4285,
      increasePct: 4.5,
      leaseStart: 'Nov 16, 2025',
      leaseExpiry: 'Nov 15, 2026',
      daysRemaining: 38,
      status: 'Pending Review'
    },
    {
      id: 'lease-4',
      tenantName: 'Dr. Robert Vance',
      propertyName: 'Apex Manhattan Lofts',
      unit: 'Loft #300',
      currentRent: 5400,
      proposedRent: 5650,
      increasePct: 4.6,
      leaseStart: 'Dec 16, 2025',
      leaseExpiry: 'Dec 15, 2026',
      daysRemaining: 68,
      status: 'Offer Dispatched'
    },
    {
      id: 'lease-5',
      tenantName: 'Sophia Christensen',
      propertyName: 'Sunset Palms Waterfront',
      unit: 'Villa #102',
      currentRent: 4100,
      proposedRent: 4285,
      increasePct: 4.5,
      leaseStart: 'Jan 01, 2026',
      leaseExpiry: 'Dec 31, 2026',
      daysRemaining: 84,
      status: 'Under Review'
    }
  ],

  messages: [
    {
      id: 'msg-1',
      senderName: 'Sarah Jenkins',
      senderEmail: 'sarah.j@propvantage.com',
      senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      propertyName: 'Grand Horizon Apartments',
      unit: '#402',
      category: 'Rent/Payment',
      subject: 'Confirmation of automated October rent payment',
      preview: 'Hello David, I received the bank confirmation that my recurring rent payment cleared successfully...',
      fullText: 'Hello David,\n\nI just wanted to verify that our October rent of $2,850 via ACH has gone through properly. Thank you for the seamless online tenant portal experience!\n\nBest regards,\nSarah Jenkins',
      date: 'Oct 08, 2026 • 09:30 AM',
      isUnread: true,
      replies: []
    },
    {
      id: 'msg-2',
      senderName: 'Marcus Vance',
      senderEmail: 'marcus.v@venturecapital.com',
      senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      propertyName: 'Sunset Palms Waterfront',
      unit: '#108',
      category: 'Maintenance',
      subject: 'HVAC technician visit confirmation',
      preview: 'Hi David, Mike from CoolAir just completed the seasonal filter replacement...',
      fullText: 'Hi David,\n\nMike from CoolAir just finished checking the AC compressor and replacing the secondary filter. The airflow is 100% restored. Appreciate the fast turnaround!\n\nCheers,\nMarcus',
      date: 'Oct 07, 2026 • 04:15 PM',
      isUnread: true,
      replies: [
        {
          author: 'David Sterling (Owner)',
          text: 'Glad to hear that Marcus! Please reach out anytime if you need anything else.',
          time: 'Oct 07, 2026 • 05:00 PM'
        }
      ]
    },
    {
      id: 'msg-3',
      senderName: 'Elena Rostova',
      senderEmail: 'elena.r@architects.com',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      propertyName: 'Pinecrest Heights Townhomes',
      unit: '#2B',
      category: 'Lease',
      subject: 'Lease Renewal proposal inquiry for 2027',
      preview: 'Dear Management, I received the 12-month extension proposal with the +4.5% adjustment...',
      fullText: 'Dear Management,\n\nI received the lease extension offer for Unit #2B. We love the community and are happy to renew for another full year at $2,195/month. I will sign the digital agreement this afternoon.\n\nWarm regards,\nElena Rostova',
      date: 'Oct 06, 2026 • 11:20 AM',
      isUnread: false,
      replies: []
    }
  ]
};

// Database Accessors
function getDashboardDB() {
  try {
    const saved = localStorage.getItem('propvantage_dashboard_db_v2');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  localStorage.setItem('propvantage_dashboard_db_v2', JSON.stringify(DEFAULT_DASHBOARD_DB));
  return DEFAULT_DASHBOARD_DB;
}

function saveDashboardDB(db) {
  try {
    localStorage.setItem('propvantage_dashboard_db_v2', JSON.stringify(db));
  } catch (e) {}
  updateDashboardBadges();
}

/* ==========================================================================
   2. INITIALIZATION & ROUTER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardSidebar();
  initRouter();
  initGlobalSearch();
  initReportExport();
  updateDashboardBadges();
});

function initRouter() {
  const navLinks = document.querySelectorAll('.sidebar-nav-link[data-view]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const view = this.getAttribute('data-view');
      navigateToView(view);
    });
  });

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'overview';
    navigateToView(hash);
  });

  // Initial load
  const initialHash = window.location.hash.replace('#', '') || 'overview';
  navigateToView(initialHash);
}

function navigateToView(viewName, filterParam = null) {
  const views = ['overview', 'properties', 'rent-payments', 'maintenance', 'lease-renewals', 'income-reports', 'messages'];
  if (!views.includes(viewName)) viewName = 'overview';

  // Update URL hash
  if (window.location.hash !== `#${viewName}`) {
    window.history.pushState(null, '', `#${viewName}`);
  }

  // Update active state in sidebar
  document.querySelectorAll('.sidebar-nav-link').forEach(link => {
    if (link.getAttribute('data-view') === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render view content into container
  const container = document.getElementById('dashboardContentContainer');
  if (!container) return;

  switch (viewName) {
    case 'overview':
      renderOverviewView(container);
      break;
    case 'properties':
      renderPropertiesView(container, filterParam);
      break;
    case 'rent-payments':
      renderPaymentsView(container, filterParam);
      break;
    case 'maintenance':
      renderMaintenanceView(container, filterParam);
      break;
    case 'lease-renewals':
      renderLeaseRenewalsView(container, filterParam);
      break;
    case 'income-reports':
      renderIncomeReportsView(container);
      break;
    case 'messages':
      renderMessagesView(container, filterParam);
      break;
    default:
      renderOverviewView(container);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateDashboardBadges() {
  const db = getDashboardDB();

  // Badges
  const totalProps = db.properties.length;
  const occupiedUnits = db.properties.reduce((sum, p) => sum + p.occupiedUnits, 0);
  const totalUnits = db.properties.reduce((sum, p) => sum + p.totalUnits, 0);
  const collectionRate = Math.round((occupiedUnits / (totalUnits || 1)) * 100);
  const activeTickets = db.maintenance.filter(m => m.status !== 'Completed').length;
  const upcomingLeases = db.leases.length;
  const unreadMessages = db.messages.filter(m => m.isUnread).length;

  const propBadge = document.getElementById('sidebarBadgeProps');
  const rentBadge = document.getElementById('sidebarBadgeRent');
  const maintBadge = document.getElementById('sidebarBadgeMaint');
  const leaseBadge = document.getElementById('sidebarBadgeLease');
  const msgBadge = document.getElementById('sidebarBadgeMsg');

  if (propBadge) propBadge.textContent = totalProps;
  if (rentBadge) rentBadge.textContent = `${collectionRate}%`;
  if (maintBadge) maintBadge.textContent = `${activeTickets} Active`;
  if (leaseBadge) leaseBadge.textContent = upcomingLeases;
  if (msgBadge) {
    msgBadge.textContent = unreadMessages;
    msgBadge.style.display = unreadMessages > 0 ? 'inline-block' : 'none';
  }
}

/* ==========================================================================
   3. MOBILE SIDEBAR TOGGLE
   ========================================================================== */
function initDashboardSidebar() {
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const closeBtn = document.getElementById('sidebarCloseBtn');

  // Update user name in sidebar footer if session exists
  try {
    const session = JSON.parse(sessionStorage.getItem('propvantage_session'));
    if (session && session.name) {
      const nameEl = document.querySelector('.sidebar-user-name');
      if (nameEl) nameEl.textContent = session.name;
    }
  } catch (e) {}

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('show');
    });
  }

  document.addEventListener('click', (e) => {
    if (window.innerWidth < 992 && sidebar && sidebar.classList.contains('show')) {
      if (!sidebar.contains(e.target) && !toggleBtn?.contains(e.target)) {
        sidebar.classList.remove('show');
      }
    }
  });
}

/* ==========================================================================
   4. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.propvantage-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'propvantage-toast-container';
    document.body.appendChild(toastContainer);
  }

  const icon = type === 'success' ? 'fa-circle-check text-success' : (type === 'warning' ? 'fa-triangle-exclamation text-warning' : 'fa-circle-info text-primary');

  const toast = document.createElement('div');
  toast.className = `propvantage-toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} fs-5"></i>
    <div class="flex-grow-1">${message}</div>
    <button class="btn btn-sm btn-link p-0 text-secondary-custom shadow-none border-0 ms-2" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   5. VIEW: OVERVIEW (DASHBOARD HOME)
   ========================================================================== */
function renderOverviewView(container) {
  const db = getDashboardDB();

  let userName = 'David';
  try {
    const session = JSON.parse(sessionStorage.getItem('propvantage_session'));
    if (session && session.name) {
      userName = session.name.split(' ')[0];
    }
  } catch (e) {}

  const totalProps = db.properties.length;
  const occupiedUnits = db.properties.reduce((sum, p) => sum + p.occupiedUnits, 0);
  const totalUnits = db.properties.reduce((sum, p) => sum + p.totalUnits, 0);
  const vacantUnits = totalUnits - occupiedUnits;
  const grossRent = db.properties.reduce((sum, p) => sum + p.monthlyRent, 0);
  const netIncome = Math.round(grossRent * 0.899);
  const pendingPayments = db.payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0);
  const activeTickets = db.maintenance.filter(m => m.status !== 'Completed').length;
  const upcomingLeases = db.leases.length;

  container.innerHTML = `
    <div class="dashboard-view">
      <!-- Greeting Banner -->
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1" id="dashboardGreeting">Welcome back, ${userName}</h1>
          <p class="text-secondary-custom small mb-0">Here is your live real estate portfolio cashflow & tenant status for <strong>October 2026</strong>.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-primary-custom btn-sm" onclick="openAddPropertyModal()">
            <i class="fa-solid fa-plus me-1"></i> Add Property
          </button>
          <span class="badge badge-status badge-success p-2 fs-6"><i class="fa-solid fa-circle-check me-1"></i> Automated Payout Active</span>
        </div>
      </div>

      <!-- 8 STAT CARDS WITH MEANINGFUL ICONS & CLICKABLE DEEP-LINKING -->
      <div class="row g-3 mb-4">
        <!-- 1. Total Properties -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('properties', 'all')" title="Click to view all managed properties">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box"><i class="fa-solid fa-hotel"></i></div>
              <span class="badge badge-status badge-primary">Active</span>
            </div>
            <div class="kpi-val">${totalProps}</div>
            <div class="kpi-title">Total Properties</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-arrow-up"></i> +1 added recently</div>
          </div>
        </div>

        <!-- 2. Occupied Units -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('properties', 'occupied')" title="Click to view occupied properties">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box success"><i class="fa-solid fa-house-user"></i></div>
              <span class="badge badge-status badge-success">${Math.round((occupiedUnits/totalUnits)*100)}%</span>
            </div>
            <div class="kpi-val">${occupiedUnits} / ${totalUnits}</div>
            <div class="kpi-title">Occupied Units</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-check"></i> ${vacantUnits} Vacant / Ready</div>
          </div>
        </div>

        <!-- 3. Gross Monthly Rent -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('rent-payments', 'all')" title="Click to view rent payments">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box gold"><i class="fa-solid fa-sack-dollar"></i></div>
              <span class="badge badge-status badge-gold">Gross</span>
            </div>
            <div class="kpi-val">$${grossRent.toLocaleString()}</div>
            <div class="kpi-title">Gross Monthly Rent</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-arrow-up"></i> +6.2% vs target</div>
          </div>
        </div>

        <!-- 4. Monthly Net Income -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card border-primary" role="button" onclick="navigateToView('income-reports')" title="Click to view income reports">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box success"><i class="fa-solid fa-wallet"></i></div>
              <span class="badge badge-status badge-success">Disbursed</span>
            </div>
            <div class="kpi-val text-primary-custom">$${netIncome.toLocaleString()}</div>
            <div class="kpi-title">Monthly Net Income</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-building-columns"></i> Sent to Chase ***4092</div>
          </div>
        </div>

        <!-- 5. Pending Payments -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('rent-payments', 'pending')" title="Click to view pending payments">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box warning"><i class="fa-solid fa-clock-rotate-left"></i></div>
              <span class="badge badge-status badge-warning">${db.payments.filter(p=>p.status==='Pending').length} Units</span>
            </div>
            <div class="kpi-val text-warning">$${pendingPayments.toLocaleString()}</div>
            <div class="kpi-title">Pending Payments</div>
            <div class="small text-secondary-custom mt-2">ACH clearing in progress</div>
          </div>
        </div>

        <!-- 6. Maintenance Tickets -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('maintenance', 'active')" title="Click to view active maintenance tickets">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box"><i class="fa-solid fa-screwdriver-wrench"></i></div>
              <span class="badge badge-status badge-primary">Active</span>
            </div>
            <div class="kpi-val">${activeTickets} Active</div>
            <div class="kpi-title">Maintenance Tickets</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-bolt"></i> Avg response 1.4h</div>
          </div>
        </div>

        <!-- 7. Upcoming Leases -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('lease-renewals', '60days')" title="Click to view lease renewals">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box gold"><i class="fa-solid fa-file-contract"></i></div>
              <span class="badge badge-status badge-gold">Next 60 Days</span>
            </div>
            <div class="kpi-val">${upcomingLeases} Renewals</div>
            <div class="kpi-title">Upcoming Leases</div>
            <div class="small text-secondary-custom mt-2">+4.5% rent increase target</div>
          </div>
        </div>

        <!-- 8. Portfolio Cap Rate -->
        <div class="col-6 col-md-4 col-xl-3">
          <div class="kpi-card" role="button" onclick="navigateToView('income-reports')" title="Click to view Cap Rate analytics">
            <div class="d-flex justify-content-between align-items-start">
              <div class="kpi-icon-box success"><i class="fa-solid fa-chart-line"></i></div>
              <span class="badge badge-status badge-success">Top 5%</span>
            </div>
            <div class="kpi-val text-success">9.4%</div>
            <div class="kpi-title">Portfolio Cap Rate</div>
            <div class="kpi-trend positive mt-2"><i class="fa-solid fa-arrow-up"></i> +1.2% above metro avg</div>
          </div>
        </div>
      </div>

      <!-- 4 LIVE INTERACTIVE CHARTS -->
      <div class="row g-4 mb-4">
        <!-- Chart 1: Monthly Income vs Expenses -->
        <div class="col-lg-8">
          <div class="chart-card">
            <div class="chart-header">
              <div>
                <h3 class="chart-title">Monthly Income & Cashflow Breakdown</h3>
                <small class="text-secondary-custom">Net disbursements, gross rent collection, and operating expenses (2026)</small>
              </div>
              <span class="badge badge-status badge-primary">Annual Trend</span>
            </div>
            <div class="chart-wrapper">
              <canvas id="incomeExpenseChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Chart 2: Rent Collection Status -->
        <div class="col-lg-4">
          <div class="chart-card">
            <div class="chart-header">
              <div>
                <h3 class="chart-title">Collection Rate</h3>
                <small class="text-secondary-custom">Current billing cycle</small>
              </div>
              <span class="badge badge-status badge-success">94% Paid</span>
            </div>
            <div class="chart-wrapper">
              <canvas id="collectionStatusChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Chart 3: Top Yielding Assets -->
        <div class="col-lg-6">
          <div class="chart-card">
            <div class="chart-header">
              <div>
                <h3 class="chart-title">Top Performing Assets by Yield</h3>
                <small class="text-secondary-custom">Net Annualized Return on Investment (ROI)</small>
              </div>
            </div>
            <div class="chart-wrapper">
              <canvas id="propertyYieldChart"></canvas>
            </div>
          </div>
        </div>

        <!-- Chart 4: Occupancy Stability -->
        <div class="col-lg-6">
          <div class="chart-card">
            <div class="chart-header">
              <div>
                <h3 class="chart-title">12-Month Occupancy Stability</h3>
                <small class="text-secondary-custom">Historical tenant occupancy retention</small>
              </div>
              <span class="badge badge-status badge-success">98.2% Current</span>
            </div>
            <div class="chart-wrapper">
              <canvas id="occupancyTrendChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- QUICK TABLES PREVIEW -->
      <div class="row g-4 mb-4">
        <!-- Recent Payments -->
        <div class="col-lg-6">
          <div class="dashboard-table-card h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="chart-title">Recent Rent Payments</h3>
              <button class="btn btn-link text-primary-custom p-0 text-decoration-none small fw-bold" onclick="navigateToView('rent-payments')">View All <i class="fa-solid fa-arrow-right ms-1"></i></button>
            </div>
            <div class="table-responsive-custom">
              <table class="table-custom">
                <thead>
                  <tr>
                    <th>Tenant & Unit</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${db.payments.slice(0, 4).map(p => `
                    <tr>
                      <td>
                        <strong>${p.tenantName}</strong>
                        <div class="small text-secondary-custom">${p.propertyName} ${p.unit}</div>
                      </td>
                      <td class="fw-bold">$${p.amount.toLocaleString()}</td>
                      <td>
                        <span class="badge badge-status ${p.status==='Paid'?'badge-success':(p.status==='Pending'?'badge-warning':'badge-error')}">${p.status}</span>
                      </td>
                      <td>
                        <button class="btn btn-outline-custom btn-sm py-1 px-2" onclick="openPaymentDetailsModal('${p.id}')">Receipt</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Active Maintenance -->
        <div class="col-lg-6">
          <div class="dashboard-table-card h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="chart-title">Active Maintenance Requests</h3>
              <button class="btn btn-link text-primary-custom p-0 text-decoration-none small fw-bold" onclick="navigateToView('maintenance')">View All <i class="fa-solid fa-arrow-right ms-1"></i></button>
            </div>
            <div class="table-responsive-custom">
              <table class="table-custom">
                <thead>
                  <tr>
                    <th>Issue & Property</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${db.maintenance.slice(0, 4).map(m => `
                    <tr>
                      <td>
                        <strong>${m.issue}</strong>
                        <div class="small text-secondary-custom">${m.propertyName} (${m.unit})</div>
                      </td>
                      <td>
                        <span class="badge badge-status ${m.priority==='High'?'badge-error':(m.priority==='Medium'?'badge-warning':'badge-primary')}">${m.priority}</span>
                      </td>
                      <td>
                        <span class="badge badge-status ${m.status==='Completed'?'badge-success':(m.status==='Dispatched'?'badge-primary':'badge-warning')}">${m.status}</span>
                      </td>
                      <td>
                        <button class="btn btn-outline-custom btn-sm py-1 px-2" onclick="openMaintenanceModal('${m.id}')">Manage</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize charts
  setTimeout(() => initOverviewCharts(), 50);
}

function initOverviewCharts() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#9cb1c4' : '#667785';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';

  // Chart 1
  const incomeCtx = document.getElementById('incomeExpenseChart')?.getContext('2d');
  if (incomeCtx) {
    new Chart(incomeCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            type: 'line',
            label: 'Net Income ($)',
            data: [112000, 115000, 118500, 122000, 124000, 126500, 128450, 129000, 131000, 134500, 138000, 142800],
            borderColor: '#D6A84F',
            backgroundColor: 'rgba(214, 168, 79, 0.1)',
            borderWidth: 3,
            tension: 0.35,
            fill: false
          },
          {
            type: 'bar',
            label: 'Gross Rent ($)',
            data: [128000, 130500, 133000, 136000, 138000, 140000, 142800, 143500, 145000, 148000, 151000, 156000],
            backgroundColor: '#4F86A6',
            borderRadius: 6
          },
          {
            type: 'bar',
            label: 'Expenses ($)',
            data: [16000, 15500, 14500, 14000, 14000, 13500, 14350, 14500, 14000, 13500, 13000, 13200],
            backgroundColor: '#78AFC8',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif", size: 12, weight: 600 } } }
        },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => '$' + (v/1000) + 'k' } }
        }
      }
    });
  }

  // Chart 2
  const collectionCtx = document.getElementById('collectionStatusChart')?.getContext('2d');
  if (collectionCtx) {
    new Chart(collectionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Collected (94%)', 'Pending (4%)', 'Overdue (2%)'],
        datasets: [{
          data: [134232, 5712, 2856],
          backgroundColor: ['#55A77A', '#D9A441', '#D96B6B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, font: { weight: 600 } } }
        }
      }
    });
  }

  // Chart 3
  const yieldCtx = document.getElementById('propertyYieldChart')?.getContext('2d');
  if (yieldCtx) {
    new Chart(yieldCtx, {
      type: 'bar',
      data: {
        labels: ['Apex Manhattan (NY)', 'Sunset Palms (FL)', 'Grand Horizon (CA)', 'Marina Bay (TX)', 'Pinecrest (CO)'],
        datasets: [{
          label: 'Cap Rate Yield (%)',
          data: [10.2, 9.4, 8.8, 8.5, 7.9],
          backgroundColor: '#4F86A6',
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => v + '%' } },
          y: { grid: { display: false }, ticks: { color: textColor, font: { weight: 600 } } }
        }
      }
    });
  }

  // Chart 4
  const occupancyCtx = document.getElementById('occupancyTrendChart')?.getContext('2d');
  if (occupancyCtx) {
    new Chart(occupancyCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Occupancy Rate (%)',
          data: [91.5, 92.0, 93.4, 94.2, 95.0, 95.8, 96.4, 95.9, 96.8, 97.2, 97.8, 98.2],
          borderColor: '#55A77A',
          backgroundColor: 'rgba(85, 167, 122, 0.15)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { min: 85, max: 100, grid: { color: gridColor }, ticks: { color: textColor, callback: v => v + '%' } }
        }
      }
    });
  }
}

/* ==========================================================================
   6. VIEW: PROPERTIES MANAGEMENT
   ========================================================================== */
function renderPropertiesView(container, filterParam = 'all') {
  const db = getDashboardDB();

  let activeFilter = filterParam || 'all';
  let searchQuery = '';

  const filterProperties = () => {
    return db.properties.filter(p => {
      let matchesFilter = true;
      if (activeFilter === 'occupied') matchesFilter = p.occupancyRate === 100;
      else if (activeFilter === 'vacant') matchesFilter = p.vacantUnits > 0;
      else if (activeFilter === 'multifamily') matchesFilter = p.type.includes('Multi-Family');
      else if (activeFilter === 'villas') matchesFilter = p.type.includes('Villas') || p.type.includes('Condo');

      const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery) || p.city.toLowerCase().includes(searchQuery) || p.address.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });
  };

  const renderContent = () => {
    const filtered = filterProperties();
    const listHtml = filtered.length === 0 ? `
      <div class="col-12 text-center py-5">
        <div class="floating-icon mx-auto mb-3"><i class="fa-solid fa-hotel"></i></div>
        <h4>No properties match your filter</h4>
        <p class="text-secondary-custom">Try resetting the search or filter criteria.</p>
        <button class="btn btn-outline-custom btn-sm" onclick="renderPropertiesView(document.getElementById('dashboardContentContainer'), 'all')">Reset Filters</button>
      </div>
    ` : filtered.map(p => `
      <div class="col-md-6 col-xl-4">
        <div class="property-dash-card">
          <div class="position-relative">
            <img src="${p.image}" alt="${p.name}" class="property-dash-img">
            <span class="badge badge-status ${p.occupancyRate===100?'badge-success':'badge-warning'} position-absolute top-0 end-0 m-3 shadow-sm">
              ${p.occupancyRate}% Occupied
            </span>
          </div>
          <div class="property-dash-body">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-1">
                <h4 class="h5 fw-bold mb-0">${p.name}</h4>
                <span class="badge badge-status badge-primary small">${p.type.split(' ')[0]}</span>
              </div>
              <p class="small text-secondary-custom mb-3"><i class="fa-solid fa-location-dot me-1 text-primary-custom"></i> ${p.address}, ${p.city}, ${p.state} ${p.zip}</p>
              
              <div class="row g-2 text-center mb-3">
                <div class="col-4">
                  <div class="p-2 rounded-2 bg-section border border-light-custom">
                    <small class="text-secondary-custom d-block">Units</small>
                    <strong class="text-dark-custom">${p.totalUnits}</strong>
                  </div>
                </div>
                <div class="col-4">
                  <div class="p-2 rounded-2 bg-section border border-light-custom">
                    <small class="text-secondary-custom d-block">Rent/mo</small>
                    <strong class="text-success">$${(p.monthlyRent/1000).toFixed(1)}k</strong>
                  </div>
                </div>
                <div class="col-4">
                  <div class="p-2 rounded-2 bg-section border border-light-custom">
                    <small class="text-secondary-custom d-block">Cap Rate</small>
                    <strong class="text-primary-custom">${p.capRate}%</strong>
                  </div>
                </div>
              </div>

              <div class="occupancy-progress-wrap">
                <div class="d-flex justify-content-between small text-secondary-custom mb-1">
                  <span>${p.occupiedUnits} Occupied</span>
                  <span>${p.vacantUnits} Vacant</span>
                </div>
                <div class="occupancy-progress-bar">
                  <div class="occupancy-progress-fill" style="width: ${p.occupancyRate}%;"></div>
                </div>
              </div>
            </div>

            <div class="d-flex gap-2 mt-3 pt-3 border-top border-light-custom">
              <button class="btn btn-outline-custom btn-sm flex-grow-1" onclick="openPropertyDetailsModal('${p.id}')">
                <i class="fa-solid fa-eye me-1"></i> Details
              </button>
              <button class="btn btn-secondary-custom btn-sm" onclick="openEditPropertyModal('${p.id}')" title="Edit Property">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-outline-custom btn-sm text-danger" onclick="deleteProperty('${p.id}')" title="Delete Property">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    const gridContainer = document.getElementById('propertiesGridContent');
    if (gridContainer) gridContainer.innerHTML = listHtml;
  };

  container.innerHTML = `
    <div class="dashboard-view">
      <!-- Breadcrumb & Header -->
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Properties Management</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Managed Properties</h1>
          <p class="text-secondary-custom small mb-0">Overview of all ${db.properties.length} investment properties, occupied units, and asset returns.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-primary-custom btn-sm" onclick="openAddPropertyModal()">
            <i class="fa-solid fa-plus me-1"></i> Add Property
          </button>
        </div>
      </div>

      <!-- Filter Toolbar -->
      <div class="dashboard-table-card p-3 mb-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div class="filter-pills-wrap">
            <button class="filter-pill-btn ${activeFilter==='all'?'active':''}" data-filter="all">All Properties (${db.properties.length})</button>
            <button class="filter-pill-btn ${activeFilter==='occupied'?'active':''}" data-filter="occupied">100% Occupied</button>
            <button class="filter-pill-btn ${activeFilter==='vacant'?'active':''}" data-filter="vacant">With Vacancies</button>
            <button class="filter-pill-btn ${activeFilter==='multifamily'?'active':''}" data-filter="multifamily">Multi-Family</button>
            <button class="filter-pill-btn ${activeFilter==='villas'?'active':''}" data-filter="villas">Villas & Condos</button>
          </div>
          <div class="input-icon-wrap" style="max-width: 260px; width: 100%;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="form-control form-control-custom form-control-sm" id="propertiesSearchInput" placeholder="Search property name or city...">
          </div>
        </div>
      </div>

      <!-- Grid Cards -->
      <div class="row g-4" id="propertiesGridContent"></div>
    </div>
  `;

  // Attach search and filter events
  const searchInput = document.getElementById('propertiesSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim().toLowerCase();
      renderContent();
    });
  }

  const pillBtns = container.querySelectorAll('.filter-pill-btn');
  pillBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      pillBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      renderContent();
    });
  });

  renderContent();
}

/* ==========================================================================
   7. VIEW: RENT PAYMENTS
   ========================================================================== */
function renderPaymentsView(container, filterParam = 'all') {
  const db = getDashboardDB();

  let activeFilter = filterParam || 'all';
  let searchQuery = '';

  const totalBilled = db.payments.reduce((sum, p) => sum + p.amount, 0);
  const totalPaid = db.payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0);
  const totalPending = db.payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0);
  const totalOverdue = db.payments.filter(p => p.status === 'Overdue').reduce((sum, p) => sum + p.amount, 0);

  const filterPayments = () => {
    return db.payments.filter(p => {
      let matches = true;
      if (activeFilter === 'paid') matches = p.status === 'Paid';
      else if (activeFilter === 'pending') matches = p.status === 'Pending';
      else if (activeFilter === 'overdue') matches = p.status === 'Overdue';

      const matchesSearch = !searchQuery || p.tenantName.toLowerCase().includes(searchQuery) || p.propertyName.toLowerCase().includes(searchQuery) || p.invoiceNo.toLowerCase().includes(searchQuery);
      return matches && matchesSearch;
    });
  };

  const renderTable = () => {
    const list = filterPayments();
    const rowsHtml = list.length === 0 ? `
      <tr><td colspan="7" class="text-center py-4 text-secondary-custom">No payment records found matching your filter.</td></tr>
    ` : list.map(p => `
      <tr>
        <td>
          <strong>${p.invoiceNo}</strong>
          <div class="small text-secondary-custom">${p.paymentMethod}</div>
        </td>
        <td>
          <strong>${p.tenantName}</strong>
        </td>
        <td>
          ${p.propertyName} <span class="badge badge-status badge-primary ms-1">${p.unit}</span>
        </td>
        <td class="fw-bold text-dark-custom">$${p.amount.toLocaleString()}</td>
        <td>${p.dueDate}</td>
        <td>
          <span class="badge badge-status ${p.status==='Paid'?'badge-success':(p.status==='Pending'?'badge-warning':'badge-error')}">
            ${p.status}
          </span>
        </td>
        <td>
          <div class="d-flex gap-1">
            <button class="btn btn-outline-custom btn-sm py-1 px-2" onclick="openPaymentDetailsModal('${p.id}')" title="View Full Receipt">
              <i class="fa-solid fa-receipt me-1"></i> Receipt
            </button>
            ${p.status !== 'Paid' ? `
              <button class="btn btn-primary-custom btn-sm py-1 px-2" onclick="markPaymentPaid('${p.id}')" title="Mark as Paid">
                <i class="fa-solid fa-check"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `).join('');

    const tbody = document.getElementById('paymentsTableBody');
    if (tbody) tbody.innerHTML = rowsHtml;
  };

  container.innerHTML = `
    <div class="dashboard-view">
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Rent Payments & Ledgers</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Rent Payments & Ledger</h1>
          <p class="text-secondary-custom small mb-0">Automated collection tracking, overdue alerts, and bank disbursement history.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-custom btn-sm" onclick="exportPaymentsCSV()">
            <i class="fa-solid fa-download me-1"></i> Export Ledger CSV
          </button>
          <button class="btn btn-primary-custom btn-sm" onclick="openRecordPaymentModal()">
            <i class="fa-solid fa-plus me-1"></i> Record Payment
          </button>
        </div>
      </div>

      <!-- Financial Metric Cards -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3">
            <small class="text-secondary-custom">Total Invoiced</small>
            <div class="h4 fw-bold mt-1 mb-0">$${totalBilled.toLocaleString()}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3 border-success">
            <small class="text-success fw-bold">Collected / Paid</small>
            <div class="h4 fw-bold text-success mt-1 mb-0">$${totalPaid.toLocaleString()}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3 border-warning">
            <small class="text-warning fw-bold">Pending Clearing</small>
            <div class="h4 fw-bold text-warning mt-1 mb-0">$${totalPending.toLocaleString()}</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3 border-danger">
            <small class="text-danger fw-bold">Overdue Payments</small>
            <div class="h4 fw-bold text-danger mt-1 mb-0">$${totalOverdue.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <!-- Filter Controls -->
      <div class="dashboard-table-card p-3 mb-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div class="filter-pills-wrap">
            <button class="filter-pill-btn ${activeFilter==='all'?'active':''}" data-filter="all">All (${db.payments.length})</button>
            <button class="filter-pill-btn ${activeFilter==='paid'?'active':''}" data-filter="paid">Paid (${db.payments.filter(p=>p.status==='Paid').length})</button>
            <button class="filter-pill-btn ${activeFilter==='pending'?'active':''}" data-filter="pending">Pending (${db.payments.filter(p=>p.status==='Pending').length})</button>
            <button class="filter-pill-btn ${activeFilter==='overdue'?'active':''}" data-filter="overdue">Overdue (${db.payments.filter(p=>p.status==='Overdue').length})</button>
          </div>
          <div class="input-icon-wrap" style="max-width: 280px; width: 100%;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="form-control form-control-custom form-control-sm" id="paymentsSearchInput" placeholder="Search tenant or property...">
          </div>
        </div>
      </div>

      <!-- Payments Table -->
      <div class="dashboard-table-card">
        <div class="table-responsive-custom">
          <table class="table-custom">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Tenant</th>
                <th>Property & Unit</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="paymentsTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('paymentsSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim().toLowerCase();
      renderTable();
    });
  }

  const pillBtns = container.querySelectorAll('.filter-pill-btn');
  pillBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      pillBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      renderTable();
    });
  });

  renderTable();
}

/* ==========================================================================
   8. VIEW: MAINTENANCE MANAGEMENT
   ========================================================================== */
function renderMaintenanceView(container, filterParam = 'all') {
  const db = getDashboardDB();

  let activeStatusFilter = filterParam === 'active' ? 'active' : (filterParam || 'all');
  let activePriorityFilter = 'all';
  let searchQuery = '';

  const filterTickets = () => {
    return db.maintenance.filter(m => {
      let matchesStatus = true;
      if (activeStatusFilter === 'active') matchesStatus = m.status !== 'Completed';
      else if (activeStatusFilter === 'new') matchesStatus = m.status === 'New';
      else if (activeStatusFilter === 'in-progress') matchesStatus = m.status === 'In Progress';
      else if (activeStatusFilter === 'dispatched') matchesStatus = m.status === 'Dispatched';
      else if (activeStatusFilter === 'completed') matchesStatus = m.status === 'Completed';

      let matchesPriority = true;
      if (activePriorityFilter !== 'all') matchesPriority = m.priority.toLowerCase() === activePriorityFilter;

      const matchesSearch = !searchQuery || m.issue.toLowerCase().includes(searchQuery) || m.propertyName.toLowerCase().includes(searchQuery) || m.tenant.toLowerCase().includes(searchQuery);
      return matchesStatus && matchesPriority && matchesSearch;
    });
  };

  const renderTable = () => {
    const list = filterTickets();
    const rowsHtml = list.length === 0 ? `
      <tr><td colspan="7" class="text-center py-4 text-secondary-custom">No maintenance tickets matching your filter criteria.</td></tr>
    ` : list.map(m => `
      <tr>
        <td>
          <strong>${m.ticketNo}</strong>
          <div class="small text-secondary-custom">${m.createdDate}</div>
        </td>
        <td>
          <strong class="d-block text-dark-custom">${m.issue}</strong>
          <small class="text-secondary-custom">${m.notes}</small>
        </td>
        <td>
          ${m.propertyName} <span class="badge badge-status badge-primary ms-1">${m.unit}</span>
          <div class="small text-secondary-custom">Tenant: ${m.tenant}</div>
        </td>
        <td>
          <span class="badge badge-status ${m.priority==='High'?'badge-error':(m.priority==='Medium'?'badge-warning':'badge-primary')}">
            ${m.priority}
          </span>
        </td>
        <td>
          <span class="badge badge-status ${m.status==='Completed'?'badge-success':(m.status==='Dispatched'?'badge-primary':'badge-warning')}">
            ${m.status}
          </span>
        </td>
        <td>
          <small class="text-secondary-custom fw-semibold">${m.technician}</small>
        </td>
        <td>
          <button class="btn btn-outline-custom btn-sm py-1 px-2" onclick="openMaintenanceModal('${m.id}')">
            <i class="fa-solid fa-pen-to-square me-1"></i> Update
          </button>
        </td>
      </tr>
    `).join('');

    const tbody = document.getElementById('maintenanceTableBody');
    if (tbody) tbody.innerHTML = rowsHtml;
  };

  container.innerHTML = `
    <div class="dashboard-view">
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Maintenance Requests</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Maintenance & Repair Desk</h1>
          <p class="text-secondary-custom small mb-0">Track contractor dispatches, tenant repair work orders, and resolution logs.</p>
        </div>
        <button class="btn btn-primary-custom btn-sm" onclick="openAddMaintenanceModal()">
          <i class="fa-solid fa-plus me-1"></i> Add Maintenance Request
        </button>
      </div>

      <!-- Status Pills and Priority -->
      <div class="dashboard-table-card p-3 mb-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div class="filter-pills-wrap">
            <button class="filter-pill-btn ${activeStatusFilter==='all'?'active':''}" data-status="all">All (${db.maintenance.length})</button>
            <button class="filter-pill-btn ${activeStatusFilter==='active'?'active':''}" data-status="active">Active (${db.maintenance.filter(m=>m.status!=='Completed').length})</button>
            <button class="filter-pill-btn ${activeStatusFilter==='new'?'active':''}" data-status="new">New (${db.maintenance.filter(m=>m.status==='New').length})</button>
            <button class="filter-pill-btn ${activeStatusFilter==='in-progress'?'active':''}" data-status="in-progress">In Progress (${db.maintenance.filter(m=>m.status==='In Progress').length})</button>
            <button class="filter-pill-btn ${activeStatusFilter==='dispatched'?'active':''}" data-status="dispatched">Dispatched (${db.maintenance.filter(m=>m.status==='Dispatched').length})</button>
            <button class="filter-pill-btn ${activeStatusFilter==='completed'?'active':''}" data-status="completed">Completed (${db.maintenance.filter(m=>m.status==='Completed').length})</button>
          </div>
          <div class="input-icon-wrap" style="max-width: 260px; width: 100%;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="form-control form-control-custom form-control-sm" id="maintenanceSearchInput" placeholder="Search request or unit...">
          </div>
        </div>
      </div>

      <!-- Table View -->
      <div class="dashboard-table-card">
        <div class="table-responsive-custom">
          <table class="table-custom">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Issue Description</th>
                <th>Property & Tenant</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned Tech</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="maintenanceTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('maintenanceSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim().toLowerCase();
      renderTable();
    });
  }

  const statusBtns = container.querySelectorAll('.filter-pill-btn[data-status]');
  statusBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      statusBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeStatusFilter = this.getAttribute('data-status');
      renderTable();
    });
  });

  renderTable();
}

/* ==========================================================================
   9. VIEW: LEASE RENEWALS
   ========================================================================== */
function renderLeaseRenewalsView(container, filterParam = 'all') {
  const db = getDashboardDB();

  let activeTimeFilter = filterParam === '60days' ? '60' : 'all';
  let searchQuery = '';

  const filterLeases = () => {
    return db.leases.filter(l => {
      let matchesTime = true;
      if (activeTimeFilter === '30') matchesTime = l.daysRemaining <= 30;
      else if (activeTimeFilter === '60') matchesTime = l.daysRemaining <= 60;
      else if (activeTimeFilter === '90') matchesTime = l.daysRemaining <= 90;

      const matchesSearch = !searchQuery || l.tenantName.toLowerCase().includes(searchQuery) || l.propertyName.toLowerCase().includes(searchQuery);
      return matchesTime && matchesSearch;
    });
  };

  const renderTable = () => {
    const list = filterLeases();
    const rowsHtml = list.length === 0 ? `
      <tr><td colspan="7" class="text-center py-4 text-secondary-custom">No lease renewals in this time window.</td></tr>
    ` : list.map(l => `
      <tr>
        <td>
          <strong>${l.tenantName}</strong>
          <div class="small text-secondary-custom">${l.propertyName} (${l.unit})</div>
        </td>
        <td class="fw-bold">$${l.currentRent.toLocaleString()}</td>
        <td>
          <strong class="text-success">$${l.proposedRent.toLocaleString()}</strong>
          <span class="badge badge-status badge-success small ms-1">+${l.increasePct}%</span>
        </td>
        <td>${l.leaseExpiry}</td>
        <td>
          <span class="badge badge-status ${l.daysRemaining <= 30 ? 'badge-error' : (l.daysRemaining <= 60 ? 'badge-warning' : 'badge-primary')}">
            ${l.daysRemaining} Days
          </span>
        </td>
        <td>
          <span class="badge badge-status ${l.status==='Accepted & Signed'?'badge-success':(l.status==='Offer Dispatched'?'badge-gold':'badge-primary')}">
            ${l.status}
          </span>
        </td>
        <td>
          <div class="d-flex gap-1">
            <button class="btn btn-outline-custom btn-sm py-1 px-2" onclick="openLeaseModal('${l.id}')">
              <i class="fa-solid fa-file-signature me-1"></i> Agreement
            </button>
            ${l.status !== 'Accepted & Signed' ? `
              <button class="btn btn-primary-custom btn-sm py-1 px-2" onclick="sendRenewalOffer('${l.id}')" title="Dispatch Offer">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `).join('');

    const tbody = document.getElementById('leasesTableBody');
    if (tbody) tbody.innerHTML = rowsHtml;
  };

  container.innerHTML = `
    <div class="dashboard-view">
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Lease Renewals</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Lease Renewals & Expiry Schedule</h1>
          <p class="text-secondary-custom small mb-0">Automated rental rate optimization (+4.5% targeted increase) and digital lease agreements.</p>
        </div>
        <button class="btn btn-primary-custom btn-sm" onclick="sendBulkRenewals()">
          <i class="fa-solid fa-paper-plane me-1"></i> Send Bulk Renewal Notices
        </button>
      </div>

      <!-- Expiry Filter Bar -->
      <div class="dashboard-table-card p-3 mb-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div class="filter-pills-wrap">
            <button class="filter-pill-btn ${activeTimeFilter==='all'?'active':''}" data-days="all">All Upcoming (${db.leases.length})</button>
            <button class="filter-pill-btn ${activeTimeFilter==='30'?'active':''}" data-days="30">Next 30 Days (${db.leases.filter(l=>l.daysRemaining<=30).length})</button>
            <button class="filter-pill-btn ${activeTimeFilter==='60'?'active':''}" data-days="60">Next 60 Days (${db.leases.filter(l=>l.daysRemaining<=60).length})</button>
            <button class="filter-pill-btn ${activeTimeFilter==='90'?'active':''}" data-days="90">Next 90 Days (${db.leases.filter(l=>l.daysRemaining<=90).length})</button>
          </div>
          <div class="input-icon-wrap" style="max-width: 260px; width: 100%;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" class="form-control form-control-custom form-control-sm" id="leasesSearchInput" placeholder="Search tenant...">
          </div>
        </div>
      </div>

      <!-- Leases Table -->
      <div class="dashboard-table-card">
        <div class="table-responsive-custom">
          <table class="table-custom">
            <thead>
              <tr>
                <th>Tenant & Unit</th>
                <th>Current Rent</th>
                <th>Proposed Rent</th>
                <th>Expiry Date</th>
                <th>Days Remaining</th>
                <th>Renewal Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="leasesTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('leasesSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim().toLowerCase();
      renderTable();
    });
  }

  const daysBtns = container.querySelectorAll('.filter-pill-btn[data-days]');
  daysBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      daysBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeTimeFilter = this.getAttribute('data-days');
      renderTable();
    });
  });

  renderTable();
}

/* ==========================================================================
   10. VIEW: INCOME REPORTS & FINANCIAL ANALYTICS
   ========================================================================== */
function renderIncomeReportsView(container) {
  const db = getDashboardDB();

  const totalMonthlyGross = db.properties.reduce((sum, p) => sum + p.monthlyRent, 0);
  const annualGross = totalMonthlyGross * 12;
  const annualNet = Math.round(annualGross * 0.899);
  const avgCapRate = (db.properties.reduce((sum, p) => sum + p.capRate, 0) / db.properties.length).toFixed(1);

  container.innerHTML = `
    <div class="dashboard-view">
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Income Reports & Financial Performance</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Financial & Income Statements</h1>
          <p class="text-secondary-custom small mb-0">Audited cashflow, Net Operating Income (NOI), and property-wise yields.</p>
        </div>
        <button class="btn btn-primary-custom btn-sm" onclick="exportFinancialReport()">
          <i class="fa-solid fa-file-arrow-down me-1"></i> Download Financial Report (CSV)
        </button>
      </div>

      <!-- Financial KPI Cards -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3">
            <small class="text-secondary-custom">Annual Gross Revenue</small>
            <div class="h3 fw-bold text-dark-custom mt-1 mb-0">$${(annualGross/1000000).toFixed(2)}M</div>
            <small class="text-success fw-semibold">+6.8% YoY Growth</small>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3 border-primary">
            <small class="text-primary-custom fw-bold">Net Operating Income (NOI)</small>
            <div class="h3 fw-bold text-primary-custom mt-1 mb-0">$${(annualNet/1000000).toFixed(2)}M</div>
            <small class="text-secondary-custom">89.9% Operating Margin</small>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3">
            <small class="text-secondary-custom">Operating Expense Ratio</small>
            <div class="h3 fw-bold text-dark-custom mt-1 mb-0">10.1%</div>
            <small class="text-success fw-semibold">Industry lowest (14% avg)</small>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="kpi-card p-3 border-success">
            <small class="text-success fw-bold">Portfolio Average Cap Rate</small>
            <div class="h3 fw-bold text-success mt-1 mb-0">${avgCapRate}%</div>
            <small class="text-secondary-custom">Top tier metro performance</small>
          </div>
        </div>
      </div>

      <!-- Property-wise Income Breakdown Table -->
      <div class="dashboard-table-card mb-4">
        <h3 class="chart-title mb-3">Property-Wise Annualized NOI Breakdown</h3>
        <div class="table-responsive-custom">
          <table class="table-custom">
            <thead>
              <tr>
                <th>Property Name</th>
                <th>Location</th>
                <th>Units</th>
                <th>Monthly Gross</th>
                <th>Annual Gross</th>
                <th>Net NOI (Est.)</th>
                <th>Cap Rate</th>
              </tr>
            </thead>
            <tbody>
              ${db.properties.map(p => `
                <tr>
                  <td><strong>${p.name}</strong></td>
                  <td>${p.city}, ${p.state}</td>
                  <td>${p.totalUnits} Units</td>
                  <td class="fw-bold">$${p.monthlyRent.toLocaleString()}</td>
                  <td class="fw-bold">$${(p.monthlyRent * 12).toLocaleString()}</td>
                  <td class="text-success fw-bold">$${Math.round(p.monthlyRent * 12 * 0.9).toLocaleString()}</td>
                  <td><span class="badge badge-status badge-success">${p.capRate}%</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   11. VIEW: MESSAGES & INBOX
   ========================================================================== */
function renderMessagesView(container, filterParam = 'all') {
  const db = getDashboardDB();

  let activeCategory = filterParam || 'all';
  let activeMsgId = db.messages[0]?.id;
  let searchQuery = '';

  const filterMessages = () => {
    return db.messages.filter(m => {
      let matchesCat = true;
      if (activeCategory === 'unread') matchesCat = m.isUnread;
      else if (activeCategory !== 'all') matchesCat = m.category.toLowerCase().includes(activeCategory.toLowerCase());

      const matchesSearch = !searchQuery || m.senderName.toLowerCase().includes(searchQuery) || m.subject.toLowerCase().includes(searchQuery);
      return matchesCat && matchesSearch;
    });
  };

  const renderInboxLayout = () => {
    const filtered = filterMessages();
    const activeMsg = db.messages.find(m => m.id === activeMsgId) || filtered[0];

    const listHtml = filtered.length === 0 ? `
      <div class="p-4 text-center text-secondary-custom">No messages in this folder.</div>
    ` : filtered.map(m => `
      <div class="inbox-item ${m.id === activeMsg?.id ? 'active' : ''} ${m.isUnread ? 'unread' : ''}" onclick="selectMessage('${m.id}')">
        <img src="${m.senderAvatar}" alt="${m.senderName}" class="sidebar-user-avatar" style="width: 38px; height: 38px;">
        <div class="overflow-hidden flex-grow-1">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="inbox-sender small text-dark-custom">${m.senderName}</span>
            <span class="badge badge-status badge-primary" style="font-size: 0.65rem;">${m.category}</span>
          </div>
          <div class="small fw-bold text-dark-custom text-truncate">${m.subject}</div>
          <div class="small text-secondary-custom text-truncate">${m.preview}</div>
        </div>
      </div>
    `).join('');

    const detailHtml = !activeMsg ? `
      <div class="p-5 text-center text-secondary-custom">Select a message from the list to view.</div>
    ` : `
      <div class="inbox-detail-pane">
        <div class="inbox-detail-header">
          <div class="d-flex align-items-center gap-3">
            <img src="${activeMsg.senderAvatar}" alt="${activeMsg.senderName}" class="sidebar-user-avatar" style="width: 44px; height: 44px;">
            <div>
              <h5 class="fw-bold mb-0">${activeMsg.senderName}</h5>
              <div class="small text-secondary-custom">${activeMsg.senderEmail} • ${activeMsg.propertyName} (${activeMsg.unit})</div>
            </div>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-custom btn-sm" onclick="toggleMessageRead('${activeMsg.id}')">
              ${activeMsg.isUnread ? '<i class="fa-solid fa-envelope-open me-1"></i> Mark Read' : '<i class="fa-solid fa-envelope me-1"></i> Mark Unread'}
            </button>
            <button class="btn btn-outline-custom btn-sm text-danger" onclick="deleteMessage('${activeMsg.id}')" title="Delete">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="inbox-detail-body">
          <div class="mb-3">
            <h4 class="h5 fw-bold">${activeMsg.subject}</h4>
            <div class="small text-secondary-custom mb-3">${activeMsg.date}</div>
          </div>

          <div class="chat-bubble-received">
            ${activeMsg.fullText.replace(/\n/g, '<br>')}
          </div>

          ${activeMsg.replies.map(r => `
            <div class="chat-bubble-sent">
              <div class="small fw-bold mb-1 opacity-75">${r.author} • ${r.time}</div>
              <div>${r.text}</div>
            </div>
          `).join('')}
        </div>

        <div class="inbox-reply-box">
          <form id="messageReplyForm" onsubmit="sendReply(event, '${activeMsg.id}')">
            <div class="input-group">
              <input type="text" class="form-control form-control-custom" id="replyTextInput" placeholder="Type your reply to ${activeMsg.senderName}..." required>
              <button class="btn btn-primary-custom px-4" type="submit">
                <i class="fa-solid fa-paper-plane me-1"></i> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const listEl = document.getElementById('inboxMessagesList');
    const detailEl = document.getElementById('inboxDetailPaneWrap');
    if (listEl) listEl.innerHTML = listHtml;
    if (detailEl) detailEl.innerHTML = detailHtml;
  };

  container.innerHTML = `
    <div class="dashboard-view">
      <div class="dashboard-breadcrumb">
        <a href="#overview" onclick="navigateToView('overview')">Dashboard</a>
        <i class="fa-solid fa-chevron-right fs-xs"></i>
        <span class="current">Messages & Communications</span>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 class="h3 fw-bold mb-1">Tenant & Maintenance Messages</h1>
          <p class="text-secondary-custom small mb-0">Direct communication channel with tenants and service contractors.</p>
        </div>
      </div>

      <div class="inbox-container">
        <!-- Sidebar Message List -->
        <div class="inbox-sidebar">
          <div class="inbox-sidebar-header">
            <div class="input-icon-wrap mb-3">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" class="form-control form-control-custom form-control-sm" id="inboxSearchInput" placeholder="Search conversations...">
            </div>
            <div class="filter-pills-wrap">
              <button class="filter-pill-btn ${activeCategory==='all'?'active':''}" data-cat="all">All</button>
              <button class="filter-pill-btn ${activeCategory==='unread'?'active':''}" data-cat="unread">Unread</button>
              <button class="filter-pill-btn ${activeCategory==='maintenance'?'active':''}" data-cat="maintenance">Maintenance</button>
              <button class="filter-pill-btn ${activeCategory==='rent/payment'?'active':''}" data-cat="rent/payment">Payments</button>
            </div>
          </div>
          <div class="inbox-list" id="inboxMessagesList"></div>
        </div>

        <!-- Detail Message Thread -->
        <div id="inboxDetailPaneWrap"></div>
      </div>
    </div>
  `;

  // Filter and search handlers
  const searchInput = document.getElementById('inboxSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchQuery = this.value.trim().toLowerCase();
      renderInboxLayout();
    });
  }

  const catBtns = container.querySelectorAll('.filter-pill-btn[data-cat]');
  catBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      catBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.getAttribute('data-cat');
      renderInboxLayout();
    });
  });

  window.selectMessage = (id) => {
    activeMsgId = id;
    const db = getDashboardDB();
    const msg = db.messages.find(m => m.id === id);
    if (msg && msg.isUnread) {
      msg.isUnread = false;
      saveDashboardDB(db);
    }
    renderInboxLayout();
  };

  window.toggleMessageRead = (id) => {
    const db = getDashboardDB();
    const msg = db.messages.find(m => m.id === id);
    if (msg) {
      msg.isUnread = !msg.isUnread;
      saveDashboardDB(db);
      renderInboxLayout();
      showToast(msg.isUnread ? 'Message marked as unread' : 'Message marked as read');
    }
  };

  window.deleteMessage = (id) => {
    const db = getDashboardDB();
    db.messages = db.messages.filter(m => m.id !== id);
    saveDashboardDB(db);
    activeMsgId = db.messages[0]?.id || null;
    renderInboxLayout();
    showToast('Conversation deleted');
  };

  window.sendReply = (e, id) => {
    e.preventDefault();
    const input = document.getElementById('replyTextInput');
    if (!input || !input.value.trim()) return;

    const db = getDashboardDB();
    const msg = db.messages.find(m => m.id === id);
    if (msg) {
      msg.replies.push({
        author: 'David Sterling (Owner)',
        text: input.value.trim(),
        time: 'Just now'
      });
      saveDashboardDB(db);
      input.value = '';
      renderInboxLayout();
      showToast('Reply dispatched to tenant!');
    }
  };

  renderInboxLayout();
}

/* ==========================================================================
   12. GLOBAL LIVE SEARCH FUNCTION
   ========================================================================== */
function initGlobalSearch() {
  const searchInput = document.querySelector('.topbar-search input');
  if (!searchInput) return;

  // Wrap in search container
  const parent = searchInput.closest('.topbar-search');
  parent.classList.add('topbar-search-wrap');

  let dropdown = document.querySelector('.search-results-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'search-results-dropdown';
    parent.appendChild(dropdown);
  }

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (!query) {
      dropdown.style.display = 'none';
      return;
    }

    const db = getDashboardDB();
    const matchedProps = db.properties.filter(p => p.name.toLowerCase().includes(query) || p.city.toLowerCase().includes(query));
    const matchedTenants = [];
    db.properties.forEach(p => {
      p.units.forEach(u => {
        if (u.tenant.toLowerCase().includes(query)) {
          matchedTenants.push({ tenant: u.tenant, property: p.name, unit: u.unit, propId: p.id });
        }
      });
    });
    const matchedTickets = db.maintenance.filter(m => m.issue.toLowerCase().includes(query) || m.ticketNo.toLowerCase().includes(query));
    const matchedPayments = db.payments.filter(p => p.invoiceNo.toLowerCase().includes(query) || p.tenantName.toLowerCase().includes(query));

    let html = '';

    if (matchedProps.length > 0) {
      html += `<div class="search-result-group-title">Properties</div>`;
      matchedProps.forEach(p => {
        html += `
          <div class="search-result-item" onclick="openPropertyDetailsModal('${p.id}'); document.querySelector('.search-results-dropdown').style.display='none';">
            <div class="search-result-icon"><i class="fa-solid fa-hotel"></i></div>
            <div>
              <strong>${p.name}</strong>
              <div class="small text-secondary-custom">${p.city}, ${p.state} • ${p.totalUnits} Units</div>
            </div>
          </div>
        `;
      });
    }

    if (matchedTenants.length > 0) {
      html += `<div class="search-result-group-title">Tenants</div>`;
      matchedTenants.forEach(t => {
        html += `
          <div class="search-result-item" onclick="openPropertyDetailsModal('${t.propId}'); document.querySelector('.search-results-dropdown').style.display='none';">
            <div class="search-result-icon"><i class="fa-solid fa-user"></i></div>
            <div>
              <strong>${t.tenant}</strong>
              <div class="small text-secondary-custom">${t.property} Unit ${t.unit}</div>
            </div>
          </div>
        `;
      });
    }

    if (matchedTickets.length > 0) {
      html += `<div class="search-result-group-title">Maintenance Tickets</div>`;
      matchedTickets.forEach(m => {
        html += `
          <div class="search-result-item" onclick="openMaintenanceModal('${m.id}'); document.querySelector('.search-results-dropdown').style.display='none';">
            <div class="search-result-icon"><i class="fa-solid fa-wrench"></i></div>
            <div>
              <strong>${m.ticketNo}: ${m.issue}</strong>
              <div class="small text-secondary-custom">${m.propertyName} • Status: ${m.status}</div>
            </div>
          </div>
        `;
      });
    }

    if (matchedPayments.length > 0) {
      html += `<div class="search-result-group-title">Payments & Invoices</div>`;
      matchedPayments.forEach(p => {
        html += `
          <div class="search-result-item" onclick="openPaymentDetailsModal('${p.id}'); document.querySelector('.search-results-dropdown').style.display='none';">
            <div class="search-result-icon"><i class="fa-solid fa-receipt"></i></div>
            <div>
              <strong>${p.invoiceNo} - $${p.amount.toLocaleString()}</strong>
              <div class="small text-secondary-custom">${p.tenantName} • ${p.status}</div>
            </div>
          </div>
        `;
      });
    }

    if (!html) {
      html = `<div class="p-3 text-center text-secondary-custom">No matching records found for "${query}"</div>`;
    }

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!parent.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

/* ==========================================================================
   13. MODALS & CRUD OPERATIONS
   ========================================================================== */

// --- Property Details Modal ---
window.openPropertyDetailsModal = function(propertyId) {
  const db = getDashboardDB();
  const p = db.properties.find(item => item.id === propertyId);
  if (!p) return;

  const modalHtml = `
    <div class="modal fade" id="propertyDetailsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h4 class="modal-title fw-bold mb-0">${p.name}</h4>
              <small class="text-secondary-custom">${p.address}, ${p.city}, ${p.state} ${p.zip}</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="row g-4 mb-4">
              <div class="col-md-6">
                <img src="${p.image}" alt="${p.name}" class="w-100 rounded-3" style="height: 220px; object-fit: cover;">
              </div>
              <div class="col-md-6">
                <h5 class="fw-bold mb-3">Asset Summary</h5>
                <div class="row g-2 text-center mb-3">
                  <div class="col-4">
                    <div class="p-2 rounded bg-section border border-light-custom">
                      <small class="text-secondary-custom d-block">Occupancy</small>
                      <strong class="text-success">${p.occupancyRate}%</strong>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="p-2 rounded bg-section border border-light-custom">
                      <small class="text-secondary-custom d-block">Monthly Rent</small>
                      <strong class="text-primary-custom">$${p.monthlyRent.toLocaleString()}</strong>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="p-2 rounded bg-section border border-light-custom">
                      <small class="text-secondary-custom d-block">Cap Rate</small>
                      <strong class="text-dark-custom">${p.capRate}%</strong>
                    </div>
                  </div>
                </div>
                <div class="small mb-2"><strong>Property Type:</strong> ${p.type}</div>
                <div class="small mb-2"><strong>Year Built:</strong> ${p.yearBuilt}</div>
                <div class="small mb-2"><strong>Total Units:</strong> ${p.totalUnits} (${p.occupiedUnits} Occupied, ${p.vacantUnits} Vacant)</div>
                <div class="d-flex flex-wrap gap-1 mt-2">
                  ${p.amenities.map(a => `<span class="badge badge-status badge-primary">${a}</span>`).join('')}
                </div>
              </div>
            </div>

            <h5 class="fw-bold mb-3">Unit Breakdown & Tenant Roster</h5>
            <div class="table-responsive-custom">
              <table class="table-custom">
                <thead>
                  <tr>
                    <th>Unit</th>
                    <th>Tenant Name</th>
                    <th>Contact</th>
                    <th>Monthly Rent</th>
                    <th>Lease Expiry</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${p.units.map(u => `
                    <tr>
                      <td><strong>Unit ${u.unit}</strong></td>
                      <td>${u.tenant}</td>
                      <td><small class="text-secondary-custom">${u.email}</small></td>
                      <td class="fw-bold">$${u.rent.toLocaleString()}</td>
                      <td>${u.leaseEnd}</td>
                      <td><span class="badge badge-status ${u.status==='Occupied'?'badge-success':'badge-warning'}">${u.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary-custom" onclick="openEditPropertyModal('${p.id}')">Edit Property</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('propertyDetailsModal'));
  modalInstance.show();
};

// --- Add Property Modal ---
window.openAddPropertyModal = function() {
  const modalHtml = `
    <div class="modal fade" id="addPropertyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold">Add New Investment Property</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="addPropertyForm" onsubmit="saveNewProperty(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom">Property Name</label>
                <input type="text" class="form-control form-control-custom" id="newPropName" placeholder="e.g. Parkview Residences" required>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Property Type</label>
                  <select class="form-select form-control-custom" id="newPropType">
                    <option value="Multi-Family Residential">Multi-Family Residential</option>
                    <option value="Luxury Villas">Luxury Villas</option>
                    <option value="Townhome Community">Townhome Community</option>
                    <option value="Commercial Lofts">Commercial Lofts</option>
                    <option value="Waterfront Condos">Waterfront Condos</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Total Units</label>
                  <input type="number" class="form-control form-control-custom" id="newPropUnits" value="8" min="1" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Street Address</label>
                <input type="text" class="form-control form-control-custom" id="newPropAddress" placeholder="123 Main Street" required>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">City</label>
                  <input type="text" class="form-control form-control-custom" id="newPropCity" placeholder="City" required>
                </div>
                <div class="col-3">
                  <label class="form-label-custom">State</label>
                  <input type="text" class="form-control form-control-custom" id="newPropState" placeholder="CA" required>
                </div>
                <div class="col-3">
                  <label class="form-label-custom">ZIP</label>
                  <input type="text" class="form-control form-control-custom" id="newPropZip" placeholder="90210" required>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-6">
                  <label class="form-label-custom">Monthly Rent Revenue ($)</label>
                  <input type="number" class="form-control form-control-custom" id="newPropRent" value="22000" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Target Cap Rate (%)</label>
                  <input type="number" step="0.1" class="form-control form-control-custom" id="newPropCap" value="8.5" required>
                </div>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Save Property</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('addPropertyModal'));
  modalInstance.show();
};

window.saveNewProperty = function(e) {
  e.preventDefault();
  const name = document.getElementById('newPropName').value.trim();
  const type = document.getElementById('newPropType').value;
  const units = parseInt(document.getElementById('newPropUnits').value, 10);
  const address = document.getElementById('newPropAddress').value.trim();
  const city = document.getElementById('newPropCity').value.trim();
  const state = document.getElementById('newPropState').value.trim();
  const zip = document.getElementById('newPropZip').value.trim();
  const rent = parseInt(document.getElementById('newPropRent').value, 10);
  const cap = parseFloat(document.getElementById('newPropCap').value);

  const db = getDashboardDB();
  const newProp = {
    id: 'prop-' + Date.now(),
    name,
    type,
    address,
    city,
    state,
    zip,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    totalUnits: units,
    occupiedUnits: units,
    vacantUnits: 0,
    monthlyRent: rent,
    occupancyRate: 100,
    capRate: cap,
    status: 'Optimized',
    yearBuilt: 2024,
    amenities: ['Smart Access', 'Parking', 'Energy Efficient'],
    units: [
      { unit: '101', tenant: 'Active Tenant', email: 'tenant@propvantage.com', rent: Math.round(rent/units), leaseEnd: '2027-10-31', status: 'Occupied' }
    ]
  };

  db.properties.unshift(newProp);
  saveDashboardDB(db);

  bootstrap.Modal.getInstance(document.getElementById('addPropertyModal'))?.hide();
  navigateToView('properties');
  showToast(`Property "${name}" successfully registered into your portfolio!`);
};

// --- Edit Property Modal ---
window.openEditPropertyModal = function(propertyId) {
  const db = getDashboardDB();
  const p = db.properties.find(item => item.id === propertyId);
  if (!p) return;

  const modalHtml = `
    <div class="modal fade" id="editPropertyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold">Edit Property Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="editPropertyForm" onsubmit="saveEditedProperty(event, '${p.id}')">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom">Property Name</label>
                <input type="text" class="form-control form-control-custom" id="editPropName" value="${p.name}" required>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Monthly Rent ($)</label>
                  <input type="number" class="form-control form-control-custom" id="editPropRent" value="${p.monthlyRent}" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Occupied Units</label>
                  <input type="number" class="form-control form-control-custom" id="editPropOccupied" value="${p.occupiedUnits}" max="${p.totalUnits}" min="0" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Cap Rate Yield (%)</label>
                <input type="number" step="0.1" class="form-control form-control-custom" id="editPropCap" value="${p.capRate}" required>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Update Property</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('editPropertyModal'));
  modalInstance.show();
};

window.saveEditedProperty = function(e, propertyId) {
  e.preventDefault();
  const db = getDashboardDB();
  const p = db.properties.find(item => item.id === propertyId);
  if (!p) return;

  p.name = document.getElementById('editPropName').value.trim();
  p.monthlyRent = parseInt(document.getElementById('editPropRent').value, 10);
  p.occupiedUnits = parseInt(document.getElementById('editPropOccupied').value, 10);
  p.vacantUnits = p.totalUnits - p.occupiedUnits;
  p.occupancyRate = Math.round((p.occupiedUnits / p.totalUnits) * 100);
  p.capRate = parseFloat(document.getElementById('editPropCap').value);

  saveDashboardDB(db);
  bootstrap.Modal.getInstance(document.getElementById('editPropertyModal'))?.hide();
  navigateToView('properties');
  showToast(`Property "${p.name}" updated successfully!`);
};

window.deleteProperty = function(propertyId) {
  if (!confirm('Are you sure you want to remove this property from your dashboard?')) return;
  const db = getDashboardDB();
  db.properties = db.properties.filter(p => p.id !== propertyId);
  saveDashboardDB(db);
  navigateToView('properties');
  showToast('Property removed from portfolio');
};

// --- Payment Receipt Details Modal ---
window.openPaymentDetailsModal = function(paymentId) {
  const db = getDashboardDB();
  const p = db.payments.find(item => item.id === paymentId);
  if (!p) return;

  const modalHtml = `
    <div class="modal fade" id="paymentDetailsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h5 class="modal-title fw-bold mb-0">Payment Receipt</h5>
              <small class="text-secondary-custom">${p.invoiceNo}</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="receipt-card mb-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="navbar-brand-logo">
                  <div class="logo-icon"><i class="fa-solid fa-building-user"></i></div>
                  <div class="brand-text">Prop<span>Vantage</span></div>
                </div>
                <span class="badge badge-status ${p.status==='Paid'?'badge-success':(p.status==='Pending'?'badge-warning':'badge-error')} fs-6">
                  ${p.status}
                </span>
              </div>
              <div class="h3 fw-bold text-primary-custom mb-1">$${p.amount.toLocaleString()}.00</div>
              <div class="small text-secondary-custom mb-3">${p.paymentMethod} • Due: ${p.dueDate}</div>

              <div class="border-top border-light-custom pt-3">
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-secondary-custom">Tenant Name:</span>
                  <strong>${p.tenantName}</strong>
                </div>
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-secondary-custom">Property / Unit:</span>
                  <strong>${p.propertyName} (${p.unit})</strong>
                </div>
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-secondary-custom">Payment Date:</span>
                  <strong>${p.paidDate}</strong>
                </div>
                <div class="d-flex justify-content-between small mb-2">
                  <span class="text-secondary-custom">Processing Notes:</span>
                  <span>${p.notes}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary-custom" onclick="window.print()">
              <i class="fa-solid fa-print me-1"></i> Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('paymentDetailsModal'));
  modalInstance.show();
};

// --- Record Payment Modal ---
window.openRecordPaymentModal = function() {
  const db = getDashboardDB();
  const modalHtml = `
    <div class="modal fade" id="recordPaymentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold">Record Tenant Payment</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="recordPaymentForm" onsubmit="saveRecordedPayment(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom">Tenant Name</label>
                <input type="text" class="form-control form-control-custom" id="payTenant" placeholder="e.g. Sarah Jenkins" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Property</label>
                <select class="form-select form-control-custom" id="payProp">
                  ${db.properties.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Unit #</label>
                  <input type="text" class="form-control form-control-custom" id="payUnit" placeholder="#101" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Amount ($)</label>
                  <input type="number" class="form-control form-control-custom" id="payAmount" value="2850" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Payment Method</label>
                <select class="form-select form-control-custom" id="payMethod">
                  <option value="ACH Bank Transfer">ACH Bank Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="FedWire Transfer">FedWire Transfer</option>
                  <option value="Cashier Check">Cashier Check</option>
                </select>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Record Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('recordPaymentModal'));
  modalInstance.show();
};

window.saveRecordedPayment = function(e) {
  e.preventDefault();
  const tenant = document.getElementById('payTenant').value.trim();
  const prop = document.getElementById('payProp').value;
  const unit = document.getElementById('payUnit').value.trim();
  const amount = parseInt(document.getElementById('payAmount').value, 10);
  const method = document.getElementById('payMethod').value;

  const db = getDashboardDB();
  const newPay = {
    id: 'pay-' + Date.now(),
    invoiceNo: 'INV-2026-' + Math.floor(1000 + Math.random() * 9000),
    tenantName: tenant,
    propertyName: prop,
    unit: unit.startsWith('#') ? unit : '#' + unit,
    amount: amount,
    dueDate: 'Oct 01, 2026',
    paidDate: 'Oct 08, 2026',
    paymentMethod: method,
    status: 'Paid',
    notes: 'Directly logged via Owner Dashboard'
  };

  db.payments.unshift(newPay);
  saveDashboardDB(db);

  bootstrap.Modal.getInstance(document.getElementById('recordPaymentModal'))?.hide();
  navigateToView('rent-payments');
  showToast(`Payment of $${amount.toLocaleString()} for ${tenant} successfully recorded!`);
};

window.markPaymentPaid = function(paymentId) {
  const db = getDashboardDB();
  const p = db.payments.find(item => item.id === paymentId);
  if (!p) return;

  p.status = 'Paid';
  p.paidDate = 'Oct 08, 2026';
  p.notes = 'Manually verified and marked as Paid';
  saveDashboardDB(db);
  navigateToView('rent-payments');
  showToast(`Invoice ${p.invoiceNo} marked as Paid!`);
};

// --- Maintenance Ticket Details & Update Modal ---
window.openMaintenanceModal = function(ticketId) {
  const db = getDashboardDB();
  const m = db.maintenance.find(item => item.id === ticketId);
  if (!m) return;

  const modalHtml = `
    <div class="modal fade" id="maintModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h5 class="modal-title fw-bold mb-0">Update Work Order</h5>
              <small class="text-secondary-custom">${m.ticketNo} • ${m.propertyName} (${m.unit})</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="updateMaintForm" onsubmit="saveMaintenanceUpdate(event, '${m.id}')">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom">Issue Summary</label>
                <input type="text" class="form-control form-control-custom" id="maintIssue" value="${m.issue}" required>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Status</label>
                  <select class="form-select form-control-custom" id="maintStatus">
                    <option value="New" ${m.status==='New'?'selected':''}>New</option>
                    <option value="In Progress" ${m.status==='In Progress'?'selected':''}>In Progress</option>
                    <option value="Dispatched" ${m.status==='Dispatched'?'selected':''}>Dispatched</option>
                    <option value="Completed" ${m.status==='Completed'?'selected':''}>Completed</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Priority</label>
                  <select class="form-select form-control-custom" id="maintPriority">
                    <option value="Low" ${m.priority==='Low'?'selected':''}>Low</option>
                    <option value="Medium" ${m.priority==='Medium'?'selected':''}>Medium</option>
                    <option value="High" ${m.priority==='High'?'selected':''}>High</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Assigned Contractor / Tech</label>
                <input type="text" class="form-control form-control-custom" id="maintTech" value="${m.technician}">
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Resolution Notes & Dispatch Log</label>
                <textarea class="form-control form-control-custom" rows="3" id="maintNotes">${m.notes}</textarea>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('maintModal'));
  modalInstance.show();
};

window.saveMaintenanceUpdate = function(e, ticketId) {
  e.preventDefault();
  const db = getDashboardDB();
  const m = db.maintenance.find(item => item.id === ticketId);
  if (!m) return;

  m.issue = document.getElementById('maintIssue').value.trim();
  m.status = document.getElementById('maintStatus').value;
  m.priority = document.getElementById('maintPriority').value;
  m.technician = document.getElementById('maintTech').value.trim();
  m.notes = document.getElementById('maintNotes').value.trim();
  m.updatedDate = 'Just now';

  saveDashboardDB(db);
  bootstrap.Modal.getInstance(document.getElementById('maintModal'))?.hide();
  navigateToView('maintenance');
  showToast(`Work Order ${m.ticketNo} status changed to ${m.status}!`);
};

window.openAddMaintenanceModal = function() {
  const db = getDashboardDB();
  const modalHtml = `
    <div class="modal fade" id="addMaintModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold">Create Maintenance Work Order</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="addMaintForm" onsubmit="saveNewMaintenance(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom">Issue Description</label>
                <input type="text" class="form-control form-control-custom" id="newMaintIssue" placeholder="e.g. Garbage disposal jammed" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Property</label>
                <select class="form-select form-control-custom" id="newMaintProp">
                  ${db.properties.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Unit #</label>
                  <input type="text" class="form-control form-control-custom" id="newMaintUnit" placeholder="#201" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Tenant Name</label>
                  <input type="text" class="form-control form-control-custom" id="newMaintTenant" placeholder="Tenant Name" required>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label-custom">Priority</label>
                  <select class="form-select form-control-custom" id="newMaintPriority">
                    <option value="Low">Low</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="High">High (Emergency)</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label-custom">Assigned Contractor</label>
                  <input type="text" class="form-control form-control-custom" id="newMaintTech" placeholder="In-House or Contractor">
                </div>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Dispatch Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('addMaintModal'));
  modalInstance.show();
};

window.saveNewMaintenance = function(e) {
  e.preventDefault();
  const issue = document.getElementById('newMaintIssue').value.trim();
  const prop = document.getElementById('newMaintProp').value;
  const unit = document.getElementById('newMaintUnit').value.trim();
  const tenant = document.getElementById('newMaintTenant').value.trim();
  const priority = document.getElementById('newMaintPriority').value;
  const tech = document.getElementById('newMaintTech').value.trim() || 'In-House Maintenance Team';

  const db = getDashboardDB();
  const newTicket = {
    id: 'maint-' + Date.now(),
    ticketNo: 'TKT-' + Math.floor(1080 + Math.random() * 500),
    propertyName: prop,
    unit: unit.startsWith('#') ? unit : '#' + unit,
    issue: issue,
    tenant: tenant,
    priority: priority,
    status: 'Dispatched',
    technician: tech,
    createdDate: 'Oct 08, 2026',
    updatedDate: 'Just now',
    notes: 'Dispatched directly via owner portal'
  };

  db.maintenance.unshift(newTicket);
  saveDashboardDB(db);

  bootstrap.Modal.getInstance(document.getElementById('addMaintModal'))?.hide();
  navigateToView('maintenance');
  showToast(`Maintenance Work Order ${newTicket.ticketNo} dispatched to ${tech}!`);
};

// --- Lease Agreement Modal ---
window.openLeaseModal = function(leaseId) {
  const db = getDashboardDB();
  const l = db.leases.find(item => item.id === leaseId);
  if (!l) return;

  const modalHtml = `
    <div class="modal fade" id="leaseModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h5 class="modal-title fw-bold mb-0">Lease Renewal Agreement</h5>
              <small class="text-secondary-custom">${l.propertyName} • ${l.unit}</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 border border-light-custom mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-secondary-custom">Tenant:</span>
                <strong>${l.tenantName}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-secondary-custom">Current Term:</span>
                <span>${l.leaseStart} to ${l.leaseExpiry}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-secondary-custom">Current Rent:</span>
                <strong>$${l.currentRent.toLocaleString()}/mo</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-secondary-custom">Proposed Renewal Rent (+${l.increasePct}%):</span>
                <strong class="text-success fs-5">$${l.proposedRent.toLocaleString()}/mo</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-secondary-custom">Renewal Status:</span>
                <span class="badge badge-status badge-success">${l.status}</span>
              </div>
            </div>
            <p class="small text-secondary-custom mb-0">
              <i class="fa-solid fa-shield-halved text-primary-custom me-1"></i> Attorney-reviewed lease contract template pre-formatted according to state rental guidelines.
            </p>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary-custom" onclick="sendRenewalOffer('${l.id}')">
              <i class="fa-solid fa-paper-plane me-1"></i> Send Renewal Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalHost')?.remove();
  const host = document.createElement('div');
  host.id = 'modalHost';
  host.innerHTML = modalHtml;
  document.body.appendChild(host);

  const modalInstance = new bootstrap.Modal(document.getElementById('leaseModal'));
  modalInstance.show();
};

window.sendRenewalOffer = function(leaseId) {
  const db = getDashboardDB();
  const l = db.leases.find(item => item.id === leaseId);
  if (!l) return;

  l.status = 'Offer Dispatched';
  saveDashboardDB(db);
  bootstrap.Modal.getInstance(document.getElementById('leaseModal'))?.hide();
  navigateToView('lease-renewals');
  showToast(`Renewal proposal sent to ${l.tenantName} ($${l.proposedRent.toLocaleString()}/mo)`);
};

window.sendBulkRenewals = function() {
  const db = getDashboardDB();
  db.leases.forEach(l => {
    if (l.status !== 'Accepted & Signed') l.status = 'Offer Dispatched';
  });
  saveDashboardDB(db);
  navigateToView('lease-renewals');
  showToast('Bulk renewal offers dispatched to all upcoming expirations!');
};

/* ==========================================================================
   14. CSV EXPORTS
   ========================================================================== */
function initReportExport() {
  const exportBtn = document.getElementById('exportReportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportFinancialReport();
    });
  }
}

window.exportPaymentsCSV = function() {
  const db = getDashboardDB();
  let csv = "Invoice Number,Tenant Name,Property,Unit,Rent Amount,Due Date,Paid Date,Payment Method,Status\n";
  db.payments.forEach(p => {
    csv += `"${p.invoiceNo}","${p.tenantName}","${p.propertyName}","${p.unit}","$${p.amount}","${p.dueDate}","${p.paidDate}","${p.paymentMethod}","${p.status}"\n`;
  });

  downloadCSV(csv, "PropVantage_Rent_Payments_Ledger.csv");
  showToast('Rent Payments Ledger exported as CSV!');
};

window.exportFinancialReport = function() {
  const db = getDashboardDB();
  let csv = "PropVantage Property Management - Comprehensive Financial Report 2026\n\n";
  csv += "Property Name,City,State,Total Units,Occupied Units,Monthly Gross Rent,Annualized Gross,Estimated NOI,Cap Rate,Status\n";
  db.properties.forEach(p => {
    csv += `"${p.name}","${p.city}","${p.state}",${p.totalUnits},${p.occupiedUnits},"$${p.monthlyRent}","$${p.monthlyRent*12}","$${Math.round(p.monthlyRent*12*0.9)}","${p.capRate}%","${p.status}"\n`;
  });

  downloadCSV(csv, "PropVantage_Portfolio_Financial_Statement.csv");
  showToast('Monthly Portfolio Financial Report successfully downloaded!');
};

function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
