import InstructorsTable from "@/components/InstructorsTable";
export default function Page() {
  return (
    <div className="flex-1 px-4 w-full">
      <h1 className="flex flex-row justify-center text-3xl pt-14 font-bold text-center text-start ml-6 mt-6 mr-6">Teaching Assistant</h1>
      <div className="flex flex-row justify-center">
        <InstructorsTable api="Engineers" />
      </div>
    </div>
  );
}