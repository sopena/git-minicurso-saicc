import React from "react";
import { NavLink } from 'react-router-dom';

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function TestProfile() {

  return (
    <div className="flex flex-col min-h-screen border-none screen rounded-lg bg-white px-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">

        <div className="flex flex-col w-full h-full py-16">
            <div className="container mx-auto px-4">
              <div className="relative h-20 rounded-b flex justify-center">
                <div className="absolute -bottom-6">
                  {/* Sua foto aqui: */}
                    <img
                      src="data:image/jpeg;base64,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"
                      className="object-cover border-4 border-white w-40 h-40 rounded-full"
                      alt="cover"
                    />
                </div>
              </div>
              <div className="text-center mt-12">
                {/* Seu nome aqui: */}
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  João Guilherme | Python
                </h3>

                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <MapOutlinedIcon style={{color: '#FDAE17'}}/>                                           
                  {/* Sua cidade aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                    Rio Grande, RS
                  </span>
                </div>

                <div className="mb-2 text-blueGray-600 mt-10">
                  <AccountBalanceOutlinedIcon style={{color: '#FDAE17'}}/>                       
                  {/* A universidade aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                     Universidade Federal do Rio Grande
                  </span>
                </div>

                <div className="mb-2 text-blueGray-600 mt-5">
                  <SchoolOutlinedIcon style={{color: '#FDAE17'}}/>                        
                  {/* O curso aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                    Engenharia de Computação
                  </span>
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">                           
                    {/* Biografia aqui: */}
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Oi, tudo bom? Me chamo João Guilherme, tenho 20 anos e estou cursando o segundo semestre de Engenharia de Computação. Me considero muito estudioso e muito esforçado para fazer as coisas que precisam ser feitas. E no tempo livre gosto de programar e viajar.                    </p>
                    <br/>
                    {/* Link para seu GitHub aqui: */}
                    <a href="https://github.com/romulodm/git-minicurso-saicc" className="font-normal text-yellow-500">
                      <GitHubIcon/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <NavLink to="/">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  <p>Home</p>
                </div>
              </NavLink>
              <div className="text-sm text-blueGray-500 mt-3 font-semibold py-1">
                <a href="https://www.saicc.com.br/" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">SAICC - 2023</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};