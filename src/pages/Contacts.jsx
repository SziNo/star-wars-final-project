import { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import { usePostContactMutation } from '../features/apiSlice'
import { Tooltip, Button } from '../components'
import { validationSchema, socialLinks } from '../helpers'
import { Mandalorian } from '../assets/images'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactPage = () => {
  const [postContact] = usePostContactMutation()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const response = await postContact(values)

      if (response.error) {
        toast.error('Failed to submit contact')
        throw new Error('Failed to submit contact', response.error)
      }

      toast.success('Successfully submitted your query!')
      formik.resetForm()
    },
  })

  return (
    <section className="flex md:flex-row flex-col-reverse p-4 bg-white">
      <div className="md:w-1/2 w-full flex flex-col justify-between p-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="my-4">
          If you have any questions, feel free to fill out the form below and we&apos;ll get back to you as soon as
          possible:
        </p>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <input
            ref={inputRef}
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <div className="text-xs text-red-500">{formik.errors.firstName}</div>
          )}
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <div className="text-xs text-red-500">{formik.errors.lastName}</div>
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="p-2 border border-gray-300 rounded"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          )}
          <textarea
            name="text"
            placeholder="Your message"
            onChange={formik.handleChange}
            value={formik.values.text}
            className="p-2 border border-gray-300 rounded"
          />
          {formik.errors.text && formik.touched.text && (
            <div className="text-xs text-red-500">{formik.errors.text}</div>
          )}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded transform transition-all duration-300 hover:scale-95 hover:bg-green-400"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-between gap-4 p-4">
        <h2 className="text-2xl font-semibold">Follow Us</h2>
        <div className="p-2">
          <img src={Mandalorian} alt="Mandalorian with Grogu" loading="lazy" className="w-full object-cover rounded" />
        </div>

        <div className="mt-6">
          <p className="mb-4">Follow our social media links and never miss out on any recent events:</p>
          <ul className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="md:text-4xl text-2xl text-blue-500 hover:text-green-400">
                  <Tooltip label={link.name}>{link.icon}</Tooltip>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
