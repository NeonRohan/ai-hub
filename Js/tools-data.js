// Tools data organized by category
const toolsData = {
    "ai-chatbots": [
        { name: "ChatGPT", description: "OpenAI's powerful AI assistant for dialogue, content creation, and problem solving.", icon: "fas fa-robot", link: "https://chat.openai.com/" },
        { name: "Gemini", description: "Google's AI chatbot for research and productivity with advanced reasoning capabilities.", icon: "fas fa-gem", link: "https://gemini.google.com/" },
        { name: "DeepSeek", description: "AI-powered chatbot with deep learning capabilities and advanced reasoning.", icon: "fas fa-brain", link: "https://chat.deepseek.com/" },
        { name: "Claude", description: "Anthropic's AI assistant for safe, intelligent responses and complex tasks.", icon: "fas fa-user-tie", link: "https://claude.ai/" },
        { name: "Copilot", description: "Microsoft's AI assistant integrated with Bing and Office tools for productivity.", icon: "fab fa-microsoft", link: "https://copilot.microsoft.com/" },
        { name: "Qwen", description: "Alibaba's AI chatbot with multilingual support and strong performance.", icon: "fas fa-comments", link: "https://qwen.ai/" },
        { name: "Kimi AI", description: "AI assistant for research and discussions with strong contextual understanding.", icon: "fas fa-headphones", link: "https://kimi.ai/" },
        { name: "Perplexity AI", description: "AI-powered search engine and chatbot with citation support.", icon: "fas fa-search", link: "https://www.perplexity.ai/" },
        { name: "AgentGPT", description: "Autonomous AI agent for task automation and complex problem solving.", icon: "fas fa-cogs", link: "https://agentgpt.reworkd.ai/" },
        { name: "Llama Tutor", description: "AI tutor from Meta's LLaMA model family for educational assistance.", icon: "fas fa-graduation-cap", link: "https://llama.meta.com/" },
        { name: "Phind", description: "AI search engine specifically designed for developers and technical questions.", icon: "fas fa-code", link: "https://www.phind.com/" },
        { name: "You.com", description: "AI-powered search engine and chatbot with conversational responses.", icon: "fas fa-user", link: "https://you.com/" },
        { name: "ThinkAny", description: "AI chatbot for creative and analytical tasks with advanced reasoning.", icon: "fas fa-lightbulb", link: "https://thinkany.ai/" },
        { name: "Zeny AI", description: "AI assistant for productivity and research with clean interface.", icon: "fas fa-leaf", link: "https://zeny.ai/" },
        { name: "NotebookLM", description: "Google's AI-powered note-taking assistant for research and organization.", icon: "fas fa-book", link: "https://www.notebooklm.google/" },
        { name: "Andi AI", description: "AI-powered chatbot and search engine with privacy focus.", icon: "fas fa-search-plus", link: "https://andisearch.com/" },
        { name: "DorkGPT", description: "AI tool for generating advanced search queries and prompts.", icon: "fas fa-terminal", link: "https://dorkgpt.com/" },

  { name: "Meta AI", description: "Meta's AI assistant integrated across their platforms and services.", icon: "fas fa-layer-group", link: "https://meta.com/" },
  { name: "Pi AI", description: "Personal AI assistant focused on conversational interaction and support.", icon: "fas fa-circle", link: "https://pi.ai/onboarding" },
  { name: "Grok", description: "xA's AI assistant with real-time knowledge and conversational capabilities.", icon: "fas fa-bolt", link: "https://grok.com/" },
  { name: "Zai", description: "AI assistant platform for various applications and use cases.", icon: "fas fa-sparkles", link: "https://z.ai" },
  { name: "MiniMax Agent AI", description: "MiniMax's AI agent platform for intelligent interactions.", icon: "fas fa-chess-queen", link: "https://agent.minimax.io" },
  { name: "Baichuan AI", description: "Baichuan's Ying Chat AI assistant with Chinese language focus.", icon: "fas fa-water", link: "https://ying.baichuan-ai.com/chat" },
  { name: "ERNIE Bot", description: "Baidu's Yiyan AI assistant with advanced language understanding.", icon: "fas fa-brain", link: "https://yiyan.baidu.com" },
  { name: "Baidu Chat", description: "Baidu's alternative AI chat platform and assistant.", icon: "fas fa-search", link: "https://chat.baidu.com" },
  { name: "Hugging Face", description: "Platform for AI models, datasets, and machine learning resources.", icon: "fas fa-heart", link: "https://huggingface.co" },
  { name: "LaChart", description: "AI charting and data visualization assistant platform.", icon: "fas fa-chart-bar", link: "https://lachart.ai" },
  { name: "Google DeepMind", description: "Google's AI research division and advanced AI systems.", icon: "fas fa-infinity", link: "https://deepmind.google" },
  { name: "Manus AI", description: "AI assistant platform for various intelligent applications.", icon: "fas fa-hand-point-right", link: "https://manus.im/" }


    ],
    "utility": [


  { name: "GitHub AI Tools", description: "GitHub's platform for AI and machine learning projects and tools.", icon: "fab fa-github", link: "https://github.com/" },
  { name: "Google Colab", description: "Google's Colaboratory for running Python notebooks in the cloud with AI capabilities.", icon: "fas fa-laptop-code", link: "https://colab.research.google.com" },

        { name: "PentestGPT", description: "AI-powered penetration testing assistant for cybersecurity professionals.", icon: "fas fa-shield-alt", link: "https://www.pentestgpt.com/" },
        { name: "Globe Explorer", description: "AI-powered global data visualization tool for geographic analysis.", icon: "fas fa-globe-americas", link: "https://globeexplorer.ai/" },
        { name: "TAAFT", description: "Comprehensive directory of AI tools organized by category and use case.", icon: "fas fa-th-large", link: "https://taaft.com/" },
        { name: "TinyURL", description: "Popular URL shortening service for creating compact web links.", icon: "fas fa-link", link: "https://tinyurl.com/" },
        { name: "Roadmap", description: "Platform providing career and learning roadmaps for various fields.", icon: "fas fa-road", link: "https://roadmap.sh/" },
        { name: "file.io", description: "Secure file-sharing platform for temporary file transfers.", icon: "fas fa-file-upload", link: "https://www.file.io/" },
        { name: "VirusTotal", description: "Online security tool for malware analysis and file scanning.", icon: "fas fa-virus", link: "https://www.virustotal.com/" }
    ],
    "research": [
        { name: "Researcher", description: "Platform for discovering and organizing academic research papers.", icon: "fas fa-search", link: "https://www.researcher-app.com/" },
        { name: "R Discovery", description: "AI-powered research discovery platform for academic papers.", icon: "fas fa-compass", link: "https://discovery.researcher.life/" },
        { name: "Research Journal", description: "Mobile app for managing and reading research papers on the go.", icon: "fas fa-book-open", link: "https://play.google.com/store/apps/details?id=com.app.infonium.research" },
        { name: "Researcher Core", description: "Comprehensive research management tool for academics.", icon: "fas fa-cube", link: "https://play.google.com/store/apps/details?id=com.darshan.researchcore" },
        { name: "JHSM Paper", description: "International Journal of Humanities, Social Sciences and Management.", icon: "fas fa-file-alt", link: "https://www.ijhssm.org/" },
        { name: "IEEE Xplore", description: "Digital library with scientific and technical content from IEEE.", icon: "fas fa-bolt", link: "https://ieeexplore.ieee.org/" },
        { name: "Iris.ai", description: "AI-powered research tool for scientific literature exploration.", icon: "fas fa-eye", link: "https://iris.ai/" },
        { name: "Connected Papers", description: "Visual tool to explore academic papers and their connections.", icon: "fas fa-project-diagram", link: "https://www.connectedpapers.com/" },
        { name: "Google Scholar", description: "Extensive search engine for scholarly literature across disciplines.", icon: "fas fa-graduation-cap", link: "https://scholar.google.com/" },
        { name: "Semantic Scholar", description: "AI-powered research tool for scientific literature with semantic analysis.", icon: "fas fa-search", link: "https://www.semanticscholar.org/" },
        { name: "ResearchRabbit", description: "Visual research discovery tool for exploring academic literature.", icon: "fas fa-rabbit", link: "https://www.researchrabbit.ai/" },
        { name: "Litmaps", description: "Research discovery tool that visualizes connections between papers.", icon: "fas fa-map", link: "https://www.litmaps.com/" },
        { name: "Consensus", description: "AI-powered tool for extracting insights from research papers.", icon: "fas fa-users", link: "https://consensus.app/" },
        { name: "CORE", description: "World's largest collection of open access research papers.", icon: "fas fa-database", link: "https://core.ac.uk/" },
        { name: "SciSpace", description: "AI-powered platform for reading and understanding research papers.", icon: "fas fa-rocket", link: "https://typeset.io/" },
        { name: "Elicit", description: "AI research assistant that helps automate research workflows.", icon: "fas fa-lightbulb", link: "https://elicit.org/" },
        { name: "Scholarcy", description: "AI tool for summarizing research articles and extracting key information.", icon: "fas fa-file-pdf", link: "https://www.scholarcy.com/" },
        { name: "LearningStudioAI", description: "AI-powered platform for creating educational content and courses.", icon: "fas fa-chalkboard-teacher", link: "https://learningstudioai.com/" }
    ],
    "pdf": [
        { name: "Library Genesis", description: "Massive database of scholarly articles, books, and research papers.", icon: "fas fa-book", link: "http://libgen.is/" },
        { name: "PDF Drive", description: "Search engine for PDF books and documents across various topics.", icon: "fas fa-file-pdf", link: "https://www.pdfdrive.com/" },
        { name: "WorldWideScience", description: "Global science gateway connecting to national and international databases.", icon: "fas fa-globe", link: "https://worldwidescience.org/" },
        { name: "JSTOR", description: "Digital library for academic journals, books, and primary sources.", icon: "fas fa-archive", link: "https://www.jstor.org/" },
        { name: "PubMed", description: "Database of biomedical literature from MEDLINE and other sources.", icon: "fas fa-heartbeat", link: "https://pubmed.ncbi.nlm.nih.gov/" },
        { name: "BASE", description: "Multidisciplinary search engine for academic open access web resources.", icon: "fas fa-search", link: "https://www.base-search.net/" },
        { name: "WorldCat", description: "World's largest network of library content and services.", icon: "fas fa-book-reader", link: "https://www.worldcat.org/" },
        { name: "PubMed Central", description: "Free archive of biomedical and life sciences journal literature.", icon: "fas fa-dna", link: "https://www.ncbi.nlm.nih.gov/pmc/" },
        { name: "Anna's Archive", description: "Search engine for shadow libraries with books and academic papers.", icon: "fas fa-archive", link: "https://annas-archive.org/" },
        { name: "Wayback Machine", description: "Digital archive of the World Wide Web and other information.", icon: "fas fa-history", link: "https://archive.org/web/" },
        { name: "WolframAlpha", description: "Computational knowledge engine for facts and data analysis.", icon: "fas fa-calculator", link: "https://www.wolframalpha.com/" },
        { name: "PDF Coffee", description: "Platform for sharing and discovering PDF documents.", icon: "fas fa-coffee", link: "https://pdfcoffee.com/" }
    ],
    "ai-research": [
        { name: "Aithor", description: "AI tool for academic writing and research assistance.", icon: "fas fa-robot", link: "https://aithor.co.in" },
        { name: "Humata", description: "AI tool for analyzing and summarizing research documents.", icon: "fas fa-file-alt", link: "https://www.humata.ai/" },
        { name: "Jenni AI", description: "AI writing assistant for academic papers and research content.", icon: "fas fa-pen-fancy", link: "https://jenni.ai/" },
        { name: "Paperpal", description: "AI tool for academic writing, editing, and language enhancement.", icon: "fas fa-feather-alt", link: "https://paperpal.com/" },
        { name: "Explainpaper", description: "AI tool that helps understand complex research papers.", icon: "fas fa-scroll", link: "https://www.explainpaper.com/" },
        { name: "ChatDOC", description: "AI tool for interacting with and extracting information from documents.", icon: "fas fa-comments", link: "https://chatdoc.com/" },
        { name: "OpenRead", description: "AI-powered platform for reading and analyzing academic papers.", icon: "fas fa-book-open", link: "https://www.openread.academy/" },
        { name: "Prompt Genie", description: "AI tool for generating effective prompts for various AI models.", icon: "fas fa-magic", link: "https://promptgenie.ai/" },
        { name: "Toolify", description: "Directory of AI tools organized by category and use case.", icon: "fas fa-toolbox", link: "https://toolify.ai/" },
        { name: "Akxploria", description: "AI tool exploration platform for discovering new AI applications.", icon: "fas fa-search", link: "https://www.aixploria.com/en/" },
        { name: "OrthoAI", description: "AI tool for orthopedic research and medical applications.", icon: "fas fa-bone", link: "https://www.orthoai.in/" },
        { name: "DorkGPT", description: "AI tool for generating advanced search queries and Google dorks.", icon: "fas fa-terminal", link: "https://www.dorkgpt.com/" },
        { name: "Tavily AI", description: "AI-powered search engine for research and information gathering.", icon: "fas fa-search", link: "https://tavily.com/" },
        { name: "Unstuck AI", description: "AI tool for overcoming creative blocks and generating ideas.", icon: "fas fa-lightbulb", link: "https://unstuck.ai/" },
        { name: "Plag.ai", description: "AI-powered plagiarism checker for academic and professional writing.", icon: "fas fa-copy", link: "https://www.plag.ai/" }
    ],
    "data": [
        { name: "Databricks", description: "Unified data analytics platform for massive-scale data engineering.", icon: "fas fa-database", link: "https://www.databricks.com/" },
        { name: "Nextnet", description: "Platform for data analytics and machine learning workflows.", icon: "fas fa-network-wired", link: "https://www.nextnet.ai/" },
        { name: "Kaggle", description: "Platform for data science competitions, datasets, and notebooks.", icon: "fas fa-chart-bar", link: "https://www.kaggle.com/" }
    ],
    "collaboration": [
        { name: "Zotero", description: "Free, easy-to-use tool to help you collect, organize, and cite research.", icon: "fas fa-bookmark", link: "https://www.zotero.org/" },
        { name: "Mendeley", description: "Reference manager and academic social network for researchers.", icon: "fas fa-book", link: "https://www.mendeley.com/" },
        { name: "Gamma", description: "AI-powered presentation tool for creating beautiful slides quickly.", icon: "fas fa-presentation", link: "https://gamma.app/" },
        { name: "Pitch", description: "Collaborative presentation software for creating pitch decks.", icon: "fas fa-bullhorn", link: "https://pitch.com/" },
        { name: "Napkin", description: "Note-taking app for capturing and organizing ideas and thoughts.", icon: "fas fa-sticky-note", link: "https://napkin.one/" },
        { name: "Scite", description: "AI-powered tool for analyzing scientific citations and references.", icon: "fas fa-quote-right", link: "https://scite.ai/" }
    ],
    "asian": [
        { name: "Baidu", description: "Leading Chinese search engine and technology company.", icon: "fas fa-search", link: "https://www.baidu.com/" },
        { name: "Baidu Mobile Assistant", description: "Baidu's mobile application store and assistant platform.", icon: "fas fa-mobile-alt", link: "https://shouji.baidu.com/" },
        { name: "Bilibili", description: "Chinese video sharing website focused on animation and gaming.", icon: "fas fa-play-circle", link: "https://www.bilibili.com/" },
        { name: "V Appstore", description: "Vivo's mobile application store for Android devices.", icon: "fas fa-shopping-bag", link: "https://www.vivo.com/en/appstore" },
        { name: "ABEMA", description: "Japanese streaming service with live TV and on-demand content.", icon: "fas fa-tv", link: "https://abema.tv/" },
        { name: "iQiyi", description: "Chinese video streaming service with movies, dramas, and variety shows.", icon: "fas fa-film", link: "https://www.iq.com/" },
        { name: "Kakao TV", description: "Korean video streaming platform with diverse content.", icon: "fas fa-desktop", link: "https://tv.kakao.com/" },
        { name: "NAVER", description: "South Korean online platform and search portal.", icon: "fas fa-search", link: "https://www.naver.com/" }
    ]
};

// Category display names and icons
const categoryInfo = {
    "ai-chatbots": { name: "🤖 AI Chatbots", icon: "fas fa-robot" },
    "utility": { name: "🛠️ Utility & Miscellaneous Apps", icon: "fas fa-tools" },
    "research": { name: "🌐 General Research & Discovery", icon: "fas fa-search" },
    "pdf": { name: "📚 PDF & Database Search", icon: "fas fa-file-pdf" },
    "ai-research": { name: "🤖 AI-Powered Research Tools", icon: "fas fa-brain" },
    "data": { name: "📊 Data & Analytics Platforms", icon: "fas fa-chart-bar" },
    "collaboration": { name: "🔍 Reference & Collaboration Tools", icon: "fas fa-users" },
    "asian": { name: "🌏 Chinese/Japanese Platforms", icon: "fas fa-globe-asia" }
};