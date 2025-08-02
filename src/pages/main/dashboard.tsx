import { Button, Text } from "@vibe/core";
import { Feedback } from "@vibe/icons";
import React, { useContext } from 'react';
import { RootStoreContext } from "../../stores/rootStore";

const Dashboard = () => {

  const rootStore = useContext(RootStoreContext);
  const { session, logout, isLoggedIn } = rootStore.sessionStore;

  return (
      <div className="max-h-full rounded-t-lg bg-white outline-none text-[#323338]"> 
        <div className="scroll-pt-[250px] contain-layout relative cursor-default flex-col h-full flex select-none scroll overflow-auto overflow-y-scroll" style={{ height: 'calc(100vh - 3rem)' }}>
          <div className="mr-0 top-0 left-0 sticky z-[3000] bg-white rounded-t-lg">
            <div className="flex flex-wrap gap-3 justify-between p-5 w-full items-center" style={{boxShadow: '0px 3px 12px #e6e9ef'}}>
              <div>
                <Text type="text2" className="whitespace-normal">¡Buenos días, { session!.userName }!</Text>
                <Text type="text1" className="font-medium whitespace-normal">Accede rápidamente a tus tableros recientes, el buzón y los espacios de trabajo</Text>
              </div>
              <div className="flex flex-wrap content-center gap-3">
                <Button kind="secondary" leftIcon={Feedback}>Comentarios</Button>
                <Button leftIcon={Feedback}>Busqueda</Button>
              </div>
            </div>
            <div className="p-5 grid grid-cols-6 gap-6">
              <div className="col-span-6 flex flex-col gap-6 md:col-span-4 flex-shrink-0">
                {/*isLoggedIn && session ? (<a onClick={ logout }>si salir</a>) : ( <p>si estas log</p>) */}
              </div>
              <div className="col-span-6 md:col-span-2 flex-shrink-0">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard