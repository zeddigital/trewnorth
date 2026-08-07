import { useState, type ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Calendly scheduling page for the "30 Minute Meeting" event type on the
 * darren-tnaccounting account.
 *
 * Query parameters suppress Calendly's own page furniture so the embed reads
 * as part of this page rather than a bordered panel dropped inside it — our
 * own heading above it does that job. Colours are the brand cyan and the navy
 * body text used elsewhere on the site.
 */
const CALENDLY_URL =
  'https://calendly.com/darren-tnaccounting/30min' +
  '?hide_landing_page_details=1' +
  '&hide_event_type_details=1' +
  '&hide_gdpr_banner=1' +
  '&background_color=ffffff' +
  '&text_color=1a2332' +
  '&primary_color=0db7e1';

interface BookConsultationProps {
  /** The control that opens the dialog. Rendered as-is via Radix `asChild`. */
  children: ReactNode;
}

/**
 * Wraps any trigger element so it opens the booking dialog instead of
 * navigating. The iframe is only mounted once the dialog has been opened, so
 * Calendly is never requested on a page the visitor does not book from.
 */
export function BookConsultation({ children }: BookConsultationProps) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setHasOpened(true);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-3xl p-6 sm:p-10 lg:p-12 gap-0">
        <div className="mb-6 sm:mb-8 pr-8">
          <DialogTitle className="font-serif font-semibold text-3xl sm:text-4xl leading-tight text-foreground mb-3">
            Book your free consultation
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/65 leading-relaxed">
            Please fill in your details. We look forward to seeing you soon.
          </DialogDescription>
        </div>

        <div className="rounded-lg overflow-hidden border border-border bg-white">
          {hasOpened && (
            <iframe
              src={CALENDLY_URL}
              title="Book a consultation with Trew North Accounting"
              /* Sized against the viewport so the frame fits inside the
                 dialog's own 85vh cap. A fixed height taller than the space
                 available leaves Calendly scrolling inside a scrolling
                 dialog, which is miserable to use. */
              className="w-full h-[62vh] min-h-[420px] max-h-[640px] border-0"
              loading="lazy"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
