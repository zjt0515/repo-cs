import { ChevronLeft, ChevronLeftIcon, ChevronRight, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'
import * as React from 'react'

import { buttonVariants } from '@/app/_components/shadcn/ui/button'
import { cn } from '@/app/_components/shadcn/utils'
function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}
type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
  text?: string
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

// type PaginationLinkProps = {
//   isActive?: boolean
// } & Pick<React.ComponentProps<typeof Button>, 'size'> &
//   React.ComponentProps<'a'>

function PaginationLink({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

// function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
//   return (
//     <PaginationLink
//       aria-label="Go to previous page"
//       size="default"
//       className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
//       {...props}
//     >
//       <ChevronLeftIcon />
//       <span className="hidden sm:block">Previous</span>
//     </PaginationLink>
//   )
// }

const PaginationPrevious = ({
    className,
    text,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink {/* 属性 */}>
        <ChevronLeft className="h-4 w-4" />
        <span>{text ?? 'Previous'}</span>
    </PaginationLink>
);

// function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
//   return (
//     <PaginationLink
//       aria-label="Go to next page"
//       size="default"
//       className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
//       {...props}
//     >
//       <span className="hidden sm:block">Next</span>
//       <ChevronRightIcon />
//     </PaginationLink>
//   )
// }

const PaginationNext = ({
    className,
    text,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink {/* 属性 */}>
         <span className="hidden sm:block">{text ?? 'Next'}</span>
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
);

// function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
//   return (
//     <span
//       aria-hidden
//       data-slot="pagination-ellipsis"
//       className={cn('flex size-9 items-center justify-center', className)}
//       {...props}
//     >
//       <MoreHorizontalIcon className="size-4" />
//       <span className="sr-only">More pages</span>
//     </span>
//   )
// }

const PaginationEllipsis = ({
    className,
    text,
    ...props
}: React.ComponentProps<'span'> & { text?: string }) => (
    <span>
         <MoreHorizontalIcon className="size-4" />
        <span className="sr-only">{text ?? 'More pages'}</span>
    </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
