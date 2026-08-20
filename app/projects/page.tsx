import GalleryImage from "@/components/GalleryImage";
import PortfolioLayout from "@/components/PortfolioLayout";

export default function ProjectsPage() {
  return (
    <PortfolioLayout>
      <section className="bg-white px-6 py-12">
        <div>
          <h3 className="mb-2 font-semibold text-[#1a202c]">
            Project 1: Vbooks - QA Tester
          </h3>
        </div>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Overview:</h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            Tested VBooks, a bookkeeping app developed by Vyde for small
            businesses. Verified key features like transaction recording,
            automatic categorization, and financial report generation (including
            balance sheets and income statements). Ensured secure bank
            integration using the MX API. Worked closely with developers to
            identify and report UI/UX bugs, test user flows, and enhance the
            overall user experience.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Types</h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            Functional Testing, Regression Testing and UI Testing
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Application Interface</h3>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            <GalleryImage href="/assets/vb1.jpg" src="/assets/vb1.jpg" alt="App UI 1" />
            <GalleryImage href="/assets/vb2.jpg" src="/assets/vb2.jpg" alt="App UI 2" />
            <GalleryImage href="/assets/vb4.jpg" src="/assets/vb4.jpg" alt="App UI 3" />
            <GalleryImage href="/assets/vb5.jpg" src="/assets/vb5.jpg" alt="App UI 4" />
          </div>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-[#1a202c]">Test Documentation</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-600">
            <li>
              <a href="/assets/zm-749-test-cases.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 1 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/zm-757-test-cases.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 2 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/zm-1184-date-entry-issue.mp4" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 3 (Recording)
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div>
          <h3 className="mb-2 font-semibold text-[#1a202c]">
            Project 2: Client Portal - QA Tester
          </h3>
        </div>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Overview:</h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            This application, developed by <a href="https://vyde.io/">Vyde</a>,
            offers clients a centralized dashboard to manage their tax and
            bookkeeping documents, supporting a smoother and more organized tax
            filing process. As part of my QA responsibilities, I conduct a daily
            testing routine to validate key features and ensure overall
            functionality. This includes verifying the accuracy of financial
            report figures, testing document upload capabilities, confirming the
            successful input of tax return data, checking report export
            functions, and ensuring that bank connections are stable. My role
            focuses on thorough end-to-end testing to maintain a seamless and
            reliable user experience.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Types</h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            Functional Testing, Regression Testing and UI Testing
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Application Interface</h3>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            <GalleryImage href="/assets/p1.jpg" src="/assets/p1.jpg" alt="App UI 1" />
            <GalleryImage href="/assets/p2.jpg" src="/assets/p2.jpg" alt="App UI 2" />
            <GalleryImage href="/assets/p3.jpg" src="/assets/p3.jpg" alt="App UI 3" />
            <GalleryImage href="/assets/p4.jpg" src="/assets/p4.jpg" alt="App UI 4" />
          </div>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-[#1a202c]">Test Documentation</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-600">
            <li>
              <a href="/assets/cp-398-tax-doc-tile-icon.xlsx" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 1 (xls)
              </a>
            </li>
            <li>
              <a href="/assets/home-redesign-test-document.xlsx" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 2 (xlx)
              </a>
            </li>
            <li>
              <a href="/assets/cp-533-action-item-upload-bookkeeping.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 3 (pdf)
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="bg-white px-6 py-12">
        <div>
          <h3 className="mb-2 font-semibold text-[#1a202c]">
            Project 3: MSA - QA Tester
          </h3>
        </div>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Overview:</h3>
          <p className="mb-4 text-sm leading-relaxed text-[#1a202c]">
            Vyde uses a Microservices Architecture (MSA), which means their
            application is built as a set of small, independent services. Each
            service handles a specific function and runs on its own, making the
            system more flexible, scalable, and easier to maintain. This setup
            also allows Vyde to integrate with other businesses through APIs,
            enabling secure and efficient partnerships without affecting the core
            system. As a QA, my role involves thoroughly testing each
            microservice API to ensure it functions correctly, handles data
            securely, and integrates smoothly with other services. This includes
            validating API responses, checking data consistency across services,
            and ensuring all endpoints work reliably under different conditions.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Types</h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            API testing using Postman
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Application Interface</h3>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            <GalleryImage href="/assets/msa1.jpg" src="/assets/msa1.jpg" alt="App UI 1" />
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Documentation</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-600">
            <li>
              <a href="/assets/msa-266-test-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 1 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/msa-402-test-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 2 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/msa-408-test-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 3 (PDF)
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div>
          <h3 className="font-semibold text-[#1a202c]">
            Project 4: VydeDash - QA Tester
          </h3>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            <em>Vyde | Next.js | Ongoing Project</em>
          </p>
        </div>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Overview:</h3>
          <ul className="mb-2 list-inside list-disc space-y-1 text-[#1a202c]">
            <li>
              Tested the second version of Vyde&apos;s Client Portal - a dashboard
              for managing client tax and bookkeeping - built with Next.js and
              enhanced UI/UX.
            </li>
            <li>
              Performed end-to-end and API testing to validate core features and
              maintain application stability during development.
            </li>
            <li>
              Reviewed developer pull requests, documented bugs, and collaborated
              with developers to clarify logic and requirements.
            </li>
            <li>
              Contributed to improving the client experience by ensuring new
              features function correctly and align with business goals.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-[#1a202c]">Application Interface</h3>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            <GalleryImage href="/assets/v1.jpg" src="/assets/v1.jpg" alt="App UI 1" />
            <GalleryImage href="/assets/v2.jpg" src="/assets/v2.jpg" alt="App UI 2" />
            <GalleryImage href="/assets/v3.jpg" src="/assets/v3.jpg" alt="App UI 3" />
            <GalleryImage href="/assets/v4.jpg" src="/assets/v4.jpg" alt="App UI 4" />
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Documentation</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-600">
            <li>
              <a href="/assets/bug-ticket-sample.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Document 1 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/test-findings-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Document 2 (PDF)
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="bg-white px-6 py-12">
        <div>
          <h3 className="mb-2 font-semibold text-[#1a202c]">
            Project 5: Client Portal Mobile App [R&amp;D] - QA Tester
          </h3>
        </div>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Overview:</h3>
          <p className="mb-1 text-sm leading-relaxed text-[#1a202c]">
            As part of Vyde&apos;s R&amp;D initiative, I participated in testing the
            mobile version of their Client Portal app, which is designed to
            provide clients with convenient, on-the-go access to their tax and
            bookkeeping information. The app aims to replicate the core
            functionality of the web platform while delivering a responsive and
            user-friendly mobile experience. In this role, I was responsible for
            validating core features such as tax document uploads, data entry,
            report viewing, and bank account integrations. Ensuring the app meets
            performance and usability standards across mobile platforms.
          </p>
          <p className="mb-2 text-sm leading-relaxed text-[#1a202c]">
            For testing, I primarily used <a href="https://expo.dev/go" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Expo Go</a>,
            a development tool that allows testers and developers to run React
            Native applications instantly on physical devices without the need
            for a full build. This enabled quick and efficient testing of
            real-time features and UI behavior. At one point during our R&amp;D, I
            also tried using <a href="https://developer.android.com/studio" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Android Studio</a>
            to emulate both Android and iOS devices, allowing me to observe how
            the app performed in a simulated environment and verify
            platform-specific behavior. This experience enhanced my ability to
            test mobile applications effectively and contribute meaningful
            feedback throughout the development process.
          </p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-[#1a202c]">Application Interface</h3>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
            <GalleryImage href="/assets/m1.jpg" src="/assets/m1.jpg" alt="App UI 1" />
            <GalleryImage href="/assets/m2.jpg" src="/assets/m2.jpg" alt="App UI 2" />
            <GalleryImage href="/assets/m3.jpg" src="/assets/m3.jpg" alt="App UI 3" />
            <GalleryImage href="/assets/m4.jpg" src="/assets/m4.jpg" alt="App UI 4" />
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#1a202c]">Test Documentation</h3>
          <ul className="list-inside list-disc space-y-1 text-blue-600">
            <li>
              <a href="/assets/mob-12-test-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 1 (PDF)
              </a>
            </li>
            <li>
              <a href="/assets/mob-30-test-documentation.pdf" className="text-blue-600 hover:text-blue-800 hover:underline">
                Test Sample 2 (PDF)
              </a>
            </li>
          </ul>
        </section>
      </section>
    </PortfolioLayout>
  );
}
