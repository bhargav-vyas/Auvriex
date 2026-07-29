"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#020617] border border-slate-700 rounded-2xl p-8 w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white">
          Contact Auvriex
        </h2>

        <p className="text-slate-300 mt-3">
        We&apos;d love to hear from you.
        </p>

        {/* Email */}
        <div className="mt-8">
          <p className="text-cyan-400 font-semibold">
            Email
          </p>

          <p className="text-white mt-1">
           contact@auvriextechnologies.com
          </p>
        </div>

        {/* Website */}
        <div className="mt-6">
          <p className="text-cyan-400 font-semibold">
            Website
          </p>

          <p className="text-white mt-1">
            https://auvriextechnologies.com
          </p>
        </div>

        {/* Copy Email Button */}
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              "contact@auvriextechnologies.com"
            )
          }
          className="mt-8 w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300"
        >
          Copy Email
        </button>
      </div>
    </div>
  );
}