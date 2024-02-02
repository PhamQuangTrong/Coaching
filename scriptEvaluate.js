document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');
    const nameInput = document.getElementById('name');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const commentTextInput = document.getElementById('commentText');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = nameInput.value;
      const rating = getSelectedRating();
      const commentText = commentTextInput.value;
  
      if (name && rating && commentText) {
        const comment = createCommentElement(name, rating, commentText);
        appendComment(comment);
        clearFormInputs();
      }
    });
  
    function getSelectedRating() {
      for (const input of ratingInputs) {
        if (input.checked) {
          return input.value;
        }
      }
      return null;
    }
  
    function createCommentElement(name, rating, commentText) {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
  
      const ratingDiv = document.createElement('div');
      ratingDiv.className = 'rating';
      for (let i = 0; i < rating; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        ratingDiv.appendChild(star);
      }
  
      const commentContent = document.createElement('p');
      commentContent.innerHTML = `<strong>${name}</strong>: ${commentText}`;
  
      commentDiv.appendChild(ratingDiv);
      commentDiv.appendChild(commentContent);
      return commentDiv;
    }
  
    function appendComment(comment) {
      commentsContainer.appendChild(comment);
    }
  
    function clearFormInputs() {
      nameInput.value = '';
      ratingInputs.forEach(input => (input.checked = false));
      commentTextInput.value = '';
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');
    const nameInput = document.getElementById('name');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const commentTextInput = document.getElementById('commentText');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = nameInput.value;
      const rating = getSelectedRating();
      const commentText = commentTextInput.value;
  
      if (name && rating && commentText) {
        const comment = createCommentElement(name, rating, commentText);
        appendComment(comment);
        clearFormInputs();
      }
    });
  
    function getSelectedRating() {
      for (const input of ratingInputs) {
        if (input.checked) {
          return input.value;
        }
      }
      return null;
    }
  
    function createCommentElement(name, rating, commentText) {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
  
      const ratingDiv = document.createElement('div');
      ratingDiv.className = 'rating';
      for (let i = 0; i < rating; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        ratingDiv.appendChild(star);
      }
  
      const commentContent = document.createElement('p');
      commentContent.innerHTML = `<strong>${name}</strong>: ${commentText}`;
  
      commentDiv.appendChild(ratingDiv);
      commentDiv.appendChild(commentContent);
      return commentDiv;
    }
  
    function appendComment(comment) {
      commentsContainer.appendChild(comment);
    }
  
    function clearFormInputs() {
      nameInput.value = '';
      ratingInputs.forEach(input => (input.checked = false));
      commentTextInput.value = '';
    }
  });
  