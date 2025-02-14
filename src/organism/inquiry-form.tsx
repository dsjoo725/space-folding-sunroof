"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "담당자명(회사명)을 입력하세요."),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/, "올바른 연락처 형식(010-XXXX-XXXX)을 입력하세요."),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "올바른 날짜 형식(YYYY-MM-DD)을 입력하세요."),
  address: z.string().min(5, "시공 주소를 입력하세요."),
  inquiry: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, "개인정보 수집 및 이용 동의는 필수입니다."),
});

type InquiryFormData = z.infer<typeof formSchema>;

export default function InquiryForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      address: "",
      inquiry: "", // 선택 사항
      agree: false,
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("문의가 성공적으로 제출되었습니다.");
        form.reset();
      } else {
        console.log(response);
        alert("문의 제출에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("문의 제출 오류:", error);
      alert("네트워크 오류로 문의 제출에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 담당자명(회사명) */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">
                담당자명(회사명){" "}
                <span className="absolute mt-1 ml-1 text-[4px] text-red-500">●</span>
              </FormLabel>
              <FormControl>
                <Input
                  className={`bg-white p-4 h-12 text-slate-800 focus-visible:ring-slate-300 focus-visible:border-slate-300 ${
                    form.formState.errors[field.name] &&
                    "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500"
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 연락처 */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">
                연락처 <span className="absolute mt-1 ml-1  text-[4px] text-red-500">●</span>
              </FormLabel>
              <FormControl>
                <Input
                  className={`bg-white p-4 h-12 text-slate-800 focus-visible:ring-slate-300 focus-visible:border-slate-300 ${
                    form.formState.errors[field.name] &&
                    "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500"
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 시공일자 */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">
                시공일자 <span className="absolute mt-1 ml-1  text-[4px] text-red-500">●</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className={`bg-white p-4 h-12 text-slate-800 focus-visible:ring-slate-300 focus-visible:border-slate-300 ${
                    form.formState.errors[field.name] &&
                    "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500"
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 시공 주소 */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">
                시공 주소 <span className="absolute mt-1 ml-1 text-[4px] text-red-500">●</span>
              </FormLabel>
              <FormControl>
                <Input
                  className={`bg-white p-4 h-12 text-slate-800 focus-visible:ring-slate-300 focus-visible:border-slate-300 ${
                    form.formState.errors[field.name] &&
                    "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500"
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 문의 내용  */}
        <FormField
          control={form.control}
          name="inquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500">문의 내용</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-white p-3 h-13 text-slate-800 focus-visible:ring-slate-300 focus-visible:border-slate-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 개인정보 수집 및 이용 동의 */}
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              </FormControl>
              <FormLabel className="ml-1 text-slate-500">
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 제출 버튼 */}
        <Button size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? "문의 전송중" : "문의 보내기"}
        </Button>
      </form>
    </Form>
  );
}
