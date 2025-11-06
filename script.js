document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing app');
    
    // --- Select DOM elements ---
    const menuButton = document.getElementById('menuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const categoriesNav = document.getElementById('categoriesNav');
    const overlay = document.getElementById('overlay');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const backToTopBtn = document.getElementById("backToTop");
    const toolsContainer = document.getElementById('tools-container');
    
    // AI Assistant elements
    const assistantTextarea = document.getElementById('ai-assistant-textarea');
    const assistantButton = document.getElementById('ai-assistant-button');
    const assistantResults = document.getElementById('ai-assistant-results');
    const assistantSpinner = document.getElementById('ai-assistant-spinner');

    console.log('Elements selected:', {
        menuButton: !!menuButton,
        categoriesNav: !!categoriesNav,
        categoryButtons: categoryButtons.length,
        searchInput: !!searchInput
    });

    // --- Generate Tools from Data ---
    function generateTools() {
        console.log('Generating tools...');
        toolsContainer.innerHTML = '';
        
        for (const [categoryId, tools] of Object.entries(toolsData)) {
            const category = categoryInfo[categoryId];
            const section = document.createElement('section');
            section.className = 'tools-section';
            section.id = categoryId;
            
            section.innerHTML = `
                <h2 class="section-title">${category.name}</h2>
                <div class="tools-grid" id="grid-${categoryId}">
                    ${tools.map(tool => `
                        <div class="tool-card" data-category="${categoryId}" data-tool-name="${tool.name.toLowerCase()}" data-tool-desc="${tool.description.toLowerCase()}">
                            <div class="tool-icon"><i class="${tool.icon}"></i></div>
                            <h3>${tool.name}</h3>
                            <p>${tool.description}</p>
                            <a href="${tool.link}" target="_blank" class="btn">Open Tool</a>
                        </div>
                    `).join('')}
                </div>
            `;
            
            toolsContainer.appendChild(section);
        }
        console.log('Tools generation completed');
    }

    // Get all tool cards after generation
    function getAllToolCards() {
        return document.querySelectorAll('.tool-card');
    }

    // Get all tool sections
    function getToolSections() {
        return document.querySelectorAll('.tools-section');
    }

    // --- Menu Open/Close Functions ---
    function openMenu() {
        console.log('Opening menu');
        categoriesNav.classList.add('open');
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        console.log('Closing menu');
        categoriesNav.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // --- Filtering Function (for categories and search) ---
    function filterView() {
        const query = searchInput.value.toLowerCase().trim();
        const activeCategoryButton = document.querySelector('.category-btn.active');
        const activeCategory = activeCategoryButton ? activeCategoryButton.getAttribute('data-category') : 'all';
        const allToolCards = getAllToolCards();
        const toolSections = getToolSections();

        console.log('Filtering - Category:', activeCategory, 'Query:', query);

        let visibleCardsCount = 0;

        // 1. Filter individual cards based on search query and category
        allToolCards.forEach(card => {
            const toolName = card.getAttribute('data-tool-name');
            const toolDesc = card.getAttribute('data-tool-desc');
            const cardCategory = card.getAttribute('data-category');
            
            const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
            const searchMatch = query === '' || toolName.includes(query) || toolDesc.includes(query);
            
            const shouldShow = categoryMatch && searchMatch;
            card.style.display = shouldShow ? 'flex' : 'none';
            
            if (shouldShow) visibleCardsCount++;
        });

        // 2. Filter the SECTIONS based on whether they have visible cards
        toolSections.forEach(section => {
            const sectionId = section.id;
            const visibleCardsInSection = section.querySelectorAll('.tool-card[style*="display: flex"]');
            
            if (activeCategory === 'all' || sectionId === activeCategory) {
                section.style.display = visibleCardsInSection.length > 0 ? 'block' : 'none';
            } else {
                section.style.display = 'none';
            }
        });

        console.log('Visible cards:', visibleCardsCount);
        
        // Show message if no results
        showNoResultsMessage(visibleCardsCount === 0);
    }

    function showNoResultsMessage(show) {
        let message = document.getElementById('no-results-message');
        
        if (show && !message) {
            message = document.createElement('div');
            message.id = 'no-results-message';
            message.style.textAlign = 'center';
            message.style.padding = '3rem';
            message.style.color = 'var(--gray)';
            message.innerHTML = `
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No tools found</h3>
                <p>Try adjusting your search or selecting a different category</p>
            `;
            toolsContainer.appendChild(message);
        } else if (!show && message) {
            message.remove();
        }
    }

    // --- Gemini API Call Function ---
    async function getAiToolSuggestions(userTask, retries = 3, delay = 1000) {
        assistantButton.disabled = true;
        assistantSpinner.style.display = 'block';
        assistantResults.textContent = 'Thinking...';
        assistantResults.style.color = 'var(--gray)';

        try {
            // 1. Get the current list of tools
            const allToolCards = getAllToolCards();
            const toolList = Array.from(allToolCards).map(card => {
                const name = card.dataset.toolName || card.querySelector('h3').textContent;
                const desc = card.dataset.toolDesc || card.querySelector('p').textContent;
                const category = card.dataset.category;
                const categoryName = categoryInfo[category]?.name || category;
                return `- ${name} (${categoryName}): ${desc}`;
            }).join('\n');

            // 2. Construct the prompt
            const systemPrompt = `You are an expert research assistant. Your goal is to help users find the most relevant tools for their tasks from a provided list. Analyze the user's task description and suggest 3-5 tools from the list below. For each suggestion, provide the tool name and a brief (1-2 sentences) explanation of why it's suitable for the user's task. Only suggest tools present in the list. Do not make up tools. Format your response clearly.`;
            const userQuery = `Here is the list of available tools:\n${toolList}\n\nMy task is: ${userTask}\n\nPlease suggest the best tools for my task and explain why.`;
            
            // Note: You'll need to add your actual API key here
            const apiKey = "YOUR_API_KEY_HERE";
            
            if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
                throw new Error('Please add your Gemini API key to the script.js file');
            }
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

            const payload = {
                contents: [{
                    parts: [{
                        text: `${systemPrompt}\n\n${userQuery}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800,
                }
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                if (response.status === 429 && retries > 0) {
                    console.warn(`Rate limited. Retrying in ${delay / 1000}s... (${retries} retries left)`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return getAiToolSuggestions(userTask, retries - 1, delay * 2);
                }
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                assistantResults.textContent = text;
                assistantResults.style.color = 'var(--dark)';
            } else {
                throw new Error('No text in response');
            }

        } catch (error) {
            console.error('Error fetching AI suggestions:', error);
            assistantResults.textContent = `Sorry, I couldn't get suggestions right now. Please try again later. Error: ${error.message}`;
            assistantResults.style.color = 'var(--accent)';
        } finally {
            assistantButton.disabled = false;
            assistantSpinner.style.display = 'none';
        }
    }

    // --- Event Listeners ---

    // Menu interactions
    if (menuButton) {
        menuButton.addEventListener('click', openMenu);
    } else {
        console.error('Menu button not found');
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Category button clicks
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Category clicked:', e.target.getAttribute('data-category'));
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterView();
            closeMenu();
        });
    });

    // Search interactions
    if (searchButton) {
        searchButton.addEventListener('click', filterView);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterView);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                filterView();
            }
        });
    }

    // AI Assistant Button Click
    if (assistantButton) {
        assistantButton.addEventListener('click', () => {
            const userTask = assistantTextarea.value.trim();
            if (userTask) {
                getAiToolSuggestions(userTask);
            } else {
                assistantResults.textContent = 'Please describe your task or goal in the text box above.';
                assistantResults.style.color = 'var(--accent)';
            }
        });
    }

    // Back to top button
    window.onscroll = function() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Prevent clicks inside menu from closing it
    if (categoriesNav) {
        categoriesNav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // --- Initial Load ---
    console.log('Starting initial load...');
    generateTools();
    filterView(); // Run filter once on load
    console.log('Initial load completed');
});