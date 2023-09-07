import Image from 'next/image';

import styles from './Loading.module.scss';

interface LoadingItem {
  src: string;
  alt: string;
}

const Loading = () => {
  const LOADING_IMAGE: LoadingItem = {
    src: '/assets/Infinity-loading.gif',
    alt: 'loading_image',
  };

  return (
    <div className={styles.loading}>
      <Image src={LOADING_IMAGE?.src} alt={LOADING_IMAGE?.alt} width={150} height={150} />
    </div>
  );
};

export default Loading;
