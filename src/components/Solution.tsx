import Container from "./Container"

export default function Solution() {
  return (
    <section id="solution" className="py-32 bg-gray-50">
      <Container>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary">
            A resilient digital layer for frontline healthcare
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            CLINICAE centralizes workflows, records, and reporting
            into one secure operating system.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {[
            "Offline-first core",
            "Clean clinical workflows",
            "National system integration"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl mb-6"></div>
              <h3 className="text-xl font-semibold text-primary">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </section>
  )
}
