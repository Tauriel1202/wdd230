let images = Array.from(document.querySelectorAll('img[data-src]'));
const loadImages = (image) => {
  image.setAttribute('src',image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.map((item) => {
      if(item.isIntersecting){
        loadImages(item.target);
        observer.unobserve(item.target)
      }
    });
  });

  images.map((img) => {
    observer.observe(img);
  });
} 
else {
  images.map((img) => {
    load(img);
  });
}




