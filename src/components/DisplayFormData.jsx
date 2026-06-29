import React, { useState } from 'react'

function DisplayFormData() {
  const initialFormData = {
    name: '',
    email: '',
    phone: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setSubmittedData(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">User Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="mt-6 rounded-md border border-gray-200 bg-gray-50 p-4">
          {submittedData ? (
            <div className="space-y-2 text-gray-800">
              <p><span className="font-semibold">Name:</span> {submittedData.name}</p>
              <p><span className="font-semibold">Email:</span> {submittedData.email}</p>
              <p><span className="font-semibold">Phone:</span> {submittedData.phone}</p>
            </div>
          ) : (
            <p className="text-gray-500">No user data submitted yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DisplayFormData


/*
flex items-center justify-center min-h-screen max-w-md bg-gray-100 on the outer wrapper centers the form card not the inputs in the form
Actual 
*/