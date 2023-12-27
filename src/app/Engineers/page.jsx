import InstructorsTable from "@/components/InstructorsTable";
export default function Page() {
  return (
    <div className="h-screen w-screen flex ">
      <div className="flex flex-col w-full items-center justify-start">
        <h1 className="text-3xl font-bold text-center w-full">
          Teaching Assistant
        </h1>
        <InstructorsTable api="save_engineer" />
      </div>
    </div>
  );
}
