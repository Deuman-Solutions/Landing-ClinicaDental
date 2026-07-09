import { Stethoscope, Phone, Mail, MapPin } from "lucide-react";
import { useFooterData } from "@/app/hooks/useFooterData";

export function Footer() {
  const { data } = useFooterData();

  if (!data) return null;

  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 relative">
      <div className="blob w-[300px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[1200px] mx-auto px-4 md:px-10 py-24 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="text-headline-md font-headline-md font-extrabold text-primary tracking-tighter flex items-center gap-2">
            <Stethoscope className="text-primary size-7" />
            {data.brand.name}
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {data.brand.description}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-extrabold text-on-surface uppercase text-xs tracking-[0.3em] mb-2">
            Contacto
          </h4>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-4 group"
            href={data.contact.phoneHref}
          >
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <Phone className="size-4" />
            </span>
            <span className="font-medium">{data.contact.phone}</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-4 group"
            href={data.contact.emailHref}
          >
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <Mail className="size-4" />
            </span>
            <span className="font-medium">{data.contact.email}</span>
          </a>
          <span className="text-on-surface-variant flex items-center gap-4 group">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <MapPin className="size-4" />
            </span>
            <span className="font-medium">{data.contact.address}</span>
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-extrabold text-on-surface uppercase text-xs tracking-[0.3em] mb-2">
            Horarios
          </h4>
          <div className="flex flex-col gap-4 text-on-surface-variant">
            {data.schedule.map((item, index) => (
              <p
                key={item.day}
                className={`flex justify-between ${
                  index < data.schedule.length - 1
                    ? "border-b border-outline-variant/30 pb-2"
                    : ""
                }`}
              >
                <span>{item.day}</span>
                <span
                  className={`font-bold ${
                    item.closed ? "text-error" : "text-on-surface"
                  }`}
                >
                  {item.hours}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-extrabold text-on-surface uppercase text-xs tracking-[0.3em] mb-2">
            Redes Sociales
          </h4>
          <div className="flex gap-4">
            {data.social.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.icon}
                className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 border-t border-outline-variant/30 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-sm text-on-surface-variant font-medium">
          {data.copyright}
        </p>
        <div className="flex gap-8 text-label-sm text-on-surface-variant">
          {data.legal.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
