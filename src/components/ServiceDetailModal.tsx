// ServiceDetailModal.tsx
import "./ServiceDetailModal.css";

export function ServiceDetailModal({ isOpen, onClose, service }: any) {
  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h3 className="modal-title">{service.title}</h3>

        <p className="modal-text">{service.details}</p>
      </div>
    </div>
  );
}
