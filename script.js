document.addEventListener('DOMContentLoaded', function() {
  // Sidebar logic
  const menuButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector('.close-sidebar-button');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  const focusableElementsString = 'a[href], button:not([disabled]), textarea, input, select';

  function openSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.classList.add('sidebar-open');
      const firstFocusableElement = sidebar.querySelector(focusableElementsString);
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }

  function closeSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.classList.remove('sidebar-open');
      if (menuButton) {
        menuButton.focus();
      }
    }
  }

  if (menuButton) {
    menuButton.addEventListener('click', openSidebar);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // News grid data
  const newsData = [
    {
      title: "Preparing for future AI risks in biology",
      category: "Safety",
      date: "Jun 18, 2025",
      imageUrl: "https://images.ctfassets.net/kftzwdyauwt9/3SjnMKaSmFNlXjhIN5P2rC/db90af4fd96bb83f0be48c942e0efa54/oai_GA_Stories_1.1.png"
    },
    {
      title: "Bringing the Magic of AI to Mattel’s Iconic Brands",
      category: "Company",
      date: "Jun 12, 2025",
      imageUrl: "https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png"
    },
    {
      title: "Scaling security with responsible disclosure",
      category: "Security",
      date: "Jun 9, 2025",
      imageUrl: "https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png"
    },
    {
      title: "How we’re responding to The New York Times’ data demands",
      category: "Security",
      date: "Jun 5, 2025",
      imageUrl: "https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png"
    }
  ];

  const newsGrid = document.getElementById('news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = newsData.map(item => `
      <a href="#" class="card">
        <div class="card-media">
          <img src="${item.imageUrl}" alt="${item.title}">
        </div>
        <div class="card-content">
          <h5>${item.title}</h5>
          <p>${item.category} · ${item.date}</p>
        </div>
      </a>
    `).join('');
  }

  // Auto-hiding header logic
  const header = document.querySelector('header');
  const mainContent = document.getElementById('main');
  const scrollThreshold = 40;
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 10) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      if (header) header.classList.add('hidden');
    } else if (scrollTop < lastScrollTop) {
      if (header) header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener('scroll', handleScroll);
});
