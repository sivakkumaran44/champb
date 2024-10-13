declare module 'lottie-react' {
    import { CSSProperties } from 'react';
    
    interface LottieProps {
      animationData: any;
      loop?: boolean;
      autoplay?: boolean;
      style?: CSSProperties;
    }
    
    const Lottie: React.FC<LottieProps>;
    export default Lottie;
  }