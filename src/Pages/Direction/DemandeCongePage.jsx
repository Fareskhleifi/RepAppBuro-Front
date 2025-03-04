import DemandeCongeTable from "../../Components/Tables/Direction/DemandeCongeTable";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function TravailleursRSCPage() {
  return (
    <DefaultLayout>
    <div className="ml-64 pt-24 p-6 mt-6 space-y-6 bg-[#f4f7fe] dark:bg-gray-900 h-full">
        <DemandeCongeTable></DemandeCongeTable>
    </div>
  </DefaultLayout>
  )
}
