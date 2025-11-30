import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, className, ...props }) {
        return (
          <Toast 
            key={id} 
            {...props}
            className={className || "bg-slate-900/95 border-indigo-500/30 text-white backdrop-blur-sm"}
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className={className?.includes('green') ? 'text-green-400' : ''}>
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className={className?.includes('green') ? 'text-green-200/90' : 'text-slate-300'}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
