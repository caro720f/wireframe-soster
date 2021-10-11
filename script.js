const sections = document.querySelectorAll(" #sectionFire");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");

  const p = section.querySelectorAll("p");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "+=100",
        scrub: true,
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
});
