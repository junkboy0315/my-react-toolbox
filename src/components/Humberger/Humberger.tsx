import React, { useMemo } from 'react';
import styles from './Humberger.module.css';

export type Props = {
  isActive: boolean;
  motionType:
    | '3dx'
    | '3dx-r'
    | '3dy'
    | '3dy-r'
    | '3dxy'
    | '3dxy-r'
    | 'arrow'
    | 'arrow-r'
    | 'arrowalt'
    | 'arrowalt-r'
    | 'arrowturn'
    | 'arrowturn-r'
    | 'boring'
    | 'collapse'
    | 'collapse-r'
    | 'elastic'
    | 'elastic-r'
    | 'emphatic'
    | 'emphatic-r'
    | 'minus'
    | 'slider'
    | 'slider-r'
    | 'spring'
    | 'spring-r'
    | 'stand'
    | 'stand-r'
    | 'spin'
    | 'spin-r'
    | 'squeeze'
    | 'vortex'
    | 'vortex-r';
};

const Humberger: React.FC<Props> = ({
  isActive = false,
  motionType = 'slider',
}) => {
  const humbergurStyle = useMemo(() => {
    let className = '';
    className += ' ' + styles['hamburger'];
    if (isActive) {
      className += ' ' + styles['is-active'];
    }
    switch (motionType) {
      case '3dx':
      case '3dx-r':
      case '3dy':
      case '3dy-r':
      case '3dxy':
      case '3dxy-r':
      case 'arrow':
      case 'arrow-r':
      case 'arrowalt':
      case 'arrowalt-r':
      case 'arrowturn':
      case 'arrowturn-r':
      case 'boring':
      case 'collapse':
      case 'collapse-r':
      case 'elastic':
      case 'elastic-r':
      case 'emphatic':
      case 'emphatic-r':
      case 'minus':
      case 'slider':
      case 'slider-r':
      case 'spring':
      case 'spring-r':
      case 'stand':
      case 'stand-r':
      case 'spin':
      case 'spin-r':
      case 'squeeze':
      case 'vortex':
      case 'vortex-r': {
        className += ' ' + styles[`hamburger--${motionType}`];
        break;
      }
      default: {
        throw Error('motionTypeが不正です');
      }
    }
    return className;
  }, [isActive, motionType]);
  const boxStyle = styles['hamburger-box'];
  const innerStyle = styles['hamburger-inner'];

  return (
    <div className={humbergurStyle}>
      <div className={boxStyle}>
        <div className={innerStyle}></div>
      </div>
    </div>
  );
};

export default Humberger;
