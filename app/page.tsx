import PortfolioLayout from "@/components/PortfolioLayout";

export default function AboutPage() {
  return (
    <PortfolioLayout>
      <section className="pt-10 lg:pt-24">
        <h3 className="mb-4 text-xl font-semibold text-[#1a202c]">QA Experience</h3>
        <p className="mb-6 leading-relaxed text-[#4b5563]">
          I&apos;m a QA Tester with hands-on experience in manual testing for web
          and mobile applications. I focus on creating clear, well-documented
          test cases and detailed bug reports that make it easier for developers
          to identify, reproduce, and fix issues efficiently.
          <br />
          <br />
          At <a href="https://vyde.io/" className="text-[#2563eb] underline">VYDE</a>,
          I also took on IT support responsibilities, resolving
          client-reported software and usability issues through a ticketing
          system. Balancing QA and support strengthened my communication skills
          and deepened my understanding of both technical challenges and user
          needs.
          <br />
          <br />
          I was recognized as a key contributor to development and the team&apos;s
          most active communicator, reflecting my commitment to delivering
          stable, user-friendly software through careful testing, thorough
          documentation, and close collaboration.
        </p>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <h3 className="mb-4 text-xl font-semibold text-[#1a202c]">
          Tools &amp; Technologies
        </h3>
        <p className="mb-6 leading-relaxed text-[#4b5563]">
          Over the years, I&apos;ve worked with a wide range of tools that help me
          test thoroughly, document clearly, and collaborate smoothly with dev
          teams.
        </p>

        <div className="grid gap-6 text-base md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-[#2563eb]">
              Project &amp; QA Management
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium text-[#4b5563]">Jira</span> - Manage
                tasks, bugs, and agile sprints
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">Confluence</span> -
                Document test cases and QA processes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#2563eb]">Version Control</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium text-[#4b5563]">Bitbucket</span> -
                Track commits and collaborate on code
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">SmartGit</span> - GUI
                for Git to manage branches and changes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#2563eb]">
              Testing &amp; Debugging
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium text-[#4b5563]">Postman</span> - Test
                APIs and validate backend responses
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">Docker</span> -
                Simulate local environments for consistent testing
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">Android Studio</span>
                - Run and debug native Android apps
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">Expo Go</span> - Test
                React Native apps on real devices instantly
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#2563eb]">
              Backend &amp; Database Tools
            </h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <span className="font-medium text-[#4b5563]">Visual Studio Code</span>
                - Review logs and inspect source code
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">Laragon</span> - Run
                and test local backend environments
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">MySQL Workbench</span>
                - Query and validate relational databases
              </li>
              <li>
                <span className="font-medium text-[#4b5563]">MongoDB Compass</span>
                - Inspect and test NoSQL data structures
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pdf-reader" className="p-4">
        <h3 className="mb-4 text-2xl font-semibold text-[#2563eb]">
          Testing and Git Workflow
        </h3>
        <div className="h-[80vh] w-full overflow-hidden rounded-lg border shadow-lg">
          <iframe
            src="/assets/release-process.pdf"
            className="h-full w-full"
            title="Testing and Git Workflow"
          />
        </div>
      </section>
    </PortfolioLayout>
  );
}
