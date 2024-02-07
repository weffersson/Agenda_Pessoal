import ModalContainer from './style';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

export const Modal = ({ toggleModal, children, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <ModalContainer>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </ModalContainer>,
    document.body
  );
};
