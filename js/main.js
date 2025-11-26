/**
 * Microsoft Defender for Endpoint - Ultimate Guide
 * Main JavaScript File
 */

// ============================================
// NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-nav');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // Set active navigation based on current page
    setActiveNavigation();
    
    // Initialize all components
    initTabs();
    initAccordions();
    initCodeBlocks();
    initSidebarScroll();
    initSmoothScroll();
});

// ============================================
// SET ACTIVE NAVIGATION
// ============================================
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// TABS FUNCTIONALITY
// ============================================
function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs');
    
    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('.tab-button');
        const panels = container.querySelectorAll('.tab-panel');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');
                
                // Remove active from all buttons and panels
                buttons.forEach(btn => btn.classList.remove('active'));
                panels.forEach(panel => panel.classList.remove('active'));
                
                // Add active to clicked button and corresponding panel
                this.classList.add('active');
                const targetPanel = container.querySelector(`#${targetId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    });
}

// ============================================
// ACCORDION FUNCTIONALITY
// ============================================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Optional: Close other accordions in the same group
            const accordion = item.parentElement;
            if (accordion.classList.contains('accordion-single')) {
                accordion.querySelectorAll('.accordion-item').forEach(accItem => {
                    accItem.classList.remove('active');
                });
            }
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// CODE BLOCK COPY FUNCTIONALITY
// ============================================
function initCodeBlocks() {
    const copyButtons = document.querySelectorAll('.code-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.closest('.code-block');
            const code = codeBlock.querySelector('code');
            
            if (code) {
                const text = code.textContent;
                copyToClipboard(text, this);
            }
        });
    });
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--accent-success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = 'Failed';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// ============================================
// SIDEBAR SCROLL SPY
// ============================================
function initSidebarScroll() {
    const sidebarLinks = document.querySelectorAll('.sidebar-links a[href^="#"]');
    
    if (sidebarLinks.length === 0) return;
    
    const sections = [];
    sidebarLinks.forEach(link => {
        const targetId = link.getAttribute('href').slice(1);
        const section = document.getElementById(targetId);
        if (section) {
            sections.push({ link, section });
        }
    });
    
    function updateActiveSection() {
        const scrollPos = window.scrollY + 150;
        
        let activeSection = null;
        sections.forEach(({ link, section }) => {
            if (section.offsetTop <= scrollPos) {
                activeSection = { link, section };
            }
        });
        
        sidebarLinks.forEach(link => link.classList.remove('active'));
        if (activeSection) {
            activeSection.link.classList.add('active');
        }
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// KQL SYNTAX HIGHLIGHTING
// ============================================
function highlightKQL(code) {
    // KQL Keywords
    const keywords = ['let', 'where', 'project', 'extend', 'summarize', 'by', 'join', 'on', 'union', 
                      'take', 'top', 'order', 'sort', 'asc', 'desc', 'render', 'distinct', 'count',
                      'evaluate', 'parse', 'mv-expand', 'make-series', 'between', 'and', 'or', 'not',
                      'contains', 'startswith', 'endswith', 'has', 'has_any', 'in', 'matches regex'];
    
    // KQL Functions
    const functions = ['ago', 'now', 'datetime', 'timespan', 'bin', 'floor', 'ceiling', 'round',
                       'strlen', 'substring', 'split', 'strcat', 'tolower', 'toupper', 'trim',
                       'parse_json', 'tostring', 'toint', 'todouble', 'tobool', 'coalesce',
                       'iif', 'iff', 'case', 'isempty', 'isnotempty', 'isnull', 'isnotnull',
                       'count', 'sum', 'avg', 'min', 'max', 'percentile', 'dcount', 'countif',
                       'arg_max', 'arg_min', 'make_list', 'make_set', 'mv-expand'];
    
    // Common MDE Tables
    const tables = ['DeviceProcessEvents', 'DeviceNetworkEvents', 'DeviceFileEvents', 
                    'DeviceRegistryEvents', 'DeviceLogonEvents', 'DeviceImageLoadEvents',
                    'DeviceEvents', 'AlertInfo', 'AlertEvidence', 'DeviceInfo',
                    'DeviceTvmSoftwareVulnerabilities', 'DeviceTvmSecureConfigurationAssessment',
                    'EmailEvents', 'IdentityLogonEvents', 'CloudAppEvents'];
    
    let highlighted = code;
    
    // Highlight strings
    highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="kql-string">$&</span>');
    
    // Highlight comments
    highlighted = highlighted.replace(/\/\/.*/g, '<span class="kql-comment">$&</span>');
    
    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="kql-number">$1</span>');
    
    // Highlight keywords (case insensitive)
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
        highlighted = highlighted.replace(regex, '<span class="kql-keyword">$1</span>');
    });
    
    // Highlight functions
    functions.forEach(func => {
        const regex = new RegExp(`\\b(${func})\\s*\\(`, 'gi');
        highlighted = highlighted.replace(regex, '<span class="kql-function">$1</span>(');
    });
    
    // Highlight tables
    tables.forEach(table => {
        const regex = new RegExp(`\\b(${table})\\b`, 'g');
        highlighted = highlighted.replace(regex, '<span class="kql-table">$1</span>');
    });
    
    return highlighted;
}

// Apply KQL highlighting to all KQL code blocks
document.addEventListener('DOMContentLoaded', function() {
    const kqlBlocks = document.querySelectorAll('code.language-kql, pre.kql code');
    kqlBlocks.forEach(block => {
        block.innerHTML = highlightKQL(block.textContent);
    });
});

// ============================================
// SEARCH FUNCTIONALITY (for future use)
// ============================================
function searchContent(query) {
    const searchResults = [];
    const content = document.querySelectorAll('h2, h3, h4, p, li, td');
    
    const lowerQuery = query.toLowerCase();
    
    content.forEach(element => {
        if (element.textContent.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
                element: element,
                text: element.textContent.substring(0, 200),
                section: element.closest('section')?.id || 'main'
            });
        }
    });
    
    return searchResults;
}

// ============================================
// TABLE OF CONTENTS GENERATOR
// ============================================
function generateTOC(containerSelector, headingSelector = 'h2, h3') {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const headings = document.querySelectorAll(headingSelector);
    const toc = document.createElement('ul');
    toc.className = 'toc-list';
    
    headings.forEach((heading, index) => {
        // Generate ID if not exists
        if (!heading.id) {
            heading.id = `section-${index}`;
        }
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        
        if (heading.tagName === 'H3') {
            li.className = 'toc-sub';
        }
        
        li.appendChild(a);
        toc.appendChild(li);
    });
    
    container.appendChild(toc);
}

// ============================================
// PROGRESS BAR (Reading Progress)
// ============================================
function initProgressBar() {
    const progressBar = document.querySelector('.reading-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Escape HTML to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
