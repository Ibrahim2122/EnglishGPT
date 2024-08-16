import React from 'react';
import styles from "./PageLayout.module.css";

function PageLayout({children}) {
  return (
    <div className={styles.pageLayout}>{children}</div>
  )
}

export default PageLayout;