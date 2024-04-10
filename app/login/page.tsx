"use client";

import FormBtn from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function Login() {
  const [state, action] = useFormState(login, null);
  // TODO
  // state는 함수의 return 값
  // action이 함수를 실행시킴
  // 두번째 인자는 초기값
  // 실행시킬 함수(handleForm)의 첫번째 인자는 이전의 state다.(초기값)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormBtn text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
