import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            © {new Date().getFullYear()} Muhammad Ibraheem Abdullah. Made with
            <Heart className="w-4 h-4 text-destructive fill-destructive" aria-label="love" />
          </p>
        </div>
      </div>
    </footer>
  );
}
