import { motion } from 'framer-motion';
import taiyologo from '../../assets/TAIYO.svg'

const LogoAnimation: React.FC = () => {
    const logoVariants = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="logo"
            variants={logoVariants}
            initial="initial"
            animate="animate"
        >
            {/* Your logo SVG goes here */}
            <img src={taiyologo} alt="logoLoading" />
        </motion.div>
    );
};

export default LogoAnimation;
