import { parseISO, format, isValid } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  
  console.log("Parsed date:", date)

  if (!isValid(date)) {
    console.error("Invalid date:", dateString)
    return <time dateTime={dateString}>Invalid date</time>
  }

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
