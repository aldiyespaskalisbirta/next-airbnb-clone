"use client";

import { useState, useEffect, useCallback } from "react";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;
  return (
    <>
      <section className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
          {/* //TODO: CONTENT */}
          <div
            className={`translate duration-300 h-full ${
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="translate h-full md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* //TODO: HEADER */}
              <header className="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <h1 className="text-lg font-semibold">{title}</h1>
              </header>
              <div className=" content max-h-5/6 overflow-hidden">
                {/* //TODO: BODY */}
                <main className="relative p-6 flex-auto">{body}</main>
                {/* //TODO: FOOTER */}
                <footer className="flex flex-col gap-2 p-6">
                  <div className="flex flex-row items-center gap-4 w-ful">
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        outline
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={secondaryAction}
                      />
                    )}

                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                    />
                  </div>
                  <div>{footer}</div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
