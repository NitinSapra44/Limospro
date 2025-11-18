import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function RouteCard({ from, to, time, distance }) {
  return (
    <Card className="!bg-[#F5F5F5] py-2">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row w-full items-center justify-between p-2">
            <p style={{ fontFamily: 'var(--font-quicksand)' }} className="font-semibold text-base">
              {from}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>

            <p style={{ fontFamily: 'var(--font-quicksand)' }} className="font-semibold text-base">
              {to}
            </p>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex flex-row gap-4 px-2">
            <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base text-[#2C2C2C80]">
              {time}
            </p>
            <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base text-[#2C2C2C80]">
              {distance}
            </p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
