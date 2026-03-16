import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "sonner"

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  service: z.string(),
  message: z.string().min(10)
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const services = [
    t("services.service_1_title"),
    t("services.service_2_title"),
    t("services.service_3_title"),
    t("services.service_4_title")
  ]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        data,
        import.meta.env.VITE_EMAIL_PUBLIC
      )

      toast.success(t("contact-form.success"))
      reset()

    } catch {
      toast.error(t("contact-form.error"))
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* honeypot spam protection */}
      <input type="text" className="hidden" />

      <div className="grid grid-cols-2 gap-4">
        <input
          {...register("firstName")}
          placeholder={t("contact-form.form.first_name")}
          className="border p-3 w-full"
        />

        <input
          {...register("lastName")}
          placeholder={t("contact-form.form.last_name")}
          className="border p-3 w-full"
        />
      </div>

      {errors.firstName && (
        <p className="text-red-500 text-sm">
          {t("contact-form.form.validation_name")}
        </p>
      )}

      <input
        {...register("phone")}
        placeholder={t("contact-form.form.phone")}
        className="border p-3 w-full"
      />

      <input
        {...register("email")}
        placeholder={t("contact-form.form.email")}
        className="border p-3 w-full"
      />

      <select {...register("service")} className="border p-3 w-full">
        <option value="">
          {t("contact-form.form.select_service")}
        </option>

        {services.map((service) => (
          <option key={service}>{service}</option>
        ))}
      </select>

      <textarea
        {...register("message")}
        placeholder={t("contact-form.form.message")}
        className="border p-3 w-full h-32"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-6 py-3 rounded w-full"
      >
        {loading
          ? t("contact-form.form.sending")
          : t("contact-form.form.send")}
      </button>

    </form>
  )
}