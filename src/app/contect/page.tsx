"use client";

import { useRef, useState } from "react";
import { FormEvent } from "react";
import { FaPhone, FaLocationCrosshairs } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

const info = [
  {
    name: "phone",
    icon: <FaPhone />,
    value: "+(91) 9783 943 969",
  },
  {
    name: "email",
    icon: <MdAlternateEmail />,
    value: "kumar.rinku0@outlook.com",
  },
  {
    name: "address",
    icon: <FaLocationCrosshairs />,
    value: "Jaipur, India",
  },
];

const Contect = () => {
  const contentType = "application/json";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const obj = Object.fromEntries(formData.entries());
    console.log("Form Data:", obj);

    fetch("/api/contect", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (!data.success) {
          setError(data.error || "Something went wrong");
          return;
        }
        formRef.current?.reset();
        setError(null);
        alert("Response recorded!");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("There was an error submitting the response!");
      });
  }

  return (
    <div className="h-full w-full relative">
      <div className="container mx-auto flex flex-col xl:flex-row justify-start sm:justify-evenly xl:justify-around items-center h-[90vh] xl:h-[80vh] w-full pt-16 xl:pt-0 ">
        <div className="order-2 xl:order-none mx-4 xl:mx-0 max-w-full xl:max-w-[50%] my-8 xl:my-0">
          <div className="h-full w-full bg-white/5 p-8 rounded-[0.5rem] shadow-g">
            <div className="py-8">
              <h3 className="font-primary text-accent">
                let&apos;s work together
              </h3>
              <p className="leading-tight text-white/50 mt-2 flex flex-wrap">
                It would be nice to work with you.
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col xl:flex-row gap-6 ">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="w-full bg-transparent border-b border-accent focus-visible:invalid:border-red-500 outline-none"
                  placeholder="First Name"
                  autoComplete="off"
                  pattern="\w\D\S{0,10}"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="w-full bg-transparent border-b border-accent focus-visible:invalid:border-red-500 outline-none"
                  placeholder="Last Name"
                  autoComplete="off"
                  pattern="\w\D\S{0,10}"
                  required
                />
              </div>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                className="w-full bg-transparent border-b border-accent focus-visible:invalid:border-red-500 outline-none"
                placeholder="Phone No"
                autoComplete="off"
                pattern="\d\S{8,12}"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-transparent border-b border-accent focus-visible:invalid:border-red-500 outline-none"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
              <div>{error && <p className="text-red-500">{error}</p>}</div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-8 px-8 py-6 btn-outline hover:transition-all cursor-pointer disabled:bg-white/10 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 xl:order-none">
          <ul className="flex flex-col gap-4">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-4">
                  <div className="p-4 text-2xl bg-white/5 text-accent shadow-g">
                    {item.icon}
                  </div>
                  <div className="flex flex-col leading-snug">
                    <div>{item.name}</div>
                    <div>{item.value}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contect;
