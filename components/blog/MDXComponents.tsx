import { ReactNode } from "react";
import Image from "next/image";

interface MDXComponentProps {
  children?: ReactNode;
  className?: string;
}

export const MDXComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="font-playfair text-primary-gold mt-8 mb-4 text-4xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="font-playfair text-primary-amber mt-6 mb-3 text-3xl font-bold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="font-playfair text-primary-orange mt-5 mb-2 text-2xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="text-neutral-lightText/90 mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="text-neutral-lightText/80 mb-4 list-inside list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="text-neutral-lightText/80 mb-4 list-inside list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="ml-4" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote
      className="border-primary-gold text-neutral-lightText/70 bg-primary-gold/5 my-4 rounded-r border-l-4 py-2 pl-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: MDXComponentProps) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-primary-gold/10 text-primary-amber border-primary-gold/20 rounded border px-1.5 py-0.5 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre
      className="bg-neutral-darkBg border-primary-gold/20 text-neutral-lightText mb-4 overflow-x-auto rounded-lg border p-4 text-sm shadow-xl"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary-gold hover:text-primary-amber underline transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  img: ({ alt, src, width, height, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src || typeof src !== "string") return null;
    // Convert width/height to numbers if they're strings, or use defaults
    const imageWidth = width ? Number(width) : 800;
    const imageHeight = height ? Number(height) : 600;
    return (
      <div className="relative my-4 h-auto w-full">
        <Image
          src={src}
          alt={alt || ""}
          width={imageWidth}
          height={imageHeight}
          className="border-primary-gold/20 h-auto max-w-full rounded-lg border shadow-xl"
          {...props}
        />
      </div>
    );
  },
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-primary-gold/30 my-8 border-t" {...props} />
  ),
  table: ({ children, ...props }: MDXComponentProps) => (
    <div className="mb-4 overflow-x-auto">
      <table
        className="divide-primary-gold/20 border-primary-gold/20 min-w-full divide-y rounded-lg border"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: MDXComponentProps) => (
    <th
      className="text-primary-gold bg-primary-gold/10 px-3 py-2 text-left text-xs font-medium tracking-wider uppercase"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: MDXComponentProps) => (
    <td
      className="text-neutral-lightText/80 border-primary-gold/10 border-t px-3 py-2 text-sm"
      {...props}
    >
      {children}
    </td>
  ),
};
