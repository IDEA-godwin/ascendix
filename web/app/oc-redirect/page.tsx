'use client'

// @ts-ignore
import {LoginCallBack, useOCAuth} from '@opencampus/ocid-connect-js';
import {useRouter} from "next/navigation";


const CustomErrorComponent = () => {
  const {authState} = useOCAuth();

  return (
    <div>Error Logging in: {authState.error.message}</div>
  );
}

const CustomLoadingComponent = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em]
      text-surface opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite] dark:text-white" role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default function Page() {

  const router = useRouter();

  const loginSuccess = () => {
    router.push('/');
  }

  return <LoginCallBack
    successCallback={loginSuccess} customErrorComponent={<CustomErrorComponent/>}
    customLoadingComponent={<CustomLoadingComponent/>}/>
}