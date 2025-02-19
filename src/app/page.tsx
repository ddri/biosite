import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="David Ryan"
          width={150}
          height={150}
          className="mx-auto rounded-full"
        />
        <h1 className="mt-4 text-4xl font-bold">David Ryan</h1>
        <p className="mt-2 text-xl text-gray-600">Software Engineer</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I'm a software engineer with a passion for web development and creating efficient, scalable solutions. With
          experience in both front-end and back-end technologies, I enjoy tackling complex problems and building
          user-friendly applications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["JavaScript", "React", "Node.js", "Python", "SQL", "Git"].map((skill) => (
            <div key={skill} className="bg-white p-4 rounded shadow text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Project 1", description: "A brief description of Project 1" },
            { title: "Project 2", description: "A brief description of Project 2" },
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Button variant="outline">Learn More</Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            ></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  )
}

