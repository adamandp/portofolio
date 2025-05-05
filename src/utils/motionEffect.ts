const backInLeft = (duration?: number) => ({
  initial: { x: "-100%" },
  whileInView: { x: 0 },
  transition: { duration: duration || 0.5, type: "spring", y: 100 },
});

const backInRight = (duration?: number) => ({
  initial: { x: "100%" },
  whileInView: { x: 0 },
  transition: { duration: duration || 0.5, type: "spring", y: 100 },
});

const backInTop = (y?: string, duration?: number) => ({
  initial: { y: y },
  whileInView: { y: 0 },
  transition: { duration: duration || 0.5, type: "spring", y: 100 },
});

const hoverEffect = () => ({
  scale: 1.2,
  rotate: 5,
  transition: { type: "spring", stiffness: 300 },
});

const tapEffect = () => ({
  scale: 0.9,
  rotate: -5,
  transition: { type: "spring", stiffness: 500 },
});

export { backInLeft, backInRight, backInTop, hoverEffect, tapEffect };
