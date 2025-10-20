import { ReactNode } from 'react'

interface MDXComponentProps {
  children?: ReactNode
  className?: string
}

export const MDXComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-4xl font-playfair font-bold mt-8 mb-4 text-primary-gold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-playfair font-bold mt-6 mb-3 text-primary-amber" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-playfair font-semibold mt-5 mb-2 text-primary-orange" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="text-neutral-lightText/90 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-lightText/80" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-lightText/80" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="ml-4" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-primary-gold pl-4 italic my-4 text-neutral-lightText/70 bg-primary-gold/5 py-2 rounded-r" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: MDXComponentProps) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="bg-primary-gold/10 text-primary-amber px-1.5 py-0.5 rounded text-sm font-mono border border-primary-gold/20" {...props}>
          {children}
        </code>
      )
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre className="bg-neutral-darkBg border border-primary-gold/20 text-neutral-lightText p-4 rounded-lg overflow-x-auto mb-4 text-sm shadow-xl" {...props}>
      {children}
    </pre>
  ),
  a: ({ children, ...props }: any) => (
    <a className="text-primary-gold hover:text-primary-amber underline transition-colors" {...props}>
      {children}
    </a>
  ),
  img: ({ alt, ...props }: any) => (
    <img className="rounded-lg my-4 max-w-full h-auto border border-primary-gold/20 shadow-xl" alt={alt} {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t border-primary-gold/30" {...props} />
  ),
  table: ({ children, ...props }: MDXComponentProps) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-primary-gold/20 border border-primary-gold/20 rounded-lg" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: MDXComponentProps) => (
    <th className="px-3 py-2 text-left text-xs font-medium text-primary-gold uppercase tracking-wider bg-primary-gold/10" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: MDXComponentProps) => (
    <td className="px-3 py-2 text-sm text-neutral-lightText/80 border-t border-primary-gold/10" {...props}>
      {children}
    </td>
  ),
}
