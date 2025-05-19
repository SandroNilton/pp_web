import { useState, useEffect } from 'react';
import axios from 'axios';
import { ICompany } from '../../../../models/company';
import { IHeadquarter } from '../../../../models/headquarter';
import { IArea } from '../../../../models/area';
import React from 'react';

const useDataLoader = () => {
  /*const [companies, setCompanies] = useState<ICompany[]>([]);
  const [headquartersCompany, setHeadquartersCompany] = useState<Record<string, IHeadquarter[]>>({});
  const [areasHeadquarter, setAreasPorSede] = useState<Record<string, IArea[]>>({});
  const [loading, setLoading] = useState(false);

  // load companies
  useEffect(() => {
    setLoading(true);
    axios.get<ICompany[]>('http://localhost:5099/api/companies').then(response => {
      setCompanies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar las empresas:", error);
        setLoading(false);
      });
  }, []);

  // load headquarters by company
  const loadHeadquarters = (companyId: string) => {
    if (headquartersCompany[companyId]) return; // Si ya se cargaron, no hacer la petición
    setLoading(true);
    axios.get(`http://localhost:5099/api/headquarters/company/${companyId}`)
      .then(response => {
        setHeadquartersCompany(prev => ({
          ...prev,
          [companyId]: response.data,
        }));
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error al cargar las sedes de la empresa ${companyId  }:`, error);
        setLoading(false);
      });
  };

  // Cargar áreas por sede
  const loadAreas = (headquarterId: string) => {
    if (areasHeadquarter[headquarterId]) return; // Si ya se cargaron, no hacer la petición
    setLoading(true);
    axios.get(`http://localhost:5099/api/areas/headquarter/${headquarterId}`)
      .then(response => {
        setAreasPorSede(prev => ({
          ...prev,
          [headquarterId]: response.data,
        }));
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error al cargar las áreas de la sede ${headquarterId}:`, error);
        setLoading(false);
      });
  };

  return {
    companies,
    headquartersCompany,
    areasHeadquarter,
    loading,
    loadHeadquarters,
    loadAreas,
  };*/
};

export default useDataLoader;
