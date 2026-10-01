/**
 * PROPVANTAGE - REAL ESTATE & PROPERTY MANAGEMENT SAAS DASHBOARD ENGINE
 * Complete frontend state engine with real-time CRUD, modals, filtering, sorting,
 * live search autocomplete, file exports, Chart.js analytics, Dark/Light mode, and RTL layout.
 */

/* ==========================================================================
   1. UNIFIED PROPERTY MANAGEMENT DATA STORE (PROPVANTAGE_DB)
   ========================================================================== */

const DEFAULT_PROPVANTAGE_DB = {
  currentOwner: {
    id: 'OWN-101',
    name: 'David Sterling',
    companyName: 'Sterling Investor Holdings LLC',
    email: 'david.sterling@investorholdings.com',
    phone: '+1 (555) 782-9901',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    role: 'Portfolio Investor (48 Units)',
    tier: 'Enterprise Portfolio Pass',
    directDepositBank: 'Chase Private Client (•••• 8821)',
    bankInfo: {
      accountHolder: 'David Sterling',
      bankName: 'Chase Private Client',
      accountNumber: '•••• •••• 8821',
      rawAccountNumber: '9876543218821',
      ifsc: 'CHASUS33',
      branch: 'Manhattan Financial Center, NY'
    },
    memberSince: 'March 2023',
    taxId: 'XX-XXX4910',
    notifications: {
      rentDeposits: true,
      maintenanceAlerts: true,
      leaseExpiryWarnings: true
    }
  },

  properties: [
    {
      id: 'prop-1',
      name: 'Grand Horizon Apartments',
      type: 'Multi-Family Residential',
      address: '742 Evergreen Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90024',
      totalUnits: 12,
      occupiedUnits: 12,
      monthlyRent: 34200,
      occupancyRate: 100,
      capRate: 8.8,
      status: 'Fully Occupied',
      description: 'Modern 12-unit multi-family residential building featuring rooftop decks, keyless access control, and underground EV parking.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      amenities: ['Underground Parking', 'Smart Access Control', 'Rooftop Deck', 'EV Charging'],
      units: [
        { unitNumber: '101', tenant: 'Jonathan Myers', rent: 2800, leaseEnd: '2027-04-30', status: 'Occupied', phone: '+1 (555) 301-4491' },
        { unitNumber: '102', tenant: 'James Wilson', rent: 2800, leaseEnd: '2026-11-30', status: 'Occupied', phone: '+1 (555) 209-8812' },
        { unitNumber: '201', tenant: 'Emily Watson', rent: 2850, leaseEnd: '2027-01-15', status: 'Occupied', phone: '+1 (555) 441-9920' },
        { unitNumber: '301', tenant: 'Rebecca Taylor', rent: 2900, leaseEnd: '2026-11-30', status: 'Occupied', phone: '+1 (555) 812-3341' },
        { unitNumber: '402', tenant: 'Sarah Jenkins', rent: 2850, leaseEnd: '2027-05-31', status: 'Occupied', phone: '+1 (555) 670-1129' }
      ]
    },
    {
      id: 'prop-2',
      name: 'Sunset Palms Waterfront',
      type: 'Luxury Residential Villas',
      address: '1240 Oceanfront Way',
      city: 'Miami',
      state: 'FL',
      zip: '33139',
      totalUnits: 4,
      occupiedUnits: 4,
      monthlyRent: 16800,
      occupancyRate: 100,
      capRate: 9.4,
      status: 'Fully Occupied',
      description: 'Exclusive waterfront luxury villa compound with private boat slips, infinity swimming pools, and dedicated concierge service.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      amenities: ['Private Boat Slip', 'Infinity Pool', 'Concierge Service', 'Private Dock'],
      units: [
        { unitNumber: 'Villa 101', tenant: 'Carlos Mendez', rent: 4200, leaseEnd: '2027-06-30', status: 'Occupied', phone: '+1 (555) 991-8840' },
        { unitNumber: 'Villa 102', tenant: 'Sophia Christensen', rent: 4100, leaseEnd: '2026-12-31', status: 'Occupied', phone: '+1 (555) 773-2219' },
        { unitNumber: 'Villa 108', tenant: 'Marcus Vance', rent: 4200, leaseEnd: '2027-02-28', status: 'Occupied', phone: '+1 (555) 332-9011' },
        { unitNumber: 'Villa 110', tenant: 'Olivia Bennett', rent: 4300, leaseEnd: '2027-08-31', status: 'Occupied', phone: '+1 (555) 124-8877' }
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
      totalUnits: 16,
      occupiedUnits: 15,
      monthlyRent: 33600,
      occupancyRate: 94,
      capRate: 7.9,
      status: '1 Vacancy',
      description: 'Spacious suburban townhome community featuring scenic mountain views, attached 2-car garages, and family recreation trails.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      amenities: ['Attached Garage', 'Mountain Views', 'EV Chargers', 'Private Patio'],
      units: [
        { unitNumber: 'Unit 1A', tenant: 'Lucas Gray', rent: 2100, leaseEnd: '2027-05-15', status: 'Occupied', phone: '+1 (555) 884-1290' },
        { unitNumber: 'Unit 2B', tenant: 'Nathan Scott', rent: 2200, leaseEnd: '2026-10-31', status: 'Occupied', phone: '+1 (555) 443-8821' },
        { unitNumber: 'Unit 3C', tenant: 'Vacant (Leasing in Progress)', rent: 2100, leaseEnd: '-', status: 'Vacant', phone: '-' }
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
      totalUnits: 10,
      occupiedUnits: 10,
      monthlyRent: 48500,
      occupancyRate: 100,
      capRate: 8.2,
      status: 'Fully Occupied',
      description: 'Prime SoHo loft building featuring high ceilings, exposed brick, freight elevator access, and enterprise fiber optic internet.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
      amenities: ['Freight Elevator', 'Keycard Security', 'Fiber Internet', '24/7 Doorman'],
      units: [
        { unitNumber: 'Loft 3B', tenant: 'Elena Rostova', rent: 4850, leaseEnd: '2027-03-31', status: 'Occupied', phone: '+1 (555) 771-0029' },
        { unitNumber: 'Loft 4A', tenant: 'David Chen', rent: 4850, leaseEnd: '2027-04-30', status: 'Occupied', phone: '+1 (555) 662-8819' }
      ]
    }
  ],

  rentPayments: [
    {
      id: 'RENT-9021',
      property: 'Grand Horizon Apartments',
      unit: 'Unit 402',
      tenant: 'Sarah Jenkins',
      amount: 2850,
      dueDate: '2026-09-01',
      paidDate: '2026-09-24',
      date: '2026-09-24',
      method: 'ACH Direct Debit',
      status: 'Paid',
      onTime: true
    },
    {
      id: 'RENT-9018',
      property: 'Sunset Palms Waterfront',
      unit: 'Villa 101',
      tenant: 'Carlos Mendez',
      amount: 4200,
      dueDate: '2026-09-01',
      paidDate: '2026-09-24',
      date: '2026-09-24',
      method: 'Wire Transfer',
      status: 'Paid',
      onTime: true
    },
    {
      id: 'RENT-9015',
      property: 'Pinecrest Heights Townhomes',
      unit: 'Unit 1A',
      tenant: 'Lucas Gray',
      amount: 2100,
      dueDate: '2026-09-01',
      paidDate: '2026-09-23',
      date: '2026-09-23',
      method: 'Online Portal Card',
      status: 'Paid',
      onTime: true
    },
    {
      id: 'RENT-8994',
      property: 'Apex Manhattan Lofts',
      unit: 'Loft 3B',
      tenant: 'Elena Rostova',
      amount: 4850,
      dueDate: '2026-09-01',
      paidDate: '2026-09-22',
      date: '2026-09-22',
      method: 'ACH Direct Debit',
      status: 'Paid',
      onTime: true
    },
    {
      id: 'RENT-8940',
      property: 'Grand Horizon Apartments',
      unit: 'Unit 201',
      tenant: 'James Wilson',
      amount: 2800,
      dueDate: '2026-09-01',
      paidDate: '2026-09-20',
      date: '2026-09-20',
      method: 'ACH Direct Debit',
      status: 'Paid',
      onTime: true
    },
    {
      id: 'RENT-8812',
      property: 'Pinecrest Heights Townhomes',
      unit: 'Unit 2B',
      tenant: 'Nathan Scott',
      amount: 2200,
      dueDate: '2026-09-01',
      paidDate: '-',
      date: '2026-09-25',
      method: 'ACH Direct Debit',
      status: 'Pending',
      onTime: false
    }
  ],

  maintenance: [
    {
      id: 'MNT-4401',
      property: 'Pinecrest Heights Townhomes',
      unit: 'Unit 3C',
      issue: 'HVAC Compressor Diagnostic & Filter Replacement',
      category: 'HVAC',
      priority: 'High',
      contractor: 'Apex Climate Solutions Inc.',
      cost: 380,
      status: 'In Progress',
      reportedDate: '2026-09-24'
    },
    {
      id: 'MNT-4392',
      property: 'Grand Horizon Apartments',
      unit: 'Unit 102',
      issue: 'Under-sink P-trap Minor Seal Replacement',
      category: 'Plumbing',
      priority: 'Medium',
      contractor: 'Metro Pro Plumbing LLC',
      cost: 150,
      status: 'Open',
      reportedDate: '2026-09-23'
    },
    {
      id: 'MNT-4380',
      property: 'Apex Manhattan Lofts',
      unit: 'Loft 4A',
      issue: 'Smart Keypad Lock Sensor Recalibration',
      category: 'Smart Access',
      priority: 'Low',
      contractor: 'SafeKey Systems',
      cost: 95,
      status: 'Completed',
      reportedDate: '2026-09-21'
    }
  ],

  leases: [
    {
      id: 'LSE-771',
      property: 'Grand Horizon Apartments',
      unit: 'Unit 301',
      tenant: 'Rebecca Taylor',
      currentRent: 2900,
      leaseStart: '2025-12-01',
      expiryDate: '2026-11-30',
      daysLeft: 67,
      renewalStatus: 'Offer Sent (+4.5%)',
      proposedRent: 3030
    },
    {
      id: 'LSE-775',
      property: 'Sunset Palms Waterfront',
      unit: 'Villa 102',
      tenant: 'Sophia Christensen',
      currentRent: 4100,
      leaseStart: '2026-01-01',
      expiryDate: '2026-12-31',
      daysLeft: 98,
      renewalStatus: 'Drafting Notice',
      proposedRent: 4300
    },
    {
      id: 'LSE-762',
      property: 'Pinecrest Heights Townhomes',
      unit: 'Unit 2B',
      tenant: 'Nathan Scott',
      currentRent: 2200,
      leaseStart: '2025-11-01',
      expiryDate: '2026-10-31',
      daysLeft: 37,
      renewalStatus: 'Pending Signature',
      proposedRent: 2300
    }
  ],

  ownersList: [
    { id: 'OWN-101', name: 'David Sterling', email: 'david.sterling@investorholdings.com', phone: '+1 (555) 782-9901', units: 48, properties: 4, monthlyRent: 133100, status: 'Active', joinedDate: 'March 2023' },
    { id: 'OWN-102', name: 'Eleanor Vance', email: 'eleanor.vance@vancerealty.com', phone: '+1 (555) 431-8902', units: 24, properties: 2, monthlyRent: 68400, status: 'Active', joinedDate: 'June 2023' },
    { id: 'OWN-103', name: 'Marcus Brody', email: 'mbrody@brodycapital.io', phone: '+1 (555) 609-1134', units: 62, properties: 5, monthlyRent: 178000, status: 'Active', joinedDate: 'August 2023' },
    { id: 'OWN-104', name: 'Sophia Sterling', email: 'sophia@sterlingestates.com', phone: '+1 (555) 992-4412', units: 16, properties: 2, monthlyRent: 44000, status: 'Active', joinedDate: 'January 2024' }
  ],

  messages: [
    {
      id: 'MSG-801',
      sender: 'Sarah Jenkins (Grand Horizon #402)',
      email: 'sarah.j@propvantage.com',
      subject: 'Scheduled Lease Renewal Confirmation',
      message: 'Hello David, I have reviewed the renewal agreement with the 4.5% rate adjustment and would like to sign the 24-month option. Please send digital docu-sign.',
      date: '2026-09-24',
      status: 'Unread'
    },
    {
      id: 'MSG-802',
      sender: 'Metro Pro Plumbing Dispatch',
      email: 'dispatch@metroproplumbing.com',
      subject: 'Work Order #4392 Complete & Inspected',
      message: 'The seal replacement at Grand Horizon Unit 102 has been successfully completed and pressure-tested. Tenant signed off on condition.',
      date: '2026-09-23',
      status: 'Read'
    }
  ],

  settings: {
    platformName: 'PropVantage Real Estate Management',
    managementFeeRate: 8.0,
    directDepositDay: 5,
    autoLeaseRenewalWindow: 60,
    currency: '$'
  }
};

/* ==========================================================================
   2. STORAGE ACCESS, EXPORT & SYNC HELPERS
   ========================================================================== */

function getDB() {
  try {
    const data = localStorage.getItem('propvantage_db');
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading propvantage_db', e);
  }
  saveDB(DEFAULT_PROPVANTAGE_DB);
  return DEFAULT_PROPVANTAGE_DB;
}

function saveDB(db) {
  try {
    localStorage.setItem('propvantage_db', JSON.stringify(db));
    window.dispatchEvent(new CustomEvent('propvantage_data_updated', { detail: db }));
  } catch (e) {
    console.error('Error saving propvantage_db', e);
  }
}

function resetDemoDatabase() {
  showConfirmModal(
    'Reset Sample Database',
    'Are you sure you want to reset all properties, ledgers, and maintenance records to initial defaults?',
    () => {
      saveDB(DEFAULT_PROPVANTAGE_DB);
      showToast('PropVantage portfolio database reset to default records!', 'success');
      setTimeout(() => window.location.reload(), 500);
    }
  );
}

function refreshDashboardData(btnEl) {
  const icon = btnEl ? btnEl.querySelector('i') : document.querySelector('.dash-view-header .btn-outline-custom i');
  if (icon) {
    icon.classList.add('spin-fast');
    setTimeout(() => icon.classList.remove('spin-fast'), 600);
  }
  renderSidebar();
  renderView();
  showToast('Dashboard statistics and live ledger data refreshed!', 'success');
}

function downloadCSV(filename, csvContent) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function exportDatabaseJSON() {
  const db = getDB();
  const jsonStr = JSON.stringify(db, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `propvantage_backup_${new Date().toISOString().split('T')[0]}.json`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Database backup JSON exported and downloaded!', 'success');
}

function importDatabaseJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedDB = JSON.parse(e.target.result);
      if (importedDB && importedDB.properties && importedDB.rentPayments) {
        saveDB(importedDB);
        showToast('Database imported and restored successfully!', 'success');
        setTimeout(() => window.location.reload(), 600);
      } else {
        showToast('Invalid PropVantage backup JSON file format.', 'danger');
      }
    } catch (err) {
      showToast('Error parsing JSON backup file: ' + err.message, 'danger');
    }
  };
  reader.readAsText(file);
}

/* ==========================================================================
   3. TOAST NOTIFICATION & CONFIRM MODAL UTILITIES
   ========================================================================== */

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed; top:20px; right:20px; z-index:99999; display:flex; flex-direction:column; gap:10px; max-width:380px;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? '#55A77A' : type === 'danger' ? '#D96B6B' : type === 'warning' ? '#D9A441' : '#4F86A6';
  const icon = type === 'success' ? 'fa-circle-check' : type === 'danger' ? 'fa-circle-exclamation' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info';

  toast.style.cssText = `
    background: ${bgClass};
    color: #ffffff;
    padding: 12px 18px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    animation: fadeInSlide 0.3s ease;
  `;

  toast.innerHTML = `
    <i class="fa-solid ${icon} fs-5"></i>
    <div style="flex:1;">${message}</div>
    <button type="button" style="background:none; border:none; color:#fff; cursor:pointer; opacity:0.8;" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.remove) {
        toast.remove();
      } else if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

function showConfirmModal(title, message, onConfirm) {
  const modalHtml = `
    <div class="modal fade" id="genericConfirmModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h6 class="modal-title fw-bold mb-0 text-danger"><i class="fa-solid fa-triangle-exclamation me-2"></i> ${title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-3">
            <p class="small text-secondary-custom mb-0">${message}</p>
          </div>
          <div class="modal-footer border-top border-light-custom p-2 justify-content-end gap-2">
            <button type="button" class="btn btn-outline-custom btn-sm" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger btn-sm" id="confirmModalActionBtn">Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('genericConfirmModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();

  document.getElementById('confirmModalActionBtn').onclick = () => {
    bs.hide();
    onConfirm();
  };

  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

/* ==========================================================================
   4. ROUTING & CONTROLLER INITIALIZATION
   ========================================================================== */

let currentActiveRole = 'owner'; // 'owner' or 'admin'
let currentActiveView = 'overview';

// Active Filters and Search States for Tables
let propSearchTerm = '';
let propTypeFilter = 'All';
let propStatusFilter = 'All';
let propSortBy = 'default';

let paymentSearchTerm = '';
let paymentStatusFilter = 'All';
let paymentMethodFilter = 'All';
let paymentSortBy = 'date-desc';

let maintSearchTerm = '';
let maintStatusFilter = 'All';
let maintPriorityFilter = 'All';
let maintSortBy = 'date-desc';

let leaseSearchTerm = '';
let leaseDaysFilter = 'All';
let leaseSortBy = 'days-asc';

let reportYearFilter = 2026;
let reportPropertyFilter = 'All';

let msgSearchTerm = '';
let msgStatusFilter = 'All';

document.addEventListener('DOMContentLoaded', () => {
  initDashboardApp();
});

function initDashboardApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const isDedicatedAdmin = window.location.pathname.includes('admin-dashboard');

  if (isDedicatedAdmin || urlParams.get('role') === 'admin') {
    currentActiveRole = 'admin';
    currentActiveView = 'admin-overview';
  } else {
    currentActiveRole = 'owner';
    currentActiveView = 'overview';
  }

  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      if (hash.startsWith('admin-') && currentActiveRole !== 'admin') {
        currentActiveRole = 'admin';
      } else if (!hash.startsWith('admin-') && currentActiveRole === 'admin' && !isDedicatedAdmin) {
        currentActiveRole = 'owner';
      }
      currentActiveView = hash;
    }
  }

  renderSidebar();
  renderView();
  initThemeAndDirection();
  initMobileToggle();
  initLiveSearch();

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== currentActiveView) {
      if (hash.startsWith('admin-')) {
        currentActiveRole = 'admin';
      } else if (currentActiveRole === 'admin' && !isDedicatedAdmin) {
        currentActiveRole = 'owner';
      }
      currentActiveView = hash;
      renderSidebar();
      renderView();
    }
  });

  window.addEventListener('propvantage_data_updated', () => {
    renderSidebar();
    renderView();
  });
}

function navigateToRoute(routeHash) {
  window.location.hash = '#' + routeHash;
}

function switchDashboardRole(targetRole) {
  currentActiveRole = targetRole;
  if (targetRole === 'admin') {
    currentActiveView = 'admin-overview';
    window.location.hash = '#admin-overview';
  } else {
    currentActiveView = 'overview';
    window.location.hash = '#overview';
  }
  renderSidebar();
  renderView();
  showToast(`Switched to PropVantage ${targetRole === 'admin' ? 'Master Admin' : 'Property Owner'} Portal`, 'info');
}

/* ==========================================================================
   5. SIDEBAR RENDERING
   ========================================================================== */

function renderSidebar() {
  const db = getDB();
  const sidebar = document.querySelector('.dashboard-sidebar');
  if (!sidebar) return;

  const totalProps = db.properties.length;
  const activeMaint = db.maintenance.filter(m => m.status !== 'Completed' && m.status !== 'Resolved').length;
  const pendingLeases = db.leases.length;
  const unreadMsg = db.messages.filter(m => m.status === 'Unread').length;

  let html = '';

  if (currentActiveRole === 'admin') {
    html = `
      <div class="sidebar-brand">
        <a class="navbar-brand-logo" href="dashboard.html?role=admin#admin-overview">
          <svg class="logo-mark flex-shrink-0" viewBox="0 0 44 44" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="pvmGradDashAdmin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1b4d6e"/>
                <stop offset="100%" stop-color="#2d7fa8"/>
              </linearGradient>
              <linearGradient id="pvmGoldDashAdmin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffd56b"/>
                <stop offset="100%" stop-color="#d49a24"/>
              </linearGradient>
            </defs>
            <rect width="44" height="44" rx="11" fill="url(#pvmGradDashAdmin)"/>
            <path d="M10 23.5L22 13L34 23.5" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 22.5V33.5H30.5V22.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            <rect x="18" y="19" width="13" height="14.5" rx="1.5" fill="#ffffff" fill-opacity="0.22" stroke="#ffffff" stroke-width="1.6"/>
            <rect x="20.5" y="22" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="25.5" y="22" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="20.5" y="27" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="25.5" y="27" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <path d="M16 28.5H18.5V33.5H16V28.5Z" fill="url(#pvmGoldDashAdmin)"/>
            <circle cx="22" cy="11.5" r="2.2" fill="url(#pvmGoldDashAdmin)"/>
          </svg>
          <div class="brand-text-wrap">
            <div class="brand-text">Prop<span>Vantage</span> <span class="role-tag-badge role-tag-admin">Admin</span></div>
            <div class="brand-subtitle">PROPERTY MANAGEMENT</div>
          </div>
        </a>
        <button type="button" class="btn-close d-lg-none" id="sidebarCloseBtn" aria-label="Close"></button>
      </div>

      <ul class="sidebar-nav">
        <div class="sidebar-section-title">Operations & Portfolios</div>
        <li class="sidebar-nav-item">
          <a href="#admin-overview" class="sidebar-nav-link ${currentActiveView === 'admin-overview' ? 'active' : ''}">
            <i class="fa-solid fa-chart-pie"></i>
            <span>Overview</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-owners" class="sidebar-nav-link ${currentActiveView === 'admin-owners' ? 'active' : ''}">
            <i class="fa-solid fa-users"></i>
            <span>Manage Landlords</span>
            <span class="badge badge-nav bg-primary-subtle text-primary">${db.ownersList.length}</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-properties" class="sidebar-nav-link ${currentActiveView === 'admin-properties' ? 'active' : ''}">
            <i class="fa-solid fa-hotel"></i>
            <span>Manage Buildings</span>
            <span class="badge badge-nav bg-success-subtle text-success">${totalProps}</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-leases" class="sidebar-nav-link ${currentActiveView === 'admin-leases' ? 'active' : ''}">
            <i class="fa-solid fa-file-contract"></i>
            <span>Master Leases</span>
            <span class="badge badge-nav bg-warning-subtle text-warning">${pendingLeases}</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-maintenance" class="sidebar-nav-link ${currentActiveView === 'admin-maintenance' ? 'active' : ''}">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <span>Maintenance Dispatch</span>
            ${activeMaint > 0 ? `<span class="badge badge-nav bg-danger">${activeMaint} Active</span>` : ''}
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-payouts" class="sidebar-nav-link ${currentActiveView === 'admin-payouts' ? 'active' : ''}">
            <i class="fa-solid fa-money-bill-transfer"></i>
            <span>Owner Payouts</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-reports" class="sidebar-nav-link ${currentActiveView === 'admin-reports' ? 'active' : ''}">
            <i class="fa-solid fa-chart-line"></i>
            <span>Platform Reports</span>
          </a>
        </li>

        <div class="sidebar-section-title">Support & System</div>
        <li class="sidebar-nav-item">
          <a href="#admin-messages" class="sidebar-nav-link ${currentActiveView === 'admin-messages' ? 'active' : ''}">
            <i class="fa-solid fa-envelope"></i>
            <span>Support Inbox</span>
            ${unreadMsg > 0 ? `<span class="badge badge-nav bg-danger">${unreadMsg} New</span>` : ''}
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#admin-settings" class="sidebar-nav-link ${currentActiveView === 'admin-settings' ? 'active' : ''}">
            <i class="fa-solid fa-sliders"></i>
            <span>System Settings</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="login.html" class="sidebar-nav-link text-danger" onclick="showToast('Signed out from Admin Portal', 'info')">
            <i class="fa-solid fa-arrow-right-from-bracket text-danger"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>

      <div class="sidebar-user-footer">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Admin" class="sidebar-user-avatar border-primary">
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">Master Administrator</div>
          <div class="sidebar-user-role">Platform Operations</div>
        </div>
      </div>
    `;
  } else {
    // Owner Portal Sidebar
    html = `
      <div class="sidebar-brand">
        <a class="navbar-brand-logo" href="dashboard.html#overview">
          <svg class="logo-mark flex-shrink-0" viewBox="0 0 44 44" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="pvmGradDashOwner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1b4d6e"/>
                <stop offset="100%" stop-color="#2d7fa8"/>
              </linearGradient>
              <linearGradient id="pvmGoldDashOwner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffd56b"/>
                <stop offset="100%" stop-color="#d49a24"/>
              </linearGradient>
            </defs>
            <rect width="44" height="44" rx="11" fill="url(#pvmGradDashOwner)"/>
            <path d="M10 23.5L22 13L34 23.5" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 22.5V33.5H30.5V22.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            <rect x="18" y="19" width="13" height="14.5" rx="1.5" fill="#ffffff" fill-opacity="0.22" stroke="#ffffff" stroke-width="1.6"/>
            <rect x="20.5" y="22" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="25.5" y="22" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="20.5" y="27" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <rect x="25.5" y="27" width="2.8" height="2.8" rx="0.5" fill="#ffffff"/>
            <path d="M16 28.5H18.5V33.5H16V28.5Z" fill="url(#pvmGoldDashOwner)"/>
            <circle cx="22" cy="11.5" r="2.2" fill="url(#pvmGoldDashOwner)"/>
          </svg>
          <div class="brand-text-wrap">
            <div class="brand-text">Prop<span>Vantage</span> <span class="role-tag-badge role-tag-owner">Owner</span></div>
            <div class="brand-subtitle">PROPERTY MANAGEMENT</div>
          </div>
        </a>
        <button type="button" class="btn-close d-lg-none" id="sidebarCloseBtn" aria-label="Close"></button>
      </div>

      <ul class="sidebar-nav">
        <div class="sidebar-section-title">Portfolio Navigation</div>
        <li class="sidebar-nav-item">
          <a href="#overview" class="sidebar-nav-link ${currentActiveView === 'overview' ? 'active' : ''}">
            <i class="fa-solid fa-chart-pie"></i>
            <span>Overview</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#properties" class="sidebar-nav-link ${currentActiveView === 'properties' ? 'active' : ''}">
            <i class="fa-solid fa-hotel"></i>
            <span>Properties</span>
            <span class="badge badge-nav bg-primary-subtle text-primary">${totalProps}</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#rent-payments" class="sidebar-nav-link ${currentActiveView === 'rent-payments' ? 'active' : ''}">
            <i class="fa-solid fa-money-bill-wave"></i>
            <span>Rent Payments</span>
            <span class="badge badge-nav bg-success-subtle text-success">98% On-Time</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#maintenance" class="sidebar-nav-link ${currentActiveView === 'maintenance' ? 'active' : ''}">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <span>Maintenance</span>
            ${activeMaint > 0 ? `<span class="badge badge-nav bg-warning-subtle text-warning">${activeMaint} Active</span>` : ''}
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#lease-renewals" class="sidebar-nav-link ${currentActiveView === 'lease-renewals' ? 'active' : ''}">
            <i class="fa-solid fa-file-signature"></i>
            <span>Lease Renewals</span>
            <span class="badge badge-nav bg-info-subtle text-info">${pendingLeases} Pending</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#income-reports" class="sidebar-nav-link ${currentActiveView === 'income-reports' ? 'active' : ''}">
            <i class="fa-solid fa-file-invoice-dollar"></i>
            <span>Income Reports</span>
          </a>
        </li>

        <div class="sidebar-section-title">Account & Desk</div>
        <li class="sidebar-nav-item">
          <a href="#messages" class="sidebar-nav-link ${currentActiveView === 'messages' ? 'active' : ''}">
            <i class="fa-solid fa-envelope"></i>
            <span>Messages</span>
            ${unreadMsg > 0 ? `<span class="badge badge-nav bg-primary text-white" id="sidebarMsgBadge">${unreadMsg}</span>` : ''}
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#profile" class="sidebar-nav-link ${currentActiveView === 'profile' ? 'active' : ''}">
            <i class="fa-solid fa-user-gear"></i>
            <span>Profile & Bank Info</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="login.html" class="sidebar-nav-link text-danger" onclick="showToast('Signed out from Owner Portal', 'info')">
            <i class="fa-solid fa-arrow-right-from-bracket text-danger"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>

      <div class="sidebar-user-footer">
        <img src="${db.currentOwner.avatar}" alt="${db.currentOwner.name}" class="sidebar-user-avatar">
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${db.currentOwner.name}</div>
          <div class="sidebar-user-role">${db.currentOwner.role}</div>
        </div>
      </div>
    `;
  }

  sidebar.innerHTML = html;

  const closeBtn = document.getElementById('sidebarCloseBtn');
  if (closeBtn) {
    closeBtn.onclick = () => {
      sidebar.classList.remove('sidebar-open');
      document.querySelector('.sidebar-backdrop')?.classList.remove('show');
    };
  }
}

/* ==========================================================================
   6. VIEW ROUTING & RENDERING
   ========================================================================== */

function renderView() {
  const container = document.getElementById('dashboardContentContainer');
  if (!container) return;

  updateTopbarRoleSwitcher();

  switch (currentActiveView) {
    // Owner Views
    case 'overview':
      container.innerHTML = renderOwnerOverview();
      initOwnerCharts();
      break;
    case 'properties':
      container.innerHTML = renderOwnerProperties();
      break;
    case 'rent-payments':
      container.innerHTML = renderOwnerRentPayments();
      break;
    case 'maintenance':
      container.innerHTML = renderOwnerMaintenance();
      break;
    case 'lease-renewals':
      container.innerHTML = renderOwnerLeaseRenewals();
      break;
    case 'income-reports':
      container.innerHTML = renderOwnerIncomeReports();
      initOwnerIncomeCharts();
      break;
    case 'messages':
      container.innerHTML = renderOwnerMessages();
      break;
    case 'profile':
      container.innerHTML = renderOwnerProfile();
      break;

    // Admin Views
    case 'admin-overview':
      container.innerHTML = renderAdminOverview();
      initAdminCharts();
      break;
    case 'admin-owners':
      container.innerHTML = renderAdminOwners();
      break;
    case 'admin-properties':
      container.innerHTML = renderAdminProperties();
      break;
    case 'admin-leases':
      container.innerHTML = renderAdminLeases();
      break;
    case 'admin-maintenance':
      container.innerHTML = renderAdminMaintenance();
      break;
    case 'admin-payouts':
      container.innerHTML = renderAdminPayouts();
      break;
    case 'admin-reports':
      container.innerHTML = renderAdminReports();
      initAdminPlatformCharts();
      break;
    case 'admin-messages':
      container.innerHTML = renderAdminMessages();
      break;
    case 'admin-settings':
      container.innerHTML = renderAdminSettings();
      break;

    default:
      container.innerHTML = currentActiveRole === 'admin' ? renderAdminOverview() : renderOwnerOverview();
      if (currentActiveRole === 'admin') initAdminCharts(); else initOwnerCharts();
      break;
  }
}

function updateTopbarRoleSwitcher() {
  const topbar = document.querySelector('.dashboard-topbar');
  if (!topbar) return;

  let btn = document.getElementById('topbarRoleSwitchBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'topbarRoleSwitchBtn';
    btn.className = 'role-switch-btn me-2';
    topbar.querySelector('.topbar-actions')?.prepend(btn);
  }

  if (currentActiveRole === 'owner') {
    btn.innerHTML = `<i class="fa-solid fa-building-shield me-1"></i> <span class="d-none d-sm-inline">Switch to </span>Admin Portal`;
    btn.title = "Switch to Master Operations Admin Portal";
    btn.onclick = () => switchDashboardRole('admin');
  } else {
    btn.innerHTML = `<i class="fa-solid fa-building-user me-1"></i> <span class="d-none d-sm-inline">Switch to </span>Owner Portal`;
    btn.title = "Switch to Property Owner Portal";
    btn.onclick = () => switchDashboardRole('owner');
  }
}

/* ==========================================================================
   7. OWNER PORTAL: OVERVIEW VIEW
   ========================================================================== */

function renderOwnerOverview() {
  const db = getDB();
  const totalUnits = db.properties.reduce((a, b) => a + b.totalUnits, 0);
  const occupiedUnits = db.properties.reduce((a, b) => a + b.occupiedUnits, 0);
  const monthlyRent = db.properties.reduce((a, b) => a + b.monthlyRent, 0);
  const activeTickets = db.maintenance.filter(m => m.status !== 'Completed' && m.status !== 'Resolved').length;

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Portfolio Performance Overview 🏢</h1>
          <p class="text-secondary-custom mb-0 small">Welcome back, ${db.currentOwner.name}. Real-time rental income, tenant leases, and cashflow analytics.</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary-custom shadow-sm" onclick="openAddPropertyModal()">
            <i class="fa-solid fa-plus me-1"></i> Add Property
          </button>
          <button class="btn btn-outline-custom" onclick="refreshDashboardData(this)" title="Refresh Dashboard Data">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Balanced 5 KPI Grid - All Cards Clickable -->
    <div class="dash-stat-grid">
      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('properties')" title="Click to view Properties Management">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Total Properties</span>
          <div class="dash-stat-icon-wrap icon-blue"><i class="fa-solid fa-hotel"></i></div>
        </div>
        <div class="dash-stat-value">${db.properties.length} Estates</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-layer-group"></i> ${totalUnits} Total Units</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('properties')" title="Click to view Occupancy Details">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Portfolio Occupancy</span>
          <div class="dash-stat-icon-wrap icon-green"><i class="fa-solid fa-user-check"></i></div>
        </div>
        <div class="dash-stat-value text-success">${totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0}%</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-check"></i> ${occupiedUnits}/${totalUnits} Occupied</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('income-reports')" title="Click to view Income Reports">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Monthly Gross Rent</span>
          <div class="dash-stat-icon-wrap icon-gold"><i class="fa-solid fa-money-bill-wave"></i></div>
        </div>
        <div class="dash-stat-value">$${monthlyRent.toLocaleString()}</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-arrow-trend-up"></i> 98% Collected</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('maintenance')" title="Click to view Maintenance Work Orders">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Active Work Orders</span>
          <div class="dash-stat-icon-wrap icon-red"><i class="fa-solid fa-screwdriver-wrench"></i></div>
        </div>
        <div class="dash-stat-value">${activeTickets} Open</div>
        <div class="dash-stat-trend text-primary"><i class="fa-solid fa-truck-fast"></i> Contractors Dispatched</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('lease-renewals')" title="Click to view Lease Renewals">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Expiring Leases</span>
          <div class="dash-stat-icon-wrap icon-purple"><i class="fa-solid fa-file-signature"></i></div>
        </div>
        <div class="dash-stat-value">${db.leases.length} Leases</div>
        <div class="dash-stat-trend text-warning"><i class="fa-solid fa-clock"></i> Next 90 Days</div>
      </div>
    </div>

    <!-- Live Property Radar Grid -->
    <div class="custom-card p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h6 fw-bold mb-0"><i class="fa-solid fa-city text-primary-custom me-2"></i> Estate Occupancy Radar</h2>
        <a href="#properties" class="small text-primary-custom text-decoration-none fw-semibold">View All Estates <i class="fa-solid fa-arrow-right ms-1"></i></a>
      </div>
      <div class="property-radar-grid">
        ${db.properties.map(p => `
          <div class="property-radar-box" style="cursor: pointer;" onclick="openPropertyDetailsModal('${p.id}')" title="Click to view full property details & units">
            <div>
              <div class="fw-bold small">${p.name}</div>
              <div class="small text-secondary-custom">${p.occupiedUnits}/${p.totalUnits} Units &bull; $${p.monthlyRent.toLocaleString()}/mo</div>
            </div>
            <div class="text-end">
              <span class="radar-status-dot ${p.occupiedUnits === p.totalUnits ? 'dot-occupied' : 'dot-pending'}"></span>
              <div class="small fw-bold mt-1 ${p.occupiedUnits === p.totalUnits ? 'text-success' : 'text-warning'}">
                ${p.status}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Charts Row -->
    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <div class="custom-card p-4 shadow-sm h-100">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="h6 fw-bold mb-0"><i class="fa-solid fa-chart-line text-primary-custom me-2"></i> Net Rental Cashflow Trend (2026)</h2>
            <span class="badge bg-success-subtle text-success">Verified Direct Deposits</span>
          </div>
          <div style="height: 250px;">
            <canvas id="ownerCashflowChart"></canvas>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="custom-card p-4 shadow-sm h-100">
          <h2 class="h6 fw-bold mb-3"><i class="fa-solid fa-pie-chart text-primary-custom me-2"></i> Income by Asset</h2>
          <div style="height: 210px;">
            <canvas id="ownerAssetIncomeChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Rent Collection Table -->
    <div class="custom-card p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h6 fw-bold mb-0"><i class="fa-solid fa-receipt text-primary-custom me-2"></i> Recent Tenant Rent Payments</h2>
        <a href="#rent-payments" class="small text-primary-custom text-decoration-none fw-semibold">View Full Ledger <i class="fa-solid fa-arrow-right ms-1"></i></a>
      </div>
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>Receipt #</th>
              <th>Property & Unit</th>
              <th>Tenant Name</th>
              <th>Amount Paid</th>
              <th>Date</th>
              <th>Method</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.rentPayments.map(r => `
              <tr>
                <td class="fw-bold">#${r.id}</td>
                <td>
                  <div class="fw-semibold small">${r.property}</div>
                  <div class="small text-secondary-custom">${r.unit}</div>
                </td>
                <td class="fw-bold">${r.tenant}</td>
                <td class="fw-bold text-success">$${r.amount.toLocaleString()}.00</td>
                <td class="small text-secondary-custom">${r.paidDate || r.date}</td>
                <td class="small"><i class="fa-solid fa-credit-card me-1 text-secondary-custom"></i> ${r.method}</td>
                <td><span class="badge bg-success-subtle text-success">${r.status}</span></td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewRentReceiptModal('${r.id}')">
                    <i class="fa-solid fa-file-invoice me-1"></i> Receipt
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function initOwnerCharts() {
  const flowCtx = document.getElementById('ownerCashflowChart');
  if (flowCtx) {
    new Chart(flowCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
          label: 'Net Cashflow ($)',
          data: [112000, 118000, 122500, 126000, 129000, 131000, 133100, 133100, 133100],
          borderColor: '#4F86A6',
          backgroundColor: 'rgba(79, 134, 166, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: 'rgba(0,0,0,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  const assetCtx = document.getElementById('ownerAssetIncomeChart');
  if (assetCtx) {
    const db = getDB();
    new Chart(assetCtx, {
      type: 'doughnut',
      data: {
        labels: db.properties.map(p => p.name.split(' ')[0]),
        datasets: [{
          data: db.properties.map(p => p.monthlyRent),
          backgroundColor: ['#4F86A6', '#55A77A', '#D6A84F', '#7E69AB', '#639DB6', '#E2847A'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } }
      }
    });
  }
}

/* ==========================================================================
   8. OWNER PORTAL: PROPERTIES VIEW & CRUD
   ========================================================================== */

function renderOwnerProperties() {
  const db = getDB();
  let filtered = db.properties;

  if (propSearchTerm) {
    const q = propSearchTerm.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.address.toLowerCase().includes(q) || 
      (p.city && p.city.toLowerCase().includes(q))
    );
  }

  if (propTypeFilter !== 'All') {
    filtered = filtered.filter(p => p.type.toLowerCase().includes(propTypeFilter.toLowerCase()));
  }

  if (propStatusFilter !== 'All') {
    if (propStatusFilter === 'Fully Occupied') {
      filtered = filtered.filter(p => p.occupiedUnits === p.totalUnits);
    } else if (propStatusFilter === 'Vacancy') {
      filtered = filtered.filter(p => p.occupiedUnits < p.totalUnits);
    }
  }

  if (propSortBy === 'rent-desc') {
    filtered.sort((a, b) => b.monthlyRent - a.monthlyRent);
  } else if (propSortBy === 'rent-asc') {
    filtered.sort((a, b) => a.monthlyRent - b.monthlyRent);
  } else if (propSortBy === 'units-desc') {
    filtered.sort((a, b) => b.totalUnits - a.totalUnits);
  } else if (propSortBy === 'occupancy-desc') {
    filtered.sort((a, b) => b.occupancyRate - a.occupancyRate);
  }

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Managed Properties & Estates 🏢</h1>
          <p class="text-secondary-custom mb-0 small">Real-time status of your residential units, commercial spaces, and unit rosters.</p>
        </div>
        <button class="btn btn-primary-custom shadow-sm" onclick="openAddPropertyModal()">
          <i class="fa-solid fa-plus me-1"></i> Add New Estate
        </button>
      </div>
    </div>

    <!-- Filter & Sort Toolbar -->
    <div class="table-filter-toolbar">
      <div class="filter-controls-group">
        <div class="input-icon-wrap filter-search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="form-control form-control-custom filter-input" placeholder="Search estate name, address..." value="${propSearchTerm}" oninput="handlePropSearch(this.value)">
        </div>
        <select class="form-select form-control-custom filter-select" onchange="handlePropTypeFilter(this.value)" aria-label="Filter by Property Type">
          <option value="All" ${propTypeFilter === 'All' ? 'selected' : ''}>All Asset Types</option>
          <option value="Multi-Family" ${propTypeFilter === 'Multi-Family' ? 'selected' : ''}>Multi-Family</option>
          <option value="Luxury" ${propTypeFilter === 'Luxury' ? 'selected' : ''}>Luxury Villas</option>
          <option value="Townhome" ${propTypeFilter === 'Townhome' ? 'selected' : ''}>Townhomes</option>
          <option value="Commercial" ${propTypeFilter === 'Commercial' ? 'selected' : ''}>Commercial Lofts</option>
        </select>
        <select class="form-select form-control-custom filter-select" onchange="handlePropStatusFilter(this.value)" aria-label="Filter by Status">
          <option value="All" ${propStatusFilter === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Fully Occupied" ${propStatusFilter === 'Fully Occupied' ? 'selected' : ''}>Fully Occupied</option>
          <option value="Vacancy" ${propStatusFilter === 'Vacancy' ? 'selected' : ''}>Has Vacancy</option>
        </select>
      </div>

      <div class="filter-sort-group">
        <select class="form-select form-control-custom filter-select filter-select-sort" onchange="handlePropSort(this.value)" aria-label="Sort Properties">
          <option value="default" ${propSortBy === 'default' ? 'selected' : ''}>Sort: Default</option>
          <option value="rent-desc" ${propSortBy === 'rent-desc' ? 'selected' : ''}>Rent: High to Low</option>
          <option value="rent-asc" ${propSortBy === 'rent-asc' ? 'selected' : ''}>Rent: Low to High</option>
          <option value="units-desc" ${propSortBy === 'units-desc' ? 'selected' : ''}>Units: Most to Least</option>
          <option value="occupancy-desc" ${propSortBy === 'occupancy-desc' ? 'selected' : ''}>Occupancy %</option>
        </select>
        <button class="btn btn-outline-custom filter-reset-btn" onclick="resetPropFilters()" title="Reset Filters">
          <i class="fa-solid fa-arrows-rotate"></i>
          <span>Reset</span>
        </button>
      </div>
    </div>

    <!-- Properties Cards Grid -->
    ${filtered.length === 0 ? `
      <div class="custom-card p-5 text-center shadow-sm">
        <i class="fa-solid fa-hotel fs-1 text-secondary-custom mb-3 opacity-50"></i>
        <h5 class="fw-bold mb-1">No Properties Found</h5>
        <p class="small text-secondary-custom mb-3">No estate matches your search or filter parameters.</p>
        <button class="btn btn-primary-custom btn-sm" onclick="resetPropFilters()">Clear Filters</button>
      </div>
    ` : `
      <div class="property-card-grid mb-4">
        ${filtered.map(p => `
          <div class="property-portal-card">
            <img src="${p.image}" alt="${p.name}" class="property-portal-img">
            <div class="p-3 d-flex flex-column flex-grow-1">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge bg-primary-subtle text-primary">${p.type}</span>
                <span class="badge ${p.occupiedUnits === p.totalUnits ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}">${p.status}</span>
              </div>
              <h3 class="h6 fw-bold mb-1">${p.name}</h3>
              <p class="small text-secondary-custom mb-3"><i class="fa-solid fa-location-dot text-danger me-1"></i> ${p.address}${p.city ? `, ${p.city}, ${p.state}` : ''}</p>

              <div class="row g-2 p-2 bg-section rounded-3 small mb-3 border border-light-custom">
                <div class="col-6">
                  <div class="text-secondary-custom">Total Units:</div>
                  <div class="fw-bold">${p.occupiedUnits} / ${p.totalUnits} Units</div>
                </div>
                <div class="col-6">
                  <div class="text-secondary-custom">Monthly Rent:</div>
                  <div class="fw-bold text-success">$${p.monthlyRent.toLocaleString()}</div>
                </div>
                <div class="col-6">
                  <div class="text-secondary-custom">Occupancy:</div>
                  <div class="fw-bold">${p.occupancyRate}%</div>
                </div>
                <div class="col-6">
                  <div class="text-secondary-custom">Cap Rate:</div>
                  <div class="fw-bold text-primary">${p.capRate}%</div>
                </div>
              </div>

              <div class="mt-auto d-flex gap-2">
                <button class="btn btn-outline-custom btn-sm flex-grow-1" onclick="openPropertyDetailsModal('${p.id}')">
                  <i class="fa-solid fa-eye me-1"></i> View Details
                </button>
                <button class="btn btn-outline-secondary btn-sm" onclick="openEditPropertyModal('${p.id}')" title="Edit Estate">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm" onclick="deletePropertyAction('${p.id}')" title="Delete Estate">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

function handlePropSearch(val) {
  propSearchTerm = val;
  renderView();
}

function handlePropTypeFilter(val) {
  propTypeFilter = val;
  renderView();
}

function handlePropStatusFilter(val) {
  propStatusFilter = val;
  renderView();
}

function handlePropSort(val) {
  propSortBy = val;
  renderView();
}

function resetPropFilters() {
  propSearchTerm = '';
  propTypeFilter = 'All';
  propStatusFilter = 'All';
  propSortBy = 'default';
  renderView();
}

/* ==========================================================================
   8B. PROPERTY DETAILS MODAL
   ========================================================================== */

function openPropertyDetailsModal(propId) {
  const db = getDB();
  const p = db.properties.find(item => item.id === propId) || db.properties[0];
  const units = p.units || [];
  const activeMaint = db.maintenance.filter(m => m.property.toLowerCase() === p.name.toLowerCase() && m.status !== 'Completed' && m.status !== 'Resolved').length;
  const expiringLeases = db.leases.filter(l => l.property.toLowerCase() === p.name.toLowerCase()).length;
  const vacantCount = p.totalUnits - p.occupiedUnits;

  const modalHtml = `
    <div class="modal fade" id="propertyDetailsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h5 class="modal-title fw-bold mb-0"><i class="fa-solid fa-hotel text-primary-custom me-2"></i> ${p.name}</h5>
              <small class="text-secondary-custom"><i class="fa-solid fa-location-dot text-danger me-1"></i> ${p.address}${p.city ? `, ${p.city}, ${p.state} ${p.zip || ''}` : ''}</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            
            <!-- Quick Stat Cards -->
            <div class="row g-2 mb-4 text-center">
              <div class="col-4 col-md-2">
                <div class="p-2 bg-section rounded-3 border border-light-custom">
                  <div class="small text-secondary-custom">Total Units</div>
                  <div class="fw-bold fs-6">${p.totalUnits}</div>
                </div>
              </div>
              <div class="col-4 col-md-2">
                <div class="p-2 bg-section rounded-3 border border-light-custom">
                  <div class="small text-secondary-custom">Occupied</div>
                  <div class="fw-bold fs-6 text-success">${p.occupiedUnits}</div>
                </div>
              </div>
              <div class="col-4 col-md-2">
                <div class="p-2 bg-section rounded-3 border border-light-custom">
                  <div class="small text-secondary-custom">Vacant</div>
                  <div class="fw-bold fs-6 ${vacantCount > 0 ? 'text-warning' : 'text-success'}">${vacantCount}</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="p-2 bg-section rounded-3 border border-light-custom">
                  <div class="small text-secondary-custom">Monthly Gross</div>
                  <div class="fw-bold fs-6 text-success">$${p.monthlyRent.toLocaleString()}</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="p-2 bg-section rounded-3 border border-light-custom">
                  <div class="small text-secondary-custom">Occupancy %</div>
                  <div class="fw-bold fs-6 text-primary">${p.occupancyRate}%</div>
                </div>
              </div>
            </div>

            <!-- Description & Alerts -->
            <div class="p-3 bg-section rounded-3 border border-light-custom mb-4 small">
              <div class="fw-semibold mb-1 text-main-custom">Property Overview</div>
              <p class="text-secondary-custom mb-2">${p.description || 'Prime rental asset managed with high tenant retention standards.'}</p>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-primary-subtle text-primary"><i class="fa-solid fa-wrench me-1"></i> ${activeMaint} Active Maintenance</span>
                <span class="badge bg-warning-subtle text-warning"><i class="fa-solid fa-file-signature me-1"></i> ${expiringLeases} Expiring Leases</span>
                <span class="badge bg-success-subtle text-success"><i class="fa-solid fa-percent me-1"></i> Cap Rate: ${p.capRate}%</span>
              </div>
            </div>

            <!-- Units Directory Header & Actions -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="fw-bold mb-0"><i class="fa-solid fa-door-open text-primary-custom me-2"></i> Unit Directory & Resident Roster</h6>
              <button class="btn btn-sm btn-primary-custom" onclick="openAddUnitModal('${p.id}')">
                <i class="fa-solid fa-plus me-1"></i> Add Unit
              </button>
            </div>

            <div class="table-responsive">
              <table class="custom-dash-table">
                <thead>
                  <tr>
                    <th>Unit #</th>
                    <th>Current Tenant</th>
                    <th>Monthly Rent</th>
                    <th>Lease Expiry</th>
                    <th>Status</th>
                    <th class="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${units.length === 0 ? `<tr><td colspan="6" class="text-center text-secondary-custom py-3">No individual units recorded yet. Click "+ Add Unit".</td></tr>` : ''}
                  ${units.map(u => `
                    <tr>
                      <td class="fw-bold">${u.unitNumber}</td>
                      <td class="fw-semibold">${u.tenant}</td>
                      <td class="fw-bold text-success">$${u.rent ? u.rent.toLocaleString() : '2,800'}/mo</td>
                      <td class="small text-secondary-custom">${u.leaseEnd || '2027-06-30'}</td>
                      <td>
                        <span class="badge ${u.status === 'Occupied' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}">
                          ${u.status || 'Occupied'}
                        </span>
                      </td>
                      <td class="text-end">
                        <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewUnitLeaseModal('${p.id}', '${u.unitNumber}')" title="View Lease Agreement">
                          <i class="fa-solid fa-file-contract me-1"></i> Lease
                        </button>
                        <button class="btn btn-sm btn-outline-secondary p-1 px-2 ms-1" onclick="toggleUnitOccupancy('${p.id}', '${u.unitNumber}')" title="Toggle Occupied/Vacant">
                          <i class="fa-solid fa-power-off"></i>
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

          </div>
          <div class="modal-footer border-top border-light-custom justify-content-between">
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="openEditPropertyModal('${p.id}')">
              <i class="fa-solid fa-pen-to-square me-1"></i> Edit Estate
            </button>
            <button type="button" class="btn btn-outline-custom btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('propertyDetailsModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function openAddPropertyModal() {
  const modalHtml = `
    <div class="modal fade" id="addPropModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-hotel text-primary-custom me-2"></i> Register New Property</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="addPropertyForm" onsubmit="executeAddProperty(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Property / Building Name <span class="text-danger">*</span></label>
                <input type="text" id="newPropName" class="form-control form-control-custom" placeholder="e.g. Sterling Heights Lofts" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Property Type <span class="text-danger">*</span></label>
                  <select id="newPropType" class="form-select form-control-custom">
                    <option value="Multi-Family Residential">Multi-Family Residential</option>
                    <option value="Luxury Residential Villas">Luxury Residential Villas</option>
                    <option value="Commercial & Luxury Lofts">Commercial & Luxury Lofts</option>
                    <option value="Townhome Community">Townhome Community</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Property Status <span class="text-danger">*</span></label>
                  <select id="newPropStatus" class="form-select form-control-custom">
                    <option value="Fully Occupied">Fully Occupied</option>
                    <option value="1 Vacancy">1 Vacancy</option>
                    <option value="2 Vacancies">2 Vacancies</option>
                    <option value="Under Renovation">Under Renovation</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Street Address <span class="text-danger">*</span></label>
                <input type="text" id="newPropAddress" class="form-control form-control-custom" placeholder="e.g. 100 Park Ave" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-5">
                  <label class="form-label-custom small">City <span class="text-danger">*</span></label>
                  <input type="text" id="newPropCity" class="form-control form-control-custom" placeholder="New York" required>
                </div>
                <div class="col-3">
                  <label class="form-label-custom small">State <span class="text-danger">*</span></label>
                  <input type="text" id="newPropState" class="form-control form-control-custom" placeholder="NY" maxlength="2" required>
                </div>
                <div class="col-4">
                  <label class="form-label-custom small">ZIP Code <span class="text-danger">*</span></label>
                  <input type="text" id="newPropZip" class="form-control form-control-custom" placeholder="10013" required>
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Total Units <span class="text-danger">*</span></label>
                  <input type="number" id="newPropUnits" class="form-control form-control-custom" value="8" min="1" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Monthly Gross Rent ($) <span class="text-danger">*</span></label>
                  <input type="number" id="newPropRent" class="form-control form-control-custom" value="24000" min="100" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Property Description</label>
                <textarea id="newPropDesc" class="form-control form-control-custom" rows="2" placeholder="Brief overview of amenities and location..."></textarea>
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

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('addPropModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeAddProperty(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('newPropName').value.trim();
  const type = document.getElementById('newPropType').value;
  const status = document.getElementById('newPropStatus').value;
  const address = document.getElementById('newPropAddress').value.trim();
  const city = document.getElementById('newPropCity').value.trim();
  const state = document.getElementById('newPropState').value.trim().toUpperCase();
  const zip = document.getElementById('newPropZip').value.trim();
  const units = Number(document.getElementById('newPropUnits').value) || 8;
  const rent = Number(document.getElementById('newPropRent').value) || 24000;
  const desc = document.getElementById('newPropDesc').value.trim();

  if (!name || !address || !city || !state || !zip) {
    showToast('Please fill in all required property details.', 'danger');
    return;
  }

  const db = getDB();
  const initialUnits = [];
  const avgRent = Math.round(rent / units);
  const occupiedCount = status.includes('Vacancy') ? Math.max(1, units - 1) : units;

  for (let i = 1; i <= Math.min(units, 6); i++) {
    const isOcc = i <= occupiedCount;
    initialUnits.push({
      unitNumber: `Unit ${100 + i}`,
      tenant: isOcc ? `Resident Tenant ${i}` : 'Vacant (Leasing)',
      rent: avgRent,
      leaseEnd: isOcc ? '2027-06-30' : '-',
      status: isOcc ? 'Occupied' : 'Vacant',
      phone: isOcc ? '+1 (555) 100-200' + i : '-'
    });
  }

  const newProp = {
    id: 'prop-' + (db.properties.length + 1),
    name: name,
    type: type,
    address: address,
    city: city,
    state: state,
    zip: zip,
    totalUnits: units,
    occupiedUnits: occupiedCount,
    monthlyRent: rent,
    occupancyRate: Math.round((occupiedCount / units) * 100),
    capRate: 8.5,
    status: status,
    description: desc || `${type} located in ${city}, ${state}.`,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    amenities: ['24/7 Security', 'Elevator', 'Assigned Parking'],
    units: initialUnits
  };

  db.properties.push(newProp);
  saveDB(db);

  const modalEl = document.getElementById('addPropModal');
  if (modalEl) bootstrap.Modal.getInstance(modalEl)?.hide();

  showToast(`Property "${name}" registered successfully!`, 'success');
  renderSidebar();
  renderView();
}

function openEditPropertyModal(propId) {
  const db = getDB();
  const p = db.properties.find(item => item.id === propId);
  if (!p) return;

  const modalHtml = `
    <div class="modal fade" id="editPropModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-pen-to-square text-primary-custom me-2"></i> Edit Estate Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeEditProperty(event, '${p.id}')">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Estate Name <span class="text-danger">*</span></label>
                <input type="text" id="editPropName" class="form-control form-control-custom" value="${p.name}" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Street Address <span class="text-danger">*</span></label>
                <input type="text" id="editPropAddress" class="form-control form-control-custom" value="${p.address}" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Monthly Gross Rent ($) <span class="text-danger">*</span></label>
                  <input type="number" id="editPropRent" class="form-control form-control-custom" value="${p.monthlyRent}" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Total Units <span class="text-danger">*</span></label>
                  <input type="number" id="editPropUnits" class="form-control form-control-custom" value="${p.totalUnits}" required>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Description</label>
                <textarea id="editPropDesc" class="form-control form-control-custom" rows="2">${p.description || ''}</textarea>
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

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('editPropModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeEditProperty(e, propId) {
  if (e) e.preventDefault();
  const db = getDB();
  const p = db.properties.find(item => item.id === propId);
  if (p) {
    p.name = document.getElementById('editPropName').value.trim() || p.name;
    p.address = document.getElementById('editPropAddress').value.trim() || p.address;
    p.monthlyRent = Number(document.getElementById('editPropRent').value) || p.monthlyRent;
    p.totalUnits = Number(document.getElementById('editPropUnits').value) || p.totalUnits;
    p.description = document.getElementById('editPropDesc').value.trim() || p.description;
    saveDB(db);

    bootstrap.Modal.getInstance(document.getElementById('editPropModal'))?.hide();
    showToast(`Updated "${p.name}" successfully!`, 'success');
    renderView();
  }
}

function deletePropertyAction(propId) {
  const db = getDB();
  const p = db.properties.find(item => item.id === propId);
  if (!p) return;

  showConfirmModal(
    'Delete Estate',
    `Are you sure you want to delete "${p.name}" from your portfolio? This action cannot be undone.`,
    () => {
      db.properties = db.properties.filter(item => item.id !== propId);
      saveDB(db);
      showToast(`Property "${p.name}" deleted successfully.`, 'warning');
      renderSidebar();
      renderView();
    }
  );
}

function openAddUnitModal(propId) {
  const modalHtml = `
    <div class="modal fade" id="addUnitModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-door-open text-primary-custom me-2"></i> Add Unit to Estate</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label class="form-label-custom small">Unit Number / Identifier</label>
              <input type="text" id="newUnitNumber" class="form-control form-control-custom" placeholder="e.g. Unit 501 or Penthouse A" required>
            </div>
            <div class="mb-3">
              <label class="form-label-custom small">Tenant Full Name</label>
              <input type="text" id="newUnitTenant" class="form-control form-control-custom" placeholder="e.g. Rachel Adams (leave blank for Vacant)">
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label-custom small">Monthly Rent ($)</label>
                <input type="number" id="newUnitRent" class="form-control form-control-custom" value="2850" required>
              </div>
              <div class="col-6">
                <label class="form-label-custom small">Lease Expiry Date</label>
                <input type="date" id="newUnitLeaseEnd" class="form-control form-control-custom" value="2027-06-30">
              </div>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary-custom" onclick="executeAddUnit('${propId}')">Add Unit</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('addUnitModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeAddUnit(propId) {
  const unitNum = document.getElementById('newUnitNumber').value.trim();
  const tenant = document.getElementById('newUnitTenant').value.trim() || 'Vacant';
  const rent = Number(document.getElementById('newUnitRent').value) || 2800;
  const leaseEnd = document.getElementById('newUnitLeaseEnd').value || '2027-06-30';

  if (!unitNum) {
    showToast('Please enter a Unit Number.', 'danger');
    return;
  }

  const db = getDB();
  const p = db.properties.find(item => item.id === propId);
  if (p) {
    if (!p.units) p.units = [];
    const isOccupied = tenant !== 'Vacant';
    p.units.push({
      unitNumber: unitNum,
      tenant: tenant,
      rent: rent,
      leaseEnd: isOccupied ? leaseEnd : '-',
      status: isOccupied ? 'Occupied' : 'Vacant',
      phone: '+1 (555) 000-0000'
    });
    p.totalUnits = p.units.length;
    p.occupiedUnits = p.units.filter(u => u.status === 'Occupied').length;
    p.occupancyRate = Math.round((p.occupiedUnits / p.totalUnits) * 100);
    p.status = p.occupiedUnits === p.totalUnits ? 'Fully Occupied' : `${p.totalUnits - p.occupiedUnits} Vacancy`;
    saveDB(db);

    bootstrap.Modal.getInstance(document.getElementById('addUnitModal'))?.hide();
    const detailsEl = document.getElementById('propertyDetailsModal');
    if (detailsEl) bootstrap.Modal.getInstance(detailsEl)?.hide();

    showToast(`Unit ${unitNum} added to ${p.name}!`, 'success');
    renderView();
  }
}

function toggleUnitOccupancy(propId, unitNumber) {
  const db = getDB();
  const p = db.properties.find(item => item.id === propId);
  if (p && p.units) {
    const u = p.units.find(item => item.unitNumber === unitNumber);
    if (u) {
      u.status = u.status === 'Occupied' ? 'Vacant' : 'Occupied';
      if (u.status === 'Vacant') {
        u.tenant = 'Vacant (Leasing)';
      } else {
        u.tenant = 'New Resident';
      }
      p.occupiedUnits = p.units.filter(item => item.status === 'Occupied').length;
      p.occupancyRate = Math.round((p.occupiedUnits / p.totalUnits) * 100);
      p.status = p.occupiedUnits === p.totalUnits ? 'Fully Occupied' : `${p.totalUnits - p.occupiedUnits} Vacancy`;
      saveDB(db);

      const detailsEl = document.getElementById('propertyDetailsModal');
      if (detailsEl) bootstrap.Modal.getInstance(detailsEl)?.hide();

      showToast(`Unit ${unitNumber} is now marked as ${u.status}!`, 'info');
      renderView();
    }
  }
}

function viewUnitLeaseModal(propId, unitNumber) {
  const db = getDB();
  const p = db.properties.find(item => item.id === propId) || db.properties[0];
  const u = (p.units && p.units.find(item => item.unitNumber === unitNumber)) || { unitNumber, tenant: 'Resident Tenant', rent: 2800, leaseEnd: '2027-06-30', status: 'Occupied' };

  const modalHtml = `
    <div class="modal fade" id="unitLeaseDocModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-file-contract text-primary-custom me-2"></i> Lease Agreement Summary</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 mb-3 border border-light-custom small">
              <div class="d-flex justify-content-between mb-2">
                <span>Property:</span>
                <strong>${p.name}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Unit:</span>
                <strong>${u.unitNumber}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Tenant Name:</span>
                <strong>${u.tenant}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Monthly Rent:</span>
                <strong class="text-success">$${u.rent ? u.rent.toLocaleString() : '2,800'}.00/mo</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Security Deposit:</span>
                <strong>$${u.rent ? (u.rent * 1.5).toLocaleString() : '4,200'}.00 (Escrow)</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Lease End Date:</span>
                <strong>${u.leaseEnd || '2027-06-30'}</strong>
              </div>
              <div class="d-flex justify-content-between pt-2 border-top border-light-custom">
                <span>Agreement Status:</span>
                <span class="badge ${u.status === 'Occupied' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}">${u.status}</span>
              </div>
            </div>
            <p class="small text-secondary-custom mb-0 text-center">Digitally signed & verified via PropVantage DocuSign Portal.</p>
          </div>
          <div class="modal-footer border-top border-light-custom justify-content-between">
            <button type="button" class="btn btn-outline-custom btn-sm" onclick="window.print()">
              <i class="fa-solid fa-print me-1"></i> Print Lease
            </button>
            <button type="button" class="btn btn-primary-custom btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('unitLeaseDocModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

/* ==========================================================================
   9. OWNER PORTAL: RENT PAYMENTS & LEDGER
   ========================================================================== */

function renderOwnerRentPayments() {
  const db = getDB();
  let filtered = db.rentPayments;

  if (paymentSearchTerm) {
    const q = paymentSearchTerm.toLowerCase();
    filtered = filtered.filter(p => 
      p.tenant.toLowerCase().includes(q) || 
      p.property.toLowerCase().includes(q) || 
      p.unit.toLowerCase().includes(q) || 
      p.id.toLowerCase().includes(q)
    );
  }

  if (paymentStatusFilter !== 'All') {
    filtered = filtered.filter(p => p.status.toLowerCase() === paymentStatusFilter.toLowerCase());
  }

  if (paymentMethodFilter !== 'All') {
    filtered = filtered.filter(p => p.method.toLowerCase().includes(paymentMethodFilter.toLowerCase()));
  }

  if (paymentSortBy === 'date-desc') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (paymentSortBy === 'date-asc') {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (paymentSortBy === 'amount-desc') {
    filtered.sort((a, b) => b.amount - a.amount);
  } else if (paymentSortBy === 'amount-asc') {
    filtered.sort((a, b) => a.amount - b.amount);
  }

  const totalCollected = db.rentPayments.filter(p => p.status === 'Paid' || p.status === 'Received').reduce((a, b) => a + b.amount, 0);
  const totalPending = db.rentPayments.filter(p => p.status === 'Pending').reduce((a, b) => a + b.amount, 0);
  const totalOverdue = db.rentPayments.filter(p => p.status === 'Overdue').reduce((a, b) => a + b.amount, 0);

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Rent Collection & Ledgers 💵</h1>
          <p class="text-secondary-custom mb-0 small">Automated monthly direct deposits, payment receipts, and payment status tracking.</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary-custom shadow-sm" onclick="openRecordPaymentModal()">
            <i class="fa-solid fa-plus me-1"></i> Record Offline Payment
          </button>
          <button class="btn btn-outline-custom" onclick="exportLedgerCsv()">
            <i class="fa-solid fa-download me-1"></i> Export Ledger (CSV)
          </button>
        </div>
      </div>
    </div>

    <!-- Summary KPI mini grid -->
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Collected This Month</div>
          <div class="h4 fw-bold mb-0 text-success">$${totalCollected.toLocaleString()}.00</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Pending Verification</div>
          <div class="h4 fw-bold mb-0 text-warning">$${totalPending.toLocaleString()}.00</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Overdue Rent</div>
          <div class="h4 fw-bold mb-0 ${totalOverdue > 0 ? 'text-danger' : 'text-success'}">$${totalOverdue.toLocaleString()}.00</div>
        </div>
      </div>
    </div>

    <!-- Filter & Sort Toolbar -->
    <div class="table-filter-toolbar">
      <div class="filter-controls-group">
        <div class="input-icon-wrap filter-search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="form-control form-control-custom filter-input" placeholder="Search tenant, invoice #..." value="${paymentSearchTerm}" oninput="handlePaymentSearch(this.value)">
        </div>
        <select class="form-select form-control-custom filter-select" onchange="handlePaymentStatusFilter(this.value)" aria-label="Filter by Status">
          <option value="All" ${paymentStatusFilter === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Paid" ${paymentStatusFilter === 'Paid' ? 'selected' : ''}>Paid / Received</option>
          <option value="Pending" ${paymentStatusFilter === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Overdue" ${paymentStatusFilter === 'Overdue' ? 'selected' : ''}>Overdue</option>
        </select>
        <select class="form-select form-control-custom filter-select" onchange="handlePaymentMethodFilter(this.value)" aria-label="Filter by Payment Method">
          <option value="All" ${paymentMethodFilter === 'All' ? 'selected' : ''}>All Methods</option>
          <option value="ACH" ${paymentMethodFilter === 'ACH' ? 'selected' : ''}>ACH Debit</option>
          <option value="Wire" ${paymentMethodFilter === 'Wire' ? 'selected' : ''}>Wire Transfer</option>
          <option value="Card" ${paymentMethodFilter === 'Card' ? 'selected' : ''}>Portal Card</option>
          <option value="Check" ${paymentMethodFilter === 'Check' ? 'selected' : ''}>Cashier Check</option>
        </select>
      </div>

      <div class="filter-sort-group">
        <select class="form-select form-control-custom filter-select filter-select-sort" onchange="handlePaymentSort(this.value)" aria-label="Sort Payments">
          <option value="date-desc" ${paymentSortBy === 'date-desc' ? 'selected' : ''}>Date: Newest First</option>
          <option value="date-asc" ${paymentSortBy === 'date-asc' ? 'selected' : ''}>Date: Oldest First</option>
          <option value="amount-desc" ${paymentSortBy === 'amount-desc' ? 'selected' : ''}>Amount: High to Low</option>
          <option value="amount-asc" ${paymentSortBy === 'amount-asc' ? 'selected' : ''}>Amount: Low to High</option>
        </select>
        <button class="btn btn-outline-custom filter-reset-btn" onclick="resetPaymentFilters()" title="Reset Filters">
          <i class="fa-solid fa-arrows-rotate"></i>
          <span>Reset</span>
        </button>
      </div>
    </div>

    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Property</th>
              <th>Unit</th>
              <th>Tenant</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Method</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9" class="text-center text-secondary-custom py-4">No payment records found.</td></tr>` : ''}
            ${filtered.map(r => `
              <tr>
                <td class="fw-bold">#${r.id}</td>
                <td class="fw-semibold small">${r.property}</td>
                <td>${r.unit}</td>
                <td class="fw-bold">${r.tenant}</td>
                <td class="fw-bold text-success">$${r.amount.toLocaleString()}.00</td>
                <td class="small text-secondary-custom">${r.paidDate || r.date}</td>
                <td class="small">${r.method}</td>
                <td>
                  <span class="badge ${r.status === 'Paid' || r.status === 'Received' ? 'bg-success-subtle text-success' : r.status === 'Pending' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'}">
                    ${r.status}
                  </span>
                </td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewRentReceiptModal('${r.id}')" title="View Receipt">
                    <i class="fa-solid fa-file-invoice me-1"></i> Receipt
                  </button>
                  <button class="btn btn-sm btn-outline-danger p-1 px-2 ms-1" onclick="deletePaymentAction('${r.id}')" title="Delete Payment Record">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function handlePaymentSearch(val) {
  paymentSearchTerm = val;
  renderView();
}

function handlePaymentStatusFilter(val) {
  paymentStatusFilter = val;
  renderView();
}

function handlePaymentMethodFilter(val) {
  paymentMethodFilter = val;
  renderView();
}

function handlePaymentSort(val) {
  paymentSortBy = val;
  renderView();
}

function resetPaymentFilters() {
  paymentSearchTerm = '';
  paymentStatusFilter = 'All';
  paymentMethodFilter = 'All';
  paymentSortBy = 'date-desc';
  renderView();
}

function openRecordPaymentModal() {
  const db = getDB();
  const modalHtml = `
    <div class="modal fade" id="recordPaymentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-money-bill-transfer text-primary-custom me-2"></i> Record Offline Rent Collection</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeRecordPayment(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Select Estate <span class="text-danger">*</span></label>
                <select id="recPropSelect" class="form-select form-control-custom" required>
                  ${db.properties.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Unit Number <span class="text-danger">*</span></label>
                  <input type="text" id="recUnit" class="form-control form-control-custom" value="Unit 101" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Tenant Full Name <span class="text-danger">*</span></label>
                  <input type="text" id="recTenant" class="form-control form-control-custom" placeholder="e.g. Jonathan Myers" required>
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Rent Amount ($) <span class="text-danger">*</span></label>
                  <input type="number" id="recAmount" class="form-control form-control-custom" value="2800" min="1" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Payment Method <span class="text-danger">*</span></label>
                  <select id="recMethod" class="form-select form-control-custom">
                    <option value="Cashier Check">Cashier Check</option>
                    <option value="Wire Transfer">Wire Transfer</option>
                    <option value="Money Order">Money Order</option>
                    <option value="ACH Direct Debit">ACH Direct Debit</option>
                    <option value="Online Portal Card">Online Portal Card</option>
                  </select>
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Due Date</label>
                  <input type="date" id="recDueDate" class="form-control form-control-custom" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Payment Status</label>
                  <select id="recStatus" class="form-select form-control-custom">
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Save Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('recordPaymentModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeRecordPayment(e) {
  if (e) e.preventDefault();
  const prop = document.getElementById('recPropSelect').value;
  const unit = document.getElementById('recUnit').value.trim() || 'Unit 101';
  const tenant = document.getElementById('recTenant').value.trim() || 'Resident Tenant';
  const amount = Number(document.getElementById('recAmount').value) || 2800;
  const method = document.getElementById('recMethod').value;
  const dueDate = document.getElementById('recDueDate').value || new Date().toISOString().split('T')[0];
  const status = document.getElementById('recStatus').value;

  const db = getDB();
  const newReceipt = {
    id: 'RENT-' + Math.floor(1000 + Math.random() * 9000),
    property: prop,
    unit: unit,
    tenant: tenant,
    amount: amount,
    dueDate: dueDate,
    paidDate: status === 'Paid' ? new Date().toISOString().split('T')[0] : '-',
    date: new Date().toISOString().split('T')[0],
    method: method,
    status: status,
    onTime: status === 'Paid'
  };

  db.rentPayments.unshift(newReceipt);
  saveDB(db);

  bootstrap.Modal.getInstance(document.getElementById('recordPaymentModal'))?.hide();
  showToast(`Payment of $${amount.toLocaleString()} from ${tenant} recorded!`, 'success');
  renderView();
}

function deletePaymentAction(paymentId) {
  showConfirmModal(
    'Delete Payment Record',
    `Are you sure you want to delete payment record #${paymentId}?`,
    () => {
      const db = getDB();
      db.rentPayments = db.rentPayments.filter(p => p.id !== paymentId);
      saveDB(db);
      showToast(`Payment record #${paymentId} deleted.`, 'warning');
      renderView();
    }
  );
}

function exportLedgerCsv() {
  const db = getDB();
  let csv = 'Receipt ID,Property,Unit,Tenant,Amount,Due Date,Paid Date,Method,Status\n';
  db.rentPayments.forEach(r => {
    csv += `"${r.id}","${r.property}","${r.unit}","${r.tenant}",${r.amount},"${r.dueDate || r.date}","${r.paidDate || r.date}","${r.method}","${r.status}"\n`;
  });
  downloadCSV('propvantage_rent_ledger_2026.csv', csv);
  showToast('Rent Ledger CSV generated and downloaded!', 'success');
}

function viewRentReceiptModal(receiptId) {
  const db = getDB();
  const r = db.rentPayments.find(p => p.id === receiptId) || db.rentPayments[0];

  const modalHtml = `
    <div class="modal fade" id="rentModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-file-invoice text-primary-custom me-2"></i> Rental Payment Receipt</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 mb-3 border border-light-custom">
              <div class="d-flex justify-content-between mb-2">
                <span>Receipt Number:</span>
                <strong>#${r.id}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Property & Unit:</span>
                <strong>${r.property} (${r.unit})</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Tenant:</span>
                <strong>${r.tenant}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Payment Method:</span>
                <strong>${r.method}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Transaction Date:</span>
                <strong>${r.paidDate || r.date}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Payment Status:</span>
                <span class="badge ${r.status === 'Paid' || r.status === 'Received' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}">${r.status}</span>
              </div>
              <div class="d-flex justify-content-between pt-2 border-top border-light-custom fw-bold fs-5 text-success">
                <span>Amount Paid:</span>
                <span>$${r.amount.toLocaleString()}.00</span>
              </div>
            </div>
            <p class="small text-secondary-custom text-center mb-0">Direct deposited to ${db.currentOwner.directDepositBank}.</p>
          </div>
          <div class="modal-footer border-top border-light-custom justify-content-between">
            <button type="button" class="btn btn-outline-custom btn-sm" onclick="window.print()">
              <i class="fa-solid fa-print me-1"></i> Print Receipt
            </button>
            <button type="button" class="btn btn-primary-custom btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('rentModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

/* ==========================================================================
   10. OWNER PORTAL: MAINTENANCE & WORK ORDERS
   ========================================================================== */

function renderOwnerMaintenance() {
  const db = getDB();
  let filtered = db.maintenance;

  if (maintSearchTerm) {
    const q = maintSearchTerm.toLowerCase();
    filtered = filtered.filter(m => 
      m.issue.toLowerCase().includes(q) || 
      m.property.toLowerCase().includes(q) || 
      m.contractor.toLowerCase().includes(q) || 
      m.id.toLowerCase().includes(q)
    );
  }

  if (maintStatusFilter !== 'All') {
    filtered = filtered.filter(m => m.status.toLowerCase() === maintStatusFilter.toLowerCase());
  }

  if (maintPriorityFilter !== 'All') {
    filtered = filtered.filter(m => m.priority.toLowerCase() === maintPriorityFilter.toLowerCase());
  }

  if (maintSortBy === 'date-desc') {
    filtered.sort((a, b) => new Date(b.reportedDate) - new Date(a.reportedDate));
  } else if (maintSortBy === 'cost-desc') {
    filtered.sort((a, b) => b.cost - a.cost);
  } else if (maintSortBy === 'cost-asc') {
    filtered.sort((a, b) => a.cost - b.cost);
  }

  const openCount = db.maintenance.filter(m => m.status === 'Open' || m.status === 'In Progress').length;
  const completedCount = db.maintenance.filter(m => m.status === 'Completed' || m.status === 'Resolved').length;
  const totalCost = db.maintenance.reduce((a, b) => a + b.cost, 0);

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Maintenance & Repair Work Orders 🛠️</h1>
          <p class="text-secondary-custom mb-0 small">24/7 dispatched contractor repair logs, estimates, and tenant inspection sign-offs.</p>
        </div>
        <button class="btn btn-primary-custom shadow-sm" onclick="openNewMaintenanceModal()">
          <i class="fa-solid fa-plus me-1"></i> New Work Order
        </button>
      </div>
    </div>

    <!-- Summary KPI mini grid -->
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Active Work Orders</div>
          <div class="h4 fw-bold mb-0 text-danger">${openCount} Open</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Resolved & Inspected</div>
          <div class="h4 fw-bold mb-0 text-success">${completedCount} Completed</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Total Repairs Cost YTD</div>
          <div class="h4 fw-bold mb-0 text-primary">$${totalCost.toLocaleString()}.00</div>
        </div>
      </div>
    </div>

    <!-- Filter & Sort Toolbar -->
    <div class="table-filter-toolbar">
      <div class="filter-controls-group">
        <div class="input-icon-wrap filter-search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="form-control form-control-custom filter-input" placeholder="Search issue, contractor, ticket #..." value="${maintSearchTerm}" oninput="handleMaintSearch(this.value)">
        </div>
        <select class="form-select form-control-custom filter-select" onchange="handleMaintStatusFilter(this.value)" aria-label="Filter by Status">
          <option value="All" ${maintStatusFilter === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Open" ${maintStatusFilter === 'Open' ? 'selected' : ''}>Open</option>
          <option value="In Progress" ${maintStatusFilter === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Completed" ${maintStatusFilter === 'Completed' ? 'selected' : ''}>Completed / Resolved</option>
        </select>
        <select class="form-select form-control-custom filter-select" onchange="handleMaintPriorityFilter(this.value)" aria-label="Filter by Priority">
          <option value="All" ${maintPriorityFilter === 'All' ? 'selected' : ''}>All Priorities</option>
          <option value="High" ${maintPriorityFilter === 'High' ? 'selected' : ''}>High (Urgent)</option>
          <option value="Medium" ${maintPriorityFilter === 'Medium' ? 'selected' : ''}>Medium</option>
          <option value="Low" ${maintPriorityFilter === 'Low' ? 'selected' : ''}>Low</option>
        </select>
      </div>

      <div class="filter-sort-group">
        <select class="form-select form-control-custom filter-select filter-select-sort" onchange="handleMaintSort(this.value)" aria-label="Sort Maintenance Tickets">
          <option value="date-desc" ${maintSortBy === 'date-desc' ? 'selected' : ''}>Date: Newest First</option>
          <option value="cost-desc" ${maintSortBy === 'cost-desc' ? 'selected' : ''}>Cost: High to Low</option>
          <option value="cost-asc" ${maintSortBy === 'cost-asc' ? 'selected' : ''}>Cost: Low to High</option>
        </select>
        <button class="btn btn-outline-custom filter-reset-btn" onclick="resetMaintFilters()" title="Reset Filters">
          <i class="fa-solid fa-arrows-rotate"></i>
          <span>Reset</span>
        </button>
      </div>
    </div>

    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table maintenance-dash-table">
          <thead>
            <tr>
              <th class="text-center col-ticket" style="width: 50px;">#</th>
              <th class="text-start col-prop" style="min-width: 170px;">PROPERTY / UNIT</th>
              <th class="text-start col-issue" style="min-width: 220px; max-width: 280px;">ISSUE DESCRIPTION</th>
              <th class="text-center col-cat" style="min-width: 110px;">CATEGORY</th>
              <th class="text-center col-prio" style="min-width: 100px;">PRIORITY</th>
              <th class="text-start col-contractor" style="min-width: 160px;">CONTRACTOR</th>
              <th class="text-center col-cost" style="min-width: 100px;">EST. COST</th>
              <th class="text-center col-status" style="min-width: 120px;">STATUS</th>
              <th class="text-center col-actions" style="width: 80px; min-width: 70px;">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9" class="text-center text-secondary-custom py-4">No maintenance tickets match your search.</td></tr>` : ''}
            ${filtered.map(m => `
              <tr class="maintenance-row">
                <td class="text-center align-middle col-ticket">
                  <span class="maint-ticket-id">#${m.id ? m.id.replace('MNT-', '') : '-'}</span>
                </td>
                <td class="text-start align-middle col-prop">
                  <div class="maint-prop-title">${m.property}</div>
                  <div class="maint-unit-sub">${m.unit}</div>
                </td>
                <td class="text-start align-middle col-issue">
                  <div class="maint-issue-text">${m.issue}</div>
                </td>
                <td class="text-center align-middle col-cat">
                  <span class="badge badge-maint-cat badge-cat-${(m.category || '').toLowerCase().replace(/[^a-z]/g, '')}">${m.category}</span>
                </td>
                <td class="text-center align-middle col-prio">
                  <span class="badge ${m.priority === 'High' ? 'bg-danger-subtle text-danger' : m.priority === 'Medium' ? 'bg-warning-subtle text-warning' : 'bg-info-subtle text-info'} badge-maint-priority">${m.priority}</span>
                </td>
                <td class="text-start align-middle col-contractor">
                  <div class="maint-contractor-name">${m.contractor}</div>
                </td>
                <td class="text-center align-middle col-cost">
                  <span class="maint-cost-val">$${Number(m.cost).toFixed(2)}</span>
                </td>
                <td class="text-center align-middle col-status">
                  <span class="badge ${m.status === 'Completed' || m.status === 'Resolved' ? 'bg-success-subtle text-success' : m.status === 'In Progress' ? 'bg-primary-subtle text-primary' : m.status === 'Dispatched' ? 'bg-warning-subtle text-warning' : 'bg-warning-subtle text-warning'} badge-maint-status">${m.status}</span>
                </td>
                <td class="text-center align-middle col-actions">
                  <div class="maint-action-stack">
                    <button type="button" class="maint-action-btn action-view" onclick="viewMaintenanceTicketModal('${m.id}')" title="View / Edit Ticket" aria-label="View Ticket">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    ${m.status !== 'Completed' && m.status !== 'Resolved' ? `
                      <button type="button" class="maint-action-btn action-check" onclick="resolveMaintenanceAction('${m.id}')" title="Approve & Complete Ticket" aria-label="Approve Ticket">
                        <i class="fa-solid fa-check"></i>
                      </button>
                    ` : ''}
                    <button type="button" class="maint-action-btn action-delete" onclick="deleteMaintenanceAction('${m.id}')" title="Delete Ticket" aria-label="Delete Ticket">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function handleMaintSearch(val) {
  maintSearchTerm = val;
  renderView();
}

function handleMaintStatusFilter(val) {
  maintStatusFilter = val;
  renderView();
}

function handleMaintPriorityFilter(val) {
  maintPriorityFilter = val;
  renderView();
}

function handleMaintSort(val) {
  maintSortBy = val;
  renderView();
}

function resetMaintFilters() {
  maintSearchTerm = '';
  maintStatusFilter = 'All';
  maintPriorityFilter = 'All';
  maintSortBy = 'date-desc';
  renderView();
}

function openNewMaintenanceModal() {
  const db = getDB();
  const modalHtml = `
    <div class="modal fade" id="newMaintModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-screwdriver-wrench text-primary-custom me-2"></i> Dispatch New Maintenance Ticket</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeNewMaintenance(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Select Estate <span class="text-danger">*</span></label>
                <select id="maintPropSelect" class="form-select form-control-custom" required>
                  ${db.properties.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Unit / Location <span class="text-danger">*</span></label>
                <input type="text" id="maintUnit" class="form-control form-control-custom" placeholder="e.g. Unit 204 or Rooftop Deck" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Category <span class="text-danger">*</span></label>
                  <select id="maintCategory" class="form-select form-control-custom">
                    <option value="Plumbing">Plumbing</option>
                    <option value="HVAC">HVAC & Climate</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Smart Access">Smart Access</option>
                    <option value="Appliance">Appliance</option>
                    <option value="Roofing">Roofing & Exterior</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Priority <span class="text-danger">*</span></label>
                  <select id="maintPriority" class="form-select form-control-custom">
                    <option value="High">High (Urgent Dispatch)</option>
                    <option value="Medium">Medium (Standard)</option>
                    <option value="Low">Low (Routine Check)</option>
                  </select>
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Assigned Contractor</label>
                  <input type="text" id="maintContractor" class="form-control form-control-custom" value="Metro Pro Dispatch 24/7">
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Estimated Cost ($)</label>
                  <input type="number" id="maintCost" class="form-control form-control-custom" value="250">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Issue Description <span class="text-danger">*</span></label>
                <textarea id="maintIssue" class="form-control form-control-custom" rows="3" placeholder="Describe the repair needed..." required></textarea>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Dispatch Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('newMaintModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeNewMaintenance(e) {
  if (e) e.preventDefault();
  const prop = document.getElementById('maintPropSelect').value;
  const unit = document.getElementById('maintUnit').value.trim() || 'Unit 101';
  const cat = document.getElementById('maintCategory').value;
  const priority = document.getElementById('maintPriority').value;
  const contractor = document.getElementById('maintContractor').value.trim() || 'Metro Pro Dispatch 24/7';
  const cost = Number(document.getElementById('maintCost').value) || 200;
  const issue = document.getElementById('maintIssue').value.trim();

  if (!issue) {
    showToast('Please describe the maintenance issue.', 'danger');
    return;
  }

  const db = getDB();
  const newTicket = {
    id: 'MNT-' + Math.floor(4000 + Math.random() * 900),
    property: prop,
    unit: unit,
    issue: issue,
    category: cat,
    priority: priority,
    contractor: contractor,
    cost: cost,
    status: 'In Progress',
    reportedDate: new Date().toISOString().split('T')[0]
  };

  db.maintenance.unshift(newTicket);
  saveDB(db);

  bootstrap.Modal.getInstance(document.getElementById('newMaintModal'))?.hide();
  showToast(`Work Order #${newTicket.id} created and dispatched!`, 'success');
  renderSidebar();
  renderView();
}

function viewMaintenanceTicketModal(ticketId) {
  const db = getDB();
  const m = db.maintenance.find(item => item.id === ticketId) || db.maintenance[0];

  const modalHtml = `
    <div class="modal fade" id="ticketDetailModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-wrench text-primary-custom me-2"></i> Work Order #${m.id}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeUpdateTicketStatus(event, '${m.id}')">
            <div class="modal-body p-4">
              <div class="p-3 bg-section rounded-3 mb-3 border border-light-custom small">
                <div class="d-flex justify-content-between mb-2">
                  <span>Location:</span>
                  <strong>${m.property} (${m.unit})</strong>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Category & Priority:</span>
                  <div>
                    <span class="badge bg-primary-subtle text-primary me-1">${m.category}</span>
                    <span class="badge ${m.priority === 'High' ? 'bg-danger-subtle text-danger' : 'bg-warning-subtle text-warning'}">${m.priority}</span>
                  </div>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Reported Date:</span>
                  <strong>${m.reportedDate}</strong>
                </div>
                <div class="pt-2 border-top border-light-custom">
                  <span class="text-secondary-custom d-block mb-1">Issue Details:</span>
                  <p class="mb-0 fw-semibold text-main-custom">${m.issue}</p>
                </div>
              </div>

              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Contractor / Vendor</label>
                  <input type="text" id="updateTicketContractor" class="form-control form-control-custom" value="${m.contractor}">
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Repair Cost ($)</label>
                  <input type="number" id="updateTicketCost" class="form-control form-control-custom" value="${m.cost}">
                </div>
              </div>

              <div class="mb-2">
                <label class="form-label-custom small">Work Order Status</label>
                <select id="updateTicketStatus" class="form-select form-control-custom">
                  <option value="Open" ${m.status === 'Open' ? 'selected' : ''}>Open</option>
                  <option value="In Progress" ${m.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                  <option value="Completed" ${m.status === 'Completed' || m.status === 'Resolved' ? 'selected' : ''}>Completed (Resolved)</option>
                </select>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom justify-content-between">
              <button type="button" class="btn btn-outline-custom btn-sm" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom btn-sm">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('ticketDetailModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeUpdateTicketStatus(e, ticketId) {
  if (e) e.preventDefault();
  const db = getDB();
  const m = db.maintenance.find(item => item.id === ticketId);
  if (m) {
    m.status = document.getElementById('updateTicketStatus').value;
    m.contractor = document.getElementById('updateTicketContractor').value.trim() || m.contractor;
    m.cost = Number(document.getElementById('updateTicketCost').value) || m.cost;
    saveDB(db);

    bootstrap.Modal.getInstance(document.getElementById('ticketDetailModal'))?.hide();
    showToast(`Work order #${ticketId} updated successfully!`, 'success');
    renderSidebar();
    renderView();
  }
}

function resolveMaintenanceAction(ticketId) {
  const db = getDB();
  const t = db.maintenance.find(item => item.id === ticketId);
  if (t) {
    t.status = 'Completed';
    saveDB(db);
    showToast(`Ticket #${ticketId} marked as Completed!`, 'success');
    renderSidebar();
    renderView();
  }
}

function deleteMaintenanceAction(ticketId) {
  showConfirmModal(
    'Delete Work Order',
    `Are you sure you want to delete maintenance ticket #${ticketId}?`,
    () => {
      const db = getDB();
      db.maintenance = db.maintenance.filter(m => m.id !== ticketId);
      saveDB(db);
      showToast(`Work order #${ticketId} deleted.`, 'warning');
      renderSidebar();
      renderView();
    }
  );
}

/* ==========================================================================
   11. OWNER PORTAL: LEASE RENEWALS & RETENTION
   ========================================================================== */

function renderOwnerLeaseRenewals() {
  const db = getDB();
  let filtered = db.leases;

  if (leaseSearchTerm) {
    const q = leaseSearchTerm.toLowerCase();
    filtered = filtered.filter(l => 
      l.tenant.toLowerCase().includes(q) || 
      l.property.toLowerCase().includes(q) || 
      l.unit.toLowerCase().includes(q) || 
      l.id.toLowerCase().includes(q)
    );
  }

  if (leaseDaysFilter === '30') {
    filtered = filtered.filter(l => l.daysLeft <= 45);
  } else if (leaseDaysFilter === '60') {
    filtered = filtered.filter(l => l.daysLeft <= 65);
  } else if (leaseDaysFilter === '90') {
    filtered = filtered.filter(l => l.daysLeft <= 95);
  }

  if (leaseSortBy === 'days-asc') {
    filtered.sort((a, b) => a.daysLeft - b.daysLeft);
  } else if (leaseSortBy === 'days-desc') {
    filtered.sort((a, b) => b.daysLeft - a.daysLeft);
  } else if (leaseSortBy === 'rent-desc') {
    filtered.sort((a, b) => b.currentRent - a.currentRent);
  }

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Lease Renewals & Tenant Retention 📝</h1>
          <p class="text-secondary-custom mb-0 small">Proactive 90-day lease expiration tracker with automated renewal rate recommendations.</p>
        </div>
        <button class="btn btn-primary-custom shadow-sm" onclick="openCreateLeaseModal()">
          <i class="fa-solid fa-plus me-1"></i> New Lease Agreement
        </button>
      </div>
    </div>

    <!-- Filter & Sort Toolbar -->
    <div class="table-filter-toolbar">
      <div class="filter-controls-group">
        <div class="input-icon-wrap filter-search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="form-control form-control-custom filter-input" placeholder="Search tenant, property..." value="${leaseSearchTerm}" oninput="handleLeaseSearch(this.value)">
        </div>
        <select class="form-select form-control-custom filter-select" onchange="handleLeaseDaysFilter(this.value)" aria-label="Filter by Expiration">
          <option value="All" ${leaseDaysFilter === 'All' ? 'selected' : ''}>All Expirations</option>
          <option value="30" ${leaseDaysFilter === '30' ? 'selected' : ''}>Expiring in < 45 Days</option>
          <option value="60" ${leaseDaysFilter === '60' ? 'selected' : ''}>Expiring in < 65 Days</option>
          <option value="90" ${leaseDaysFilter === '90' ? 'selected' : ''}>Expiring in < 95 Days</option>
        </select>
      </div>

      <div class="filter-sort-group">
        <select class="form-select form-control-custom filter-select filter-select-sort" onchange="handleLeaseSort(this.value)" aria-label="Sort Leases">
          <option value="days-asc" ${leaseSortBy === 'days-asc' ? 'selected' : ''}>Days Left: Least First</option>
          <option value="days-desc" ${leaseSortBy === 'days-desc' ? 'selected' : ''}>Days Left: Most First</option>
          <option value="rent-desc" ${leaseSortBy === 'rent-desc' ? 'selected' : ''}>Rent: High to Low</option>
        </select>
        <button class="btn btn-outline-custom filter-reset-btn" onclick="resetLeaseFilters()" title="Reset Filters">
          <i class="fa-solid fa-arrows-rotate"></i>
          <span>Reset</span>
        </button>
      </div>
    </div>

    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>Lease ID</th>
              <th>Property & Unit</th>
              <th>Tenant Name</th>
              <th>Current Rent</th>
              <th>Expiry Date</th>
              <th>Days Left</th>
              <th>Proposed Rent</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="9" class="text-center text-secondary-custom py-4">No lease records found.</td></tr>` : ''}
            ${filtered.map(l => `
              <tr>
                <td class="fw-bold">#${l.id}</td>
                <td>
                  <div class="fw-semibold small">${l.property}</div>
                  <div class="small text-secondary-custom">${l.unit}</div>
                </td>
                <td class="fw-bold">${l.tenant}</td>
                <td class="fw-bold">$${l.currentRent.toLocaleString()}/mo</td>
                <td class="small">${l.expiryDate}</td>
                <td><span class="badge ${l.daysLeft <= 45 ? 'bg-danger-subtle text-danger' : 'bg-warning-subtle text-warning'}">${l.daysLeft} Days</span></td>
                <td class="fw-bold text-success">$${l.proposedRent.toLocaleString()}/mo</td>
                <td><span class="badge bg-info-subtle text-info">${l.renewalStatus}</span></td>
                <td class="text-end">
                  <button class="btn btn-sm btn-primary-custom p-1 px-2" onclick="openLeaseNoticeModal('${l.id}')" title="Send Renewal Offer">
                    <i class="fa-solid fa-paper-plane me-1"></i> Notice
                  </button>
                  <button class="btn btn-sm btn-outline-success p-1 px-2 ms-1" onclick="renewLeaseInstant('${l.id}')" title="Renew Lease by 12 Months">
                    <i class="fa-solid fa-rotate-right me-1"></i> Renew
                  </button>
                  <button class="btn btn-sm btn-outline-danger p-1 px-2 ms-1" onclick="deleteLeaseAction('${l.id}')" title="Delete Lease">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function handleLeaseSearch(val) {
  leaseSearchTerm = val;
  renderView();
}

function handleLeaseDaysFilter(val) {
  leaseDaysFilter = val;
  renderView();
}

function handleLeaseSort(val) {
  leaseSortBy = val;
  renderView();
}

function resetLeaseFilters() {
  leaseSearchTerm = '';
  leaseDaysFilter = 'All';
  leaseSortBy = 'days-asc';
  renderView();
}

function openCreateLeaseModal() {
  const db = getDB();
  const modalHtml = `
    <div class="modal fade" id="createLeaseModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-file-signature text-primary-custom me-2"></i> Create New Tenant Lease</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeCreateLease(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Select Estate <span class="text-danger">*</span></label>
                <select id="newLeaseProp" class="form-select form-control-custom" required>
                  ${db.properties.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Unit # <span class="text-danger">*</span></label>
                  <input type="text" id="newLeaseUnit" class="form-control form-control-custom" value="Unit 302" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Tenant Full Name <span class="text-danger">*</span></label>
                  <input type="text" id="newLeaseTenant" class="form-control form-control-custom" placeholder="e.g. Alex Morgan" required>
                </div>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Monthly Rent ($) <span class="text-danger">*</span></label>
                  <input type="number" id="newLeaseRent" class="form-control form-control-custom" value="3100" min="100" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Expiration Date <span class="text-danger">*</span></label>
                  <input type="date" id="newLeaseExpiry" class="form-control form-control-custom" value="2027-09-30" required>
                </div>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Draft Agreement</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('createLeaseModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeCreateLease(e) {
  if (e) e.preventDefault();
  const prop = document.getElementById('newLeaseProp').value;
  const unit = document.getElementById('newLeaseUnit').value.trim() || 'Unit 101';
  const tenant = document.getElementById('newLeaseTenant').value.trim() || 'Resident Tenant';
  const rent = Number(document.getElementById('newLeaseRent').value) || 2800;
  const expiry = document.getElementById('newLeaseExpiry').value || '2027-09-30';

  const db = getDB();
  const newLease = {
    id: 'LSE-' + Math.floor(700 + Math.random() * 200),
    property: prop,
    unit: unit,
    tenant: tenant,
    currentRent: rent,
    leaseStart: new Date().toISOString().split('T')[0],
    expiryDate: expiry,
    daysLeft: 365,
    renewalStatus: 'Active Agreement',
    proposedRent: Math.round(rent * 1.045)
  };

  db.leases.push(newLease);
  saveDB(db);

  bootstrap.Modal.getInstance(document.getElementById('createLeaseModal'))?.hide();
  showToast(`Lease agreement #${newLease.id} created for ${tenant}!`, 'success');
  renderView();
}

function openLeaseNoticeModal(leaseId) {
  const db = getDB();
  const l = db.leases.find(item => item.id === leaseId) || db.leases[0];

  const modalHtml = `
    <div class="modal fade" id="leaseModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-file-signature text-primary-custom me-2"></i> Send Lease Renewal Agreement</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 mb-3 border border-light-custom small">
              <div class="d-flex justify-content-between mb-1">
                <span>Tenant:</span>
                <strong>${l.tenant}</strong>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span>Property:</span>
                <strong>${l.property} (${l.unit})</strong>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span>Current Monthly Rent:</span>
                <strong>$${l.currentRent.toLocaleString()}/mo</strong>
              </div>
              <div class="d-flex justify-content-between pt-1 border-top border-light-custom fw-bold text-success">
                <span>Proposed New Rate (+4.5%):</span>
                <span>$${l.proposedRent.toLocaleString()}/mo</span>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label-custom small">Lease Extension Term</label>
              <select id="leaseTermSelect" class="form-select form-control-custom">
                <option value="12 Months">12 Months (Standard)</option>
                <option value="24 Months">24 Months (Guaranteed Rate Lock)</option>
              </select>
            </div>
            <div>
              <label class="form-label-custom small">Custom Message to Tenant</label>
              <textarea id="leaseNoticeCustomMsg" class="form-control form-control-custom" rows="2" placeholder="Thank you for being a valued resident with us!"></textarea>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary-custom" onclick="executeSendLeaseNotice('${l.id}')">
              <i class="fa-solid fa-envelope me-1"></i> Send DocuSign Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('leaseModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeSendLeaseNotice(leaseId) {
  const db = getDB();
  const l = db.leases.find(item => item.id === leaseId);
  if (l) {
    l.renewalStatus = 'Offer Sent & Pending Signature';
    saveDB(db);
    bootstrap.Modal.getInstance(document.getElementById('leaseModal'))?.hide();
    showToast(`Digital lease renewal notice dispatched to ${l.tenant}!`, 'success');
    renderView();
  }
}

function renewLeaseInstant(leaseId) {
  const db = getDB();
  const l = db.leases.find(item => item.id === leaseId);
  if (l) {
    l.currentRent = l.proposedRent || Math.round(l.currentRent * 1.045);
    l.proposedRent = Math.round(l.currentRent * 1.045);
    l.daysLeft = 365;
    l.renewalStatus = 'Renewed for 12 Months';
    l.expiryDate = '2027-11-30';
    saveDB(db);
    showToast(`Lease renewed for ${l.tenant} at $${l.currentRent.toLocaleString()}/mo!`, 'success');
    renderView();
  }
}

function deleteLeaseAction(leaseId) {
  showConfirmModal(
    'Delete Lease Agreement',
    `Are you sure you want to delete lease record #${leaseId}?`,
    () => {
      const db = getDB();
      db.leases = db.leases.filter(l => l.id !== leaseId);
      saveDB(db);
      showToast(`Lease #${leaseId} removed.`, 'warning');
      renderView();
    }
  );
}

/* ==========================================================================
   12. OWNER PORTAL: INCOME REPORTS & FINANCIAL STATEMENTS
   ========================================================================== */

function renderOwnerIncomeReports() {
  const db = getDB();
  const grossRent = db.properties.reduce((a, b) => a + b.monthlyRent, 0);
  const totalCollected = db.rentPayments.filter(p => p.status === 'Paid' || p.status === 'Received').reduce((a, b) => a + b.amount, 0);
  const totalMaintExpense = db.maintenance.reduce((a, b) => a + b.cost, 0);
  const netIncome = totalCollected - totalMaintExpense;

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Income Reports & Financial Statements 📊</h1>
          <p class="text-secondary-custom mb-0 small">Exportable financial ledgers, tax write-offs, maintenance expenses, and net ROI.</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary-custom shadow-sm" onclick="exportFinancialReport()">
            <i class="fa-solid fa-file-pdf me-1"></i> Export Report (PDF)
          </button>
          <button class="btn btn-outline-custom" onclick="downloadTaxReportCSV()">
            <i class="fa-solid fa-file-csv me-1"></i> Tax Statement (CSV)
          </button>
        </div>
      </div>
    </div>

    <!-- Summary KPI Cards -->
    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Monthly Gross Rent</div>
          <div class="h5 fw-bold mb-0 text-main-custom">$${grossRent.toLocaleString()}.00</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Collected Rent YTD</div>
          <div class="h5 fw-bold mb-0 text-success">$${totalCollected.toLocaleString()}.00</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Maintenance Costs</div>
          <div class="h5 fw-bold mb-0 text-danger">-$${totalMaintExpense.toLocaleString()}.00</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
          <div class="small text-secondary-custom">Net Cashflow Income</div>
          <div class="h5 fw-bold mb-0 text-primary">$${netIncome.toLocaleString()}.00</div>
        </div>
      </div>
    </div>

    <!-- Year Filter Pills -->
    <div class="d-flex gap-2 mb-4">
      <button class="btn btn-sm ${reportYearFilter === 2026 ? 'btn-primary-custom' : 'btn-outline-custom'}" onclick="switchFinancialReportYear(2026)">Fiscal 2026 (YTD)</button>
      <button class="btn btn-sm ${reportYearFilter === 2025 ? 'btn-primary-custom' : 'btn-outline-custom'}" onclick="switchFinancialReportYear(2025)">Fiscal 2025</button>
      <button class="btn btn-sm ${reportYearFilter === 2024 ? 'btn-primary-custom' : 'btn-outline-custom'}" onclick="switchFinancialReportYear(2024)">Fiscal 2024</button>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-lg-6">
        <div class="custom-card p-4 shadow-sm">
          <h2 class="h6 fw-bold mb-3"><i class="fa-solid fa-chart-column text-primary-custom me-2"></i> Gross Income vs Maintenance (${reportYearFilter})</h2>
          <div style="height: 250px;">
            <canvas id="incomeVsExpenseChart"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="custom-card p-4 shadow-sm">
          <h2 class="h6 fw-bold mb-3"><i class="fa-solid fa-chart-pie text-primary-custom me-2"></i> Portfolio Cap Rate Distribution</h2>
          <div style="height: 250px;">
            <canvas id="capRateDistChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchFinancialReportYear(year) {
  reportYearFilter = year;
  renderView();
  showToast(`Loaded financial statements for Fiscal ${year}`, 'info');
}

function initOwnerIncomeCharts() {
  const ctx1 = document.getElementById('incomeVsExpenseChart');
  if (ctx1) {
    const is2026 = reportYearFilter === 2026;
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: is2026 ? ['May', 'Jun', 'Jul', 'Aug', 'Sep'] : ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          { label: 'Gross Rent ($)', data: is2026 ? [131000, 133100, 133100, 133100, 133100] : [380000, 395000, 410000, 420000], backgroundColor: '#4F86A6', borderRadius: 6 },
          { label: 'Repairs & Maint ($)', data: is2026 ? [4200, 3100, 5600, 2400, 1800] : [14000, 12000, 18000, 9000], backgroundColor: '#D96B6B', borderRadius: 6 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  const ctx2 = document.getElementById('capRateDistChart');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Sunset Palms (9.4%)', 'Grand Horizon (8.8%)', 'Apex Lofts (8.2%)', 'Pinecrest (7.9%)'],
        datasets: [{ label: 'Cap Rate %', data: [9.4, 8.8, 8.2, 7.9], backgroundColor: '#55A77A', borderRadius: 6 }]
      },
      options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false }
    });
  }
}

function exportFinancialReport() {
  window.print();
}

function downloadTaxReportCSV() {
  const csv = `Year,Category,Gross Inflow,Operating Expense,Net Cashflow,Tax Write-offs\n2026 YTD,Residential Real Estate,1197900,24800,1173100,18400\n`;
  downloadCSV('propvantage_tax_statement_2026.csv', csv);
  showToast('Tax statement CSV downloaded successfully!', 'success');
}

/* ==========================================================================
   13. OWNER PORTAL: MESSAGES & COMMUNICATIONS
   ========================================================================== */

function renderOwnerMessages() {
  const db = getDB();
  let filtered = db.messages;

  if (msgSearchTerm) {
    const q = msgSearchTerm.toLowerCase();
    filtered = filtered.filter(m => 
      m.sender.toLowerCase().includes(q) || 
      m.subject.toLowerCase().includes(q) || 
      m.message.toLowerCase().includes(q)
    );
  }

  if (msgStatusFilter !== 'All') {
    filtered = filtered.filter(m => m.status.toLowerCase() === msgStatusFilter.toLowerCase());
  }

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Messages & Communications 💬</h1>
          <p class="text-secondary-custom mb-0 small">Direct communication stream with tenants and assigned property managers.</p>
        </div>
        <button class="btn btn-primary-custom shadow-sm" onclick="openComposeMessageModal()">
          <i class="fa-solid fa-pen-to-square me-1"></i> Compose Message
        </button>
      </div>
    </div>

    <!-- Filter Toolbar -->
    <div class="table-filter-toolbar">
      <div class="filter-controls-group">
        <div class="input-icon-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="form-control form-control-custom filter-input" placeholder="Search sender, subject..." value="${msgSearchTerm}" oninput="handleMsgSearch(this.value)">
        </div>
        <select class="form-select form-control-custom filter-select" onchange="handleMsgStatusFilter(this.value)">
          <option value="All" ${msgStatusFilter === 'All' ? 'selected' : ''}>All Messages</option>
          <option value="Unread" ${msgStatusFilter === 'Unread' ? 'selected' : ''}>Unread</option>
          <option value="Read" ${msgStatusFilter === 'Read' ? 'selected' : ''}>Read</option>
        </select>
      </div>
    </div>

    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>From</th>
              <th>Subject</th>
              <th>Message Preview</th>
              <th>Date</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.length === 0 ? `<tr><td colspan="6" class="text-center text-secondary-custom py-4">No messages found.</td></tr>` : ''}
            ${filtered.map(m => `
              <tr>
                <td class="fw-bold">${m.sender}</td>
                <td class="small fw-semibold">${m.subject}</td>
                <td class="small text-secondary-custom text-truncate" style="max-width: 250px;">${m.message}</td>
                <td class="small">${m.date}</td>
                <td><span class="badge ${m.status === 'Unread' ? 'bg-danger' : 'bg-success-subtle text-success'}">${m.status}</span></td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="openReplyMessageModal('${m.id}')" title="Read & Reply">
                    <i class="fa-solid fa-envelope-open me-1"></i> Read & Reply
                  </button>
                  <button class="btn btn-sm btn-outline-secondary p-1 px-2 ms-1" onclick="toggleMessageReadStatus('${m.id}')" title="Toggle Read/Unread">
                    <i class="fa-solid ${m.status === 'Unread' ? 'fa-envelope-circle-check' : 'fa-envelope'}"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger p-1 px-2 ms-1" onclick="deleteMessageAction('${m.id}')" title="Delete Message">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function handleMsgSearch(val) {
  msgSearchTerm = val;
  renderView();
}

function handleMsgStatusFilter(val) {
  msgStatusFilter = val;
  renderView();
}

function toggleMessageReadStatus(msgId) {
  const db = getDB();
  const m = db.messages.find(item => item.id === msgId);
  if (m) {
    m.status = m.status === 'Unread' ? 'Read' : 'Unread';
    saveDB(db);
    showToast(`Message marked as ${m.status}!`, 'info');
    renderSidebar();
    renderView();
  }
}

function openComposeMessageModal() {
  const modalHtml = `
    <div class="modal fade" id="composeMsgModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-paper-plane text-primary-custom me-2"></i> Compose Direct Message</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeSendMessage(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Recipient <span class="text-danger">*</span></label>
                <select id="composeRecipient" class="form-select form-control-custom" required>
                  <option value="Property Management Dispatch">Property Management Dispatch Desk</option>
                  <option value="All Grand Horizon Tenants">All Grand Horizon Tenants</option>
                  <option value="All Sunset Palms Residents">All Sunset Palms Residents</option>
                  <option value="Contractor Team Lead">Contractor Team Lead</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Subject <span class="text-danger">*</span></label>
                <input type="text" id="composeSubject" class="form-control form-control-custom" placeholder="e.g. Scheduled Fire Alarm Inspection Notice" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Message Body <span class="text-danger">*</span></label>
                <textarea id="composeBody" class="form-control form-control-custom" rows="4" placeholder="Write your message..." required></textarea>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('composeMsgModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeSendMessage(e) {
  if (e) e.preventDefault();
  const rec = document.getElementById('composeRecipient').value;
  const sub = document.getElementById('composeSubject').value.trim() || 'Notice';
  const body = document.getElementById('composeBody').value.trim() || 'Message text';

  const db = getDB();
  const newMsg = {
    id: 'MSG-' + Math.floor(800 + Math.random() * 200),
    sender: `To: ${rec}`,
    email: 'operations@propvantage.com',
    subject: sub,
    message: body,
    date: new Date().toISOString().split('T')[0],
    status: 'Read'
  };

  db.messages.unshift(newMsg);
  saveDB(db);

  bootstrap.Modal.getInstance(document.getElementById('composeMsgModal'))?.hide();
  showToast(`Message sent to ${rec}!`, 'success');
  renderSidebar();
  renderView();
}

function openReplyMessageModal(msgId) {
  const db = getDB();
  const m = db.messages.find(item => item.id === msgId) || db.messages[0];

  m.status = 'Read';
  saveDB(db);

  const modalHtml = `
    <div class="modal fade" id="replyMsgModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-envelope text-primary-custom me-2"></i> ${m.subject}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 small mb-3 border border-light-custom">
              <div class="d-flex justify-content-between mb-1">
                <span>From: <strong>${m.sender}</strong></span>
                <span class="text-secondary-custom">${m.date}</span>
              </div>
              <p class="mb-0 mt-2 text-main-custom">${m.message}</p>
            </div>
            <div>
              <label class="form-label-custom small">Quick Reply</label>
              <textarea id="replyMsgContent" class="form-control form-control-custom" rows="3" placeholder="Type your response to ${m.sender}..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom">
            <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary-custom" onclick="executeSendReply('${m.id}')">
              <i class="fa-solid fa-paper-plane me-1"></i> Send Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('replyMsgModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => {
    modalEl.remove();
    renderSidebar();
    renderView();
  });
}

function executeSendReply(msgId) {
  bootstrap.Modal.getInstance(document.getElementById('replyMsgModal'))?.hide();
  showToast('Response delivered successfully!', 'success');
}

function deleteMessageAction(msgId) {
  showConfirmModal(
    'Delete Message',
    'Are you sure you want to delete this message?',
    () => {
      const db = getDB();
      db.messages = db.messages.filter(m => m.id !== msgId);
      saveDB(db);
      showToast('Message deleted.', 'info');
      renderSidebar();
      renderView();
    }
  );
}

/* ==========================================================================
   14. OWNER PORTAL: PROFILE & BANKING SETTINGS
   ========================================================================== */

function renderOwnerProfile() {
  const db = getDB();
  const u = db.currentOwner;
  const b = u.bankInfo || {
    accountHolder: u.name,
    bankName: 'Chase Private Client',
    accountNumber: '•••• •••• 8821',
    ifsc: 'CHASUS33',
    branch: 'Manhattan Financial Center, NY'
  };

  return `
    <div class="dash-view-header mb-4">
      <h1 class="h4 fw-bold mb-1">Owner Profile & Bank Information ⚙️</h1>
      <p class="text-secondary-custom mb-0 small">Manage your investor credentials, direct deposit banking, and tax reporting data.</p>
    </div>

    <div class="row g-4">
      <div class="col-lg-4">
        <div class="custom-card p-4 text-center shadow-sm">
          <img src="${u.avatar}" alt="${u.name}" class="rounded-circle border border-3 border-primary mb-3" style="width: 110px; height: 110px; object-fit: cover;">
          <h2 class="h5 fw-bold mb-1">${u.name}</h2>
          <div class="badge bg-primary-subtle text-primary mb-2">${u.tier}</div>
          <p class="small text-secondary-custom mb-3">${u.companyName || 'Sterling Investor Holdings'}<br>Owner ID: <strong>#${u.id}</strong> &bull; Member since ${u.memberSince}</p>

          <button class="btn btn-outline-custom btn-sm w-100" onclick="changeOwnerAvatarDemo()">
            <i class="fa-solid fa-camera me-1"></i> Change Photo
          </button>
        </div>

        <div class="custom-card p-4 mt-4 shadow-sm">
          <h3 class="h6 fw-bold mb-3"><i class="fa-solid fa-bell text-primary-custom me-2"></i> Notification Alerts</h3>
          <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" id="notifRent" ${u.notifications?.rentDeposits ? 'checked' : ''} onchange="toggleNotificationPref('rentDeposits')">
            <label class="form-check-label small" for="notifRent">Rent Deposit Confirmations</label>
          </div>
          <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" id="notifMaint" ${u.notifications?.maintenanceAlerts ? 'checked' : ''} onchange="toggleNotificationPref('maintenanceAlerts')">
            <label class="form-check-label small" for="notifMaint">Urgent Maintenance Dispatches</label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="notifLease" ${u.notifications?.leaseExpiryWarnings ? 'checked' : ''} onchange="toggleNotificationPref('leaseExpiryWarnings')">
            <label class="form-check-label small" for="notifLease">90-Day Lease Expiration Warnings</label>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="custom-card p-4 shadow-sm">
          <h2 class="h5 fw-bold mb-3">Investor Profile & Contacts</h2>
          <form onsubmit="saveOwnerProfile(event)">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label-custom small">Full Name <span class="text-danger">*</span></label>
                <input type="text" id="ownName" class="form-control form-control-custom" value="${u.name}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Company Name</label>
                <input type="text" id="ownCompany" class="form-control form-control-custom" value="${u.companyName || ''}">
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Email Address <span class="text-danger">*</span></label>
                <input type="email" id="ownEmail" class="form-control form-control-custom" value="${u.email}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Phone Number <span class="text-danger">*</span></label>
                <input type="tel" id="ownPhone" class="form-control form-control-custom" value="${u.phone}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Tax ID / SSN / EIN <span class="text-danger">*</span></label>
                <input type="text" id="ownTaxId" class="form-control form-control-custom" value="${u.taxId || 'XX-XXX4910'}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Portfolio Tier</label>
                <input type="text" class="form-control form-control-custom bg-section" value="${u.tier}" readonly>
              </div>
            </div>

            <hr class="my-4 border-light-custom">

            <h2 class="h5 fw-bold mb-3"><i class="fa-solid fa-building-columns text-primary-custom me-2"></i> Direct Deposit Bank Details</h2>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label-custom small">Account Holder Name <span class="text-danger">*</span></label>
                <input type="text" id="bankHolder" class="form-control form-control-custom" value="${b.accountHolder || u.name}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Bank Name <span class="text-danger">*</span></label>
                <input type="text" id="bankName" class="form-control form-control-custom" value="${b.bankName || 'Chase Private Client'}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Account Number <span class="text-danger">*</span></label>
                <input type="text" id="bankAccNum" class="form-control form-control-custom" value="${b.accountNumber || '•••• •••• 8821'}" required>
              </div>
              <div class="col-md-6">
                <label class="form-label-custom small">Routing / IFSC Code <span class="text-danger">*</span></label>
                <input type="text" id="bankIfsc" class="form-control form-control-custom" value="${b.ifsc || 'CHASUS33'}" required>
              </div>
              <div class="col-12">
                <label class="form-label-custom small">Bank Branch Location</label>
                <input type="text" id="bankBranch" class="form-control form-control-custom" value="${b.branch || 'Manhattan Financial Center, NY'}">
              </div>
            </div>

            <hr class="my-4 border-light-custom">

            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary-custom px-4 shadow-primary">
                <i class="fa-solid fa-floppy-disk me-1"></i> Save Changes
              </button>
              <button type="button" class="btn btn-outline-custom px-4" onclick="renderView()">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

function changeOwnerAvatarDemo() {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  ];
  const db = getDB();
  const currentIdx = avatars.indexOf(db.currentOwner.avatar);
  db.currentOwner.avatar = avatars[(currentIdx + 1) % avatars.length];
  saveDB(db);
  showToast('Profile photo updated!', 'success');
  renderSidebar();
  renderView();
}

function toggleNotificationPref(key) {
  const db = getDB();
  if (!db.currentOwner.notifications) db.currentOwner.notifications = {};
  db.currentOwner.notifications[key] = !db.currentOwner.notifications[key];
  saveDB(db);
  showToast(`Notification preferences saved!`, 'success');
}

function saveOwnerProfile(e) {
  e.preventDefault();
  const db = getDB();
  db.currentOwner.name = document.getElementById('ownName').value.trim();
  db.currentOwner.companyName = document.getElementById('ownCompany').value.trim();
  db.currentOwner.email = document.getElementById('ownEmail').value.trim();
  db.currentOwner.phone = document.getElementById('ownPhone').value.trim();
  db.currentOwner.taxId = document.getElementById('ownTaxId').value.trim();

  db.currentOwner.bankInfo = {
    accountHolder: document.getElementById('bankHolder').value.trim(),
    bankName: document.getElementById('bankName').value.trim(),
    accountNumber: document.getElementById('bankAccNum').value.trim(),
    ifsc: document.getElementById('bankIfsc').value.trim(),
    branch: document.getElementById('bankBranch').value.trim()
  };
  db.currentOwner.directDepositBank = `${db.currentOwner.bankInfo.bankName} (${db.currentOwner.bankInfo.accountNumber.slice(-4) ? '•••• ' + db.currentOwner.bankInfo.accountNumber.slice(-4) : '•••• 8821'})`;

  saveDB(db);
  showToast('Owner profile & direct deposit details updated!', 'success');
  renderSidebar();
  renderView();
}

/* ==========================================================================
   15. ADMIN OPERATIONS PORTAL VIEWS
   ========================================================================== */

function renderAdminOverview() {
  const db = getDB();
  const totalUnits = db.properties.reduce((a, b) => a + b.totalUnits, 0);
  const occupiedUnits = db.properties.reduce((a, b) => a + b.occupiedUnits, 0);
  const totalPlatformRent = 423500;

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">PropVantage Operations & Facility Overview 🛡️</h1>
          <p class="text-secondary-custom mb-0 small">Master platform control: landlord portfolios, tenant background checks, and automated payouts.</p>
        </div>
        <div class="d-flex gap-2">
          <a href="#admin-owners" class="btn btn-primary-custom shadow-sm">
            <i class="fa-solid fa-users me-1"></i> Manage Landlords
          </a>
          <button class="btn btn-outline-custom" onclick="refreshDashboardData(this)" title="Refresh Platform Data">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Balanced 5 KPI Grid for Admin -->
    <div class="dash-stat-grid">
      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('admin-owners')">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Total Landlords</span>
          <div class="dash-stat-icon-wrap icon-blue"><i class="fa-solid fa-user-tie"></i></div>
        </div>
        <div class="dash-stat-value">${db.ownersList.length + 140}</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-arrow-up"></i> +14 This Month</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('admin-properties')">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Managed Buildings</span>
          <div class="dash-stat-icon-wrap icon-green"><i class="fa-solid fa-hotel"></i></div>
        </div>
        <div class="dash-stat-value">${db.properties.length + 80}</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-layer-group"></i> ${totalUnits + 420} Units</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('admin-payouts')">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Monthly Gross Volume</span>
          <div class="dash-stat-icon-wrap icon-gold"><i class="fa-solid fa-money-bill-transfer"></i></div>
        </div>
        <div class="dash-stat-value">$${totalPlatformRent.toLocaleString()}</div>
        <div class="dash-stat-trend trend-up"><i class="fa-solid fa-percent"></i> 8% Fee Collected</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('admin-maintenance')">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Maintenance Queue</span>
          <div class="dash-stat-icon-wrap icon-red"><i class="fa-solid fa-screwdriver-wrench"></i></div>
        </div>
        <div class="dash-stat-value">${db.maintenance.length} Active</div>
        <div class="dash-stat-trend text-primary"><i class="fa-solid fa-bolt"></i> 100% Dispatched</div>
      </div>

      <div class="dash-stat-card stat-clickable" onclick="navigateToRoute('admin-reports')">
        <div class="dash-stat-header">
          <span class="dash-stat-label">Platform Occupancy</span>
          <div class="dash-stat-icon-wrap icon-purple"><i class="fa-solid fa-shield-halved"></i></div>
        </div>
        <div class="dash-stat-value text-success">${totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0}%</div>
        <div class="dash-stat-trend text-success"><i class="fa-solid fa-circle-check"></i> Zero Delinquency</div>
      </div>
    </div>

    <!-- Admin Charts Row -->
    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <div class="custom-card p-4 shadow-sm h-100">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="h6 fw-bold mb-0"><i class="fa-solid fa-chart-line text-primary-custom me-2"></i> Monthly Platform Rent Volume (2026)</h2>
            <span class="badge bg-success-subtle text-success">Automated ACH Processing</span>
          </div>
          <div style="height: 250px;">
            <canvas id="adminPlatformVolumeChart"></canvas>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="custom-card p-4 shadow-sm h-100">
          <h2 class="h6 fw-bold mb-3"><i class="fa-solid fa-pie-chart text-primary-custom me-2"></i> Asset Category Share</h2>
          <div style="height: 210px;">
            <canvas id="adminCategoryShareChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Landlord Management Stream -->
    <div class="custom-card p-4 shadow-sm mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h6 fw-bold mb-0"><i class="fa-solid fa-users text-primary-custom me-2"></i> Registered Landlords & Portfolios</h2>
        <a href="#admin-owners" class="small text-primary-custom text-decoration-none fw-semibold">Manage All Landlords <i class="fa-solid fa-arrow-right ms-1"></i></a>
      </div>
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>Owner ID</th>
              <th>Investor Name</th>
              <th>Email Address</th>
              <th>Managed Units</th>
              <th>Monthly Volume</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.ownersList.map(o => `
              <tr>
                <td class="fw-bold">#${o.id}</td>
                <td class="fw-bold">${o.name}</td>
                <td class="small text-secondary-custom">${o.email}</td>
                <td class="fw-semibold">${o.units} Units (${o.properties} Estates)</td>
                <td class="fw-bold text-success">$${o.monthlyRent.toLocaleString()}/mo</td>
                <td><span class="badge bg-success-subtle text-success">${o.status}</span></td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewLandlordPortfolioModal('${o.id}')">
                    <i class="fa-solid fa-eye me-1"></i> Portfolio
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function initAdminCharts() {
  const volCtx = document.getElementById('adminPlatformVolumeChart');
  if (volCtx) {
    new Chart(volCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
          label: 'Platform Gross Rent ($)',
          data: [340000, 360000, 385000, 395000, 410000, 415000, 420000, 422000, 423500],
          borderColor: '#4F86A6',
          backgroundColor: 'rgba(79, 134, 166, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 3
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  const catCtx = document.getElementById('adminCategoryShareChart');
  if (catCtx) {
    new Chart(catCtx, {
      type: 'doughnut',
      data: {
        labels: ['Multi-Family', 'Luxury Lofts', 'Townhomes', 'Villas'],
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: ['#4F86A6', '#55A77A', '#D6A84F', '#7E69AB'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } }
      }
    });
  }
}

function renderAdminOwners() {
  const db = getDB();
  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Landlord & Property Owner Directory 👥</h1>
          <p class="text-secondary-custom mb-0 small">Manage investor accounts, units under management, and direct payout agreements.</p>
        </div>
        <button class="btn btn-primary-custom shadow-sm" onclick="openAddLandlordModal()">
          <i class="fa-solid fa-user-plus me-1"></i> Add Landlord
        </button>
      </div>
    </div>
    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Investor Name</th>
              <th>Email</th>
              <th>Managed Units</th>
              <th>Monthly Volume</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.ownersList.map(o => `
              <tr>
                <td class="fw-bold">#${o.id}</td>
                <td class="fw-bold">${o.name}</td>
                <td class="small text-secondary-custom">${o.email}</td>
                <td>${o.units} Units</td>
                <td class="fw-bold text-success">$${o.monthlyRent.toLocaleString()}</td>
                <td><span class="badge bg-success-subtle text-success">${o.status}</span></td>
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewLandlordPortfolioModal('${o.id}')" title="View Portfolio">
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-secondary p-1 px-2 ms-1" onclick="openEditLandlordModal('${o.id}')" title="Edit Landlord">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger p-1 px-2 ms-1" onclick="deleteLandlordAction('${o.id}')" title="Delete Landlord">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openAddLandlordModal() {
  const modalHtml = `
    <div class="modal fade" id="addLandlordModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-user-plus text-primary-custom me-2"></i> Register New Landlord</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeAddLandlord(event)">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Investor Full Name <span class="text-danger">*</span></label>
                <input type="text" id="newLandlordName" class="form-control form-control-custom" placeholder="e.g. Richard Sterling" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Email Address <span class="text-danger">*</span></label>
                <input type="email" id="newLandlordEmail" class="form-control form-control-custom" placeholder="richard@sterlingholdings.com" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Units Under Mgmt</label>
                  <input type="number" id="newLandlordUnits" class="form-control form-control-custom" value="12" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Monthly Gross ($)</label>
                  <input type="number" id="newLandlordRent" class="form-control form-control-custom" value="32000" required>
                </div>
              </div>
            </div>
            <div class="modal-footer border-top border-light-custom">
              <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary-custom">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('addLandlordModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeAddLandlord(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('newLandlordName').value.trim();
  const email = document.getElementById('newLandlordEmail').value.trim();
  const units = Number(document.getElementById('newLandlordUnits').value) || 12;
  const rent = Number(document.getElementById('newLandlordRent').value) || 32000;

  if (!name || !email) {
    showToast('Please enter landlord name and email.', 'danger');
    return;
  }

  const db = getDB();
  const newOwner = {
    id: 'OWN-' + (100 + db.ownersList.length + 1),
    name: name,
    email: email,
    phone: '+1 (555) 300-4000',
    units: units,
    properties: Math.max(1, Math.round(units / 6)),
    monthlyRent: rent,
    status: 'Active',
    joinedDate: 'September 2026'
  };

  db.ownersList.push(newOwner);
  saveDB(db);

  bootstrap.Modal.getInstance(document.getElementById('addLandlordModal'))?.hide();
  showToast(`Landlord account created for ${name}!`, 'success');
  renderView();
}

function openEditLandlordModal(ownerId) {
  const db = getDB();
  const o = db.ownersList.find(item => item.id === ownerId);
  if (!o) return;

  const modalHtml = `
    <div class="modal fade" id="editLandlordModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-pen-to-square text-primary-custom me-2"></i> Edit Landlord Account</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="executeEditLandlord(event, '${o.id}')">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label-custom small">Full Name</label>
                <input type="text" id="editLandlordName" class="form-control form-control-custom" value="${o.name}" required>
              </div>
              <div class="mb-3">
                <label class="form-label-custom small">Email Address</label>
                <input type="email" id="editLandlordEmail" class="form-control form-control-custom" value="${o.email}" required>
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label-custom small">Units Managed</label>
                  <input type="number" id="editLandlordUnits" class="form-control form-control-custom" value="${o.units}" required>
                </div>
                <div class="col-6">
                  <label class="form-label-custom small">Monthly Rent ($)</label>
                  <input type="number" id="editLandlordRent" class="form-control form-control-custom" value="${o.monthlyRent}" required>
                </div>
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

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('editLandlordModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function executeEditLandlord(e, ownerId) {
  if (e) e.preventDefault();
  const db = getDB();
  const o = db.ownersList.find(item => item.id === ownerId);
  if (o) {
    o.name = document.getElementById('editLandlordName').value.trim() || o.name;
    o.email = document.getElementById('editLandlordEmail').value.trim() || o.email;
    o.units = Number(document.getElementById('editLandlordUnits').value) || o.units;
    o.monthlyRent = Number(document.getElementById('editLandlordRent').value) || o.monthlyRent;
    saveDB(db);
    bootstrap.Modal.getInstance(document.getElementById('editLandlordModal'))?.hide();
    showToast(`Updated account for ${o.name}!`, 'success');
    renderView();
  }
}

function deleteLandlordAction(ownerId) {
  showConfirmModal(
    'Remove Landlord',
    'Are you sure you want to remove this landlord from management?',
    () => {
      const db = getDB();
      db.ownersList = db.ownersList.filter(item => item.id !== ownerId);
      saveDB(db);
      showToast('Landlord removed from platform.', 'warning');
      renderView();
    }
  );
}

function viewLandlordPortfolioModal(ownerId) {
  const db = getDB();
  const o = db.ownersList.find(item => item.id === ownerId) || db.ownersList[0];
  const fee = Math.round(o.monthlyRent * 0.08);
  const net = o.monthlyRent - fee;

  const modalHtml = `
    <div class="modal fade" id="landlordPortModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <div>
              <h5 class="modal-title fw-bold mb-0"><i class="fa-solid fa-building-user text-primary-custom me-2"></i> ${o.name} - Portfolio Overview</h5>
              <small class="text-secondary-custom">Investor ID: #${o.id} &bull; Joined ${o.joinedDate || '2023'}</small>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="row g-3 mb-4">
              <div class="col-md-4">
                <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
                  <div class="small text-secondary-custom">Units Managed</div>
                  <div class="h4 fw-bold mb-0 text-main-custom">${o.units} Units</div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
                  <div class="small text-secondary-custom">Monthly Gross Rent</div>
                  <div class="h4 fw-bold mb-0 text-success">$${o.monthlyRent.toLocaleString()}</div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-section rounded-3 border border-light-custom text-center">
                  <div class="small text-secondary-custom">Net Monthly Payout (92%)</div>
                  <div class="h4 fw-bold mb-0 text-primary">$${net.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-section border border-light-custom small">
              <div class="d-flex justify-content-between mb-2">
                <span>Email Address:</span>
                <strong>${o.email}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Direct Deposit Channel:</span>
                <strong>Chase Private Client ACH</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>Account Status:</span>
                <span class="badge bg-success-subtle text-success">${o.status}</span>
              </div>
            </div>
          </div>
          <div class="modal-footer border-top border-light-custom justify-content-between">
            <button type="button" class="btn btn-outline-custom btn-sm" onclick="showToast('ACH statement dispatched to ${o.email}', 'success')">
              <i class="fa-solid fa-envelope me-1"></i> Email Payout Statement
            </button>
            <button type="button" class="btn btn-primary-custom btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('landlordPortModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function renderAdminProperties() {
  return renderOwnerProperties();
}

function renderAdminLeases() {
  return renderOwnerLeaseRenewals();
}

function renderAdminMaintenance() {
  return renderOwnerMaintenance();
}

function renderAdminPayouts() {
  const db = getDB();
  const totalVolume = db.ownersList.reduce((a, b) => a + b.monthlyRent, 0);
  const totalPlatformFees = Math.round(totalVolume * 0.08);
  const totalNetPayouts = totalVolume - totalPlatformFees;

  return `
    <div class="dash-view-header mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 class="h4 fw-bold mb-1">Owner Automated Payouts 💰</h1>
          <p class="text-secondary-custom mb-0 small">Direct deposit ledger for all property owners with 8% platform fee deductions.</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary-custom shadow-sm" onclick="processMonthlyPayoutsBatch(${totalNetPayouts})">
            <i class="fa-solid fa-bolt me-1"></i> Process Batch Direct Deposits
          </button>
          <button class="btn btn-outline-custom" onclick="exportPayoutsCsv()">
            <i class="fa-solid fa-download me-1"></i> Export Payouts (CSV)
          </button>
        </div>
      </div>
    </div>

    <!-- Payout Summary Banner -->
    <div class="p-3 rounded-4 bg-section border border-light-custom mb-4">
      <div class="row align-items-center g-3 text-center text-md-start">
        <div class="col-md-4">
          <div class="small text-secondary-custom">Total Monthly Gross</div>
          <div class="h5 fw-bold mb-0 text-main-custom">$${totalVolume.toLocaleString()}.00</div>
        </div>
        <div class="col-md-4">
          <div class="small text-secondary-custom">Platform Mgmt Fees (8%)</div>
          <div class="h5 fw-bold mb-0 text-danger">-$${totalPlatformFees.toLocaleString()}.00</div>
        </div>
        <div class="col-md-4 text-md-end">
          <div class="small text-secondary-custom">Net Direct Deposit Payout</div>
          <div class="h4 fw-bold mb-0 text-success">$${totalNetPayouts.toLocaleString()}.00</div>
        </div>
      </div>
    </div>

    <div class="custom-card p-4 shadow-sm">
      <div class="table-responsive">
        <table class="custom-dash-table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Investor</th>
              <th>Gross Rent</th>
              <th>Platform Fee (8%)</th>
              <th>Net Payout</th>
              <th>Direct Deposit Date</th>
              <th>Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.ownersList.map(o => {
              const fee = Math.round(o.monthlyRent * 0.08);
              const net = o.monthlyRent - fee;
              return `
                <tr>
                  <td class="fw-bold">#PAY-${o.id.replace('OWN-', '')}92</td>
                  <td class="fw-bold">${o.name}</td>
                  <td>$${o.monthlyRent.toLocaleString()}</td>
                  <td class="text-danger">-$${fee.toLocaleString()}</td>
                  <td class="fw-bold text-success">$${net.toLocaleString()}</td>
                  <td class="small text-secondary-custom">5th of every month</td>
                  <td><span class="badge bg-success-subtle text-success">Automated</span></td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-custom p-1 px-2" onclick="viewPayoutRemittanceModal('${o.id}')" title="View Remittance Slip">
                      <i class="fa-solid fa-receipt me-1"></i> Remittance
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function processMonthlyPayoutsBatch(totalNet) {
  showToast(`Initiating automated ACH batch of $${totalNet.toLocaleString()} to Chase direct deposit lines!`, 'success');
}

function exportPayoutsCsv() {
  const db = getDB();
  let csv = 'Payout ID,Investor,Gross Rent,Platform Fee (8%),Net Payout,Schedule\n';
  db.ownersList.forEach(o => {
    const fee = Math.round(o.monthlyRent * 0.08);
    const net = o.monthlyRent - fee;
    csv += `"PAY-${o.id}92","${o.name}",${o.monthlyRent},${fee},${net},"5th Monthly"\n`;
  });
  downloadCSV('propvantage_owner_payouts_2026.csv', csv);
  showToast('Payouts ledger CSV downloaded successfully!', 'success');
}

function viewPayoutRemittanceModal(ownerId) {
  const db = getDB();
  const o = db.ownersList.find(item => item.id === ownerId) || db.ownersList[0];
  const fee = Math.round(o.monthlyRent * 0.08);
  const net = o.monthlyRent - fee;

  const modalHtml = `
    <div class="modal fade" id="payoutRemitModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-card border-0 shadow-xl">
          <div class="modal-header border-bottom border-light-custom">
            <h5 class="modal-title fw-bold"><i class="fa-solid fa-receipt text-primary-custom me-2"></i> ACH Direct Deposit Remittance</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="p-3 bg-section rounded-3 mb-3 border border-light-custom small">
              <div class="d-flex justify-content-between mb-2">
                <span>Remittance Reference:</span>
                <strong>#PAY-${o.id.replace('OWN-', '')}92</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Beneficiary:</span>
                <strong>${o.name} (${o.email})</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Gross Rent Volume:</span>
                <strong>$${o.monthlyRent.toLocaleString()}.00</strong>
              </div>
              <div class="d-flex justify-content-between mb-2 text-danger">
                <span>PropVantage Platform Fee (8%):</span>
                <strong>-$${fee.toLocaleString()}.00</strong>
              </div>
              <div class="d-flex justify-content-between pt-2 border-top border-light-custom fw-bold fs-5 text-success">
                <span>Net Direct Deposit:</span>
                <span>$${net.toLocaleString()}.00</span>
              </div>
            </div>
            <p class="small text-secondary-custom text-center mb-0">Dispatched via Federal Reserve Automated Clearing House (ACH).</p>
          </div>
          <div class="modal-footer border-top border-light-custom justify-content-between">
            <button type="button" class="btn btn-outline-custom btn-sm" onclick="window.print()">
              <i class="fa-solid fa-print me-1"></i> Print
            </button>
            <button type="button" class="btn btn-primary-custom btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modalEl = document.getElementById('payoutRemitModal');
  const bs = new bootstrap.Modal(modalEl);
  bs.show();
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
}

function renderAdminReports() {
  return renderOwnerIncomeReports();
}

function initAdminPlatformCharts() {
  initOwnerIncomeCharts();
}

function renderAdminMessages() {
  return renderOwnerMessages();
}

function renderAdminSettings() {
  const db = getDB();
  const s = db.settings;
  return `
    <div class="dash-view-header mb-4">
      <h1 class="h4 fw-bold mb-1">Platform Operational Settings ⚙️</h1>
      <p class="text-secondary-custom mb-0 small">Global management rates, automated ACH payout schedules, and database backups.</p>
    </div>
    
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="custom-card p-4 shadow-sm mb-4">
          <h2 class="h6 fw-bold mb-3">Fee Structures & Payout Timers</h2>
          <form onsubmit="saveAdminSettings(event)">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label-custom small">Platform Name</label>
                <input type="text" id="adminPlatName" class="form-control form-control-custom" value="${s.platformName}" required>
              </div>
              <div class="col-md-3">
                <label class="form-label-custom small">Management Fee (%)</label>
                <input type="number" id="adminFeeRate" class="form-control form-control-custom" value="${s.managementFeeRate}" step="0.1" required>
              </div>
              <div class="col-md-3">
                <label class="form-label-custom small">Direct Deposit Day of Month</label>
                <input type="number" id="adminPayDay" class="form-control form-control-custom" value="${s.directDepositDay}" required>
              </div>
            </div>
            <hr class="my-4 border-light-custom">
            <button type="submit" class="btn btn-primary-custom px-4 shadow-primary">
              <i class="fa-solid fa-floppy-disk me-1"></i> Save Platform Settings
            </button>
          </form>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="custom-card p-4 shadow-sm mb-4">
          <h2 class="h6 fw-bold mb-3"><i class="fa-solid fa-database text-primary-custom me-2"></i> Database Backup & Restore</h2>
          <p class="small text-secondary-custom mb-3">Export entire portfolio data to JSON or import previous state backup file.</p>
          
          <button class="btn btn-outline-custom btn-sm w-100 mb-2" onclick="exportDatabaseJSON()">
            <i class="fa-solid fa-download me-1"></i> Export Database (JSON)
          </button>
          
          <label class="btn btn-outline-secondary btn-sm w-100 mb-3" style="cursor: pointer;">
            <i class="fa-solid fa-upload me-1"></i> Import Database (JSON)
            <input type="file" accept=".json" style="display:none;" onchange="importDatabaseJSON(event)">
          </label>
          
          <hr class="my-3 border-light-custom">
          
          <button class="btn btn-outline-danger btn-sm w-100" onclick="resetDemoDatabase()">
            <i class="fa-solid fa-rotate-left me-1"></i> Factory Reset Demo DB
          </button>
        </div>
      </div>
    </div>
  `;
}

function saveAdminSettings(e) {
  e.preventDefault();
  const db = getDB();
  db.settings.platformName = document.getElementById('adminPlatName').value.trim();
  db.settings.managementFeeRate = Number(document.getElementById('adminFeeRate').value) || 8.0;
  db.settings.directDepositDay = Number(document.getElementById('adminPayDay').value) || 5;
  saveDB(db);
  showToast('Platform operational settings saved!', 'success');
}

/* ==========================================================================
   16. LIVE SEARCH WITH INTERACTIVE AUTOCOMPLETE DROPDOWN
   ========================================================================== */

function initLiveSearch() {
  const topbar = document.querySelector('.dashboard-topbar');
  const searchWrap = document.querySelector('.topbar-search');
  if (!searchWrap) return;

  searchWrap.classList.add('topbar-search-wrapper');

  let resultsBox = document.getElementById('topbarSearchResults');
  if (!resultsBox) {
    resultsBox = document.createElement('div');
    resultsBox.id = 'topbarSearchResults';
    resultsBox.className = 'topbar-search-results';
    searchWrap.appendChild(resultsBox);
  }

  const input = searchWrap.querySelector('input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    if (!term) {
      resultsBox.classList.remove('show');
      resultsBox.innerHTML = '';
      return;
    }

    const db = getDB();
    const matches = [];

    // Search Properties
    db.properties.forEach(p => {
      if (p.name.toLowerCase().includes(term) || p.address.toLowerCase().includes(term)) {
        matches.push({
          type: 'Property',
          icon: 'fa-hotel',
          title: p.name,
          subtitle: `${p.occupiedUnits}/${p.totalUnits} Units &bull; $${p.monthlyRent.toLocaleString()}/mo`,
          action: () => {
            navigateToRoute('properties');
            openPropertyDetailsModal(p.id);
          }
        });
      }
    });

    // Search Rent Payments
    db.rentPayments.forEach(r => {
      if (r.tenant.toLowerCase().includes(term) || r.id.toLowerCase().includes(term) || r.property.toLowerCase().includes(term)) {
        matches.push({
          type: 'Rent Payment',
          icon: 'fa-file-invoice-dollar',
          title: `${r.tenant} (${r.property} ${r.unit})`,
          subtitle: `#${r.id} &bull; $${r.amount.toLocaleString()} (${r.status})`,
          action: () => {
            navigateToRoute('rent-payments');
            viewRentReceiptModal(r.id);
          }
        });
      }
    });

    // Search Maintenance
    db.maintenance.forEach(m => {
      if (m.issue.toLowerCase().includes(term) || m.id.toLowerCase().includes(term) || m.contractor.toLowerCase().includes(term)) {
        matches.push({
          type: 'Work Order',
          icon: 'fa-screwdriver-wrench',
          title: `#${m.id} - ${m.issue}`,
          subtitle: `${m.property} &bull; ${m.priority} Priority &bull; ${m.status}`,
          action: () => {
            navigateToRoute('maintenance');
            viewMaintenanceTicketModal(m.id);
          }
        });
      }
    });

    // Search Leases
    db.leases.forEach(l => {
      if (l.tenant.toLowerCase().includes(term) || l.id.toLowerCase().includes(term)) {
        matches.push({
          type: 'Lease Agreement',
          icon: 'fa-file-signature',
          title: `Lease #${l.id}: ${l.tenant}`,
          subtitle: `${l.property} &bull; Exp: ${l.expiryDate} (${l.daysLeft} days)`,
          action: () => {
            navigateToRoute('lease-renewals');
            openLeaseNoticeModal(l.id);
          }
        });
      }
    });

    // Search Landlords (for Admin)
    db.ownersList.forEach(o => {
      if (o.name.toLowerCase().includes(term) || o.email.toLowerCase().includes(term)) {
        matches.push({
          type: 'Landlord',
          icon: 'fa-user-tie',
          title: o.name,
          subtitle: `${o.units} Units &bull; $${o.monthlyRent.toLocaleString()}/mo`,
          action: () => {
            navigateToRoute('admin-owners');
            viewLandlordPortfolioModal(o.id);
          }
        });
      }
    });

    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div class="search-result-empty">
          <i class="fa-solid fa-magnifying-glass mb-2 fs-5 opacity-50"></i>
          <div>No results found for "<strong>${term}</strong>"</div>
          <small class="text-secondary-custom">Try searching by property name, tenant, or invoice #.</small>
        </div>
      `;
    } else {
      resultsBox.innerHTML = matches.map((m, idx) => `
        <div class="search-result-item" data-idx="${idx}">
          <div class="search-result-icon"><i class="fa-solid ${m.icon}"></i></div>
          <div class="search-result-info">
            <div class="search-result-title">${m.title}</div>
            <div class="search-result-subtitle">${m.subtitle}</div>
          </div>
          <span class="badge bg-primary-subtle text-primary small">${m.type}</span>
        </div>
      `).join('');

      resultsBox.querySelectorAll('.search-result-item').forEach((item, idx) => {
        item.onclick = () => {
          resultsBox.classList.remove('show');
          input.value = '';
          matches[idx].action();
        };
      });
    }

    resultsBox.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!searchWrap.contains(e.target)) {
      resultsBox.classList.remove('show');
    }
  });
}

/* ==========================================================================
   17. THEME & RTL SWITCHER
   ========================================================================== */

function initThemeAndDirection() {
  const savedTheme = localStorage.getItem('propvantage_theme') || 'light';
  const savedDir = localStorage.getItem('propvantage_dir') || 'ltr';

  if (typeof window.applyTheme === 'function') {
    window.applyTheme(savedTheme);
  } else {
    applyDashboardTheme(savedTheme);
  }

  if (typeof window.applyDirection === 'function') {
    window.applyDirection(savedDir);
  } else {
    applyDashboardDirection(savedDir);
  }
}

function applyDashboardTheme(theme) {
  if (typeof window.applyTheme === 'function') {
    return window.applyTheme(theme);
  }
  const finalTheme = (theme === 'dark') ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', finalTheme);
  document.documentElement.setAttribute('data-bs-theme', finalTheme);
  if (document.body) {
    document.body.setAttribute('data-theme', finalTheme);
    document.body.setAttribute('data-bs-theme', finalTheme);
  }
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.title = finalTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    btn.setAttribute('aria-label', btn.title);
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = finalTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  });
  return finalTheme;
}

function applyDashboardDirection(dir) {
  if (typeof window.applyDirection === 'function') {
    return window.applyDirection(dir);
  }
  const finalDir = (dir === 'rtl') ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', finalDir);
  if (document.body) document.body.setAttribute('dir', finalDir);
  document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
    btn.title = finalDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout';
    btn.setAttribute('aria-label', btn.title);
    const badge = btn.querySelector('.rtl-label');
    if (badge) {
      badge.textContent = finalDir === 'rtl' ? 'LTR' : 'RTL';
    }
  });
  return finalDir;
}

function initMobileToggle() {
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.querySelector('.dashboard-sidebar');

  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  if (toggleBtn && sidebar) {
    toggleBtn.onclick = () => {
      sidebar.classList.toggle('sidebar-open');
      backdrop.classList.toggle('show');
    };

    backdrop.onclick = () => {
      sidebar.classList.remove('sidebar-open');
      backdrop.classList.remove('show');
    };
  }
}
