import Head from "next/head";
import { Mail, Phone } from "lucide-react";

import BgImages from "@/shared/ui/bg-images";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>공간시스템 폴딩&썬루프 - 폴딩도어 전문 시공</title>
        <meta
          name="description"
          content="자체 제작부터 시공, AS까지! 최고의 품질과 서비스로 고객 만족을 드립니다."
        />
        <meta name="keywords" content="폴딩도어, 단열폴딩도어, 시스템도어, 공간시스템, 썬루프" />
        <meta name="author" content="공간시스템 폴딩&썬루프" />
      </Head>
      <main className="text-foreground flex flex-col items-center justify-center">
        <section className="relative w-full min-h-screen flex flex-col justify-center p-48">
          <div className="absolute inset-0 -z-10">
            <BgImages />
          </div>
          <div
            className="absolute inset-0 bg-black/40 -z-10"
            role="presentation"
            aria-hidden="true"
          />

          <h1 className="text-4xl font-bold  text-slate-50">
            자체 제작, 납품, 시공, AS 관리까지 <br /> 최고의 품질과 서비스로 고객만족을 드립니다.
          </h1>
          <h2 className="text-lg  text-slate-100 mt-4">
            #일반폴딩도어 #카센터폴딩도어 #단열폴딩도어 #PVC단열폴딩도어 #글라스폴딩도어 #시스템도어
          </h2>
          <p className="text-lg  text-slate-100">
            기능과 감성을 동시에 담은 맞춤형 폴딩도어 시공으로 당신만의 공간을 완성해드립니다.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="default" size="lg">
              문의하기
            </Button>
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
      </main>
    </>
  );
}
