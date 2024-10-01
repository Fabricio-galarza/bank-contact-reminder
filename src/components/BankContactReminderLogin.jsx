
import { Link } from "react-router-dom";
import { Header } from "./Layout/Header";
import { useTranslation } from "react-i18next";


export const BankContactReminderLogin = () => {
  const { t, i18n }= useTranslation ('global')
  return (
    <>
        <Header/>
        
        <div className="md:container mx-auto flex justify-center bg-sky-100">
          <h1 className="text-rose-400 items-center mx-auto">{ t('login.title') }</h1>
        </div>
        <div className="grid grid-cols-1 flex-wrap bg-slate-300 lg:m-4   md:mx-auto my-auto rounded-2xl items-center
                      border-red-200 border-2 border-double pt-4 pl-10 pr-10 pb-4">
            <form action="" className="mx-auto bg-slate-200 border-2 border-double flex-wrap pt-10 pl-20 pr-20 pb-10 
                  border-red-200 rounded-3xl w-200 content-center w-auto">
                {/**Imput email */}
              <div className="relative mt-2 rounded shadow-sm w-80 mb-10">
                <input type="email" className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  
                      outline-none" placeholder={  t('login.txtEmail')}/>
                <div className="absolute inset-y-0 left-0 flex items-center">
                <svg className="h-8 w-8 text-red-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" 
                     fill="none" strokeLinecap="round" strokeLinejoin="round">  
                      <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  
                      <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
              </div>
              {/**input Password */}
              <div className="relative mt-2 rounded shadow-sm w-80">
                <input type="password" className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 
                        rounded-2xl  outline-none" placeholder={  t('login.txtPassword')}/>
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <svg className="h-8 w-8 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>

                </div>
              </div>
              <div className="relative mt-2 rounded shadow-sm text-center pt-4 w-80">
                <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
                                              focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
                                              font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-60">
                    { t('login.button') }
                </button>
                <div>
                  <i className="text-slate-500">{ t('login.noAccount') }<Link to={ '/' }><span className="text-sky-500"> { t('login.createAccount') }</span></Link></i>
                </div>
                
              </div>
            </form>

        </div>
      
    </>
  );
}

