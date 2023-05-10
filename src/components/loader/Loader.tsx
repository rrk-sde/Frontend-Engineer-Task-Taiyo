import { motion, Variants } from 'framer-motion';
import LogoAnimation from './LogoAnimation';

const loaderVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

const Loader: React.FC = () => {
    return (
        <motion.div
            className="loader"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
        >
            <LogoAnimation />
        </motion.div>
    );
};

export default Loader;
