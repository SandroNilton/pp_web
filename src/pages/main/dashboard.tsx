import { Button, Text } from "@vibe/core";
import { Feedback } from "@vibe/icons";
import Container from "../../components/shared/container";
import React from 'react';

const Dashboard = () => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap gap-3 justify-between p-5 w-full items-center" style={{boxShadow: '0px 3px 12px #e6e9ef'}}>
        <div>
          <Text type="text2" className="whitespace-normal">¡Buenos días, Sandro!</Text>
          <Text type="text1" className="font-medium whitespace-normal">Accede rápidamente a tus tableros recientes, el buzón y los espacios de trabajo</Text>
        </div>
        <div className="flex flex-wrap content-center gap-3">
          <Button kind="secondary" leftIcon={Feedback}>Comentarios</Button>
          <Button leftIcon={Feedback}>Busqueda</Button>
        </div>
      </div>
      <div className="p-5 grid grid-cols-6 gap-6">
        <div className="col-span-6 flex flex-col gap-6 md:col-span-4 flex-shrink-0">
          
        </div>
        <div className="col-span-6 md:col-span-2 flex-shrink-0">
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard