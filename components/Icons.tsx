import { LucideProps } from 'lucide-react'
import { Mail, Loader2, Chrome } from 'lucide-react'

export const Icons = {
  Google: ({ ...props }: LucideProps) => (
    <Chrome {...props} />
  ),
  Mail: ({ ...props }: LucideProps) => (
    <Mail {...props} />
  ),
  Spinner: ({ ...props }: LucideProps) => (
    <Loader2 {...props} />
  )
}
