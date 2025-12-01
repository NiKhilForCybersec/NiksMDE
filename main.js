/* ============================================
   MDE Ultimate Guide - Main JavaScript
   ============================================ */

// Navigation data structure
const navigationData = [
    {
        id: 'foundations',
        title: 'MDE Foundations',
        icon: '🏗️',
        pages: [
            { id: '1-1', title: 'MDE Overview', file: '1-1-mde-overview.html' },
            { id: '1-2', title: 'Architecture Deep Dive', file: '1-2-mde-architecture.html' },
            { id: '1-3', title: 'Deployment Options', file: '1-3-deployment-options.html' },
            { id: '1-4', title: 'Onboarding Windows', file: '1-4-onboarding-windows.html' },
            { id: '1-5', title: 'Onboarding macOS', file: '1-5-onboarding-macos.html' },
            { id: '1-6', title: 'Onboarding Linux', file: '1-6-onboarding-linux.html' },
            { id: '1-7', title: 'Onboarding Mobile', file: '1-7-onboarding-mobile.html' },
            { id: '1-8', title: 'Offboarding', file: '1-8-offboarding.html' }
        ]
    },
    {
        id: 'portal',
        title: 'Portal & Interface',
        icon: '🖥️',
        pages: [
            { id: '2-1', title: 'Security Portal Overview', file: '2-1-security-portal-overview.html' },
            { id: '2-2', title: 'Device Inventory', file: '2-2-device-inventory.html' },
            { id: '2-3', title: 'Alerts Queue', file: '2-3-alerts-queue.html' },
            { id: '2-4', title: 'Incidents', file: '2-4-incidents.html' },
            { id: '2-5', title: 'Action Center', file: '2-5-action-center.html' },
            { id: '2-6', title: 'Threat Analytics', file: '2-6-threat-analytics.html' },
            { id: '2-7', title: 'Reports & Dashboards', file: '2-7-reports-dashboards.html' },
            { id: '2-8', title: 'Settings & Configuration', file: '2-8-settings-configuration.html' }
        ]
    },
    {
        id: 'prevention',
        title: 'Prevention & Protection',
        icon: '🛡️',
        pages: [
            { id: '3-1', title: 'Next-Gen Protection', file: '3-1-next-gen-protection.html' },
            { id: '3-2', title: 'Attack Surface Reduction', file: '3-2-attack-surface-reduction.html' },
            { id: '3-3', title: 'ASR Rule Reference', file: '3-3-asr-rule-reference.html' },
            { id: '3-4', title: 'Controlled Folder Access', file: '3-4-controlled-folder-access.html' },
            { id: '3-5', title: 'Exploit Protection', file: '3-5-exploit-protection.html' },
            { id: '3-6', title: 'Network Protection', file: '3-6-network-protection.html' },
            { id: '3-7', title: 'Device Control', file: '3-7-device-control.html' },
            { id: '3-8', title: 'Firewall Integration', file: '3-8-firewall-integration.html' },
            { id: '3-9', title: 'Tamper Protection', file: '3-9-tamper-protection.html' },
            { id: '3-10', title: 'Exclusions Management', file: '3-10-exclusions-management.html' }
        ]
    },
    {
        id: 'detection',
        title: 'Detection & EDR',
        icon: '🔍',
        pages: [
            { id: '4-1', title: 'EDR Capabilities', file: '4-1-edr-capabilities.html' },
            { id: '4-2', title: 'Detection Sources', file: '4-2-detection-sources.html' },
            { id: '4-3', title: 'Alert Types', file: '4-3-alert-types.html' },
            { id: '4-4', title: 'Device Timeline', file: '4-4-device-timeline.html' },
            { id: '4-5', title: 'Live Response', file: '4-5-live-response.html' },
            { id: '4-6', title: 'Automated Investigation', file: '4-6-automated-investigation.html' },
            { id: '4-7', title: 'Custom Detections', file: '4-7-custom-detections.html' },
            { id: '4-8', title: 'Indicators (IOC)', file: '4-8-indicators-ioc.html' },
            { id: '4-9', title: 'Threat Intelligence', file: '4-9-threat-intelligence.html' },
            { id: '4-10', title: 'Detection Tuning', file: '4-10-detection-tuning.html' }
        ]
    },
    {
        id: 'hunting',
        title: 'Advanced Hunting',
        icon: '🎯',
        pages: [
            { id: '5-1', title: 'Hunting Overview', file: '5-1-advanced-hunting-overview.html' },
            { id: '5-2', title: 'Hunting Schema', file: '5-2-hunting-schema.html' },
            { id: '5-3', title: 'KQL Fundamentals', file: '5-3-kql-fundamentals.html' },
            { id: '5-4', title: 'KQL Advanced', file: '5-4-kql-advanced.html' },
            { id: '5-5', title: 'Hunting: Processes', file: '5-5-hunting-queries-processes.html' },
            { id: '5-6', title: 'Hunting: Network', file: '5-6-hunting-queries-network.html' },
            { id: '5-7', title: 'Hunting: Persistence', file: '5-7-hunting-queries-persistence.html' },
            { id: '5-8', title: 'Hunting: Credentials', file: '5-8-hunting-queries-credentials.html' },
            { id: '5-9', title: 'Hunting: Malware', file: '5-9-hunting-queries-malware.html' },
            { id: '5-10', title: 'Hunting Workflows', file: '5-10-hunting-workflows.html' }
        ]
    },
    {
        id: 'response',
        title: 'Response & Remediation',
        icon: '⚡',
        pages: [
            { id: '6-1', title: 'Response Actions Overview', file: '6-1-response-actions-overview.html' },
            { id: '6-2', title: 'Device Actions', file: '6-2-device-actions.html' },
            { id: '6-3', title: 'File Actions', file: '6-3-file-actions.html' },
            { id: '6-4', title: 'Automated Remediation', file: '6-4-automated-remediation.html' },
            { id: '6-5', title: 'IR Playbooks', file: '6-5-incident-response-playbooks.html' },
            { id: '6-6', title: 'Forensics & Evidence', file: '6-6-forensics-evidence.html' },
            { id: '6-7', title: 'Containment Strategies', file: '6-7-containment-strategies.html' },
            { id: '6-8', title: 'Recovery Procedures', file: '6-8-recovery-procedures.html' }
        ]
    },
    {
        id: 'vulnerability',
        title: 'Vulnerability Management',
        icon: '🔓',
        pages: [
            { id: '7-1', title: 'TVM Overview', file: '7-1-tvm-overview.html' },
            { id: '7-2', title: 'Vulnerability Assessment', file: '7-2-vulnerability-assessment.html' },
            { id: '7-3', title: 'Security Recommendations', file: '7-3-security-recommendations.html' },
            { id: '7-4', title: 'Software Inventory', file: '7-4-software-inventory.html' },
            { id: '7-5', title: 'Security Baselines', file: '7-5-security-baselines.html' },
            { id: '7-6', title: 'Exposure Insights', file: '7-6-exposure-insights.html' }
        ]
    },
    {
        id: 'integration',
        title: 'Integration & Automation',
        icon: '🔗',
        pages: [
            { id: '8-1', title: 'Microsoft 365 Defender', file: '8-1-microsoft-365-defender.html' },
            { id: '8-2', title: 'Sentinel Integration', file: '8-2-sentinel-integration.html' },
            { id: '8-3', title: 'Intune Integration', file: '8-3-intune-integration.html' },
            { id: '8-4', title: 'Defender for Cloud Apps', file: '8-4-defender-cloud-apps.html' },
            { id: '8-5', title: 'API Overview', file: '8-5-api-overview.html' },
            { id: '8-6', title: 'API Use Cases', file: '8-6-api-use-cases.html' },
            { id: '8-7', title: 'Logic Apps Automation', file: '8-7-logic-apps-automation.html' },
            { id: '8-8', title: 'SIEM Integration', file: '8-8-siem-integration.html' }
        ]
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting & Health',
        icon: '🔧',
        pages: [
            { id: '9-1', title: 'Sensor Health', file: '9-1-sensor-health.html' },
            { id: '9-2', title: 'Connectivity Troubleshooting', file: '9-2-connectivity-troubleshooting.html' },
            { id: '9-3', title: 'Onboarding Troubleshooting', file: '9-3-onboarding-troubleshooting.html' },
            { id: '9-4', title: 'Performance Issues', file: '9-4-performance-issues.html' },
            { id: '9-5', title: 'Protection Issues', file: '9-5-protection-issues.html' },
            { id: '9-6', title: 'Client Analyzer', file: '9-6-client-analyzer.html' }
        ]
    },
    {
        id: 'enterprise',
        title: 'Enterprise Deployment',
        icon: '🏢',
        pages: [
            { id: '10-1', title: 'Deployment Planning', file: '10-1-deployment-planning.html' },
            { id: '10-2', title: 'Deployment Rings', file: '10-2-deployment-rings.html' },
            { id: '10-3', title: 'Group Policy Settings', file: '10-3-group-policy-settings.html' },
            { id: '10-4', title: 'Intune Policies', file: '10-4-intune-policies.html' },
            { id: '10-5', title: 'Migration Strategies', file: '10-5-migration-strategies.html' },
            { id: '10-6', title: 'Multi-Tenant Management', file: '10-6-multi-tenant-management.html' }
        ]
    },
    {
        id: 'secops',
        title: 'Security Operations',
        icon: '📊',
        pages: [
            { id: '11-1', title: 'SOC Workflows', file: '11-1-soc-workflows.html' },
            { id: '11-2', title: 'Metrics & KPIs', file: '11-2-metrics-kpis.html' },
            { id: '11-3', title: 'Reporting to Stakeholders', file: '11-3-reporting-stakeholders.html' },
            { id: '11-4', title: 'Continuous Improvement', file: '11-4-continuous-improvement.html' },
            { id: '11-5', title: 'Managed Services', file: '11-5-managed-services.html' }
        ]
    },
    {
        id: 'reference',
        title: 'Reference & Interview',
        icon: '📚',
        pages: [
            { id: '12-1', title: 'MDE Glossary', file: '12-1-mde-glossary.html' },
            { id: '12-2', title: 'Interview Questions', file: '12-2-interview-questions.html' },
            { id: '12-3', title: 'Scenario Walkthroughs', file: '12-3-scenario-walkthroughs.html' },
            { id: '12-4', title: 'KQL Cheat Sheet', file: '12-4-kql-cheat-sheet.html' },
            { id: '12-5', title: 'PowerShell Reference', file: '12-5-powershell-reference.html' },
            { id: '12-6', title: 'Comparison Tables', file: '12-6-comparison-tables.html' }
        ]
    }
];

// DOM Elements
let sidebar, sidebarOverlay, mobileMenuBtn, searchBtn, searchModal, searchInput, searchResults;

// State
let currentPage = null;
let searchIndex = [];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    buildSidebar();
    buildSearchIndex();
    initializeEventListeners();
    setActivePage();
});

// Initialize DOM element references
function initializeElements() {
    sidebar = document.querySelector('.sidebar');
    sidebarOverlay = document.querySelector('.sidebar-overlay');
    mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    searchBtn = document.querySelector('.search-btn');
    searchModal = document.querySelector('.search-modal');
    searchInput = document.querySelector('.search-modal-input');
    searchResults = document.querySelector('.search-results');
}

// Build the sidebar navigation
function buildSidebar() {
    if (!sidebar) return;

    const nav = document.createElement('nav');
    nav.className = 'sidebar-nav';

    navigationData.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'sidebar-section';
        sectionEl.dataset.section = section.id;

        // Section header
        const header = document.createElement('div');
        header.className = 'section-header';
        header.innerHTML = `
            <span class="section-title">
                <span class="section-icon">${section.icon}</span>
                ${section.title}
            </span>
            <span class="section-arrow">▶</span>
        `;
        header.addEventListener('click', () => toggleSection(sectionEl));

        // Section links
        const links = document.createElement('div');
        links.className = 'section-links';
        
        section.pages.forEach(page => {
            const link = document.createElement('a');
            link.className = 'nav-link';
            link.href = page.file;
            link.dataset.pageId = page.id;
            link.innerHTML = `
                <span class="page-num">${page.id}</span>
                ${page.title}
            `;
            links.appendChild(link);
        });

        sectionEl.appendChild(header);
        sectionEl.appendChild(links);
        nav.appendChild(sectionEl);
    });

    sidebar.appendChild(nav);
}

// Toggle section open/close
function toggleSection(sectionEl) {
    sectionEl.classList.toggle('open');
}

// Build search index from navigation data
function buildSearchIndex() {
    navigationData.forEach(section => {
        section.pages.forEach(page => {
            searchIndex.push({
                section: section.title,
                sectionIcon: section.icon,
                title: page.title,
                id: page.id,
                file: page.file,
                searchText: `${section.title} ${page.title} ${page.id}`.toLowerCase()
            });
        });
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Sidebar overlay click
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMobileMenu);
    }

    // Search button
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearch);
    }

    // Search modal
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', handleSearchKeydown);
    }

    // Close search button
    const closeSearchBtn = document.querySelector('.search-modal-close');
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', closeSearch);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleGlobalKeydown);

    // Copy code buttons
    document.querySelectorAll('.code-copy').forEach(btn => {
        btn.addEventListener('click', handleCodeCopy);
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Search functions
function openSearch() {
    searchModal.classList.add('active');
    searchInput.focus();
    searchInput.value = '';
    renderSearchResults('');
}

function closeSearch() {
    searchModal.classList.remove('active');
    searchInput.value = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    renderSearchResults(query);
}

function renderSearchResults(query) {
    if (!searchResults) return;

    if (!query) {
        // Show all pages grouped by section
        let html = '';
        navigationData.forEach(section => {
            html += `<div class="search-section-header">${section.icon} ${section.title}</div>`;
            section.pages.slice(0, 3).forEach(page => {
                html += createSearchResultItem(section, page);
            });
        });
        searchResults.innerHTML = html;
        return;
    }

    const results = searchIndex.filter(item => item.searchText.includes(query));

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No pages found matching your search.</div>';
        return;
    }

    searchResults.innerHTML = results.map(result => `
        <a href="${result.file}" class="search-result-item">
            <div class="search-result-section">${result.sectionIcon} ${result.section}</div>
            <div class="search-result-title">${highlightMatch(result.title, query)}</div>
        </a>
    `).join('');
}

function createSearchResultItem(section, page) {
    return `
        <a href="${page.file}" class="search-result-item">
            <div class="search-result-section">${section.icon} ${section.title}</div>
            <div class="search-result-title">${page.title}</div>
        </a>
    `;
}

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function handleSearchKeydown(e) {
    const items = searchResults.querySelectorAll('.search-result-item');
    const selected = searchResults.querySelector('.search-result-item.selected');
    let index = Array.from(items).indexOf(selected);

    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            if (selected) selected.classList.remove('selected');
            index = (index + 1) % items.length;
            items[index]?.classList.add('selected');
            items[index]?.scrollIntoView({ block: 'nearest' });
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (selected) selected.classList.remove('selected');
            index = index <= 0 ? items.length - 1 : index - 1;
            items[index]?.classList.add('selected');
            items[index]?.scrollIntoView({ block: 'nearest' });
            break;
        case 'Enter':
            e.preventDefault();
            if (selected) {
                window.location.href = selected.href;
            } else if (items[0]) {
                window.location.href = items[0].href;
            }
            break;
        case 'Escape':
            closeSearch();
            break;
    }
}

// Global keyboard shortcuts
function handleGlobalKeydown(e) {
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    // Escape to close search
    if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
        closeSearch();
    }
}

// Code copy functionality
function handleCodeCopy(e) {
    const btn = e.currentTarget;
    const codeBlock = btn.closest('.code-block');
    const code = codeBlock.querySelector('code')?.textContent || 
                 codeBlock.querySelector('pre')?.textContent || '';

    navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '✓ Copied';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '📋 Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Set active page in sidebar
function setActivePage() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    // Find and activate current page link
    const activeLink = document.querySelector(`.nav-link[href="${currentFile}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        
        // Open the parent section
        const section = activeLink.closest('.sidebar-section');
        if (section) {
            section.classList.add('open');
        }
    }
}

// Get adjacent pages for navigation
function getAdjacentPages(currentPageId) {
    let allPages = [];
    navigationData.forEach(section => {
        section.pages.forEach(page => {
            allPages.push({
                ...page,
                section: section.title
            });
        });
    });

    const currentIndex = allPages.findIndex(p => p.id === currentPageId);
    
    return {
        prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
        next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
    };
}

// Utility: Generate page navigation HTML
function generatePageNav(currentPageId) {
    const { prev, next } = getAdjacentPages(currentPageId);
    
    let html = '<nav class="page-nav">';
    
    if (prev) {
        html += `
            <a href="${prev.file}" class="page-nav-link prev">
                <span class="page-nav-label">← Previous</span>
                <span class="page-nav-title">${prev.title}</span>
            </a>
        `;
    } else {
        html += '<div></div>';
    }
    
    if (next) {
        html += `
            <a href="${next.file}" class="page-nav-link next">
                <span class="page-nav-label">Next →</span>
                <span class="page-nav-title">${next.title}</span>
            </a>
        `;
    }
    
    html += '</nav>';
    return html;
}

// KQL Syntax Highlighting
function highlightKQL(code) {
    const keywords = ['where', 'project', 'summarize', 'extend', 'join', 'union', 'let', 'order', 'by', 'top', 'take', 'count', 'distinct', 'render', 'sort', 'asc', 'desc', 'on', 'kind', 'inner', 'outer', 'leftouter', 'rightouter', 'fullouter', 'ago', 'now', 'datetime', 'timespan', 'true', 'false', 'and', 'or', 'not', 'in', 'has', 'contains', 'startswith', 'endswith', 'matches', 'regex'];
    const functions = ['count', 'sum', 'avg', 'min', 'max', 'percentile', 'dcount', 'make_set', 'make_list', 'strcat', 'split', 'parse', 'extract', 'replace', 'tolower', 'toupper', 'trim', 'strlen', 'substring', 'indexof', 'bin', 'floor', 'ceiling', 'round', 'tostring', 'toint', 'tolong', 'todatetime', 'totimespan', 'format_datetime', 'datetime_diff', 'datetime_add', 'iif', 'iff', 'case', 'coalesce', 'isempty', 'isnotempty', 'isnull', 'isnotnull', 'pack', 'bag_pack', 'parse_json', 'toarray'];
    
    // Escape HTML
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Comments
    code = code.replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
    
    // Strings
    code = code.replace(/("[^"]*"|'[^']*')/g, '<span class="string">$1</span>');
    
    // Numbers
    code = code.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="number">$1</span>');
    
    // Functions
    const funcRegex = new RegExp(`\\b(${functions.join('|')})\\s*\\(`, 'gi');
    code = code.replace(funcRegex, '<span class="function">$1</span>(');
    
    // Keywords
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    code = code.replace(keywordRegex, '<span class="keyword">$1</span>');
    
    // Operators
    code = code.replace(/(\||\=\=|\!\=|\=\~|\!\~|&gt;|&lt;|&gt;=|&lt;=|\+|\-|\*|\/|\%)/g, '<span class="operator">$1</span>');
    
    // Table names (capitalized words at start of query)
    code = code.replace(/^([A-Z][a-zA-Z]+(?:Events?|Info|Evidence)?)/gm, '<span class="variable">$1</span>');
    
    return code;
}

// PowerShell Syntax Highlighting
function highlightPowerShell(code) {
    // Escape HTML
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Comments
    code = code.replace(/(#.*$)/gm, '<span class="comment">$1</span>');
    
    // Strings
    code = code.replace(/("[^"]*"|'[^']*')/g, '<span class="string">$1</span>');
    
    // Variables
    code = code.replace(/(\$\w+)/g, '<span class="variable">$1</span>');
    
    // Cmdlets
    code = code.replace(/\b([A-Z][a-z]+\-[A-Z][a-zA-Z]+)\b/g, '<span class="function">$1</span>');
    
    // Keywords
    const keywords = ['if', 'else', 'elseif', 'foreach', 'for', 'while', 'do', 'switch', 'try', 'catch', 'finally', 'return', 'break', 'continue', 'function', 'param', 'begin', 'process', 'end'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    code = code.replace(keywordRegex, '<span class="keyword">$1</span>');
    
    return code;
}

// JSON Syntax Highlighting
function highlightJSON(code) {
    // Escape HTML
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Keys
    code = code.replace(/"([^"]+)":/g, '<span class="variable">"$1"</span>:');
    
    // String values
    code = code.replace(/:\s*"([^"]*)"/g, ': <span class="string">"$1"</span>');
    
    // Numbers
    code = code.replace(/:\s*(\d+(?:\.\d+)?)/g, ': <span class="number">$1</span>');
    
    // Booleans and null
    code = code.replace(/:\s*(true|false|null)/gi, ': <span class="keyword">$1</span>');
    
    return code;
}

// Export for use in other scripts
window.MDEGuide = {
    navigationData,
    getAdjacentPages,
    generatePageNav,
    highlightKQL,
    highlightPowerShell,
    highlightJSON,
    openSearch,
    closeSearch
};
