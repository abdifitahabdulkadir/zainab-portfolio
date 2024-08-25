"use client";
import { ContactFormType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Button from "./Button";
const style: string =
  "bg-secondary rounded-[12px] inputInnerShadow inputDropshadow min-w-[14rem] lg:w-[20rem] py-3 px-6 focus:ring-1 placeholder:text-white/30 text-white focus:ring-pinkColor focus:outline-none";

const contacFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name* is Required" })
    .min(4, { message: "Name is too short" })
    .max(16, "Name is too long")
    .toLowerCase(),

  message: z
    .string()
    .min(1, "Message* is required")
    .min(5, "Message is too short")
    .max(50, "Message is too long")
    .toLowerCase(),
  email: z
    .string()
    .min(1, "Email* is Required")
    .min(5, "Email* is too short")
    .max(30, "Email is too long")
    .email("Put proper Email e.g: someone@gmail.com")
    .toLowerCase(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contacFormSchema),
  });

  async function processForm(data: ContactFormType) {
    // await sendEamil({
    //   name: data.name,
    //   email: data.email,
    //   message: data.message,
    // });
    toast.success("Message is Subimitted Successfully");
    reset();
  }
  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-col  items-center px-10 py-5 justify-center gap-y-6 gap-x-4 "
    >
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <input
          type="text"
          placeholder="Name*"
          {...register("name")}
          className={style}
        />
        <p></p>
        {errors?.name?.message && (
          <p className="text-red-200 text-xs ms-5">
            {errors?.name.message.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <input
          type="text"
          placeholder="Email*"
          {...register("email")}
          className={style}
        />
        {errors?.email?.message && (
          <p className="text-red-200 text-xs ms-5">
            {errors?.email.message.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <textarea
          rows={4}
          id="message"
          placeholder="Message*"
          {...register("message")}
          className={`${style} resize-none`}
        />
        {errors?.message?.message && (
          <p className="text-red-200 text-xs ms-5">
            {errors?.message.message.toString()}
          </p>
        )}
      </div>
      <Button
        text="Send"
        className={` hover:bg-none hover:bg-pinkColor/60
        }`}
      />
    </form>
  );
}
