import gsap from 'gsap';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';

const Title = forwardRef<HTMLDivElement, { name: string }>((props, ref) => {
  const { name } = props;
  return (
    <div>
      <div>
        <div ref={ref}>name is: {name}</div>
      </div>
    </div>
  );
});

const AnimatedTitles = ({ names }: { names: Array<string> }) => {
  const nameRefs = useRef<Array<HTMLDivElement>>([]);

  const onRefUpdate = useCallback((el: any, index: number) => {
    nameRefs.current[index] = el;
  }, []);

  useEffect(() => {
    gsap.from(nameRefs.current, 1, {
      x: 100,
      stagger: 0.2,
    });
  }, []);

  return (
    <div>
      {names.map((name, index) => {
        return <Title name={name} ref={(el) => onRefUpdate(el, index)} />;
      })}
    </div>
  );
};

function App() {
  const names = ['dog', 'cat', 'bird'];

  return <AnimatedTitles names={names} />;
}

export default App;
