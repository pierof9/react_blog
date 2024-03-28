document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');
  
    columns.forEach(column => {
      const imageTitle = column.dataset.title;
      const aTag = column.querySelector('.image-link');
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image-title');
      imageDiv.textContent = imageTitle;
      aTag.appendChild(imageDiv);
  
      aTag.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Link clicked for ' + imageTitle);
      });
    });
  });
  