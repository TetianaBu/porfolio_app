import { useState } from 'react';
import MenuWide from './MenuWide';

export default function MenuBtn() {
  const [isOpen, setIsOpen] = useState(0);

  if (isOpen === 0) {
    return <button onClick={() => setIsOpen(isOpen + 1)}>&equiv;</button>;
  }
  return (
    <div>
      <button onClick={() => setIsOpen(isOpen - 1)}>&times;</button>
      <MenuWide />
    </div>
  );
}
