import GalleryImage from "@/components/GalleryImage";
import PortfolioLayout from "@/components/PortfolioLayout";
import { asset } from "@/lib/site-config";

export default function SupportPage() {
  return (
    <PortfolioLayout>
      <section className="pt-8 lg:pt-12">
        <h3 className="mb-4 text-xl font-semibold text-[#1a202c]">
          Desk Support Role
        </h3>
        <p className="mb-6 leading-relaxed text-[#4b5563]">
          During my role as a QA Tester at Vyde, I not only conducted software
          testing to ensure application quality but also provided frontline
          support through the Desk ticketing system. I collaborated closely with
          bookkeepers and accountants to troubleshoot and resolve
          client-reported issues related to the apps. This experience enhanced my
          understanding of user behavior, sharpened my problem-solving skills
          which helped me perform more effective QA testing.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-[#1a202c]">Desk Tickets</h3>
        <p className="mb-6 leading-relaxed text-[#4b5563]">
          Here are examples of Desk tickets that were assigned to me.
        </p>
        <div className="mb-4 grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
          <GalleryImage href={asset("/assets/s1.jpg")} src={asset("/assets/s1.jpg")} alt="App UI 1" />
          <GalleryImage href={asset("/assets/s2.jpg")} src={asset("/assets/s2.jpg")} alt="App UI 2" />
          <GalleryImage href={asset("/assets/s3.jpg")} src={asset("/assets/s3.jpg")} alt="App UI 3" />
          <GalleryImage href={asset("/assets/s4.jpg")} src={asset("/assets/s4.jpg")} alt="App UI 4" />
          <GalleryImage href={asset("/assets/s5.jpg")} src={asset("/assets/s5.jpg")} alt="App UI 5" />
        </div>
      </section>

      <section>
        <h3 className="font-semibold text-[#1a202c]">
          Technical Support Ticket Handling Guide
        </h3>
        <p className="mb-1 leading-relaxed text-[#4b5563]">
          I also created a structured documentation guide outlining best
          practices for handling technical support tickets. This resource was
          designed to assist my teammates in effectively managing Desk tickets,
          ensuring consistency, accuracy, and improved response efficiency across
          the team.
        </p>
        <a
          href={asset("/assets/ticket-handling-guide.pdf")}
          className="mb-6 text-blue-600 hover:text-blue-800 hover:underline"
        >
          Ticket Handling Guide (PDF)
        </a>
      </section>

      <section>
        <h3 className="mb-2 font-semibold text-[#1a202c]">
          Other Support Documentation
        </h3>
        <ul className="list-inside list-disc space-y-1 text-blue-600">
          <li>
            <a href={asset("/assets/support-documentation-1.pdf")} className="text-blue-600 hover:text-blue-800 hover:underline">
              Support Doc 1 (PDF)
            </a>
          </li>
          <li>
            <a href={asset("/assets/support-documentation-2.pdf")} className="text-blue-600 hover:text-blue-800 hover:underline">
              Support Doc 2 (PDF)
            </a>
          </li>
        </ul>
      </section>
    </PortfolioLayout>
  );
}
