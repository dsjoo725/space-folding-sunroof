import InquiryForm from "@/organism/inquiry-form";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-100 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-4xl font-bold m-8">문의 하기</h2>
      <div className="w-full px-8 md:w-96 md:px-0">
        <InquiryForm />
      </div>
    </section>
  );
}
