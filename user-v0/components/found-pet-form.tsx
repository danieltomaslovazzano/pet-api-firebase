"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { LucideUpload, LucideLoader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { PhoneInput } from "@/components/ui/phone-input"
import { ColorSelect } from "@/components/color-select"

const formSchema = z.object({
  petType: z.string().min(1, "Pet type is required"),
  breed: z.string().optional(),
  gender: z.string().optional(),
  color: z.string().min(1, "Color is required"),
  foundDate: z.string().min(1, "Found date is required"),
  foundLocation: z.string().min(1, "Found location is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  hasCollar: z.boolean().default(false),
  collarDetails: z.string().optional(),
  currentLocation: z.string().min(1, "Current location is required"),
  contactName: z.string().min(1, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

export default function FoundPetForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [images, setImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      petType: "",
      breed: "",
      gender: "",
      color: "",
      foundDate: "",
      foundLocation: "",
      description: "",
      hasCollar: false,
      collarDetails: "",
      currentLocation: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      agreeToTerms: false,
    },
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setImages([...images, ...fileArray])

      // Create URLs for preview
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file))
      setImageUrls([...imageUrls, ...newImageUrls])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)

    const newImageUrls = [...imageUrls]
    URL.revokeObjectURL(newImageUrls[index])
    newImageUrls.splice(index, 1)
    setImageUrls(newImageUrls)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    try {
      // Here you would normally upload the images and submit the form data to your API
      console.log("Form values:", values)
      console.log("Images:", images)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Report submitted successfully",
        description: "We'll check for matches with lost pet reports.",
      })

      // Redirect to a confirmation page
      router.push("/found/confirmation")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error submitting report",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Pet Information</h2>

            <FormField
              control={form.control}
              name="petType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="rabbit">Rabbit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="breed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Breed (if known)</FormLabel>
                  <FormControl>
                    <Input placeholder="Golden Retriever" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender (if known)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <ColorSelect field={field} description="Select the primary color or pattern of the pet" />
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="hasCollar"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Has Collar</FormLabel>
                    <FormDescription>Does the pet have a collar or any identification?</FormDescription>
                  </div>
                </FormItem>
              )}
            />

            {form.watch("hasCollar") && (
              <FormField
                control={form.control}
                name="collarDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collar Details</FormLabel>
                    <FormControl>
                      <Input placeholder="Red collar with name tag" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Found Information</h2>

            <FormField
              control={form.control}
              name="foundDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Found</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="foundLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Found</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, Anytown, USA" {...field} />
                  </FormControl>
                  <FormDescription>Enter as specific a location as possible</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Location of Pet</FormLabel>
                  <FormControl>
                    <Input placeholder="With me, at local shelter, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide any additional details about the pet and the circumstances of finding them"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Upload Photos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload clear photos of the pet to help with identification. Our AI will use these to match with lost
                  pet reports.
                </p>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <LucideUpload className="w-8 h-8 mb-3 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (MAX. 5MB)</p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              {imageUrls.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url || "/placeholder.svg"}
                        alt={`Pet preview ${index + 1}`}
                        className="h-24 w-24 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="(555) 123-4567"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I agree to the terms and conditions and privacy policy</FormLabel>
                <FormDescription>
                  By submitting this form, you agree to share this information publicly to help reunite this pet with
                  its owner.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Report"
          )}
        </Button>
      </form>
    </Form>
  )
}

