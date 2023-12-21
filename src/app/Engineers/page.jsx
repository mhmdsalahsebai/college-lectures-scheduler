import InstructorsTable from "@/components/InstructorsTable";
export default function Page() {
  return (
    <div className="h-screen w-screen flex ">
      <h1 className="text-3xl font-bold text-center w-full">Engineers</h1>
      <InstructorsTable  api="save_engineer" />
    </div>
  );
}