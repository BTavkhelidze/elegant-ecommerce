import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header> Header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
}

export default layout;
