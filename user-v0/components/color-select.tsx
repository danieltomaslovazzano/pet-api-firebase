"use client"

import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ControllerRenderProps } from "react-hook-form"

type ColorSelectProps = {
  field: ControllerRenderProps<any, any>
  disabled?: boolean
  label?: string
  description?: string
}

export function ColorSelect({ field, disabled = false, label = "Color/Markings", description }: ColorSelectProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select pet color" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="black">Black</SelectItem>
          <SelectItem value="white">White</SelectItem>
          <SelectItem value="brown">Brown</SelectItem>
          <SelectItem value="golden">Golden</SelectItem>
          <SelectItem value="gray">Gray</SelectItem>
          <SelectItem value="tan">Tan</SelectItem>
          <SelectItem value="cream">Cream</SelectItem>
          <SelectItem value="orange">Orange/Ginger</SelectItem>
          <SelectItem value="calico">Calico</SelectItem>
          <SelectItem value="tabby">Tabby</SelectItem>
          <SelectItem value="spotted">Spotted</SelectItem>
          <SelectItem value="brindle">Brindle</SelectItem>
          <SelectItem value="merle">Merle</SelectItem>
          <SelectItem value="multi">Multi-colored</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

