import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  RiTeamFill,
  RiBarChartHorizontalFill,
  RiGithubLine,
  RiCodeSSlashFill,
} from "react-icons/ri";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import logo from "../public/git.png";

const inter = Inter({ subsets: ["latin"] });

import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

const supabaseUrl = "https://llqlznquwsrmybgkmikm.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const { register, handleSubmit, reset, formState } = useForm();
  const handleFormSubmit = async (data: any) => {
    const { email } = data;
    const { error } = await supabase.from("emails").insert({ email });
    if (error) {
      console.log(error);
    }
    toast.success("Thanks for signing up! We'll notify you when we launch.");
    reset();
  };
  return (
    <>
      <Head>
        <title>Coder Connect</title>
        <meta
          name="description"
          content="Gain valuable programming experience by contributing to open source"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/git.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={clsx(inter.className, styles.coderConnect)}>
          <Image src={logo} alt="coder connect git" />
          Coder Connect
        </h1>
        <small className={clsx(inter.className, styles.comingSoon)}>
          Coming in early 2023
        </small>

        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <button className={inter.className} disabled={!formState.isValid}>
            Get Early Access
          </button>
        </form>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.center}>
              {" "}
              <RiCodeSSlashFill size={50} />
            </div>
            <h2 className={inter.className}>
              Built by Open Source Maintainers
            </h2>
            <p className={inter.className}>
              Built by and for open source maintainers. Find helpful and
              motivated contributors for your projects.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.center}>
              {" "}
              <RiBarChartHorizontalFill size={50} />
            </div>
            <h2 className={inter.className}>Gain Valuable Experience</h2>
            <p className={inter.className}>
              The best way to learn to program is to write code. Coder Connect
              is the best way to connect with prospective projects that need
              your help.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.center}>
              <RiTeamFill size={50} />
            </div>
            <h2 className={inter.className}>
              Contribute production ready code
            </h2>
            <p className={inter.className}>
              Coder Connect is the best way to connect with prospective projects
              that need your help
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.center}>
              <RiGithubLine size={50} />
            </div>
            <h2 className={inter.className}>Use your strengths</h2>
            <p className={inter.className}>
              We help you find projects that use the technologies you want to
              learn and help contribute with the skills you have.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
