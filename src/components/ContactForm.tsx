"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  message?: string;
  consent: boolean;
  _gotcha: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-8 rounded-lg shadow"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          {...register("_gotcha")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Ваше имя *
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Укажите имя" })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-steel-500 focus:border-steel-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Телефон *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+7 (900) 123-45-67"
          {...register("phone", {
            required: "Укажите телефон",
            pattern: {
              value: /^(\+7|8)\d{10}$/,
              message: "Введите российский номер (11 цифр, начиная с +7 или 8)",
            },
          })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-steel-500 focus:border-steel-500"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Сообщение (необязательно)
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-steel-500 focus:border-steel-500"
        ></textarea>
      </div>

      <div className="flex items-start">
        <input
          id="consent"
          type="checkbox"
          {...register("consent", {
            required: "Необходимо согласие на обработку данных",
          })}
          className="mt-1 h-4 w-4 text-steel-600 focus:ring-steel-500 border-gray-300 rounded"
        />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
          Я согласен на обработку персональных данных в соответствии с{" "}
          <a href="/privacy" className="underline text-steel-600">
            политикой конфиденциальности
          </a>
          . *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-600">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Отправка..." : "Отправить заявку"}
      </button>

      {status === "success" && (
        <div className="p-3 bg-green-100 text-green-800 rounded-md text-center">
          Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      {status === "error" && (
        <div className="p-3 bg-red-100 text-red-800 rounded-md text-center">
          Произошла ошибка. Попробуйте позже или позвоните нам.
        </div>
      )}
    </form>
  );
}