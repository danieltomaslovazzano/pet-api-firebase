"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

// A simplified list of countries for the demo
const countries = [
  {
    value: "us",
    label: "United States",
    flag: "🇺🇸",
    code: "+1",
  },
  {
    value: "ca",
    label: "Canada",
    flag: "🇨🇦",
    code: "+1",
  },
  {
    value: "mx",
    label: "Mexico",
    flag: "🇲🇽",
    code: "+52",
  },
  {
    value: "gb",
    label: "United Kingdom",
    flag: "🇬🇧",
    code: "+44",
  },
  {
    value: "de",
    label: "Germany",
    flag: "🇩🇪",
    code: "+49",
  },
  {
    value: "fr",
    label: "France",
    flag: "🇫🇷",
    code: "+33",
  },
  {
    value: "es",
    label: "Spain",
    flag: "🇪🇸",
    code: "+34",
  },
  {
    value: "it",
    label: "Italy",
    flag: "🇮🇹",
    code: "+39",
  },
  {
    value: "au",
    label: "Australia",
    flag: "🇦🇺",
    code: "+61",
  },
  {
    value: "jp",
    label: "Japan",
    flag: "🇯🇵",
    code: "+81",
  },
]

type PhoneInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "Phone number",
  disabled = false,
  className,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0])
  const [open, setOpen] = React.useState(false)
  const [phoneNumber, setPhoneNumber] = React.useState(value.replace(/^\+\d+\s/, ""))

  // Update the combined value when either country or phone number changes
  React.useEffect(() => {
    const combinedValue = `${selectedCountry.code} ${phoneNumber}`.trim()
    onChange(combinedValue)
  }, [selectedCountry, phoneNumber, onChange])

  // When the external value changes, update the internal state
  React.useEffect(() => {
    // Extract country code and phone number from the value
    const match = value.match(/^\+(\d+)\s(.*)/)
    if (match) {
      const code = `+${match[1]}`
      const number = match[2]
      const country = countries.find((c) => c.code === code) || countries[0]
      setSelectedCountry(country)
      setPhoneNumber(number)
    } else {
      setPhoneNumber(value)
    }
  }, [value])

  return (
    <div className={cn("flex", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className="flex gap-1 px-3 w-[120px] rounded-r-none border-r-0 focus:ring-0"
          >
            <span className="text-base">{selectedCountry.flag}</span>
            <span className="text-sm font-normal">{selectedCountry.code}</span>
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={() => {
                      setSelectedCountry(country)
                      setOpen(false)
                    }}
                  >
                    <span className="mr-2 text-base">{country.flag}</span>
                    <span className="flex-1 text-sm">{country.label}</span>
                    <span className="text-sm text-muted-foreground">{country.code}</span>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedCountry.value === country.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Input
        type="tel"
        placeholder={placeholder}
        disabled={disabled}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="rounded-l-none"
      />
    </div>
  )
}

