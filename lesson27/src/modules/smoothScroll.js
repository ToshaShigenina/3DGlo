const smoothScroll = () => {
  const menu = document.querySelector('menu'),
    serviceAnchor = document.querySelector('main a[href="#service-block"]');

  const scrollToId = (anchor) => {
    let elemId = anchor.getAttribute('href').slice(1);

    document.getElementById(elemId).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  menu.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target.closest('li>a[href^="#"]');

    if (!target) {
      return;
    }

    scrollToId(target);
  });

  serviceAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToId(serviceAnchor);
  });

};

export default smoothScroll;
