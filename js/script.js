window.onload = function() {
    const container = document.getElementById("scrollable-container");
  
    // Scroll to the top of the container initially
    container.scrollTop = 0;
  
    // Scroll to the top of the next page when the user reaches the bottom
    container.addEventListener("scroll", function() {
      const currentPageIndex = Math.floor(container.scrollTop / container.clientHeight);
      const nextPageIndex = currentPageIndex + 1;
      const nextPage = document.querySelector(".page:nth-of-type(" + (nextPageIndex + 1) + ")");
  
      if (nextPage) {
        const nextPageOffset = nextPage.offsetTop;
        const scrollThreshold = container.scrollTop + container.clientHeight;
  
        if (scrollThreshold > nextPageOffset) {
          container.scrollTop = nextPageOffset;
        }
      }
    });
  };
  