"use client";

import Alert from "@/components/Alert";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { Divide } from "lucide-react";
import { useRouter } from 'next/navigation'
import { FormEvent } from "react";
import { FaPhone, FaLocationCrosshairs } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md";

const info = [
  {
    name: "phone",
    icon: <FaPhone />,
    value: "+(91) 9783 943 969",
  },
  {
    name: "email",
    icon: <MdAlternateEmail />,
    value: "officialkumar.rinku@gmail.com",
  },
  {
    name: "address",
    icon: <FaLocationCrosshairs />,
    value: "Jaipur, India",
  },

]

const Contect = () => {
  const router = useRouter();
  const contentType = "application/json";
  const [typeAlert, setTypeAlert] = useState("success");
  const [alert, setAlert] = useState(false);


  const formValidate = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const phoneno = formData.get('phoneno');
    const email = formData.get('email');
    let err: number = 0;
    if (!firstname) err++;
    if (!lastname) err++;
    if (!phoneno) err++;
    if (!email) err++;
    return err;
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const phoneno = formData.get('phoneno');
    const email = formData.get('email');
    const err = formValidate(event);
    if (err === 0) {
      try {
        const response = await fetch('/api/contect', {
          method: 'POST',
          headers: {
            Accept: contentType,
            'Content-Type': contentType
          },
          body: JSON.stringify({ firstname, lastname, phoneno, email }),
        })

        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        const data = await response.json();
        console.log(data);
        if(data.success === false) {
          setTypeAlert("server");
        } else {
          setTypeAlert("success");
        }
        
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);

      } catch (error) {
        console.error(error);
      }
    } else if (err > 0) {
      setTypeAlert("error");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        setTypeAlert("success");
      }, 3000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}

    >
      {alert === true ? <Alert type={typeAlert} containerStyle="h-8 flex gap-4 justify-center items-center" iconStyle="text-4xl" messageStyle="" /> : <div className="h-8 hideen" ></div>}
      <div className="container mx-auto flex flex-col xl:flex-row justify-evenly items-center h-[80vh] w-full py-8 xl:py-0 ">
        <div className="order-2 xl:order-none mx-4 xl:mx-0 max-w-full xl:max-w-[50%] my-8 xl:my-0">
          <div className="h-full w-full bg-white/5 p-8 rounded-md">
            <div className="py-8">
              <h3 className="font-primary text-accent">let&apos;s work together</h3>
              <p className="leading-tight text-white/50 mt-2 flex flex-wrap">It would be nice to work with you.</p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex-row gap-6 ">
                <input type="text" name="firstname" id="firstname" className="w-full bg-transparent border-b border-accent outline-none" placeholder="First Name" />
                <input type="text" name="lastname" id="lastname" className="w-full bg-transparent border-b border-accent outline-none" placeholder="Last Name" />
              </div>
              <input type="tel" name="phoneno" id="phoneno" className="w-full bg-transparent border-b border-accent outline-none" placeholder="Phone No" />
              <input type="email" name="email" id="email" className="w-full bg-transparent border-b border-accent outline-none" placeholder="E-mail" />
              <div className="flex justify-center">
                <Button type="submit" variant={"outline"} size={"lg"} className="max-w-[200px]" > Submit </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="order-1 xl:order-none">
          <ul className="flex flex-col gap-4">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-4">
                  <div className="p-4 text-2xl bg-white/5 text-accent">
                    {item.icon}
                  </div>
                  <div className="flex flex-col leading-snug">
                    <div>
                      {item.name}
                    </div>
                    <div>
                      {item.value}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Contect