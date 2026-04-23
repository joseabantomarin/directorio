import { useEffect, useRef, useState } from 'react';
import {
  X,
  Building2,
  Hash,
  Tag,
  MapPin,
  MessageCircle,
  Upload,
  Trash2,
  CheckCircle2,
} from 'lucide-react';

const emptyForm = {
  name: '',
  ruc: '',
  category: '',
  location: '',
  whatsapp: '',
};

export default function RegisterModal({ open, onClose, categories }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    return () => photos.forEach((p) => URL.revokeObjectURL(p.url));
  }, [photos]);

  if (!open) return null;

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Requerido';
    if (!/^\d{11}$/.test(form.ruc.trim()))
      next.ruc = 'El RUC debe tener 11 dígitos';
    if (!form.category) next.category = 'Selecciona un rubro';
    if (!form.location.trim()) next.location = 'Requerido';
    if (!/^[+\d\s()-]{7,}$/.test(form.whatsapp.trim()))
      next.whatsapp = 'Número de WhatsApp inválido';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
      setPhotos([]);
      onClose?.();
    }, 1800);
  };

  const onPickFiles = (fileList) => {
    const files = Array.from(fileList || []).filter((f) =>
      f.type.startsWith('image/')
    );
    const next = files.slice(0, 8 - photos.length).map((f) => ({
      file: f,
      url: URL.createObjectURL(f),
      name: f.name,
    }));
    setPhotos((prev) => [...prev, ...next]);
  };

  const removePhoto = (idx) => {
    setPhotos((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(idx, 1);
      if (removed) URL.revokeObjectURL(removed.url);
      return copy;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-title"
    >
      <div
        className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className="relative z-10 flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-brand-100 px-6 py-5">
          <div>
            <h2
              id="register-title"
              className="text-xl font-extrabold text-brand-900"
            >
              Registra tu empresa
            </h2>
            <p className="mt-1 text-sm text-brand-600">
              Sé parte de la comunidad OpenLinks. Completa los datos y
              verificaremos tu negocio en menos de 24 h.
            </p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand-500 transition hover:bg-brand-50 hover:text-brand-800"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-brand-900">
              ¡Registro recibido!
            </h3>
            <p className="max-w-md text-sm text-brand-600">
              Revisaremos tu información y te escribiremos por WhatsApp para
              activar tu perfil.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex-1 space-y-5 overflow-y-auto px-6 py-6"
          >
            <Field
              icon={Building2}
              label="Nombre comercial"
              error={errors.name}
            >
              <input
                value={form.name}
                onChange={update('name')}
                placeholder="Ej: Clínica Dental SonrieMás"
                className="input pl-10"
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field icon={Hash} label="RUC" error={errors.ruc}>
                <input
                  value={form.ruc}
                  onChange={update('ruc')}
                  inputMode="numeric"
                  maxLength={11}
                  placeholder="20123456789"
                  className="input pl-10"
                />
              </Field>
              <Field icon={Tag} label="Rubro" error={errors.category}>
                <select
                  value={form.category}
                  onChange={update('category')}
                  className="input appearance-none pl-10"
                >
                  <option value="">Selecciona un rubro</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field icon={MapPin} label="Ubicación" error={errors.location}>
              <input
                value={form.location}
                onChange={update('location')}
                placeholder="Av. Larco 345, Miraflores"
                className="input pl-10"
              />
            </Field>

            <Field
              icon={MessageCircle}
              label="WhatsApp de contacto"
              error={errors.whatsapp}
            >
              <input
                value={form.whatsapp}
                onChange={update('whatsapp')}
                placeholder="+51 999 000 111"
                className="input pl-10"
              />
            </Field>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-800">
                Galería de fotos
              </label>
              <DropZone onPickFiles={onPickFiles} disabled={photos.length >= 8} />
              {photos.length > 0 && (
                <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {photos.map((p, idx) => (
                    <li
                      key={p.url}
                      className="group relative aspect-square overflow-hidden rounded-lg border border-brand-100"
                    >
                      <img
                        src={p.url}
                        alt={p.name}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute right-1.5 top-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-brand-800 opacity-0 shadow transition group-hover:opacity-100 hover:bg-white"
                        aria-label={`Eliminar ${p.name}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-xs text-brand-500">
                Sube hasta 8 imágenes. JPG, PNG o WebP.
              </p>
            </div>

            <footer className="flex flex-col-reverse gap-2 border-t border-brand-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
              >
                Cancelar
              </button>
              <button type="submit" className="btn-primary">
                Enviar registro
              </button>
            </footer>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-brand-800">
        {label}
      </span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
        {children}
      </div>
      {error && (
        <span className="mt-1 block text-xs font-medium text-rose-600">
          {error}
        </span>
      )}
    </label>
  );
}

function DropZone({ onPickFiles, disabled }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);
        if (!disabled) onPickFiles(e.dataTransfer.files);
      }}
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition ${
        disabled
          ? 'cursor-not-allowed border-brand-100 bg-brand-50/50 text-brand-400'
          : dragActive
          ? 'border-accent-500 bg-accent-50 text-accent-700'
          : 'border-brand-200 bg-white text-brand-600 hover:border-brand-300 hover:bg-brand-50'
      }`}
    >
      <Upload className="h-6 w-6" />
      <div className="text-sm">
        <button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          className="font-semibold text-brand-800 underline-offset-2 hover:underline disabled:text-brand-400"
        >
          Haz clic para subir
        </button>{' '}
        o arrastra tus fotos aquí
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => onPickFiles(e.target.files)}
      />
    </div>
  );
}
