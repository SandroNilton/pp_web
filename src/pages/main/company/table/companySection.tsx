import React, { useState } from "react";
import { ICompany } from '../../../../models/company';
import { HeadquartersTable } from "./headquartersTable";
//import { HeadquartersTable } from "./HeadquartersTable";

interface Props {
  company: ICompany;
}

export const CompanySection: React.FC<Props> = ({ company }) => {

  { console.log(company) }

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ marginBottom: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <div
        onClick={() => setIsOpen(!isOpen) }
        style={{ cursor: "pointer", padding: 12, background: "#eee", fontWeight: "bold" }}
      >
        {isOpen ? "▼s" : "▶"} {company.name}
      </div>

      {isOpen && (
        <div>
          {company.headquarters && company.headquarters.length > 0 ? (
            <HeadquartersTable headquarter={company.headquarters} />
          ) : (
            <em>Sin sedes registradas</em>
          )}
        </div>
      )}
    </div>
  );
}
  