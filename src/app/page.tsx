import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/ui/button";
import BgImages from "@/organism/bg-images";
import InquiryForm from "@/organism/inquiry-form";
import Catalog from "@/organism/catalog";

export default function Home() {
  return (
    <main className="text-foreground flex flex-col items-center justify-center">
      <section className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-48">
        <div className="absolute inset-0 -z-10">
          <BgImages />
        </div>
        <div
          className="absolute inset-0 bg-black/40 -z-10"
          role="presentation"
          aria-hidden="true"
        />

        <h1 className="text-2xl md:text-4xl font-bold  text-slate-50">
          공간의 만족, 공간의 기쁨, 공간이 주는 행복을 공간시스템 폴딩&썬루프에서 찾아보세요.
        </h1>
        <h2 className="text-lg  text-slate-100 mt-4">
          #일반폴딩도어 #단열폴딩도어 #목폴딩도어 #글라스폴딩도어 #오픈썬룸 #무빙월 #3연동도어
          #슬라이딩도어
        </h2>
        <p className="text-lg  text-slate-200">
          다양한 공간 연출과 감성을 담은 맞춤형 시공으로 당신만의 공간을 만들어 드리겠습니다.
        </p>
        <div className="flex flex-col md:flex-row gap-2 mt-12 flex-wrap">
          <Link className="w-full md:w-fit" href={"/contact"} passHref>
            <Button className="w-full" variant="default" size="lg">
              문의하기
            </Button>
          </Link>
          <Button aria-label="전화 문의하기" variant="outline" size="lg" asChild>
            <a href="tel:01024079400">
              <Phone className="w-5 h-5" aria-hidden="true" /> 010-24079-400
            </a>
          </Button>
          <Button aria-label="이메일 문의하기" variant="outline" size="lg" asChild>
            <a href="mailto:zmj6416@naver.com">
              <Mail className="w-5 h-5" aria-hidden="true" /> zmj6416@naver.com
            </a>
          </Button>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <Catalog />
      </section>

      <section className="bg-slate-100 w-full py-10">
        <div className="flex flex-col md:flex-row max-w-4xl mx-8 md:mx-auto gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold">문의 하기</h2>
          </div>

          <div className="w-full md:w-1/2">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
