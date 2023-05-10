import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation';

const Loader: React.FC = () => {
    const loaderVariants = {
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
