import { Stethoscope, Phone, Mail, MapPin } from "lucide-react";
import { useFooterData } from "@/app/hooks/useFooterData";

export function Footer() {
  const { data } = useFooterData();

  if (!data) return null;

  return (
    <footer className="bg-surface-container pb-5 pt-10 border-t border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5">
          <div className="flex flex-col gap-8">
            <div className="text-3xl font-display font-extrabold text-primary tracking-tighter flex items-center gap-3">
              <Stethoscope className="size-9" />
              {data.brand.name}
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              {data.brand.description}
            </p>
            <div className="flex gap-4">
              {data.social.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white border border-outline-variant/30 flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-extrabold text-on-surface text-xs uppercase tracking-[0.2em]">
              Contacto
            </h4>
            <div className="flex flex-col gap-6">
              <a
                className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors group"
                href={data.contact.phoneHref}
              >
                <Phone className="text-primary size-5 group-hover:scale-110 transition-transform shrink-0 mt-0.5" />
                <span className="font-medium">{data.contact.phone}</span>
              </a>
              <a
                className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors group"
                href={data.contact.emailHref}
              >
                <Mail className="text-primary size-5 group-hover:scale-110 transition-transform shrink-0 mt-0.5" />
                <span className="font-medium">{data.contact.email}</span>
              </a>
              <div className="flex items-start gap-4 text-on-surface-variant group">
                <MapPin className="text-primary size-5 shrink-0 mt-0.5" />
                <span className="font-medium">{data.contact.address}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-extrabold text-on-surface text-xs uppercase tracking-[0.2em]">
              Horarios
            </h4>
            <div className="flex flex-col gap-4 text-on-surface-variant">
              {data.schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={
                    index < data.schedule.length - 1
                      ? "flex justify-between items-center border-b border-outline-variant/20 pb-3"
                      : "flex justify-between items-center"
                  }
                >
                  <span className="text-sm">{item.day}</span>
                  {item.closed ? (
                    <span className="font-bold text-error bg-error/5 px-3 py-1 rounded-full text-xs">
                      {item.hours}
                    </span>
                  ) : (
                    <span className="font-bold text-on-surface">{item.hours}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-5 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-on-surface-variant">{data.copyright}</p>
          <div className="flex gap-8 text-sm text-on-surface-variant font-medium">
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
      </div>
    </footer>
  );
}
