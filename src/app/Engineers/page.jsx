import InstructorsTable from "@/components/InstructorsTable";
export default function Page() {
  return (
    <div className="h-screen w-screen flex-col">
      <h1 className="text-3xl font-bold text-start w-full m-6">Teaching Assistant</h1>
      <InstructorsTable className="flex items-center"  api="save_engineer" />
    </div>
  );
}