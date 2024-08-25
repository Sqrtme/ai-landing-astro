import React, { useRef, useEffect, useState } from 'react';
import * as styles from './styles.module.scss';

const Tabs = ({ items, className, white }: any) => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(1);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className={styles.tabBase}>
      <div className={className}>
        <div className={styles.tabsCentered}>
          <div className={white ? styles.tabsCenteredWhite : styles.tabsCenteredGrey}>
            {items.map((tab: any, index: number) => {
              const isActive = activeTabIndex === tab.id;
              return (
                <div
                  key={tab.id}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTabIndex(tab.id)}
                >
                  {tab.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {items.find((tab: any) => tab.id === activeTabIndex).data}
    </div>
  );
};

export default Tabs;
