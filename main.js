/* ============================================
   MDE Ultimate Guide - JavaScript
   ============================================ */

// Navigation Structure
const navStructure = [
    {
        title: "MDE Fundamentals",
        icon: "🏗️",
        items: [
            { title: "MDE Overview", href: "1-1-mde-overview.html" },
            { title: "Architecture", href: "1-2-mde-architecture.html" },
            { title: "Deployment Options", href: "1-3-deployment-options.html" },
            { title: "Onboarding Windows", href: "1-4-onboarding-windows.html" },
            { title: "Onboarding macOS", href: "1-5-onboarding-macos.html" },
            { title: "Onboarding Linux", href: "1-6-onboarding-linux.html" },
            { title: "Onboarding Mobile", href: "1-7-onboarding-mobile.html" },
            { title: "Offboarding", href: "1-8-offboarding.html" }
        ]
    },
    {
        title: "Security Portal",
        icon: "🖥️",
        items: [
            { title: "Portal Overview", href: "2-1-security-portal-overview.html" },
            { title: "Device Inventory", href: "2-2-device-inventory.html" },
            { title: "Alerts Queue", href: "2-3-alerts-queue.html" },
            { title: "Incidents", href: "2-4-incidents.html" },
            { title: "Action Center", href: "2-5-action-center.html" },
            { title: "Threat Analytics", href: "2-6-threat-analytics.html" },
            { title: "Reports & Dashboards", href: "2-7-reports-dashboards.html" },
            { title: "Settings", href: "2-8-settings-configuration.html" }
        ]
    },
    {
        title: "Next-Gen Protection",
        icon: "🛡️",
        items: [
            { title: "Real-time Protection", href: "3-1-realtime-protection.html" },
            { title: "Attack Surface Reduction", href: "3-2-attack-surface-reduction.html" },
            { title: "ASR Rule Reference", href: "3-3-asr-rule-reference.html" },
            { title: "Controlled Folder Access", href: "3-3-controlled-folder-access.html" },
            { title: "Exploit Protection", href: "3-4-exploit-protection.html" },
            { title: "Network Protection", href: "3-5-network-protection.html" },
            { title: "Device Control", href: "3-7-device-control.html" },
            { title: "Firewall Integration", href: "3-8-firewall-integration.html" },
            { title: "Tamper Protection", href: "3-9-tamper-protection.html" },
            { title: "Exclusions Management", href: "3-10-exclusions-management.html" }
        ]
    },
    {
        title: "EDR Capabilities",
        icon: "🔬",
        items: [
            { title: "EDR Overview", href: "4-1-edr-overview.html" },
            { title: "Detection Sources", href: "4-2-detection-sources.html" },
            { title: "Alert Types", href: "4-3-alert-types.html" },
            { title: "Device Timeline", href: "4-4-device-timeline.html" },
            { title: "Live Response", href: "4-5-live-response.html" },
            { title: "Automated Investigation", href: "4-6-automated-investigation.html" },
            { title: "Custom Detections", href: "4-7-custom-detections.html" },
            { title: "Indicators (IoC)", href: "4-8-indicators-ioc.html" },
            { title: "Threat Intelligence", href: "4-9-threat-intelligence.html" },
            { title: "Detection Tuning", href: "4-10-detection-tuning.html" }
        ]
    },
    {
        title: "Advanced Hunting",
        icon: "🔍",
        items: [
            { title: "Hunting Overview", href: "5-1-advanced-hunting-overview.html" },
            { title: "Schema Reference", href: "5-2-schema-reference.html" },
            { title: "KQL Fundamentals", href: "5-3-kql-fundamentals.html" },
            { title: "KQL Advanced", href: "5-4-kql-advanced.html" },
            { title: "Process Hunting", href: "5-5-hunting-queries-processes.html" },
            { title: "Network Hunting", href: "5-6-hunting-queries-network.html" },
            { title: "Persistence Hunting", href: "5-7-hunting-queries-persistence.html" },
            { title: "Credential Hunting", href: "5-8-hunting-queries-credentials.html" },
            { title: "Malware Hunting", href: "5-9-hunting-queries-malware.html" },
            { title: "Hunting Workflows", href: "5-10-hunting-workflows.html" }
        ]
    },
    {
        title: "Incident Response",
        icon: "⚡",
        items: [
            { title: "Response Actions", href: "6-1-remediation-actions.html" },
            { title: "Device Actions", href: "6-2-device-actions.html" },
            { title: "File Actions", href: "6-3-file-actions.html" },
            { title: "Automated Remediation", href: "6-4-automated-remediation.html" },
            { title: "IR Playbooks", href: "6-5-incident-response-playbooks.html" },
            { title: "Forensics Evidence", href: "6-6-forensics-evidence.html" },
            { title: "Containment", href: "6-7-containment-strategies.html" },
            { title: "Recovery Procedures", href: "6-8-recovery-procedures.html" }
        ]
    },
    {
        title: "TVM",
        icon: "📊",
        items: [
            { title: "TVM Overview", href: "7-1-tvm-overview.html" },
            { title: "Vulnerability Assessment", href: "7-2-vulnerability-assessment.html" },
            { title: "Security Recommendations", href: "7-3-security-recommendations.html" },
            { title: "Software Inventory", href: "7-4-software-inventory.html" },
            { title: "Exposure Insights", href: "7-6-exposure-insights.html" }
        ]
    },
    {
        title: "Integrations",
        icon: "🔗",
        items: [
            { title: "M365 Defender", href: "8-1-microsoft-365-defender.html" },
            { title: "Sentinel Integration", href: "8-2-sentinel-integration.html" },
            { title: "Intune Integration", href: "8-3-intune-integration.html" },
            { title: "Cloud Apps", href: "8-4-cloud-apps-integration.html" },
            { title: "API Overview", href: "8-5-api-overview.html" },
            { title: "API Use Cases", href: "8-6-api-use-cases.html" },
            { title: "Logic Apps", href: "8-7-logic-apps-automation.html" },
            { title: "SIEM Integration", href: "8-8-siem-integration.html" }
        ]
    },
    {
        title: "Troubleshooting",
        icon: "🔧",
        items: [
            { title: "Sensor Health", href: "9-1-sensor-health.html" },
            { title: "Connectivity Issues", href: "9-2-connectivity-troubleshooting.html" },
            { title: "Onboarding Issues", href: "9-3-onboarding-troubleshooting.html" },
            { title: "Performance Issues", href: "9-4-performance-issues.html" },
            { title: "Protection Issues", href: "9-5-protection-issues.html" },
            { title: "Client Analyzer", href: "9-6-client-analyzer.html" }
        ]
    },
    {
        title: "Deployment",
        icon: "🚀",
        items: [
            { title: "Deployment Planning", href: "10-1-deployment-planning.html" },
            { title: "Deployment Rings", href: "10-2-deployment-rings.html" },
            { title: "Group Policy", href: "10-3-group-policy-settings.html" },
            { title: "Intune Policies", href: "10-4-intune-policies.html" },
            { title: "Migration Strategies", href: "10-5-migration-strategies.html" },
            { title: "Multi-Tenant", href: "10-6-multi-tenant-management.html" }
        ]
    },
    {
        title: "Operations",
        icon: "📈",
        items: [
            { title: "SOC Workflows", href: "11-1-soc-workflows.html" },
            { title: "Metrics & KPIs", href: "11-2-metrics-kpis.html" },
            { title: "Stakeholder Reporting", href: "11-3-reporting-stakeholders.html" },
            { title: "Continuous Improvement", href: "11-4-continuous-improvement.html" },
            { title: "Managed Services", href: "11-5-managed-services.html" }
        ]
    },
    {
        title: "Resources",
        icon: "📚",
        items: [
            { title: "Glossary", href: "12-1-mde-glossary.html" },
            { title: "Interview Questions", href: "12-2-interview-questions.html" },
            { title: "Scenario Walkthroughs", href: "12-3-scenario-walkthroughs.html" },
            { title: "KQL Cheat Sheet", href: "12-4-kql-cheat-sheet.html" },
            { title: "PowerShell Reference", href: "12-5-powershell-reference.html" },
            { title: "Comparison Tables", href: "12-6-comparison-tables.html" }
        ]
    }
];

// Build sidebar navigation
function buildSidebar() {
    const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar');
    if (!sidebar) return;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    let html = '<nav class="sidebar-nav">';
    
    navStructure.forEach((section, sectionIndex) => {
        const isCurrentSection = section.items.some(item => item.href === currentPage);
        const collapsedClass = isCurrentSection ? '' : 'collapsed';
        
        html += `
            <div class="nav-section ${collapsedClass}">
                <div class="nav-section-header ${isCurrentSection ? 'active' : ''}" onclick="toggleSection(this)">
                    <span>${section.icon} ${section.title}</span>
                    <span class="nav-section-icon">▼</span>
                </div>
                <div class="nav-section-items">
        `;
        
        section.items.forEach(item => {
            const isActive = item.href === currentPage;
            html += `<a href="${item.href}" class="nav-item ${isActive ? 'active' : ''}">${item.title}</a>`;
        });
        
        html += '</div></div>';
    });
    
    html += '</nav>';
    sidebar.innerHTML = html;
}

// Toggle section collapse
function toggleSection(header) {
    const section = header.parentElement;
    section.classList.toggle('collapsed');
}

// Mobile menu
function openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Mobile menu button
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }
});

// Search functionality
const searchIndex = [];

// Build search index from nav structure
navStructure.forEach(section => {
    section.items.forEach(item => {
        searchIndex.push({
            title: item.title,
            section: section.title,
            href: item.href
        });
    });
});

function openSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.add('active');
        const input = document.getElementById('searchInput');
        if (input) {
            input.focus();
            input.value = '';
        }
        showAllResults();
    }
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function showAllResults() {
    const results = document.getElementById('searchResults');
    if (!results) return;
    
    let html = '';
    searchIndex.forEach(item => {
        html += `
            <a href="${item.href}" class="search-result-item">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-section">${item.section}</div>
            </a>
        `;
    });
    results.innerHTML = html;
}

function performSearch(query) {
    const results = document.getElementById('searchResults');
    if (!results) return;
    
    if (!query.trim()) {
        showAllResults();
        return;
    }
    
    const filtered = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filtered.length === 0) {
        results.innerHTML = '<div class="search-no-results">No results found</div>';
        return;
    }
    
    let html = '';
    filtered.forEach(item => {
        html += `
            <a href="${item.href}" class="search-result-item">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-section">${item.section}</div>
            </a>
        `;
    });
    results.innerHTML = html;
}

// Search event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => performSearch(e.target.value));
    }
    
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    
    // Escape to close search
    if (e.key === 'Escape') {
        closeSearch();
        closeSidebar();
    }
});

// Code copy functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.code-copy').forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code');
            if (code) {
                try {
                    await navigator.clipboard.writeText(code.textContent);
                    btn.textContent = '✓ Copied!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.textContent = '📋 Copy';
                        btn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Copy failed:', err);
                }
            }
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
});
