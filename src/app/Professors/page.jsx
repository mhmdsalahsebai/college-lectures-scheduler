import InstructorsTable from "@/components/InstructorsTable";
export default function infoCard() {
  return (
    <div className="h-screen w-screen flex ">
      <InstructorsTable  api="save_professor" />
    </div>
  );
}