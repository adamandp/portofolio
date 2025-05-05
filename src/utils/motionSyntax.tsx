import { HTMLMotionProps, motion } from "motion/react";

const P = ({ children, ...props }: HTMLMotionProps<"p">) => {
  return <motion.p {...props}>{children}</motion.p>;
};

const Div = ({ children, ...props }: HTMLMotionProps<"div">) => {
  return <motion.div {...props}>{children}</motion.div>;
};

// Komponen motion img
const Img = (props: HTMLMotionProps<"img">) => {
  return <motion.img {...props} />;
};

const Button = (props: HTMLMotionProps<"button">) => {
  return <motion.button {...props} />;
};

const A = ({ children, ...props }: HTMLMotionProps<"a">) => {
  return <motion.a {...props}>{children}</motion.a>;
};

const H1 = ({ children, ...props }: HTMLMotionProps<"h1">) => {
  return <motion.h1 {...props}>{children}</motion.h1>;
};

const H2 = ({ children, ...props }: HTMLMotionProps<"h2">) => {
  return <motion.h2 {...props}>{children}</motion.h2>;
};

const Section = ({ children, ...props }: HTMLMotionProps<"section">) => {
  return <motion.section {...props}>{children}</motion.section>;
};

export { Div, P, Img, Button, A, Section, H1, H2 };
