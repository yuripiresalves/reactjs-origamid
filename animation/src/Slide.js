import React from 'react';
import styles from './App.module.css';

const Slide = ({ slides }) => {
  const [active, setAcitve] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setAcitve(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setAcitve(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
