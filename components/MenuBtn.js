import { useState } from 'react';
import Menu2 from './Menu2';

/* not used right now */

export default function MenuBtn() {
  const [isOpen, setIsOpen] = useState(0);

  if (isOpen === 0) {
    return <button onClick={() => setIsOpen(isOpen + 1)} >&equiv;</button>;
  }
  return (
    <div>
      <button onClick={() => setIsOpen(isOpen - 1)}>&times;</button>
    <Menu2 />
    </div>
  );
}
