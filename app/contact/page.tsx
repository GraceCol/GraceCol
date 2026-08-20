import PortfolioLayout from "@/components/PortfolioLayout";

export default function ContactPage() {
  return (
    <PortfolioLayout>
      <h2 className="mb-6 text-center text-3xl font-bold">Contact Info</h2>

      <div className="space-y-4 bg-white p-6 text-lg shadow-md">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hcollamat@gmail.com" className="text-blue-600 hover:underline">
            hcollamat@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+639287613938" className="text-blue-600 hover:underline">
            +63 928 761 3938
          </a>
        </p>

        <div>
          <strong>Links:</strong>
          <ul className="ml-6 mt-2 list-disc space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/grace-collamat-6b401a196/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://gracecol.github.io/GraceCol/index.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-4">
          <a
            href="/assets/grace-collamat-resume.pdf"
            download
            className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>

      <section id="pdf-reader" className="p-4">
        <div className="h-[80vh] w-full overflow-hidden shadow-lg">
          <iframe
            src="/assets/grace-collamat-resume.pdf"
            className="h-full w-full"
            title="Resume PDF"
          />
        </div>
      </section>
    </PortfolioLayout>
  );
}
